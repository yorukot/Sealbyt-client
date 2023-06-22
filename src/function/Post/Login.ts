import { API_URL } from "@/lib/data/data";
import { AuthLogIndto } from "@/lib/type/Authtype";
import axios from 'axios';

export default async function PostLogIn(LogInDto: AuthLogIndto){
    try {
        const ReturnSignUpData = await axios.post(API_URL + '/auth/login', LogInDto, {withCredentials: true,})
        return ReturnSignUpData
    } catch (error : any) {
        return error.response.data
    }
}
