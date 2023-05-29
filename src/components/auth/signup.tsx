'use client';
import { useState, ChangeEvent, FormEvent } from 'react';
import {
  Card,
  TextInput,
  Button,
  Text,
  Checkbox,
  Anchor,
  LoadingOverlay,
  Divider,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { zxcvbn, zxcvbnOptions } from '@zxcvbn-ts/core';
import * as zxcvbnCommonPackage from '@zxcvbn-ts/language-common';
import PostSignUp from '@/function/Post/signup';
import { AuthSignUpdto } from '@/lib/type/Authtype';
import { WEBSITE_URL } from '@/lib/data/data';
import { prngkey } from '@/function/crypt/prngkey';

const options = {
  dictionary: {
    ...zxcvbnCommonPackage.dictionary,
  },
  graphs: zxcvbnCommonPackage.adjacencyGraphs,
  minLength: 8,
};
zxcvbnOptions.setOptions(options);

export default function SignUpComponent() {
  const form: any = useForm({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmpassword: '',
      termsofservice: false,
    },

    validate: {
      username: (vaule) =>
        /^[a-zA-Z0-9_]+$/.test(vaule)
          ? null
          : 'Use only letters, numbers, and underscores',
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) =>
        zxcvbn(value).score > 3
          ? null
          : 'This password is too simple or too common',
      confirmpassword: (value) =>
        value === form.values.password ? null : 'Passwords do not match',
      termsofservice: (value) =>
        value ? null : 'You must agree to this option',
    },
  });

  const [loadding, setloadding] = useState(false);

  const handleSubmit = async () => {
    setloadding(true);
    const PostData: AuthSignUpdto = {
      email: form.values.email,
      password: prngkey(form.values.password),
      name: form.values.username,
      twofactor: form.values.twofactor,
    };
    const SignUpData = await PostSignUp(PostData);
    if (SignUpData.message === 'User name has been use') {
      form.setErrors({ username: 'This name has been use' });
    }
    if (SignUpData.message === 'User email has been use') {
      form.setErrors({ email: 'This email has been use' });
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
              Create New Account
            </Text>
          </div>
          <div className="mb-6">
            <TextInput
              id="username"
              withAsterisk
              label="User name:"
              type="text"
              {...form.getInputProps('username')}
            />
          </div>
          <div className="mb-4">
            <TextInput
              id="email"
              withAsterisk
              label="Email:"
              type="email"
              {...form.getInputProps('email')}
            />
          </div>
          <div className="mb-6">
            <TextInput
              id="password"
              withAsterisk
              label="Password:"
              type="password"
              {...form.getInputProps('password')}
            />
          </div>
          <div className="mb-6">
            <TextInput
              id="confirmpassword"
              withAsterisk
              label="Confirm password:"
              type="password"
              {...form.getInputProps('confirmpassword')}
            />
          </div>
          <Text fz="sm" c="yellow" className="mb-6">
            ※ Please ensure that you remember this password because if you
            forget it, we will be unable to assist you in recovering it
          </Text>
          <div className="mb-6">
            <Checkbox
              label={
                <>
                  I accept{' '}
                  <Anchor href="https://mantine.dev" target="_blank">
                    terms{' '}
                  </Anchor>
                  and{' '}
                  <Anchor href="/" target="_blank">
                    conditions
                  </Anchor>
                </>
              }
              {...form.getInputProps('termsofservice', { type: 'checkbox' })}
            />
          </div>
          <div className="mb-6"></div>
          <div>
            <Button type="submit" variant="outline" fullWidth>
              {loadding ? <LoadingOverlay visible={loadding} /> : 'Sign Up'}
            </Button>
          </div>
          <Divider my="sm" className="mb-4" />
          <div className="flex justify-center">
            <Text fw={350} size={14} className="">
              Already a member?{' '}
              <Anchor href={`${WEBSITE_URL}/login`}>Log In.</Anchor>
            </Text>
          </div>
        </form>
      </Card>
  );
}
