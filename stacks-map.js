const stacksMap = require('serverless-plugin-split-stacks').stacksMap;


module.exports = (resource, logicalId) => {
  if(logicalId.contains("APiGateway")) return { destination:'APiGateway'};
   if(logicalId.contains("Lambda")) return { destination:'Lambda'};
  
}
