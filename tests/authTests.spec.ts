import {test, expect} from './fixtures';
import createTokenPayload from '../payloads/createTokenPayload.json'

const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const invalidUsername = process.env.USERNAME + "1";
const invalidPassword = process.env.PASSOWRD + "1";
const userId = 'user100';

test.describe('Create Token Tests', async()=>{

    //Positive tests

    test('should verify if CreateToken API returns success response on passing valid credentials in the request body', async({createToken})=>{
        const createTokenRequestPayload = JSON.parse(JSON.stringify(createTokenPayload));
        createTokenRequestPayload.username = username;
        createTokenRequestPayload.password = password;
        const createTokenResponse = await createToken.createTokenAPI(createTokenRequestPayload);
        const createTokenResponseJson = await createTokenResponse.json();
        expect(createTokenResponse.status()).toBe(200);
        expect(createTokenResponseJson).toHaveProperty('token');
        expect(Object.keys(createTokenResponseJson)).toHaveLength(1);
        expect(createTokenResponseJson.token).toBeTruthy();
        expect(createTokenResponseJson.token.trim().length).toBeGreaterThan(0);
    })

    //Negative tests

    test('should verify if CreateToken API returns error response on empty request body', async({createToken})=>{
        const createTokenRequestPayload =JSON.parse(JSON.stringify(createTokenPayload));
        delete createTokenRequestPayload.username;
        delete createTokenRequestPayload.password;
        const createTokenResponse = await createToken.createTokenAPI(createTokenRequestPayload);
        expect(createTokenResponse.status()).toBe(200);
        const createTokenResponseJson = await createTokenResponse.json();
        expect(createTokenResponseJson).not.toBeNull();
        expect(createTokenResponseJson.reason).toEqual('Bad credentials');
    })
    test('should verify if CreateToken API returns error response on missing username param in request body', async({createToken})=>{
        const createTokenRequestPayload =JSON.parse(JSON.stringify(createTokenPayload));
        delete createTokenRequestPayload.username;
        createTokenRequestPayload.password = password;
        const createTokenResponse = await createToken.createTokenAPI(createTokenRequestPayload);
        expect(createTokenResponse.status()).toBe(200);
        const createTokenResponseJson = await createTokenResponse.json();
        expect(createTokenResponseJson).not.toBeNull();
        expect(createTokenResponseJson.reason).toEqual('Bad credentials');
    })
    test('should verify if CreateToken API returns error response on missing password param in request body', async({createToken})=>{
        const createTokenRequestPayload =JSON.parse(JSON.stringify(createTokenPayload));
        createTokenRequestPayload.username = username;
        delete createTokenRequestPayload.password;
        const createTokenResponse = await createToken.createTokenAPI(createTokenRequestPayload);
        expect(createTokenResponse.status()).toBe(200);
        const createTokenResponseJson = await createTokenResponse.json();
        expect(createTokenResponseJson).not.toBeNull();
        expect(createTokenResponseJson.reason).toEqual('Bad credentials');
    })
    test('should verify if CreateToken API returns error response on invalid username value in request body', async({createToken})=>{
        const createTokenRequestPayload =JSON.parse(JSON.stringify(createTokenPayload));
        createTokenRequestPayload.username = invalidUsername;
        createTokenRequestPayload.password = password
        const createTokenResponse = await createToken.createTokenAPI(createTokenRequestPayload);
        expect(createTokenResponse.status()).toBe(200);
        const createTokenResponseJson = await createTokenResponse.json();
        expect(createTokenResponseJson).not.toBeNull();
        expect(createTokenResponseJson.reason).toEqual('Bad credentials');
    })
    test('should verify if CreateToken API returns error response on invalid password value in request body', async({createToken})=>{
        const createTokenRequestPayload =JSON.parse(JSON.stringify(createTokenPayload));
        createTokenRequestPayload.username = username;
        createTokenRequestPayload.password = invalidPassword;
        const createTokenResponse = await createToken.createTokenAPI(createTokenRequestPayload);
        expect(createTokenResponse.status()).toBe(200);
        const createTokenResponseJson = await createTokenResponse.json();
        expect(createTokenResponseJson).not.toBeNull();
        expect(createTokenResponseJson.reason).toEqual('Bad credentials');
    })
    test('should verify if CreateToken API ignores all extra parameters in request body',async({createToken})=>{
        const createTokenRequestPayload = JSON.parse(JSON.stringify(createTokenPayload));
        createTokenRequestPayload.username = username;
        createTokenRequestPayload.password = password;
        createTokenRequestPayload.userId = userId;
        const createTokenResponse = await createToken.createTokenAPI(createTokenRequestPayload);
        const createTokenResponseJson = await createTokenResponse.json();
        expect(createTokenResponse.status()).toBe(200);
        expect(Object.keys(createTokenResponseJson)).toHaveLength(1);
        expect(createTokenResponseJson).toHaveProperty('token');
        expect(createTokenResponseJson.token).toBeTruthy();
        expect(createTokenResponseJson.token.trim().length).toBeGreaterThan(0);

    })
    test('should verify if CreateToken API returns error when conten-type is missing in Request headers',async({createToken})=>{
        const createTokenRequestPayload = JSON.parse(JSON.stringify(createTokenPayload));
        createTokenRequestPayload.username = username;
        createTokenRequestPayload.password = password;
        const headers = { "Content-Type": "text/plain" };
        const createTokenResponse = await createToken.createTokenAPI(createTokenRequestPayload, headers);
        expect(createTokenResponse.status()).toBe(200);
        const createTokenResponseJson = await createTokenResponse.json();
        expect(createTokenResponseJson).not.toBeNull();
        expect(createTokenResponseJson.reason).toEqual('Bad credentials');
    })
    test('shoudl verify if CreateToken API ignored invalid HTTP methods',async({createToken})=>{
        const createTokenRequestPayload = JSON.parse(JSON.stringify(createTokenPayload));
        createTokenRequestPayload.username = username;
        createTokenRequestPayload.password = password;
        const invalidCreateTokenURI = '/auths';
        const headers = {"Content-Type" : 'application/json' };
        const createTokenResponse = await createToken.createTokenAPI(createTokenRequestPayload, headers, invalidCreateTokenURI);
        expect(createTokenResponse.status()).toBe(404);
        const createTokenResponseText =  await createTokenResponse.text();
        expect(createTokenResponseText).toContain('Not Found');
    })



})