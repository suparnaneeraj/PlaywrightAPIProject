# API Test Scenarios for Restful Booker application


## Auth

### 1. Verify the CreateToken API

####     a. Verify the CreateToken API response status and body on empty request body
####     b. Verify the CreateToken API response status and body when username/password is missing
####     c. Verify the CreateToken API response status and body when username/password is invalid
####     d. Verify if a new auth token is successfully generated with status code 200 for valid username
####     e. Verify if CreateToken API rejects Invalid HTTP methods
####     f. Verify if CreateToken API returns error response when endpoint URI is incorrect
####     g. Verify if CreateToken API ignores all other extra parameters in payload
####     h. Verify if CreateToken API returns error response Content-type is invalid in Request Headers



## Bookings

### 1. Verify the GetBookingIds API

####        a. Verify if GetBookingIds API returns success status and non empty response body without any query parameters 
####        b. Verify if GetBookingIds API returns success status and non empty response body with firstname and lastname query params 
####        c. Verify if GetBookingIds API returns success status and non empty response body with valid firstname as only query params 
####        d. Verify if GetBookingIds API returns success status and non empty response body with valid lastname as only query params
####        e. Verify if GetBookingIds API returns success status and non empty response body with future checkin and checkout dates as query params
####        f. Verify if GetBookingIds API returns success status and non empty response body with older checkin and checkout dates as query params
####        g. Verify if GetBookingIds API returns success status and non empty response body with checkin as only query param
####        h. Verify if GetBookingIds API returns success status and non empty response body with checkout as only query param
####        i. Verify if GetBookingIds API returns success status and empty response body for non existing firstname/lastname param
####        j. Verify if GetBookingIds API returns success status and empty response body for a date with no bookings
####        k. Verify if GetBookingIds API returns rejects invalid HTTP method
####        l. Verify if GetBookingIds API returns error on incorrect endpoint 
####        m. Verify if GetBookingIds API returns error when firstname/lastname has invalid type
####        n. Verify if GetBookingIds API returns error when checkin/checkout date has invalid type for example String
####        o. Verify if GetBookingIds API returns error when checkin/checkout date has invalid date format
####        p. Verify if GetBookingIds API returns error when checkin date is greater than checkout date
####        q. Verify if GetBookingIds API returns success and empty response body when the firstname/lastname is in incorrect case.
####        r. Verify if GetBookingIds API returns success and non empty response body for valid firstname/lastname containing space as query param
####        s. Verify if GetBookingIds API returns error when extra params other than dates and names are passed as query params
####        t. Verify if GetBookingIds API response when firstname and dates are passed as query params
####        u. Verify if GetBookingIds API response when lastname and dates are passed as query params
####        v. Verify if GetBookingIds API response when firstname and lastname and dates are passed as query params
####        w. Verify if GetBookingIds API response when duplicate params are present as query params
####        x. Verify if GetBookingIds API returns error when firstname/lastname has special characters









### 2. Verify the GetBooking API

### 3. Verify the CreateBooking API

### 4. Verify the UpdateBooking API

### 5. Verify the PartialUpdateBooking API

### 6. Verify the DeleteBooking API


## Ping

### 1. Verify the HealthCheck API


