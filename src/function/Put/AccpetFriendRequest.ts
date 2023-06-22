import { API_URL } from "@/lib/data/data";
import axios from 'axios';

export default async function AccpetFriendRequest(id: string){
    try {
        const RelationshipList = await axios.put(API_URL + `/relationship/acceptfriend/${id}`, null, {withCredentials: true,})
        return RelationshipList
    } catch (error : any) {
        return error
    }
}

