const stacksMap = require('serverless-plugin-split-stacks').stacksMap;

let counter = 0;

module.exports = (resource, logicalId) => {
  const stacks = ["stackA", "stackB", "stackC", "stackD", "stackE"];
  
  if (logicalId) {
    return { destination: "OtherStack" }; // Handle missing logicalId
  }

  let stack = stacks[counter % stacks.length]; // Alternate between 5 stacks
  counter++; // Increment counter for next resource

  return { destination: stack };
};


