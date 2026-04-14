import {test as base} from '@playwright/test';
import { CreateBooking } from '../apis/createBooking';
import { CreateToken } from '../apis/createToken';
import { GetBookingId } from '../apis/getBookingId';

type MyFixtures = {
    createBooking : CreateBooking;
    createToken : CreateToken;
    getBookingId : GetBookingId;
};

export const test = base.extend<MyFixtures>({
    createBooking: async ({ request }, use) => {
    const api = new CreateBooking(request);
    await use(api); 
    },
    createToken: async ({ request }, use) => {
    const api = new CreateToken(request);
    await use(api); 
    },
    getBookingId: async ({ request }, use) => {
    const api = new GetBookingId(request);
    await use(api); 
    },

});
export { expect } from '@playwright/test';