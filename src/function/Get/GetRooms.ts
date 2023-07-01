import { API_URL } from "@/lib/data/data";
import { AuthLogIndto } from "@/lib/type/Authtype";
import axios from 'axios';
import type { NextRequest } from 'next/server';

export default async function GetRooms(){
    try {
        const GetRooms_data = await axios.get(API_URL + '/chat/room', {withCredentials: true,})
        return GetRooms_data
    } catch (error : any) {
        return error
    }
}

