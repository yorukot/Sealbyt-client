import { API_URL } from "@/lib/data/data";
import { AuthLogIndto } from "@/lib/type/Authtype";
import axios from 'axios';
import type { NextRequest } from 'next/server';

export default async function RejectFriendRequest(id: string){
    try {
        const RelationshipList = await axios.delete(API_URL + `/relationship/rejectfriend/${id}`, {withCredentials: true,})
        return RelationshipList
    } catch (error : any) {
        return error
    }
}

