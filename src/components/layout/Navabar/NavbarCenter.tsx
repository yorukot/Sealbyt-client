'use client';
import { Avatar, Indicator, ScrollArea, Stack, Text } from '@mantine/core';
import { GoSearch } from 'react-icons/go';
import { BiMessageAdd } from 'react-icons/bi';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MdNightsStay } from 'react-icons/md';
import GetRooms from '@/function/Get/GetRooms';

export default function NavabarCenter({
  opened,
  setOpened,
}: {
  opened: boolean;
  setOpened: (value: boolean) => void;
}) {
  const [pageHeight, setPageHeight] = useState(0);
  const [Room_data, setRoom_data] = useState<any[]>([]);
  useEffect(() => {
    const updatePageHeight = () => {
      setPageHeight(window.innerHeight);
    };
    window.addEventListener('resize', updatePageHeight);
    updatePageHeight();
    async function getRoomData() {
      const rooms_data = await GetRooms();
      setRoom_data(rooms_data.data);
    }
    getRoomData();
    return () => {
      window.removeEventListener('resize', updatePageHeight);
    };
  }, []);
  return (
    <>
      <ScrollArea h={pageHeight - 210}>
        <Stack spacing="xs" className="mr-3">
          {Room_data.length !== 0 ? (
            Room_data.map((data) => (
              <Link href={`/me/${data.id}`} key={data.id}>
                <div className="flex hover:bg-[#28292e] pl-1 py-2 rounded-lg">
                  <Indicator
                    inline
                    size={12}
                    offset={11}
                    position="bottom-end"
                    color="gray"
                    withBorder
                  >
                    <Avatar color="red" radius="xl" className="mr-1">
                      {data.name}
                    </Avatar>
                  </Indicator>
                  <div>
                    <Text>{data.name}</Text>
                    <Text size="xs" color="dimmed">
                      7 days ago
                    </Text>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <></>
          )}
        </Stack>
      </ScrollArea>
    </>
  );
}
