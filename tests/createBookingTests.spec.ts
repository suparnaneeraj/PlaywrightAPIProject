import {test, expect} from './fixtures';
import { CreateBooking } from '../apis/createBooking';
import createBookingPayload from '../payloads/createBookingPayload.json';
import { DateUtil } from '../utils/dateUtils';

test.describe('CreateBooking API functionality',async()=>{

    test('should verify if CreateBooking API returns success status and a non empty json response body with required parameters for a valid json request body', async({createBooking})=>{
        const payload = JSON.parse(JSON.stringify(createBookingPayload));
        payload.firstname = `Test${Date.now()}`;
        payload.lastname = `User${Date.now()}`
        const response = await createBooking.createBookingAPI(payload);  
        expect(response.status()).toBe(200);
        const responseJson = await response.json();
        console.log(responseJson);
        expect(responseJson.bookingid).toBeDefined();
        expect(responseJson.bookingid).toBeTruthy();
        expect(typeof(responseJson.bookingid)).toBe('number');

        expect(responseJson.booking.firstname).toBeDefined();
        expect(responseJson.booking.firstname).toBeTruthy();
        expect(typeof(responseJson.booking.firstname)).toBe('string');
        expect(responseJson.booking.firstname).toBe(payload.firstname);

        expect(responseJson.booking.lastname).toBeDefined();
        expect(responseJson.booking.lastname).toBeTruthy();
        expect(typeof(responseJson.booking.lastname)).toBe('string');
        expect(responseJson.booking.lastname).toBe(payload.lastname);

        expect(responseJson.booking.totalprice).toBeDefined();
        expect(responseJson.booking.totalprice).toBeTruthy();
        expect(typeof(responseJson.booking.totalprice)).toBe('number');
        expect(responseJson.booking.totalprice).toBe(payload.totalprice);

        expect(responseJson.booking.depositpaid).toBeDefined();
        expect(responseJson.booking.depositpaid).toBeTruthy();
        expect(typeof(responseJson.booking.depositpaid)).toBe('boolean');
        expect(responseJson.booking.depositpaid).toBe(payload.depositpaid);

        expect(responseJson.booking.bookingdates).toBeDefined();
        expect(responseJson.booking.bookingdates.checkin).toBeDefined();
        expect(responseJson.booking.bookingdates.checkin).toBeTruthy();
        expect(typeof(responseJson.booking.bookingdates.checkin)).toBe('string');
        expect(responseJson.booking.bookingdates.checkin).toBe(payload.bookingdates.checkin);

        expect(responseJson.booking.bookingdates.checkout).toBeDefined();
        expect(responseJson.booking.bookingdates.checkout).toBeTruthy();
        expect(typeof(responseJson.booking.bookingdates.checkout)).toBe('string');
        expect(responseJson.booking.bookingdates.checkout).toBe(payload.bookingdates.checkout);

        expect(responseJson.booking.additionalneeds).toBeDefined();
        expect(responseJson.booking.additionalneeds).toBeTruthy();
        expect(typeof(responseJson.booking.additionalneeds)).toBe('string');
        expect(responseJson.booking.additionalneeds).toBe(payload.additionalneeds);

    })

    test('should verify if CreateBookingAPI returns error when firstname is missing in the json request body',async({createBooking})=>{
        const payload = JSON.parse(JSON.stringify(createBookingPayload));
        delete payload.firstname;
        const response = await createBooking.createBookingAPI(payload);
        expect(response.status()).toBe(500);
        const responsebodyText = await response.text();
        expect(responsebodyText).toBe('Internal Server Error');

    })

    test('should verify if CreateBookingAPI returns error when lastname is missing in the json request body',async({createBooking})=>{
        const payload = JSON.parse(JSON.stringify(createBookingPayload));
        delete payload.lastname;
        const response = await createBooking.createBookingAPI(payload);
        expect(response.status()).toBe(500);
        const responsebodyText = await response.text();
        expect(responsebodyText).toBe('Internal Server Error');

    })

    test('should verify if CreateBookingAPI returns error when totalprice is missing in the json request body',async({createBooking})=>{
        const payload = JSON.parse(JSON.stringify(createBookingPayload));
        delete payload.totalprice;
        const response = await createBooking.createBookingAPI(payload);
        expect(response.status()).toBe(500);
        const responsebodyText = await response.text();
        expect(responsebodyText).toBe('Internal Server Error');

    })

    test('should verify if CreateBookingAPI returns error when depositpaid is missing in the json request body',async({createBooking})=>{
        const payload = JSON.parse(JSON.stringify(createBookingPayload));
        delete payload.depositpaid;
        const response = await createBooking.createBookingAPI(payload);
        expect(response.status()).toBe(500);
        const responsebodyText = await response.text();
        expect(responsebodyText).toBe('Internal Server Error');

    })
    test('should verify if CreateBookingAPI returns error when bookingdates is missing in the json request body',async({createBooking})=>{
        const payload = JSON.parse(JSON.stringify(createBookingPayload));
        delete payload.bookingdates;
        const response = await createBooking.createBookingAPI(payload);
        expect(response.status()).toBe(500);
        const responsebodyText = await response.text();
        expect(responsebodyText).toBe('Internal Server Error');

    })

    test('should verify if CreateBookingAPI returns error when checkin inside bookingdates object is missing in the json request body',async({createBooking})=>{
       const payload = JSON.parse(JSON.stringify(createBookingPayload));
        delete payload.bookingdates.checkin;
        const response = await createBooking.createBookingAPI(payload);
        expect(response.status()).toBe(500);
        const responsebodyText = await response.text();
        expect(responsebodyText).toBe('Internal Server Error');

    })
    test('should verify if CreateBookingAPI returns error when checkout inside bookingdates object is missing in the json request body',async({createBooking})=>{
       const payload = JSON.parse(JSON.stringify(createBookingPayload));
        delete payload.bookingdates.checkout;
        const response = await createBooking.createBookingAPI(payload);
        expect(response.status()).toBe(500);
        const responsebodyText = await response.text();
        expect(responsebodyText).toBe('Internal Server Error');

    })

     test('should verify if CreateBookingAPI returns success when additionalneeds is missing in the json request body',async({createBooking})=>{
       const payload = JSON.parse(JSON.stringify(createBookingPayload));
        delete payload.additionalneeds;
        payload.firstname = `Test${Date.now()}`;
        payload.lastname= `User${Date.now()}`;
        const response = await createBooking.createBookingAPI(payload);
        expect(response.status()).toBe(200);
        const responseJson = await response.json();
        console.log(responseJson);
        expect(responseJson.bookingid).toBeDefined();
        expect(responseJson.bookingid).toBeTruthy();
        expect(typeof(responseJson.bookingid)).toBe('number');

        expect(responseJson.booking.firstname).toBeDefined();
        expect(responseJson.booking.firstname).toBeTruthy();
        expect(typeof(responseJson.booking.firstname)).toBe('string');
        expect(responseJson.booking.firstname).toBe(payload.firstname);

        expect(responseJson.booking.lastname).toBeDefined();
        expect(responseJson.booking.lastname).toBeTruthy();
        expect(typeof(responseJson.booking.lastname)).toBe('string');
        expect(responseJson.booking.lastname).toBe(payload.lastname);

        expect(responseJson.booking.totalprice).toBeDefined();
        expect(responseJson.booking.totalprice).toBeTruthy();
        expect(typeof(responseJson.booking.totalprice)).toBe('number');
        expect(responseJson.booking.totalprice).toBe(payload.totalprice);

        expect(responseJson.booking.depositpaid).toBeDefined();
        expect(responseJson.booking.depositpaid).toBeTruthy();
        expect(typeof(responseJson.booking.depositpaid)).toBe('boolean');
        expect(responseJson.booking.depositpaid).toBe(payload.depositpaid);

        expect(responseJson.booking.bookingdates).toBeDefined();
        expect(responseJson.booking.bookingdates.checkin).toBeDefined();
        expect(responseJson.booking.bookingdates.checkin).toBeTruthy();
        expect(typeof(responseJson.booking.bookingdates.checkin)).toBe('string');
        expect(responseJson.booking.bookingdates.checkin).toBe(payload.bookingdates.checkin);

        expect(responseJson.booking.bookingdates.checkout).toBeDefined();
        expect(responseJson.booking.bookingdates.checkout).toBeTruthy();
        expect(typeof(responseJson.booking.bookingdates.checkout)).toBe('string');
        expect(responseJson.booking.bookingdates.checkout).toBe(payload.bookingdates.checkout);

        expect(responseJson.booking.additionalneeds).not.toBeDefined();
    })

    test('should verify if the CreateToken API returns success when request body with same firstname and lastname is sent',async({createBooking})=>{
        const payload = JSON.parse(JSON.stringify(createBookingPayload));
        const firstResponse = await createBooking.createBookingAPI(payload);
        const firstResponseJson = await firstResponse.json();
        expect(firstResponse.status()).toBe(200);
        expect(firstResponseJson).toHaveProperty('bookingid');
        const firstBookingId = firstResponseJson.bookingid;
        expect(firstBookingId).toBeTruthy();
        const secondResponse = await createBooking.createBookingAPI(payload);
        const secondResponseJson = await secondResponse.json();
        const secondBookingId = secondResponseJson.bookingid;
        expect(secondResponse.status()).toBe(200);
        expect(secondResponseJson).toHaveProperty('bookingid');
        expect(secondBookingId).toBeTruthy();
        expect(firstBookingId).not.toBe(secondBookingId);
    })

    test('should verify if CreateToken API returns success when the firstname contains special characters',async({createBooking})=>{
        const payload = JSON.parse(JSON.stringify(createBookingPayload));
        payload.firstname = payload.firstname + '%';
        const response = await createBooking.createBookingAPI(payload);
        expect(response.status()).toBe(200);
        const responseJson = await response.json();
        expect(responseJson).toHaveProperty('bookingid');
        expect(responseJson.bookingid).toBeTruthy();
        expect(responseJson).toHaveProperty('booking.firstname');
        const firstname = responseJson.booking.firstname;
        expect(firstname).toBeTruthy();
        expect(firstname).toBe(payload.firstname);
    })
     test('should verify if CreateToken API returns success when the lastname contains special characters',async({createBooking})=>{
        const payload = JSON.parse(JSON.stringify(createBookingPayload));
        payload.lastname = payload.lastname + '%';
        const response = await createBooking.createBookingAPI(payload);
        expect(response.status()).toBe(200);
        const responseJson = await response.json();
        expect(responseJson).toHaveProperty('bookingid');
        expect(responseJson.bookingid).toBeTruthy();
        expect(responseJson).toHaveProperty('booking.lastname');
        const lastname = responseJson.booking.lastname;
        expect(lastname).toBeTruthy();
        expect(lastname).toBe(payload.lastname);
    })
    test('should verify if CreateBooking API returns error on invalid endpoint uri',async({createBooking})=>{
        const payload = JSON.parse(JSON.stringify(createBookingPayload));
        const response = await createBooking.createBookingAPI(payload, '/bookings');
        expect(response.status()).toBe(404);
        const responseBodyText = await response.text();
        expect(responseBodyText).toBe('Not Found');
    })
    test('should verify CreateBooking when checkin date is greater than checkout date',async({createBooking})=>{
        const checkinDate = DateUtil.getDateAfterDays(5);
        const checkoutDate = DateUtil.getDateAfterDays(2);
        const payload = JSON.parse(JSON.stringify(createBookingPayload));
        payload.bookingdates.checkin = checkinDate;
        payload.bookingdates.checkout = checkoutDate;
        const response = await createBooking.createBookingAPI(payload);
        expect(response.status()).toBe(200);
        const responseBodyJson = await response.json();
        expect(responseBodyJson).toHaveProperty('booking');
        expect(responseBodyJson.booking).toHaveProperty('bookingdates');
        expect(responseBodyJson.booking.bookingdates).toHaveProperty('checkin');
        expect(responseBodyJson.booking.bookingdates).toHaveProperty('checkout');
        expect(responseBodyJson.booking.bookingdates.checkin).toBe(checkinDate);
        expect(responseBodyJson.booking.bookingdates.checkout).toBe(checkoutDate);
    })
    test('should verify the CreateBooking API when depositpaid is false', async({createBooking})=>{
        const payload = JSON.parse(JSON.stringify(createBookingPayload));
        payload.depositpaid = false;
        const response = await createBooking.createBookingAPI(payload);
        expect(response.status()).toBe(200);
        const responseBodyJson = await response.json();
        expect(responseBodyJson.booking.depositpaid).toBe(false);
    })

})