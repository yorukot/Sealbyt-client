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
