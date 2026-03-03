import {test, expect, Page} from '@playwright/test';
import { GetBookingIdsAPI } from '../apis/getBookingIds';

test.describe('should verify the getBookingIds API',async()=>{

    test('should verify if GetBookingIds API returns success status and valid empty response body for valid and no request params',async({request})=>{

        const getBookingIdsAPI = new GetBookingIdsAPI(request);
        const getBookingIdsResponse = await getBookingIdsAPI.getBookingIds();
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

})