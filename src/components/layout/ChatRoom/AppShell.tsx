'use client';
import { AppShell } from '@mantine/core';
import NavbarCompoment from '../Navabar/Navbar';
import HeaderCompoment from '../Header/Header';
import { useState } from 'react';
import FooterCompoment from '../Footer/Footer';

export default function CustomAppShell({
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
      header={<HeaderCompoment opened={opened} setOpened={setOpened} />}
      footer={<FooterCompoment />}
    >
      {children}
    </AppShell>
  );
}