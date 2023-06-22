'use client';
import { Avatar, Input, ActionIcon, Text, Divider, Indicator } from '@mantine/core';
import { GoSearch } from 'react-icons/go';
import { FiMoreVertical } from 'react-icons/fi';

export default function NavabarHeader() {
  return (
    <>
      <div className="flex justify-between mb-1">
        <div className="flex justify-center">
        <Indicator inline size={12} offset={11} position="bottom-end" color="red" withBorder>
          <Avatar color="cyan" radius="xl" className='mr-1'>
          MK
          </Avatar>
          </Indicator>
          <div>
            <Text>Bob Handsome</Text>
            <Text size="xs" color="dimmed">
              @night_cat
            </Text>
          </div>
        </div>
        <ActionIcon size="xl">
          <FiMoreVertical size={20} />
        </ActionIcon>
      </div>
      <Input placeholder="Search" rightSection={<GoSearch />} className='mb-1'/>
      <Divider my="sm" />
    </>
  );
}
