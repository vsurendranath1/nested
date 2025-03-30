module.exports = (resource, logicalId, serverless) => {
  if (resource.Type.startsWith "AWS::Lambda::Function") {
    return "LambdaStack";
  } else if (resource.Type.startsWith("AWS::ApiGateway::Resource")) {
    return "Apiresource";
  }
  return "DefaultStack";
};
