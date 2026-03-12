import { APIRequestContext } from "@playwright/test";

type BookingParams={
    firstname? : string,
    lastname? : string,
    checkin? : Date,
    checkout? : Date,
    [key : string] : any

}
export class GetBookingId{

    private request : APIRequestContext;
    constructor(request : APIRequestContext){
        this.request = request;
    }

    async getBookingIds(requestParams?: BookingParams){
        const endpoint = '/booking';
        const getBookingIdsResponse = await this.request.get(endpoint,{
            params : requestParams ?? {},
        
        });
        return getBookingIdsResponse;
    }
    
}