'use client';
import {
  ActionIcon,
  Avatar,
  Burger,
  Group,
  Header,
  Indicator,
  MediaQuery,
  Text,
} from '@mantine/core';
import { BiArrowBack } from 'react-icons/bi';
import {
  AiOutlineSetting,
  AiOutlineUser,
  AiOutlinePushpin,
  AiOutlineArrowLeft,
} from 'react-icons/ai';
export default function HeaderCompoment({
  opened,
  setOpened,
}: {
  opened: boolean;
  setOpened: (value: boolean) => void;
}) {
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

            <Avatar color="red" radius="xl" className="mr-1 -translate-y-1.5">
              Hey
            </Avatar>
            <div>
              <Text className="-translate-y-1.5">Bob Handsome</Text>
              <Text size="xs" color="dimmed" className="-translate-y-1.5">
                @night_cat
              </Text>
            </div>
          </div>
          <div>
            {/*<MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <ActionIcon className="mr-2" variant="default" size="lg">
                <AiOutlinePushpin onClick={() => setOpened(true)} />
              </ActionIcon>
            </MediaQuery>
            <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
              <Group spacing={1}>
                <ActionIcon className="mr-2" variant="default" size="lg">
                  <AiOutlinePushpin onClick={() => setOpened(true)} />
                </ActionIcon>
                <ActionIcon className="mr-2" variant="default" size="lg">
                  <AiOutlineSetting onClick={() => setOpened(true)} />
                </ActionIcon>
                <ActionIcon className="mr-2" variant="default" size="lg">
                  <AiOutlineUser onClick={() => setOpened(true)} />
                </ActionIcon>
              </Group>
            </MediaQuery>*/}
          </div>
        </div>
      </div>
    </Header>
  );
}
