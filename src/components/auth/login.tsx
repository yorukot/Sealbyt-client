/* eslint-disable react/no-unescaped-entities */
'use client';
import { useState, ChangeEvent, FormEvent } from 'react';
import {
  TextInput,
  Button,
  Text,
  Anchor,
  LoadingOverlay,
  Divider,
  Card,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { AuthLogIndto } from '@/lib/type/Authtype';
import PostLogIn from '@/function/Post/Login';
import { WEBSITE_URL } from '@/lib/data/data';
import { prngkey } from '@/function/crypt/prngkey';
import { MdOutlineEmail, MdOutlineLock } from 'react-icons/md';

export default function LogInFormComponent() {
  const form: any = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  const [loadding, setloadding] = useState(false);

  const handleSubmit = async () => {
    setloadding(true);
    const PostData: AuthLogIndto = {
      email: form.values.email,
      password: prngkey(form.values.password),
    };
    const SignUpData = await PostLogIn(PostData);
    if (SignUpData.message === 'User or password does not exist') {
      form.setErrors({
        email: `User or password does not exist`,
        password: 'User or password does not exist',
      });
    }
    if (SignUpData?.data === 'SuccessFul Sign Up') {
    }
    setloadding(false);
  };

  return (
    <Card shadow="sm" padding="lg" className="w-96 mx-5">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <div className="flex justify-center">
          <Text fw={500} size={30} className="mb-4">
            Welcome Back
          </Text>
        </div>
        <div className="mb-4">
          <TextInput
            id="email"
            withAsterisk
            label="Email:"
            type="email"
            rightSection={<MdOutlineEmail />}
            {...form.getInputProps('email')}
          />
        </div>
        <div className="mb-6">
          <TextInput
            id="password"
            withAsterisk
            label="Password:"
            type="password"
            rightSection={<MdOutlineLock />}
            {...form.getInputProps('password')}
          />
        </div>
        <div>
          <Button type="submit" variant="outline" fullWidth disabled={loadding}>
            {loadding ? (
              <LoadingOverlay
                visible={loadding}
                loaderProps={{ size: 'sm', variant: 'dots' }}
              />
            ) : (
              'Log In'
            )}
          </Button>
        </div>
        <Divider my="sm" className="mb-4" />
        <div className="flex justify-center">
          <Text fw={350} size={14} className="">
            Don't have an account?{' '}
            <Anchor href={`${WEBSITE_URL}/signup`}>Sign Up.</Anchor>
          </Text>
        </div>
      </form>
    </Card>
  );
}
