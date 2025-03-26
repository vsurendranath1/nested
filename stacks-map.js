const stacksMap = require('serverless-plugin-split-stacks').stacksMap;


module.exports = (resource, type) => {
  if(type.includes("AWS::ApiGateway")) return { destination:'APiGateway'};
  else if(type.includes("AWS::Lambda")) return { destination:'Lambda'};
  return { destination: "other" };
  
}
