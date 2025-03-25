const stacksMap = require('serverless-plugin-split-stacks').stacksMap;

const movedApiGatewayIds = new Set(); // Track moved resources

module.exports = (resource, logicalId) => {
  if (logicalId.startsWith("ApiGateway")) {
    if (movedApiGatewayIds.size < 10) {
      movedApiGatewayIds.add(logicalId);
      return { destination: "ApiGatewayStack" }; // Move first 10 to this stack
    }
  }

  return {}; // Default behavior (keeps other ApiGateway resources in root stack)
}
