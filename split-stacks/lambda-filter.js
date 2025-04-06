module.exports = (resource, logicalId) => {
  if (resource.Type === 'AWS::Lambda::Function') {
    return 'lambda';
  }
  return null;
};
