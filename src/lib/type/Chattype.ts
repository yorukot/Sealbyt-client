export type SendMessageDto =  {
    sender_room: string;
    content: string;
    file: Array<any>;
    reply: string | null;
}