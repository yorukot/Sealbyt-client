'use client';
import GetRelationshipList from '@/function/Get/GetRelationshipList';
import {
  Stack,
  TextInput,
  ScrollArea,
  Indicator,
  Avatar,
  Text,
  Divider,
  Skeleton,
  ActionIcon,
} from '@mantine/core';
import { MdOutlineMoreVert } from 'react-icons/md';
import { SetStateAction, use, useEffect, useState } from 'react';
import { RxCross2, RxCheck } from 'react-icons/rx';
import RejectFriendRequest from '@/function/Delete/RejectFriendRequest';
import AccpetFriendRequest from '@/function/Put/AccpetFriendRequest';
export default function FriendList() {
  const [FriendList, setFriendList] = useState<any[]>([]);
  const [FriendRequest, setFriendRequest] = useState<any[]>([]);
  const [FriendRequestFromMe, setFriendRequestFromMe] = useState<any[]>([]);
  useEffect(() => {
    async function fetchdata() {
      const relationshiplist = await GetRelationshipList();
      const friendlist: any[] = [];
      const friendrequest: any[] = [];
      const friendrequestfromme: any[] = [];
      relationshiplist.data.forEach((data: any) => {
        if (data.status === 0) {
          friendlist.push(data);
        } else if (data.status === 3) {
          friendrequest.push(data);
        } else if (data.status === 2) {
          friendrequestfromme.push(data);
        }
      });
      setFriendList(friendlist);
      setFriendRequest(friendrequest);
      setFriendRequestFromMe(friendrequestfromme);
    }
    fetchdata();
  }, []);
  return (
    <>
      {FriendRequest.length > 0 || FriendRequestFromMe.length > 0 ? (
        <Text fw={700} fz="sm" className="mb-2">
          好友請求:{FriendRequest.length + FriendRequestFromMe.length}
        </Text>
      ) : (
        <></>
      )}
      {FriendRequest.length > 0 ? (
        FriendRequest.map((friendData) => (
          <div
            className="border-t border-[#2c2e33] hover:border-t-[0px]"
            key={friendData.receive_id}
          >
            <div className="flex justify-between hover:bg-[#28292e] pl-1 py-2 rounded-lg">
              <div className="flex">
                <Indicator
                  inline
                  size={12}
                  offset={11}
                  position="bottom-end"
                  color="red"
                  withBorder
                >
                  <Avatar
                    color="cyan"
                    radius="xl"
                    className="mr-1"
                    src={friendData.user.avatar}
                  >
                    {friendData.user.display_name}
                  </Avatar>
                </Indicator>
                <div>
                  <Text> {friendData.user.display_name}</Text>
                  <Text size="xs" color="dimmed">
                    @{friendData.user.name}
                  </Text>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <ActionIcon
                  onClick={() => AccpetFriendRequest(friendData.receive_id)}
                  size="lg"
                  radius="lg"
                  color="green"
                  variant="light"
                  className="mr-2"
                >
                  <RxCheck />
                </ActionIcon>
                <ActionIcon
                  onClick={() => RejectFriendRequest(friendData.receive_id)}
                  size="lg"
                  radius="lg"
                  color="red"
                  variant="light"
                  className="mr-2"
                >
                  <RxCross2 color="red" />
                </ActionIcon>
              </div>
            </div>
          </div>
        ))
      ) : (
        <></>
      )}
      {FriendRequestFromMe.length > 0 ? (
        FriendRequestFromMe.map((friendData) => (
          <div
            className="border-t border-[#2c2e33] hover:border-t-[0px]"
            key={friendData.receive_id}
          >
            <div className="flex justify-between hover:bg-[#28292e] pl-1 py-2 rounded-lg">
              <div className="flex">
                <Indicator
                  inline
                  size={12}
                  offset={11}
                  position="bottom-end"
                  color="red"
                  withBorder
                >
                  <Avatar
                    color="cyan"
                    radius="xl"
                    className="mr-1"
                    src={friendData.user.avatar}
                  >
                    {friendData.user.display_name}
                  </Avatar>
                </Indicator>
                <div>
                  <Text> {friendData.user.display_name}</Text>
                  <Text size="xs" color="dimmed">
                    @{friendData.user.name}
                  </Text>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <ActionIcon
                  onClick={() => RejectFriendRequest(friendData.receive_id)}
                  size="lg"
                  radius="lg"
                  color="red"
                  variant="light"
                  className="mr-2"
                >
                  <RxCross2 color="red" />
                </ActionIcon>
              </div>
            </div>
          </div>
        ))
      ) : (
        <></>
      )}
      <Text fw={700} fz="sm" className="mb-2">
        好友:{FriendList.length}
      </Text>
      {FriendList.length > 0 ? (
        FriendList.map((friendData) => (
          <div
            className="border-t border-[#2c2e33] hover:border-t-[0px]"
            key={friendData.receive_id}
          >
            <div className="flex justify-between hover:bg-[#28292e] pl-1 py-2 rounded-lg">
              <div className="flex">
                <Indicator
                  inline
                  size={12}
                  offset={11}
                  position="bottom-end"
                  color="red"
                  withBorder
                >
                  <Avatar
                    color="cyan"
                    radius="xl"
                    className="mr-1"
                    src={friendData.user.avatar}
                  >
                    {friendData.user.display_name}
                  </Avatar>
                </Indicator>
                <div>
                  <Text> {friendData.user.display_name}</Text>
                  <Text size="xs" color="dimmed">
                    @{friendData.user.name}
                  </Text>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <ActionIcon
                  size="lg"
                  radius="lg"
                  variant="filled"
                  className="mr-2"
                >
                  <MdOutlineMoreVert />
                </ActionIcon>
              </div>
            </div>
          </div>
        ))
      ) : (
        <></>
      )}
    </>
  );
}
