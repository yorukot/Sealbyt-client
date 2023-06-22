import { API_URL } from "@/lib/data/data";
import { AuthLogIndto } from "@/lib/type/Authtype";
import axios from 'axios';
import type { NextRequest } from 'next/server';

export default async function GetRelationshipList(){
    try {
        const RelationshipList = await axios.get(API_URL + '/relationship/', {withCredentials: true,})
        console.log(RelationshipList.data)
        return RelationshipList
    } catch (error : any) {
        return error
    }
}

