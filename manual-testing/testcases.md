# API Test cases for testing the Restful Booker application

## Auth

### CreateToken API

#### Testcase Id : Test-Auth-01
Testcase Description : Verify the CreateToken API response status and body on empty request body
Precondition : API is reachable
Test Steps :
- Hit the POST request https://restful-booker.herokuapp.com/auth with empty request body
- Verify the status code
- Verify response body
Expected Result : The status code should be 200 as the request was processed successfully but the response body should contain appropriate error message.

#### Testcase Id : Test-Auth-02
Testcase Description : Verify the CreateToken API response status and body when username is missing
Precondition : API is reachable
Test Steps :
- Hit the POST request https://restful-booker.herokuapp.com/auth with Request body containing only username
- Verify the status code
- Verify response body
Expected Result : The status code should be 200 as the request was processed successfully but the response body should contain appropriate error message when username is missing

#### Testcase Id : Test-Auth-03
Testcase Description : Verify the CreateToken API response status and body when password is missing
Precondition : API is reachable
Test Steps :
- Hit the request https://restful-booker.herokuapp.com/auth with Request body containing only password and no username
- Verify the status code
- Verify response body
Expected Result : The status code should be 200 as the request was processed successfully but the response body should contain appropriate error message when password is missing

#### Testcase Id : Test-Auth-03
Testcase Description : Verify the CreateToken API response status and body when username is invalid
Precondition : API is reachable and have an invalid and valid credentials
Test Steps :
- Hit the POST request https://restful-booker.herokuapp.com/auth with Request body incorrect username but correct password
- Verify the status code
- Verify response body
Expected Result : The API should returns a status code of 200 but the response body should contain appropriate error message username is incorrect.

#### Testcase Id : Test-Auth-04
Testcase Description : Verify the CreateToken API response status and body when password is invalid
Precondition : API is reachable and have an invalid and valid credentials
Test Steps :
- Hit the request https://restful-booker.herokuapp.com/auth with Request body incorrect password but correct username
- Verify the status code
- Verify response body
Expected Result : The API should returns a status code of 200 but the response body should contain appropriate error message username is incorrect.

#### Testcase Id : Test-Auth-05
Testcase Description : Verify if a new auth token is successfully generated with status code 200 for valid username and password
Precondition : API is reachable and a valid username and password exist.
#### Test Steps :
- Hit the POST request https://restful-booker.herokuapp.com/auth by passing valid username and password as Request body
- Verify the status code
- Verify if the response body contains only one parameter token
- Verify if the token is not empty
Expected Result : The response status code should be 200 OK and the response body should contain a JSON with only parameter token. The token should not be empty or null.

#### Testcase Id : Test-Auth-06
Testcase Description : Verify if CreateToken API rejects Invalid HTTP methods 
#### Precondition : API is reachable and a valid username and password exist.
Test Steps :
- Hit the request https://restful-booker.herokuapp.com/auth with HTTP method as GET
- Verify the status code
- Verify the response body
Expected Result : The response status code should be 404 and the response body should appropriate error message

#### Testcase Id : Test-Auth-07
Testcase Description : Verify if CreateToken API returns error response when endpoint URI is incorrect
Test Steps :
- Hit the request POST https://restful-booker.herokuapp.com/auths with valid username and password in the Request body
- Verify the status code
- Verify the response body
Expected Result : The response status code should be 404 and the response body should appropriate error message

#### Testcase Id : Test-Auth-08
Testcase Description : Verify if CreateToken API ignores all other extra parameters in payload
Precondition : API is reachable and a valid username and password exist.
#### Test Steps : 
- Hit the request POST https://restful-booker.herokuapp.com/auths with Request body containing extra parameters other than username and password
- Verify the status code
- Verify the response body
Expected Result : The response status code returned should be 200 and the response body should only have parameter token .The extra parameters in the request payload should be ignored and should not reflect in the response

#### Testcase Id : Test-Auth-09
Testcase Description : Verify if CreateToken API returns error response Content-type is invalid in Request Headers
Precondition : API is reachable and a valid username and password exist.
Test Steps :
- Hit the request POST https://restful-booker.herokuapp.com/auths with valid username and password in the Request body but without providing Content-Type in Headers.
- Verify the status code
- Verify the response body
Expected Result : The response status code returned should be 200 OK and the response body should appropriate error message

## Booking

### CreateBooking

#### Testcase Id : Test-CreateBooking-01
Testcase Description : Verify if CreateBooking API returns success status and a non empty json response body with required parameters for a valid json request body
Precondition : API is reachable
Test Steps :
- Hit the request POST https://restful-booker.herokuapp.com/booking with a valid json request body with all the parameters
- Verify if 200 Ok status code is returned
- Verify if the response body is a non empty json with parameters bookingid, booking.firstname, booking.lastname, booking.totalprice, booking.depositpaid, booking.dates, booking.bookingdates.checkin, booking.bookingdates.checkout, booking.additionalneeds
- Verify if the parameters inside booking object matches with the values given of the respective parameters in the request body
- Verify if the bookingid is a number
Expected Result : The response status code returned should be 200 OK and the response body should be a json with bookingid and the details of booking which matches with the values in the request body.

#### Testcase Id : Test-CreateBooking-02
Testcase Description : Verify if CreateBooking API returns error if the mandatory parameter firstname is missing in the json request body.
Precondition : API is reachable
Test Steps :
- Hit the request POST https://restful-booker.herokuapp.com/booking with a valid json request body but with missing firstname
- Verify if 500 Internal Server Error status code is returned
- Verify if an error message is displayed
Expected Result : The response status code returned should be 500 Internal Server Error and the response body should have an error message

#### Testcase Id : Test-CreateBooking-03
Testcase Description : Verify if CreateBooking API returns error if the mandatory parameter lastname is missing in the json request body.
Precondition : API is reachable
Test Steps :
- Hit the request POST https://restful-booker.herokuapp.com/booking with a valid json request body but with missing lastname
- Verify if 500 Internal Server Error status code is returned
- Verify if an error message is displayed
Expected Result : The response status code returned should be 500 Internal Server Error and the response body should have an error message

#### Testcase Id : Test-CreateBooking-03
Testcase Description : Verify if CreateBooking API returns error if the mandatory parameter totalprice is missing in the json request body.
Precondition : API is reachable
Test Steps :
- Hit the request POST https://restful-booker.herokuapp.com/booking with a valid json request body but with missing totalprice
- Verify if 500 Internal Server Error status code is returned
- Verify if an error message is displayed
Expected Result : The response status code returned should be 500 Internal Server Error and the response body should have an error message

#### Testcase Id : Test-CreateBooking-04
Testcase Description : Verify if CreateBooking API returns error if the mandatory parameter depositpaid is missing in the json request body.
Precondition : API is reachable
Test Steps :
- Hit the request POST https://restful-booker.herokuapp.com/booking with a valid json request body but with missing depositpaid
- Verify if 500 Internal Server Error status code is returned
- Verify if an error message is displayed
Expected Result : The response status code returned should be 500 Internal Server Error and the response body should have an error message

#### Testcase Id : Test-CreateBooking-05
Testcase Description : Verify if CreateBooking API returns error if the entire bookingdates object is missing in the json request body.
Precondition : API is reachable
Test Steps :
- Hit the request POST https://restful-booker.herokuapp.com/booking with a valid json request body but with missing bookingdates
- Verify if 500 Internal Server Error status code is returned
- Verify if an error message is displayed
Expected Result : The response status code returned should be 500 Internal Server Error and the response body should have an error message

#### Testcase Id : Test-CreateBooking-06
Testcase Description : Verify if CreateBooking API returns error if the checkin parameter inside bookingdates object is missing in the json request body.
Precondition : API is reachable
Test Steps :
- Hit the request POST https://restful-booker.herokuapp.com/booking with a valid json request body but with missing checkin
- Verify if 500 Internal Server Error status code is returned
- Verify if an error message is displayed
Expected Result : The response status code returned should be 500 Internal Server Error and the response body should have an error message

#### Testcase Id : Test-CreateBooking-06
Testcase Description : Verify if CreateBooking API returns error if the checkout parameter inside bookingdates object is missing in the json request body.
Precondition : API is reachable
Test Steps :
- Hit the request POST https://restful-booker.herokuapp.com/booking with a valid json request body but with missing checkout
- Verify if 500 Internal Server Error status code is returned
- Verify if an error message is displayed
Expected Result : The response status code returned should be 500 Internal Server Error and the response body should have an error message

#### Testcase Id : Test-CreateBooking-07
Testcase Description : Verify if CreateBooking API returns success status when non mandatory parameter additionalneeds is missing in the json request body 
Precondition : API is reachable
Test Steps :
- Hit the request POST https://restful-booker.herokuapp.com/booking with a valid json request body with all the parameters except additionalneeds.
- Verify if 200 Ok status code is returned
- Verify if the response body is a non empty json with parameters bookingid, booking.firstname, booking.lastname, booking.totalprice, booking.depositpaid, booking.dates, booking.bookingdates.checkin, booking.bookingdates.checkout
- Verify if additionalneeds parameter i not present in the response.
Expected Result : The response status code returned should be 200 OK and the response body should not contain additionalneeds but should contain all other parameters given in the request body. 


### GetBookingId API

#### Testcase Id : Test-GetBookingId-01
Testcase Description : Verify if GetBookingIds API returns success status and non empty response body without any query parameters
Precondition : API is reachable
Test Steps :
- Hit the request GET https://restful-booker.herokuapp.com/booking without any query parameters or request body
- Verify if 200 Ok status code is returned
- Verify if the response body is non empty and contains array of objects bookingid
- Verify if the value of bookingid is a number
Expected Result : The response status code returned should be 200 OK and the response body should be an array of objects with parameter bookingid. The bookindid should be a number.

#### Testcase Id : Test-GetBookingId-02
Testcase Description : Verify if GetBookingIds API returns success status and non empty response body with firstname and lastname query params
Precondition : API is reachable
Test Steps :
- Hit the request GET https://restful-booker.herokuapp.com/booking with valid firstname and lastname as query parameters
- Verify if 200 Ok status code is returned
- Verify if the response body is non empty and contains array of objects bookingid
- Verify if the value of bookingid is a number
Expected Result : The response status code returned should be 200 OK and the response body should be an array of objects with parameter bookingid. The bookindid should be a number.
