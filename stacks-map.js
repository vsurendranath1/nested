module.exports = (resources, logicalId) => {
  if (logicalId.startsWith("ApiGateway")) return { destination: 'ApiGateway' };
  // Falls back to default
};
