import { Card } from '@mantine/core';
import SignUpComponent from '@/components/auth/signup';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign Up',
};

export default function SignUpPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignUpComponent />
    </div>
  );
}
