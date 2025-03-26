const stacksMap = require('serverless-plugin-split-stacks').stacksMap;

module.exports = (resource, logicalId) => {
  if (logicalId.includes("ApiGateway")) {
    return { destination: "ApiGatewayStack" };
  } else if (logicalId.includes("LambdaFunction")) {
    return { destination: "LambdaStack" };
  } else if (logicalId.includes("LambdaPermission")) {
    return { destination: "LambdaPermissionStack" };
  } else if (logicalId.includes("IamRole") || logicalId.includes("Role")) {
    return { destination: "IamRoleStack" };
  } else if (logicalId.includes("LogGroup")) {
    return { destination: "LogGroupStack" };
  } else if (logicalId.includes("ServerlessDeployment")) {
    return { destination: "ServerlessDeploymentStack" };
  } else {
    return { destination: "OtherResourcesStack" };
  }
}

