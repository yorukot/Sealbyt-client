import ChatMessagesComponents from '@/components/chat/Message';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chat',
};

export default function SignUpPage() {

  return (
    <ChatMessagesComponents/>
  );
}
