# Same super-simple, still relevant test; keeps two files for completion
from hello_world.app import lambda_handler

def test_apigw_preflight_is_handled():
    event = {"httpMethod": "OPTIONS", "path": "/"}
    resp = lambda_handler(event, {})
    assert resp["statusCode"] == 200
    assert "Access-Control-Allow-Origin" in resp["headers"]
