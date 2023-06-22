'use client';

import {
  Stack,
  TextInput,
  ScrollArea,
  Indicator,
  Avatar,
  Text,
  Divider,
  ActionIcon,
} from '@mantine/core';
import { useEffect, useRef, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import FriendList from './friendlist';
import { newsocket } from '../socket/socketconnect';
import { getCookie } from 'cookies-next';
import { Socket } from 'socket.io-client';

export default function Friend() {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [scrollAreaHeight, setScrollAreaHeight] = useState(
    window.innerHeight - 145
  );

  useEffect(() => {
    const handleResize = () => {
      const windowHeight = window.innerHeight;
      const newHeight = windowHeight - 145;
      setScrollAreaHeight(newHeight);
    };
    const newSocket = newsocket(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEzNzU3OTgwNTgyMTAxMDAiLCJuYW1lIjoiTmlnaHRDYXQiLCJwYXNzd29yZCI6InpCdUhpZU1EMnhnaUJhVEVrcGd4NXp4K3RYTFlSRThtZExwY2tBWVNXQXc9IiwiaWF0IjoxNjg2ODQyNjMyLCJleHAiOjE2ODY5MDAyMzJ9.H5_nTrvDSwt1ng5oX_3cCyRqODMrdZG6dRXyOIbEPAM'
    );
    setSocket(newSocket);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <TextInput
        className="mb-4"
        rightSection={<AiOutlineSearch />}
        placeholder="Search your friend"
      ></TextInput>
      <ScrollArea h={scrollAreaHeight} type="auto" offsetScrollbars>
        <Stack spacing={0}>
          <FriendList />
        </Stack>
      </ScrollArea>
    </>
  );
}
