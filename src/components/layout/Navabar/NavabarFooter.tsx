'use client';
import {
  Avatar,
  Input,
  ActionIcon,
  Text,
  Divider,
  Indicator,
} from '@mantine/core';
import { GoSearch } from 'react-icons/go';
import { BiMessageAdd } from 'react-icons/bi';
import { BsPeople } from 'react-icons/bs';
import Link from 'next/link';

export default function NavabarFooter() {
  return (
    <>
      <Divider my="sm" />
      <div className="flex justify-between mb-1">
        <div className="flex justify-center items-center flex-grow">
          <ActionIcon size="xl" className="w-full">
            <BiMessageAdd size={20} />
          </ActionIcon>
        </div>
        <div className="flex justify-center items-center flex-grow">
          <Link href={`/friend`}>
            <ActionIcon size="xl" className="w-full">
              <Indicator
                inline
                size={12}
                position="top-end"
                color="red"
                withBorder
              >
                <BsPeople size={20} />
              </Indicator>
            </ActionIcon>
          </Link>
        </div>
      </div>
    </>
  );
}
