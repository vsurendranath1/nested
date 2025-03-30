'use strict';

const memoize = require('memoizee');
const namingUtils = require('serverless/lib/plugins/aws/lib/naming');

const getApiGatewayResourceMap = memoize(serverless => {
  const apiGatewayPlugin = serverless.pluginManager.plugins.find(
    plugin => plugin.constructor.name === 'AwsCompileApigEvents'
  );

  const resourceMap = new Map();
  const gatewayResourceLambdaMap = new Map();

  apiGatewayPlugin.validated.events.map(({ functionName, http }) => {
    const normalizedLambdaName = namingUtils.getNormalizedFunctionName(functionName);

    resourceMap.set(
      namingUtils.getMethodLogicalId(apiGatewayPlugin.getResourceName(http.path), http.method),
      normalizedLambdaName
    );

    const tokens = [];
    http.path.split('/').forEach(token => {
      tokens.push(token);
      const resourceName = namingUtils.getResourceLogicalId(tokens.join('/'));
      if (!gatewayResourceLambdaMap.has(resourceName)) {
        gatewayResourceLambdaMap.set(resourceName, new Set());
      }
      gatewayResourceLambdaMap.get(resourceName).add(normalizedLambdaName);
    });
  });

  gatewayResourceLambdaMap.forEach((normalizedFunctionNames, resourceName) => {
    if (normalizedFunctionNames.size > 1) return;
    resourceMap.set(resourceName, normalizedFunctionNames.values().next().value);
  });

  return resourceMap;
});

require('serverless-plugin-split-stacks').resolveMigration = (resource, logicalId, serverless) => {
  const typeBasedStack = {
    'AWS::Lambda::Function': 'LambdaStack',
    'AWS::ApiGateway::Method': 'ApiGatewayMethodStack',
    'AWS::ApiGateway::Resource': 'ApiGatewayResourceStack',
    'AWS::ApiGateway::RestApi': 'ApiGatewayRestApiStack',
    'AWS::IAM::Role': 'IAMStack',
    'AWS::Logs::LogGroup': 'LogGroupStack',
    'AWS::DynamoDB::Table': 'DynamoDBStack',
    'AWS::S3::Bucket': 'S3Stack'
  };

  return typeBasedStack[resource.Type] ? { destination: typeBasedStack[resource.Type] } : null;
};

