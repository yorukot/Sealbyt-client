'use client';
import FriendRequest from '@/function/Post/FriendRequest';
import {
  ActionIcon,
  Avatar,
  Burger,
  Button,
  Divider,
  Group,
  Header,
  Indicator,
  MediaQuery,
  Text,
  Modal,
  TextInput,
  Alert,
} from '@mantine/core';
import { useState } from 'react';
import {
  AiOutlineArrowLeft,
  AiOutlineUserAdd,
  AiOutlineInfoCircle,
} from 'react-icons/ai';
import { BsPeople, BsPersonAdd } from 'react-icons/bs';
import { FiAtSign } from 'react-icons/fi';
import { BsCheckLg } from 'react-icons/bs';
import { Notification } from '@mantine/core';
import validateUsername from '@/function/verify/UserNameVerify';

export default function FriendHeaderCompoment({
  opened,
  setOpened,
}: {
  opened: boolean;
  setOpened: (value: boolean) => void;
}) {
  const [addFriend, setaddFriend] = useState(false);
  const [FriendName, setFriendName] = useState('');
  const [TextInputError, setTextInputError] = useState('');
  const [SuccessfulSend, setSuccessfulSend] = useState(false);
  async function sendFriendInvite() {
    if (FriendName.length === 0) setTextInputError('You must enter a name');
    if (!validateUsername(FriendName))
      return setTextInputError('The user name format is invalid');
    const friendInvite = await FriendRequest(FriendName);
    if (friendInvite.message === 'The user does not exist')
      return setTextInputError("Can't find this user");
    if (friendInvite.message === 'You cannot invite yourself as a friend')
      return setTextInputError('You cannot invite yourself as a friend');
    if (friendInvite.message === 'You are already friends with this user')
      return setTextInputError('You are already friends with this user');
    if (friendInvite.message === 'You have already invited this user')
      return setTextInputError('You have already invited this user');
    if (friendInvite?.status === 201) {
      setFriendName('');
      setSuccessfulSend(true);
      setTimeout(() => {
        return setSuccessfulSend(false);
      }, 3000);
    }
  }
  const keydown = async (key: React.KeyboardEvent<HTMLInputElement>) => {
    if (key.key === 'Enter') {
      key.preventDefault();
      await sendFriendInvite();
    }
  };
  return (
    <Header height={{ base: 60, sm: 60 }} p="md" hidden={false}>
      <div style={{ alignItems: 'center', height: '100%' }}>
        <div className="flex justify-between content-center">
          <div className="flex justify-center">
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <ActionIcon className="mr-2 content-center" size="sm">
                <AiOutlineArrowLeft onClick={() => setOpened(true)} />
              </ActionIcon>
            </MediaQuery>
            <div className="flex items-center -translate-y-1.5">
              <BsPeople size={25} />
              <Text className="ml-2">Friends</Text>
            </div>
          </div>
          <div>
            <ActionIcon
              color="lime"
              variant="filled -translate-y-1.5"
              onClick={() => setaddFriend(true)}
            >
              <AiOutlineUserAdd size={20} />
            </ActionIcon>
          </div>
        </div>
      </div>
      <Modal
        opened={addFriend}
        onClose={() => setaddFriend(false)}
        title="Add friend"
        centered
      >
        <TextInput
          error={TextInputError.length === 0 ? false : TextInputError}
          value={FriendName}
          placeholder="Type your friend name"
          onKeyDown={keydown}
          icon={<FiAtSign />}
          rightSection={
            <ActionIcon onClick={() => sendFriendInvite()}>
              <BsPersonAdd />
            </ActionIcon>
          }
          onChange={(vaule) => {
            setTextInputError('');
            setFriendName(vaule.currentTarget.value);
          }}
        />
        {SuccessfulSend ? (
          <Notification
            icon={<BsCheckLg />}
            color="teal"
            title="Successful send friend invite"
            className="mt-3"
            withBorder
            withCloseButton={false}
          />
        ) : null}
        <Alert
          icon={<AiOutlineInfoCircle size="1rem" />}
          title="Info!"
          color="cyan"
          className="mt-3"
        >
          For privacy reasons, the searched users will not be displayed, please
          enter the full name directly, we will send the invitation directly!
        </Alert>
      </Modal>
    </Header>
  );
}
