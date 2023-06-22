import FriendCustomAppShell from "@/components/layout/Friend/Friend";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <FriendCustomAppShell>{children}</FriendCustomAppShell>
    </>
  );
}
