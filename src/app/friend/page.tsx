import ChatMessagesComponents from '@/components/chat/Message';
import Friend from '@/components/friend/friend';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Friend List',
};

export default function FriendPage() {
  return (
    <>
      <Friend />
    </>
  );
}
