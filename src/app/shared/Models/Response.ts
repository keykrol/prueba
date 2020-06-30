import { Message } from "./MessageDTO";

export class ResponseDTO {

    code: string;
    status: string;
    messages?: Array<Message>;
    data: any;

}