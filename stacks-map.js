const stacksMap = require('serverless-plugin-split-stacks').stacksMap;


module.exports = (resource, logicalId) => {
  if(logicalId.includes("APiGateway")) return { destination:'APiGateway'};
  else if(logicalId.includes("Lambda")) return { destination:'Lambda'};
  return { destination: "other" };
  
}
