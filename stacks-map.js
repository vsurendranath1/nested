const stacksMap = require('serverless-plugin-split-stacks').stacksMap;
module.exports = {
  processResources(resources) {
    const stackNames = [
      'Stack1', 'Stack2', 'Stack3', 'Stack4', 'Stack5',
      'Stack6', 'Stack7', 'Stack8', 'Stack9', 'Stack10'
    ];
    const stackMapping = {};
    let index = 0;

    Object.keys(resources).forEach((resourceName) => {
      stackMapping[resourceName] = stackNames[index % stackNames.length];
      index++;
    });

    return stackMapping;
  }
};
