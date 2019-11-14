# Server

## About
The server is the back-end component of the application which is never served to the user. It validates information and serves HTML and JavaScript files to the end user.

### Functionality
The server sends relevant files to browsers accessing the app at the relevant port (`1337` by default). The server also contains a simple REST API that retrieves and adds new questions.