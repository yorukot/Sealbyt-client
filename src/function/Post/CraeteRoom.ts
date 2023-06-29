import { API_URL } from "@/lib/data/data";
import axios from 'axios';

export default async function CreateRoom(user: Array<any>, roomName: string, roomType: number){
    try {
        const CreateRoomData = await axios.post(API_URL + '/chat/createchatroom', {user: user, room_name: roomName, room_type: roomType}, {withCredentials: true,})
        return CreateRoomData
    } catch (error : any) {
        return error.response.data
    }
}
