"use client"
import { Navbar } from '@mantine/core';

export default function NavbarCompoment() {
  return (
    <Navbar p="xs" width={{ sm: 300, base: '100%' }} className='min-h-screen'>
      <Navbar.Section>{}</Navbar.Section>
      <Navbar.Section grow mt="md">{/* Links sections */}</Navbar.Section>
      <Navbar.Section>{/* Footer with user */}</Navbar.Section>
    </Navbar>
  );
}