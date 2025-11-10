# adjust to your real path: from <folder>.app import lambda_handler
from hello_world.app import lambda_handler

def test_options_returns_cors_headers():
    event = {"httpMethod": "OPTIONS"}
    resp = lambda_handler(event, {})
    assert resp["statusCode"] == 200
    assert resp["headers"]["Access-Control-Allow-Methods"] == "GET,OPTIONS"
    assert resp["body"] == ""
