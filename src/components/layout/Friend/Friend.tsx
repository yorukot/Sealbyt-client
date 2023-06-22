'use client';
import { AppShell } from '@mantine/core';
import NavbarCompoment from '../Navabar/Navbar';
import { useState } from 'react';
import FriendHeaderCompoment from '../Header/FriendHeader';

export default function FriendCustomAppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      layout="alt"
      padding={11}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      navbar={<NavbarCompoment opened={opened} setOpened={setOpened} />}
      header={<FriendHeaderCompoment opened={opened} setOpened={setOpened} />}
    >
      {children}
    </AppShell>
  );
}