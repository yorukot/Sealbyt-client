import { AppShell } from '@mantine/core';

import MantineThemeComponent from '@/components/theme/mantine';
import NavbarCompoment from '@/components/layout/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AppShell padding="md" navbar={<NavbarCompoment />}>
        {children}
      </AppShell>
    </>
  );
}
