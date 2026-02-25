# API Test cases for testing the Restful Booker application

## Auth

### CreateToken API

#### Testcase Id : Test-Auth-01
#### Testcase Description : Verify the CreateToken API response status and body on empty request body
#### Precondition : API is reachable
#### Test Steps :
#### 1. Hit the POST request https://restful-booker.herokuapp.com/auth with empty request body
#### 2. Verify the status code
#### 3. Verify response body
#### Expected Result : The status code should be 200 as the request was processed successfully but the response body should contain appropriate error message.

#### Testcase Id : Test-Auth-02
#### Testcase Description : Verify the CreateToken API response status and body when username or password is missing
#### Precondition : API is reachable
#### Test Steps :
#### 1. Hit the POST request https://restful-booker.herokuapp.com/auth with Request body containing only username
#### 2. Verify the status code
#### 3. Verify response body
#### Expected Result : The status code should be 200 as the request was processed successfully but the response body should contain appropriate error message when username is missing

#### Testcase Id : Test-Auth-03
#### Testcase Description : Verify the CreateToken API response status and body when password is missing
#### Precondition : API is reachable
#### Test Steps :
#### 4. Hit the request https://restful-booker.herokuapp.com/auth with Request body containing only password and no username
#### 5. Verify the status code
#### 6. Verify response body
#### Expected Result : The status code should be 200 as the request was processed successfully but the response body should contain appropriate error message when password is missing

#### Testcase Id : Test-Auth-03
#### Testcase Description : Verify the CreateToken API response status and body when username is invalid
#### Precondition : API is reachable and have an invalid and valid credentials
#### Test Steps :
#### 1. Hit the POST request https://restful-booker.herokuapp.com/auth with Request body incorrect username but correct password
#### 2. Verify the status code
#### 3. Verify response body
#### Expected Result : The API should returns a status code of 200 but the response body should contain appropriate error message username is incorrect.

#### Testcase Id : Test-Auth-04
#### Testcase Description : Verify the CreateToken API response status and body when password is invalid
#### Precondition : API is reachable and have an invalid and valid credentials
#### Test Steps :
#### 1. Hit the request https://restful-booker.herokuapp.com/auth with Request body incorrect password but correct username
#### 2. Verify the status code
#### 3. Verify response body
#### Expected Result : The API should returns a status code of 200 but the response body should contain appropriate error message username is incorrect.

#### Testcase Id : Test-Auth-05
#### Testcase Description : Verify if a new auth token is successfully generated with status code 200 for valid username and password
#### Precondition : API is reachable and a valid username and password exist.
#### Test Steps :
#### 1. Hit the POST request https://restful-booker.herokuapp.com/auth by passing valid username and password as Request body
#### 2. Verify the status code
#### 3. Verify if the response body contains a parameter token
#### 4. Verify if the token is not empty
#### Expected Result : The response status code should be 200 OK and the response body should contain a JSON with parameter token. The token should not be empty or null.

#### Testcase Id : Test-Auth-07
#### Testcase Description : Verify if CreateToken API rejects Invalid HTTP methods 
#### Precondition : API is reachable and a valid username and password exist.
#### Test Steps :
#### 1. Hit the request https://restful-booker.herokuapp.com/auth with HTTP method as GET
#### 2. Verify the status code
#### 3. Verify the response body
#### Expected Result : The response status code should be 404 and the response body should appropriate error message

#### Testcase Id : Test-Auth-08
#### Testcase Description : Verify if CreateToken API returns error response when endpoint URI is incorrect
#### Test Steps :
#### 1. Hit the request POST https://restful-booker.herokuapp.com/auths with valid username and password in the Request body.
#### 2. Verify the status code
#### 3. Verify the response body
#### Expected Result : The response status code should be 404 and the response body should appropriate error message

#### Testcase Id : Test-Auth-09
#### Testcase Description : Verify if CreateToken API ignores all other extra parameters in paylod
#### Precondition : API is reachable and a valid username and password exist.
#### Test Steps : 
#### 1. Hit the request POST https://restful-booker.herokuapp.com/auths with Request body containing extra parameters other than username and password
#### 2. Verify the status code
#### 3. Verify the response body
#### Expected Result : The response status code returned should be 200 and the response body should only have parameter token .The extra parameters in the request payload should be ignored and should not reflect in the response

#### Testcase Id : Test-Auth-08
#### Testcase Description : Verify if CreateToken API returns error response when endpoint URI is incorrect
#### Precondition : API is reachable and a valid username and password exist.
#### Test Steps :
#### 1. Hit the request POST https://restful-booker.herokuapp.com/auths with valid username and password in the Request body but without providing Content-Type in Headers.
#### 2. Verify the status code
#### 3. Verify the response body
#### Expected Result : The response status code returned should be 200 OK and the response body should appropriate error message