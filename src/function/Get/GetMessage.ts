import { API_URL } from "@/lib/data/data";
import { AuthLogIndto } from "@/lib/type/Authtype";
import axios from 'axios';
import type { NextRequest } from 'next/server';

export default async function GetMessage(roomId: string, limit: number){
    try {
        const Messages = await axios.get(API_URL + `/chat/message/${roomId}?limit=${limit}`, {withCredentials: true,})
        return Messages
    } catch (error : any) {
        return error
    }
}

