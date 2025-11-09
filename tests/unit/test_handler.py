# tests/unit/test_handler.py
import json
from moto import mock_s3
import boto3
from hello_world import app  # your handler module

@mock_s3
def test_lambda_returns_200():
    # Arrange fake AWS
    s3 = boto3.client("s3", region_name="us-east-1")
    s3.create_bucket(Bucket="my-bucket")
    # (put any needed objects here)

    # Act
    event = {"httpMethod": "GET"}
    result = app.lambda_handler(event, {})

    # Assert
    assert result["statusCode"] == 200

