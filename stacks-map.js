const stacksMap = require('serverless-plugin-split-stacks').stacksMap;


module.exports = (resource, type) => {
  if (type.match(/AWS::ApiGateway/)) return { destination: "ApiGateway" };
  if (type.match(/AWS::Lambda/)) return { destination: "Lambda" };

  return { destination: "Other" };

  
}
