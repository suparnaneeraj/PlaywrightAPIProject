import {test, expect} from './fixtures';
import getBookingIdPayload from '../payloads/getBookingIdPayload.json';
import createBookingPayload from '../payloads/createBookingPayload.json';

let firstname :string;
let lastname: string;
let createdBookingId : number;
let checkinDate: string;
let checkoutDate: string;
test.describe('should verify the getBookingIds API',async()=>{

    test.beforeAll(async({createBooking})=>{
        const createBookingPayloadJson = JSON.parse(JSON.stringify(createBookingPayload));
        const createBookingResponse = await createBooking.createBookingAPI(createBookingPayloadJson);
        const createBookingResponseJson = await createBookingResponse.json();
        createdBookingId = createBookingResponseJson.bookingid;
        expect(createBookingResponse.status()).toBe(200);
        expect(createBookingResponseJson.bookingid).toBeTruthy();
        firstname = createBookingResponseJson.booking.firstname;
        lastname = createBookingResponseJson.booking.lastname;
        checkinDate = createBookingResponseJson.booking.bookingdates.checkin;
        checkoutDate = createBookingResponseJson.booking.bookingdates.checkout;;
    })
    test('should verify if GetBookingIds API returns success status and valid empty response body for valid and no request params',async({getBookingId})=>{
        const getBookingIdsResponse = await getBookingId.getBookingIds();
        const getBookingIdsResponseJson = await getBookingIdsResponse.json();
        expect(getBookingIdsResponse.status()).toBe(200);
        //verifying if the body is an array of bookingids
        expect(Array.isArray(getBookingIdsResponseJson)).toBeTruthy();
        for(const bookingId of getBookingIdsResponseJson){
            expect(typeof(bookingId)).toBe('object');
            expect(bookingId).not.toBeNull();
            expect(bookingId).toHaveProperty('bookingid');
            expect(typeof(bookingId.bookingid)).toBe('number');
            expect(Object.keys(bookingId)).toHaveLength(1);
        }
    })

    test('should verify if GetBookingIds API return success status and non empty response body with firstname and lastname as only query parameters',async({getBookingId})=>{
        const getBookingIdPayloadJson = JSON.parse(JSON.stringify(getBookingIdPayload));
        getBookingIdPayloadJson.firstname = firstname;
        getBookingIdPayloadJson.lastname = lastname;
        delete getBookingIdPayloadJson.checkin;
        delete getBookingIdPayloadJson.checkout;
        const getBookingIdsResponse = await getBookingId.getBookingIds(getBookingIdPayloadJson);
        const getBookingIdsResponseJson = await getBookingIdsResponse.json();
        expect(getBookingIdsResponse.status()).toBe(200);
        expect(Array.isArray(getBookingIdsResponseJson)).toBeTruthy();
        const bookingIds = getBookingIdsResponseJson.map(
        (booking: { bookingid: number }) => booking.bookingid
        );      
        expect(bookingIds).toContain(createdBookingId);
    })

     test('should verify if GetBookingIds API return success status and non empty response body when check in date has invalid date format',async({getBookingId})=>{
        const getBookingIdPayloadJson = JSON.parse(JSON.stringify(getBookingIdPayload));
        const checkinFormattedDate = checkinDate.split("-").reverse().join("-");
        const checkoutFormattedDate = checkoutDate.split("-").reverse().join("-");
        getBookingIdPayloadJson.checkin = checkinFormattedDate;
        getBookingIdPayloadJson.checkout = checkoutFormattedDate;
        getBookingIdPayloadJson.firstname = firstname;
        getBookingIdPayloadJson.lastname = lastname;
        console.log(getBookingIdPayloadJson);
        const getBookingIdsResponse = await getBookingId.getBookingIds(getBookingIdPayloadJson);
        const getBookingIdsResponseJson = await getBookingIdsResponse.json();
        console.log(getBookingIdsResponseJson);
        expect(getBookingIdsResponse.status()).toBe(200);
        expect(Array.isArray(getBookingIdsResponseJson)).toBeTruthy();
        const bookingIds = getBookingIdsResponseJson.map(
        (booking: { bookingid: number }) => booking.bookingid
        );      
        expect(bookingIds).toContain(createdBookingId);
    })

     test('should verify if GetBookingIds API return success status and an empty response body incorrect firstname',async({getBookingId})=>{
        const getBookingIdPayloadJson = JSON.parse(JSON.stringify(getBookingIdPayload));
        const invalidFirstname = getBookingIdPayloadJson.firstname +"sss";
        getBookingIdPayloadJson.firstname=invalidFirstname;
        const getBookingIdsResponse = await getBookingId.getBookingIds(getBookingIdPayloadJson);
        const getBookingIdsResponseJson = await getBookingIdsResponse.json();
        expect(getBookingIdsResponse.status()).toBe(200);
        expect(Array.isArray(getBookingIdsResponseJson)).toBeTruthy();
        expect(getBookingIdsResponseJson).toHaveLength(0);
    })

})