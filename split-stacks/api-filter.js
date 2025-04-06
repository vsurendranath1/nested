module.exports = (resource, logicalId) => {
  const apiTypes = [
    'AWS::ApiGateway::Method',
    'AWS::ApiGateway::Resource',
    'AWS::ApiGateway::RestApi',
    'AWS::ApiGateway::Deployment',
    'AWS::ApiGateway::Stage',
  ];

  if (apiTypes.includes(resource.Type)) {
    return 'api';
  }

  return null;
};
