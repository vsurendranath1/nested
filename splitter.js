module.exports = (resource, logicalId) => {
  if (logicalId.startsWith("ApiGateway")) return { destination: 'ApiGateway' };
  // Falls back to default
};
