import { API_URL } from "@/lib/data/data";
import { AuthSignUpdto } from "@/lib/type/Authtype";
import axios from 'axios';

export default async function PostSignUp(SignUpDto: AuthSignUpdto){
    try {
        const ReturnSignUpData = await axios.post(API_URL + '/auth/signup', SignUpDto,  {withCredentials: true,})
        return ReturnSignUpData
    } catch (error : any) {
        return error.response.data;
    }
}