# API Test Scenarios for Restful Booker application


## Auth

### 1. Verify the CreateToken API

####     a. Verify CreateToken API returns error for empty request body
####     b. Verify CreateToken API returns error for missing username or missing password
####     c. Verify CreateToken API returns success for valid credentials
####     d. Verify CreateToken API returns error for invalid credentials
####     e. Verify CreateToken API rejects unsupported HTTP methods


## Bookings

### 1. Verify the GetBookingIds API

####        a. Verify the Get Booking ID API without any query parameters 
####        b. Verify the Get Booking ID API using query params firstname and last name
####        c. Verify the Get Booking ID API using query param date


### 2. Verify the GetBooking API

### 3. Verify the CreateBooking API

### 4. Verify the UpdateBooking API

### 5. Verify the PartialUpdateBooking API

### 6. Verify the DeleteBooking API


## Ping

### 1. Verify the HealthCheck API


