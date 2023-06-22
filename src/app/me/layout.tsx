import CustomAppShell from '@/components/layout/ChatRoom/AppShell';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CustomAppShell>{children}</CustomAppShell>
    </>
  );
}
