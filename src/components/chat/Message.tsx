'use client';
import {
  Card,
  Avatar,
  ScrollArea,
  Stack,
  Divider,
  Center,
  Text,
  Alert,
} from '@mantine/core';
import { Metadata } from 'next';
import { useEffect, useRef, useState } from 'react';
import { TiWarningOutline } from 'react-icons/ti';
import ChatBoxComponents from './Box';
import GetMessage from '@/function/Get/GetMessage';
import moment from 'moment';
import generateTimeString from '@/function/moment/getTimeString';
export default function ChatMessagesComponents({ id }: { id: string }) {
  const [messages, setMessages] = useState<any[]>([]);
  useEffect(() => {
    async function getMessages() {
      const rooms_data = await GetMessage(id, 50);
      console.log(rooms_data)
      setMessages(rooms_data.data.reverse());
    }
    getMessages();
  }, [id]);
  return (
    <ChatBoxComponents>
      <Divider
        my="sx"
        label="2023年12月31日"
        labelPosition="center"
        size="sm"
        id={id}
      />
      {messages.length === 0 ? (
        <></>
      ) : (
        messages.map((message_data) => (
          <>
            {true ? (
              <div className="flex w-full hover:bg-[#141518] px-2 pt-1 rounded-lg" id={message_data.message_id}>
                <Avatar color="cyan" radius="xl" size="md">
                  {message_data.user.user_display_name ||
                    `Delete User ${message_data.user}`}
                </Avatar>
                <div>
                  <div className="flex content-end  ml-1 -mt-1.5">
                    <Text size="md" className="mr-1 self-end" color="gray.1">
                      {message_data.user.user_display_name ||
                        `Delete User ${message_data.user}`}
                    </Text>
                    <Text size="xs" color="gray.7" className="mr-1 self-end">
                      {generateTimeString(
                        message_data.create_at,
                        'asia/taipei'
                      )}
                    </Text>
                  </div>
                  <Text size="sm" color="gray.3" className="ml-1">
                    {message_data.content}
                  </Text>
                </div>
              </div>
            ) : (
              <>
                <div className="flex w-full hover:bg-[#141518] px-2 rounded-lg">
                  <Text size="sm" color="gray.3" className="ml-[42px]">
                    {message_data.content}
                  </Text>
                </div>
              </>
            )}
          </>
        ))
      )}
    </ChatBoxComponents>
  );
}
