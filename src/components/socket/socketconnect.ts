import { API_URL } from "@/lib/data/data";
import { io } from "socket.io-client";

export const newsocket = (accessToken: string) => io(`${API_URL}/usergeteway`, {
    extraHeaders: {
      "Authorization": accessToken
    }
});