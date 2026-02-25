import {test, expect} from '@playwright/test';
import { CreateTokenAPI } from '../apis/createTokenAPI';

const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const invalidUsername = process.env.USERNAME + "1";
const invalidPassword = process.env.PASSOWRD + "1";

test.describe('Create Token Tests', async()=>{

    //Positive tests

    test('should verify if CreateToken API returns success response on passing valid credentials in the request body', async({request})=>{
        const createTokenRequestPaylod = {
            "username" : username,
            "password" : password
        };
        const createTokenAPI = new CreateTokenAPI(request);
        const createTokenResponse = await createTokenAPI.createTokenAPI(createTokenRequestPaylod);
        const createTokenResponseJson = await createTokenResponse.json();
        expect(createTokenResponse.status()).toBe(200);
        expect(createTokenResponseJson).toHaveProperty('token');
        expect(Object.keys(createTokenResponseJson)).toHaveLength(1);
        expect(createTokenResponseJson.token).toBeTruthy();
        expect(createTokenResponseJson.token.trim().length).toBeGreaterThan(0);
    })

    //Negative tests

    test('should verify if CreateToken API returns error response on empty request body', async({request})=>{
        const createTokenRequestPaylod = {};
        const createTokenAPI = new CreateTokenAPI(request);
        const createTokenResponse = await createTokenAPI.createTokenAPI(createTokenRequestPaylod);
        expect(createTokenResponse.status()).toBe(200);
        const createTokenResponseJson = await createTokenResponse.json();
        expect(createTokenResponseJson).not.toBeNull();
        expect(createTokenResponseJson.reason).toEqual('Bad credentials');
    })
    test('should verify if CreateToken API returns error response on missing username param in request body', async({request})=>{
        const createTokenRequestPaylod = {
            "password" : password
        };
        const createTokenAPI = new CreateTokenAPI(request);
        const createTokenResponse = await createTokenAPI.createTokenAPI(createTokenRequestPaylod);
        expect(createTokenResponse.status()).toBe(200);
        const createTokenResponseJson = await createTokenResponse.json();
        expect(createTokenResponseJson).not.toBeNull();
        expect(createTokenResponseJson.reason).toEqual('Bad credentials');
    })
    test('should verify if CreateToken API returns error response on missing password param in request body', async({request})=>{
        const createTokenRequestPaylod = {
            "username" : username
        };
        const createTokenAPI = new CreateTokenAPI(request);
        const createTokenResponse = await createTokenAPI.createTokenAPI(createTokenRequestPaylod);
        expect(createTokenResponse.status()).toBe(200);
        const createTokenResponseJson = await createTokenResponse.json();
        expect(createTokenResponseJson).not.toBeNull();
        expect(createTokenResponseJson.reason).toEqual('Bad credentials');
    })
    test('should verify if CreateToken API returns error response on invalid username value in request body', async({request})=>{
        const createTokenRequestPaylod = {
            "username" : invalidUsername,
            "password" : password
        };
        const createTokenAPI = new CreateTokenAPI(request);
        const createTokenResponse = await createTokenAPI.createTokenAPI(createTokenRequestPaylod);
        expect(createTokenResponse.status()).toBe(200);
        const createTokenResponseJson = await createTokenResponse.json();
        expect(createTokenResponseJson).not.toBeNull();
        expect(createTokenResponseJson.reason).toEqual('Bad credentials');
    })
    test('should verify if CreateToken API returns error response on invalid password value in request body', async({request})=>{
        const createTokenRequestPaylod = {
            "username" : username,
            "password" : invalidPassword
        };
        const createTokenAPI = new CreateTokenAPI(request);
        const createTokenResponse = await createTokenAPI.createTokenAPI(createTokenRequestPaylod);
        expect(createTokenResponse.status()).toBe(200);
        const createTokenResponseJson = await createTokenResponse.json();
        expect(createTokenResponseJson).not.toBeNull();
        expect(createTokenResponseJson.reason).toEqual('Bad credentials');
    })
    test('should verify if CreateToken API ignores all extra parameters in request body',async({request})=>{
        const createTokenRequestPaylod = {
            "username" : username,
            "password" : password,
            "userID" : 120,
            "createToken" : false
        };
        const createTokenAPI = new CreateTokenAPI(request);
        const createTokenResponse = await createTokenAPI.createTokenAPI(createTokenRequestPaylod);
        const createTokenResponseJson = await createTokenResponse.json();
        expect(createTokenResponse.status()).toBe(200);
        expect(Object.keys(createTokenResponseJson)).toHaveLength(1);
        expect(createTokenResponseJson).toHaveProperty('token');
        expect(createTokenResponseJson.token).toBeTruthy();
        expect(createTokenResponseJson.token.trim().length).toBeGreaterThan(0);

    })
    test('shoudl verify if CreateToken API returns error when conten-type is missing in Request headers',async({request})=>{
        const createTokenRequestPayload = {
            "username" : username,
            "password" : password
        };
        const headers = { "Content-Type": "text/plain" };
        const createTokenAPI = new CreateTokenAPI(request);
        const createTokenResponse = await createTokenAPI.createTokenAPI(createTokenRequestPayload, headers);
        expect(createTokenResponse.status()).toBe(200);
        const createTokenResponseJson = await createTokenResponse.json();
        expect(createTokenResponseJson).not.toBeNull();
        expect(createTokenResponseJson.reason).toEqual('Bad credentials');
    })
    test('shoudl verify if CreateToken API ignored invalid HTTP methods',async({request})=>{
        const createTokenRequestPayload = {
            "username" : username,
            "password" : password
        };
        const invalidCreateTokenURI = '/auths';
        const headers = {"Content-Type" : 'application/json' };
        const createTokenAPI = new CreateTokenAPI(request);
        const createTokenResponse = await createTokenAPI.createTokenAPI(createTokenRequestPayload, headers, invalidCreateTokenURI);
        expect(createTokenResponse.status()).toBe(404);
        const createTokenResponseText =  await createTokenResponse.text();
        expect(createTokenResponseText).toContain('Not Found');
    })



})