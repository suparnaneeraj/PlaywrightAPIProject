# API Test Scenarios for Restful Booker application


## Auth

### 1. Verify the CreateToken API

1. Verify the CreateToken API response status and body on empty request body
2. Verify the CreateToken API response status and body when username/password is missing
3. Verify the CreateToken API response status and body when username/password is invalid
4. Verify if a new auth token is successfully generated with status code 200 for valid username
5. Verify if CreateToken API rejects Invalid HTTP methods
6. Verify if CreateToken API returns error response when endpoint URI is incorrect
7. Verify if CreateToken API ignores all other extra parameters in payload
8. Verify if CreateToken API returns error response Content-type is invalid in Request Headers


## Bookings

### 1. Verify the CreateBooking API

1. Verify if CreateBooking API returns success status and a non empty json response body with required parameters for a valid json request body
2. Verify if CreateBooking API returns error if any of the mandatory parameter(firstname, lastname, totalprice, depositpaid, checkin and checkout) is missing in the json request body
3. Verify if CreateBooking API returns success status and a non empty json response body with bookingid when additionalneeds parameter is missing
4. Verify if CreateBooking API returns error when passing invalid/unsupported type value for any of the parameters in the json request body
5. Verify if Createbooking API returns success when the json request body is sent with an existing firstname and lastname
6. Verify CreateBooking API behevaior when firstname/lastname contains numbers or digits or specialcharacters.
7. Verify if CreateBooking API returns error when invalid HTTP method is used instead of POST
8. Verify if CreateBooking API returns error when invalid endpoint URI is used instead of /booking
9. Verify the CreateBooking API response when checkin date is after checkout date
10. Verify the CreateBooking API response when extra parameters are present in the request body along with required parameters
11. Verify if the details in the CreateBooking API response match with the given details in the request body
12. Verify if the CreateBooking API returns error when no request body is provided
13. Verify if the CreateBooking API returns error when invalid/malformed json request body is provided
13. Verify if the CreateBooking API returns error when Content-type in request header is invalid/missing
14. Verify the CreateBooking API when the request body has invalid value like large/negative totalprice
15. Verify the CreateBooking API when the request body has empty/very long strings for firstname/lastname
16. Verify if the CreateBooking API returns success when depositpaid is false


### 2. Verify the GetBookingIds API

1. Verify if GetBookingIds API returns success status and non empty response body without any query parameters 
2. Verify if GetBookingIds API returns success status and non empty response body with firstname and lastname query params 
3. Verify if GetBookingIds API returns success status and non empty response body with valid firstname as only query params 
4. Verify if GetBookingIds API returns success status and non empty response body with valid lastname as only query params
5. Verify if GetBookingIds API returns success status and non empty response body with future checkin and checkout dates as query params
6. Verify if GetBookingIds API returns success status and non empty response body with older checkin and checkout dates as query params
7. Verify if GetBookingIds API returns success status and non empty response body with checkin as only query param
8. Verify if GetBookingIds API returns success status and non empty response body with checkout as only query param
9. Verify if GetBookingIds API returns success status and empty response body for non existing firstname/lastname param
10. Verify if GetBookingIds API returns success status and empty response body for a date with no bookings
11. Verify if GetBookingIds API returns rejects invalid HTTP method
12. Verify if GetBookingIds API returns error on incorrect endpoint 
13. Verify if GetBookingIds API returns error when firstname/lastname has invalid type
14. Verify if GetBookingIds API returns error when checkin/checkout date has invalid type for example String
15. Verify if GetBookingIds API returns error when checkin/checkout date has invalid date format
16. Verify if GetBookingIds API returns error when checkin date is greater than checkout date
17. Verify if GetBookingIds API returns success and empty response body when the firstname/lastname is in incorrect case.
18. Verify if GetBookingIds API returns success and non empty response body for valid firstname/lastname containing space as query param
19. Verify if GetBookingIds API returns error when extra params other than dates and names are passed as query params
20. Verify if GetBookingIds API response when firstname and dates are passed as query params
21. Verify if GetBookingIds API response when lastname and dates are passed as query params
22. Verify if GetBookingIds API response when firstname and lastname and dates are passed as query params
23. Verify if GetBookingIds API response when duplicate params are present as query params
24. Verify if GetBookingIds API returns error when firstname/lastname has special characters









### 2. Verify the GetBooking API

### 3. Verify the CreateBooking API

### 4. Verify the UpdateBooking API

### 5. Verify the PartialUpdateBooking API

### 6. Verify the DeleteBooking API


## Ping

### 1. Verify the HealthCheck API


