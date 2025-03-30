const stacksMap = require('serverless-plugin-split-stacks').stacksMap;

require('serverless-plugin-split-stacks').resolveMigration = (resource, logicalId, serverless) => {
  let destination;
  switch (resource.Type) {
    case 'AWS::ApiGateway::Method':
    case 'AWS::ApiGateway::Resource':
      destination = getApiGatewayResourceMap(serverless).get(logicalId);
      break;
    default:
      // All other resource types if their name starts with one of the lambda names
      // are propagated to given lambda stackxv
      // (it's the Serverless internal convention to prefix most lambda specific resources
      // with normalized lambda name)
      destination = getAllNormalizedLambdaNames(serverless).find(normalizedLambdaName =>
        logicalId.startsWith(normalizedLambdaName)
      );
  }
  return destination ? { destination } : null;
};
