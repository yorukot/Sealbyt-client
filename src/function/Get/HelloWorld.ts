import { API_URL } from "@/lib/data/data";
import { AuthLogIndto } from "@/lib/type/Authtype";
import axios from 'axios';
import type { NextRequest } from 'next/server';

export default async function GetVerifyPerssiom(headers: Headers){
    try {
        const HolloWorldPerssiom = await fetch(API_URL  + '/auth/permission', {headers});
        return HolloWorldPerssiom
    } catch (error : any) {
        return error.response
    }
}

