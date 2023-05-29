/* eslint-disable react/no-unescaped-entities */
import LogInFormComponent from '@/components/auth/login';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Log In',
};

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
        <LogInFormComponent/>
    </div>
  );
}
