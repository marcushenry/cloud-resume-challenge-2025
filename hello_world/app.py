import json
import os

CORS_HEADERS = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,OPTIONS",
    "Access-Control-Allow-Headers": "*",
}

# Lazily create the DynamoDB Table the first time it's needed
_table = None

def _get_table():
    """Return a cached boto3 Table. Import boto3 only when needed."""
    global _table
    if _table is None:
        import boto3  # deferred import keeps module import side-effect free
        table_name = os.environ["TABLE_NAME"]  # will raise KeyError if truly missing
        dynamodb = boto3.resource("dynamodb")
        _table = dynamodb.Table(table_name)
    return _table


def lambda_handler(event, context):
    # Handle CORS preflight requests (no AWS calls here)
    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": CORS_HEADERS, "body": ""}

    # Main response (DynamoDB only touched here)
    table = _get_table()
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
        "body": json.dumps({"count": count, "marker": "DDBCounter"}),
    }
