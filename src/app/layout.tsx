import './globals.css';
import { Inter } from 'next/font/google';
import MantineThemeComponent from '@/components/theme/mantine';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Sealbyt',
    template: '%s | Sealbye'
  },
  description: 'Just A test',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MantineThemeComponent>{children}</MantineThemeComponent>
      </body>
    </html>
  );
}
