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
export const metadata: Metadata = {
  title: 'Me',
};

export default function ChatBoxComponents({
    children,
  }: {
    children: React.ReactNode;
  }) {
  const [scrollAreaHeight, setScrollAreaHeight] = useState(
    window.innerHeight - 175
  );

  const viewport = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const windowHeight = window.innerHeight;
      const newHeight = windowHeight - 175;
      setScrollAreaHeight(newHeight);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    viewport.current?.scrollTo({
      top: viewport.current?.scrollHeight,
      behavior: 'auto',
    });
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <ScrollArea
        h={scrollAreaHeight}
        type="auto"
        viewportRef={viewport}
        offsetScrollbars
      >
        <Stack spacing="xs" className="bottom-0 w-full">
          <Center mx="auto">
            <Stack spacing="xs">
              <Center mx="auto">
                <Avatar color="cyan" radius="xl" size="lg">
                  MK
                </Avatar>
              </Center>
              <Center mx="auto">
                <Text size="xl" fw={700}>
                  Large text
                </Text>
              </Center>
              <Center mx="auto">
                <Text size="lg" fw={550}>
                  This is the beginning of your conversation with xxx
                </Text>
              </Center>
              <Center mx="auto">
                <Alert
                  icon={<TiWarningOutline size="1rem" />}
                  title="security issues!"
                  color="yellow"
                >
                  Your current security is the lowest level, it is recommended
                  to set up the security first (click me to set up)
                </Alert>
              </Center>
            </Stack>
          </Center>
         {children}
        </Stack>
      </ScrollArea>
    </>
  );
}
