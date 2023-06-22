import { API_URL } from "@/lib/data/data";
import axios from 'axios';

export default async function FriendRequest(user_name: string){
    try {
        const ReturnSignUpData = await axios.post(API_URL + '/relationship/addfriend', {user_name: user_name}, {withCredentials: true,})
        return ReturnSignUpData
    } catch (error : any) {
        return error.response.data
    }
}
