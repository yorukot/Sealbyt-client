import { API_URL } from "@/lib/data/data";
import { AuthLogIndto } from "@/lib/type/Authtype";
import axios from 'axios';
import type { NextRequest } from 'next/server';

export default async function RefreshToken(){
    try {
        const refreshToken = await axios.get(API_URL + '/auth/refreshtoken', {withCredentials: true,})
        return refreshToken
    } catch (error : any) {
        return error.response
    }
}

