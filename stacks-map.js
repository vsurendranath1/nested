const stacksMap = require('serverless-plugin-split-stacks').stacksMap;

let counter = 0;

module.exports = (resource, logicalId) => {
  let stack;

  if (logicalId) {
    stack = counter % 2 === 0 ? "stackA" : "stackB"; // Distribute alternately
    counter++; // Increment for next assignment
  } else {
    stack = "OtherStack"; // If logicalId is missing, assign to OtherStack
  }

  return { destination: stack };
};


