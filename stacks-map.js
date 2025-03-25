const stacksMap = require('serverless-plugin-split-stacks').stacksMap;

let counter = 0; // Keep track of assigned resources

module.exports = (resource, logicalId) => {
  // Alternate between two stacks
  const stackName1 = counter % 2 === 0 ? "StackA" : "StackB";
  counter++;

  return { destination: stackName1 };
}
