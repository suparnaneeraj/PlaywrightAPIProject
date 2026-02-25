import { APIRequest, APIRequestContext } from "@playwright/test";

type AuthPayload = {
  username?: string;
  password?: string;
  [key: string]: any;
};

export class CreateTokenAPI{
    
    private readonly request : APIRequestContext;

    constructor(request : APIRequestContext){
        this.request = request;
    }

    async createTokenAPI(payload?: AuthPayload, headers? : Record<string,string>){

        const createTokenURI = '/auth';
        const defaultHeader = {
            "Content-Type" : 'application/json'
        };
        const createTokenResponse = await this.request.post(createTokenURI,{
            data : JSON.stringify(payload?? {}),
            headers: headers ?? defaultHeader

        });

        return createTokenResponse;
       
    }
}