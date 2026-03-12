import {test, expect, Page} from '@playwright/test';
import { CreateBooking } from '../apis/createBooking';
import createBookingPayload from '../payloads/createBookingPayload.json';

test.describe('CreateBooking API functionality',async()=>{

    test('should verify if CreateBooking API returns success status and a non empty json response body with required parameters for a valid json request body', async({request})=>{
        const payload = {
            ...createBookingPayload,
            firstname:  `Test${Date.now()}`,
            lastname: `User${Date.now()}`
        }

        const createBooking = new CreateBooking(request);
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

    test('should verify if CreateBookingAPI returns error when firstname is missing in the json request body',async({request})=>{
        const payload = JSON.parse(JSON.stringify(createBookingPayload));
        delete payload.firstname;
        console.log(payload);
        const createBooking = new CreateBooking(request);
        const response = await createBooking.createBookingAPI(payload);
        expect(response.status()).toBe(500);
        const responsebodyText = await response.text();
        expect(responsebodyText).toBe('Internal Server Error');

    })

    test('should verify if CreateBookingAPI returns error when lastname is missing in the json request body',async({request})=>{
        const payload = JSON.parse(JSON.stringify(createBookingPayload));
        delete payload.lastname;
        console.log(payload);
        const createBooking = new CreateBooking(request);
        const response = await createBooking.createBookingAPI(payload);
        expect(response.status()).toBe(500);
        const responsebodyText = await response.text();
        expect(responsebodyText).toBe('Internal Server Error');

    })

    test('should verify if CreateBookingAPI returns error when totalprice is missing in the json request body',async({request})=>{
        const payload = JSON.parse(JSON.stringify(createBookingPayload));
        delete payload.totalprice;
        console.log(payload);
        const createBooking = new CreateBooking(request);
        const response = await createBooking.createBookingAPI(payload);
        expect(response.status()).toBe(500);
        const responsebodyText = await response.text();
        expect(responsebodyText).toBe('Internal Server Error');

    })

    test('should verify if CreateBookingAPI returns error when depositpaid is missing in the json request body',async({request})=>{
        const payload = JSON.parse(JSON.stringify(createBookingPayload));
        delete payload.depositpaid;
        console.log(payload);
        const createBooking = new CreateBooking(request);
        const response = await createBooking.createBookingAPI(payload);
        expect(response.status()).toBe(500);
        const responsebodyText = await response.text();
        expect(responsebodyText).toBe('Internal Server Error');

    })
    test('should verify if CreateBookingAPI returns error when bookingdates is missing in the json request body',async({request})=>{
        const payload = JSON.parse(JSON.stringify(createBookingPayload));
        delete payload.bookingdates;
        console.log(payload);
        const createBooking = new CreateBooking(request);
        const response = await createBooking.createBookingAPI(payload);
        expect(response.status()).toBe(500);
        const responsebodyText = await response.text();
        expect(responsebodyText).toBe('Internal Server Error');

    })

    test('should verify if CreateBookingAPI returns error when checkin inside bookingdates object is missing in the json request body',async({request})=>{
       const payload = JSON.parse(JSON.stringify(createBookingPayload));
        delete payload.bookingdates.checkin;
        console.log(payload);
        const createBooking = new CreateBooking(request);
        const response = await createBooking.createBookingAPI(payload);
        expect(response.status()).toBe(500);
        const responsebodyText = await response.text();
        expect(responsebodyText).toBe('Internal Server Error');

    })
    test('should verify if CreateBookingAPI returns error when checkout inside bookingdates object is missing in the json request body',async({request})=>{
       const payload = JSON.parse(JSON.stringify(createBookingPayload));
        delete payload.bookingdates.checkout;
        console.log(payload);
        const createBooking = new CreateBooking(request);
        const response = await createBooking.createBookingAPI(payload);
        expect(response.status()).toBe(500);
        const responsebodyText = await response.text();
        expect(responsebodyText).toBe('Internal Server Error');

    })

     test('should verify if CreateBookingAPI returns success when additionalneeds is missing in the json request body',async({request})=>{
       const payload = JSON.parse(JSON.stringify(createBookingPayload));
        delete payload.additionalneeds;
        payload.firstname = `Test${Date.now()}`;
        payload.lastname= `User${Date.now()}`;
        console.log(payload);
        const createBooking = new CreateBooking(request);
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

})