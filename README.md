🌩️ Cloud Resume Challenge 
Overview

This project is my implementation of the Cloud Resume Challenge, built to demonstrate hands-on experience with AWS cloud services, CI/CD automation, and Infrastructure as Code.
The final product is a fully-deployed, automated, and version-controlled website that serves my personal resume through a scalable AWS stack.

🧠 Project Architecture

Frontend:

Static resume website hosted on Amazon S3

Distributed globally through Amazon CloudFront

Custom domain managed via Amazon Route 53, with HTTPS enforced via ACM certificates

Backend:

AWS Lambda (Python) function acting as the API endpoint

Amazon API Gateway exposing a public /visitors endpoint

Amazon DynamoDB table storing and incrementing the visitor count

Infrastructure as Code:

Entire architecture defined using AWS SAM (Serverless Application Model)

Deployment and configuration fully automated through GitHub Actions

CI/CD Pipeline:

GitHub Actions workflow:

Runs unit tests with pytest

Builds and deploys the SAM application using OIDC-based AWS authentication

Syncs the frontend files to the S3 website bucket

Ensures that every push to main triggers a clean, automated build & deploy

⚙️ Technologies Used
Category	Tools & Services
Cloud	AWS (S3, CloudFront, Route 53, DynamoDB, API Gateway, Lambda, IAM, ACM)
IaC	AWS SAM
CI/CD	GitHub Actions (OIDC auth)
Language	Python 3.13
Testing	Pytest
Hosting	S3 Static Website Hosting
DNS / SSL	Route 53 + ACM Certificates
🧩 Lambda Handler (Python)

Example structure of the backend function:

def lambda_handler(event, context):
    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": CORS_HEADERS, "body": ""}

    response = table.update_item(
        Key={"ID": "visitors"},
        UpdateExpression="ADD visit_count :incr",
        ExpressionAttributeValues={":incr": 1},
        ReturnValues="UPDATED_NEW",
    )

    count = int(response["Attributes"]["visit_count"])
    return {
        "statusCode": 200,
        "headers": {**CORS_HEADERS, "Content-Type": "application/json"},
        "body": json.dumps({"count": count}),
    }

✅ Testing

While the Lambda function depends on AWS resources, lightweight tests were implemented to validate critical logic and ensure that the API responds correctly to CORS preflight (OPTIONS) requests.

Tests are executed automatically through GitHub Actions during every push to main.

🚀 Deployment Workflow

Trigger: push to main branch
Actions:

Checkout repository

Setup Python 3.13

Install dependencies (pytest, boto3)

Run basic unit tests

Deploy stack with sam deploy using OIDC authentication

Sync website files to S3

🏁 Outcome

✅ Fully functional cloud-based resume site accessible via a custom domain
✅ Automated infrastructure deployments and code testing
✅ Demonstrated understanding of AWS architecture, CI/CD pipelines, and DevOps workflows

🌟 Next Steps

Improve unit test coverage by mocking AWS SDK calls

Add CloudWatch dashboards and alarms for visibility

Integrate IaC linting and pre-deployment validation

Experiment with CodePipeline or Terraform for comparison

👨‍💻 Author

Marcus “Goose” Henry
IT Systems Administrator → Cloud Ops Engineer
📍 Calgary, AB, Canada
