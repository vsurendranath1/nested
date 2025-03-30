const stacksMap = require('serverless-plugin-split-stacks').stacksMap;
module.exports = (resource, Type) => {
  if (Type === 'AAWS::ApiGateway::Resource') {
    return { destination: 'Dynamodb' };
  }
  return null; // Default case if the resource type is not matched
};

      
