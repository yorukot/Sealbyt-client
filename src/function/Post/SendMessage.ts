import { API_URL } from "@/lib/data/data";
import { AuthLogIndto } from "@/lib/type/Authtype";
import { SendMessageDto } from "@/lib/type/Chattype";
import axios from 'axios';

export default async function SendMessage(SendMessageDto: SendMessageDto){
    try {
        const ReturnSignUpData = await axios.post(API_URL + '/chat/sendmessage', SendMessageDto, {withCredentials: true,})
        return ReturnSignUpData
    } catch (error : any) {
        return error.response.data
    }
}
