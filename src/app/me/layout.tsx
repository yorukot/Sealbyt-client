import RefreshTokenComponents from '@/components/auth/RefreshToken';
import CustomAppShell from '@/components/layout/ChatRoom/AppShell';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <RefreshTokenComponents>
        <CustomAppShell>{children}</CustomAppShell>
      </RefreshTokenComponents>
    </>
  );
}
