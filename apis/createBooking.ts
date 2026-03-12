import { APIRequest, APIRequestContext } from "@playwright/test";

type CreateBookingPayload = {
   firstname? : string ;
    lastname? : string ;
    totalprice? : number ;
    depositpaid? : boolean; 
    bookingdates? : {
        checkin? : string;
        checkout? : string;
    };
    additionalneeds? : string;
}
export class CreateBooking{

    private readonly request: APIRequestContext;
    constructor(request: APIRequestContext){
        this.request = request;
    }

    async createBookingAPI(createBookingpayload? : CreateBookingPayload, endpoint? :string){
        const endpointURI = endpoint ?? '/booking';
        const createBookingResponse = await this.request.post(endpointURI,{
            data : createBookingpayload ?? {},
        });
        return createBookingResponse;
    }

}