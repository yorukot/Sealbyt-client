import { API_URL } from "@/lib/data/data";
import { AuthLogIndto } from "@/lib/type/Authtype";
import axios from 'axios';
import type { NextRequest } from 'next/server';

export default async function CheckHasPermisson(){
    try {
        const getRefreshToken = await axios.get(API_URL + '/auth/permission', {withCredentials: true,})
        return getRefreshToken
    } catch (error : any) {
        return error.response
    }
}

