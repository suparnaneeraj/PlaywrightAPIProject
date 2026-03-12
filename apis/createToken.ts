import { APIRequestContext } from "@playwright/test";

type AuthPayload = {
  username?: string;
  password?: string;
  [key: string]: any;
};

export class CreateToken{
    
    private readonly request : APIRequestContext;

    constructor(request : APIRequestContext){
        this.request = request;
    }

    async createTokenAPI(payload?: AuthPayload, headers? : Record<string,string>, endpoint?: string){

        const createTokenURI = endpoint ?? '/auth';
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