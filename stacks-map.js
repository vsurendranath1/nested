const stacksMap = require('serverless-plugin-split-stacks').stacksMap;
module.exports = (resource, logicalId) => {
  if (logicalId.startsWith("ApiGatewayMethod")) return { destination: 'ApiGatewayMethod' };
  // Falls back to default
};

      
