from hello_world.app import lambda_handler

def test_options_request_returns_cors_headers():
    # Arrange
    event = {"httpMethod": "OPTIONS"}
    context = {}

    # Act
    response = lambda_handler(event, context)

    # Assert
    assert response["statusCode"] == 200
    assert "Access-Control-Allow-Origin" in response["headers"]
    assert response["headers"]["Access-Control-Allow-Methods"] == "GET,OPTIONS"
    assert response["body"] == ""
