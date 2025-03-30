module.exports = {
  stacks: {
    LambdaFunctionStack: {
      resourceTypes: ['AWS::Lambda::Function'],
    },
    IAMRoleStack: {
      resourceTypes: ['AWS::IAM::Role'],
    },
    LambdaPermissionStack: {
      resourceTypes: ['AWS::Lambda::Permission'],
    },
    APIGatewayMethodStack: {
      resourceTypes: ['AWS::ApiGateway::Method'],
    },
    APIGatewayResourceStack: {
      resourceTypes: ['AWS::ApiGateway::Resource'],
    },
    APIGatewayDeploymentStack: {
      resourceTypes: ['AWS::ApiGateway::Deployment'],
    },
    OtherResourcesStack: {
      resourceTypes: ['*'],
      excludeResourceTypes: [
        'AWS::Lambda::Function',
        'AWS::IAM::Role',
        'AWS::Lambda::Permission',
        'AWS::ApiGateway::Method',
        'AWS::ApiGateway::Resource',
        'AWS::ApiGateway::Deployment',
      ],
    },
  },
};
