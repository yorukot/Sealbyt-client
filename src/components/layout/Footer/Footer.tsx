'use client';

import {
  ActionIcon,
  Button,
  FileButton,
  Footer,
  Input,
  Textarea,
  Menu,
  Loader,
} from '@mantine/core';
import { useState } from 'react';
import { CgAddR } from 'react-icons/cg';
import { HiOutlineEmojiHappy } from 'react-icons/hi';
import { AiOutlineSend } from 'react-icons/ai';
import EmojiPicker, { Theme, EmojiStyle } from 'emoji-picker-react';
import { useDebouncedState, useHotkeys } from '@mantine/hooks';

export default function FooterCompoment() {
  const [file, setFile] = useState<File | null>(null);
  const [value, setValue] = useState('');
  const [SendingMessage, setSendingMessage] = useState(false);
  function sendMessage() {
    setSendingMessage(true)
    setValue('');
    setSendingMessage(true);
  }
  const keydown = (key: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (key.key === 'Enter' && !key.shiftKey) {
      if(!SendingMessage) key.preventDefault();
      sendMessage()
    }
  };
  return (
    <Footer height="auto" p="md" withBorder={false}>
      <div>
        <Textarea
          onKeyDown={keydown}
          value={value}
          onChange={(vaule) => setValue(vaule.currentTarget.value)}
          className="mb-2"
          styles={{ icon: { pointerEvents: 'all' } }}
          icon={
            <FileButton onChange={setFile}>
              {(props) => (
                <ActionIcon {...props}>
                  <CgAddR />
                </ActionIcon>
              )}
            </FileButton>
          }
          rightSection={
            <div className="flex">
              <Menu>
                <Menu.Target>
                  <ActionIcon size="lg" className="mr-1">
                    <HiOutlineEmojiHappy size={20} />
                  </ActionIcon>
                </Menu.Target>

                <Menu.Dropdown>
                  <EmojiPicker
                    theme={Theme.DARK}
                    emojiStyle={EmojiStyle.TWITTER}
                  />
                </Menu.Dropdown>
              </Menu>
              <ActionIcon
                size="lg"
                className="mr-2"
                disabled={value.length === 0 ? true : false}
                variant="default"
                onClick={sendMessage}
              >
                {SendingMessage ? <Loader size='sm'/> : <AiOutlineSend size={20} />}
              </ActionIcon>
            </div>
          }
          rightSectionWidth="auto"
          placeholder="Send Some Message"
          autosize
          minRows={1}
          maxRows={20}
        />
      </div>
    </Footer>
  );
}
