const fs = require("fs");
const path = ".serverless/cloudformation-template-update-stack.json";

// Define stack categories
const STACK_CATEGORIES = {
  "AWS::ApiGateway::RestApi": "ApiGatewayStack",
  "AWS::ApiGateway::Method": "ApiGatewayStack",
  "AWS::ApiGateway::Deployment": "ApiGatewayStack",
  "AWS::ApiGateway::Stage": "ApiGatewayStack",
  "AWS::Lambda::Function": "LambdaStack",
  "AWS::DynamoDB::Table": "DynamoDBStack",
  "AWS::S3::Bucket": "S3Stack",
  "AWS::IAM::Role": "IAMStack",
};

// Read CloudFormation JSON file
fs.readFile(path, "utf8", (err, data) => {
  if (err) {
    console.error("❌ Error reading CloudFormation file:", err);
    return;
  }

  try {
    const cloudFormation = JSON.parse(data);
    const resources = cloudFormation.Resources || {};

    // Create a map for stacks
    const stacks = {
      RootStack: { Resources: {} },
    };

    // Process each resource
    for (const [logicalId, resource] of Object.entries(resources)) {
      const resourceType = resource.Type;
      const stackName = STACK_CATEGORIES[resourceType] || "RootStack";

      // Ensure stack exists in stacks map
      if (!stacks[stackName]) {
        stacks[stackName] = { Resources: {} };
      }

      // Assign resource to the stack
      stacks[stackName].Resources[logicalId] = resource;
    }

    // Write each stack to a separate JSON file
    for (const [stackName, stackData] of Object.entries(stacks)) {
      const outputPath = `.serverless/${stackName}.json`;
      fs.writeFileSync(outputPath, JSON.stringify(stackData, null, 2));
      console.log(`✅ Stack "${stackName}" saved to ${outputPath}`);
    }
  } catch (parseError) {
    console.error("❌ Error parsing JSON:", parseError);
  }
});

