const stacksMap = require('serverless-plugin-split-stacks').stacksMap;

module.exports = (resources, logicalId) => {
  const results = {};

  for (const logicalId in resources) {
    if (resources.hasOwnProperty(logicalId)) {
      if (logicalId.startsWith("ApiGateway")) {
        results[logicalId] = { destination: 'ApiGateway' };
      } else {
        // Handle other cases or fall back to a default if needed.
        // For example, if you wanted to track all non-ApiGateway resources:
        // results[logicalId] = { destination: 'Other' };
      }
    }
  }

  return results;
}
