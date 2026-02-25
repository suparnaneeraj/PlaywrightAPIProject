import {test, expect} from '@playwright/test';
import { CreateTokenAPI } from '../apis/createTokenAPI';

test.describe('Create Token Tests', async()=>{

    test('should verify if CreateToken API returns error response on empty request body', async({request})=>{
        const createTokenRequestPaylod = {};
        const createTokenAPI = new CreateTokenAPI(request);
        const createTokenResponse = await createTokenAPI.createTokenAPI(createTokenRequestPaylod);
        expect(createTokenResponse.status()).toBe(200);
        const createTokenResponseJson = await createTokenResponse.json();
        expect(createTokenResponseJson).not.toBeNull();
        expect(createTokenResponseJson.reason).toEqual('Bad credentials');
    })

})