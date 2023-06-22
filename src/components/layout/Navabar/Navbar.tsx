'use client';
import { Navbar } from '@mantine/core';
import NavabarHeader from './NavbarHeader';
import NavabarCenter from './NavbarCenter';
import NavabarFooter from './NavabarFooter';

export default function NavbarCompoment({opened, setOpened}: {opened: boolean, setOpened: (value: boolean) => void }) {
  return (
    <Navbar
      p="xs"
      width={{ sm: 300, lg: 300 }}
      hiddenBreakpoint="sm"
      hidden={!opened}
    >
      <Navbar.Section>
        <NavabarHeader />
      </Navbar.Section>
      <Navbar.Section grow mt="md">
        <NavabarCenter opened={opened} setOpened={setOpened}/>
      </Navbar.Section>
      <Navbar.Section>
        <NavabarFooter />
      </Navbar.Section>
    </Navbar>
  );
}
