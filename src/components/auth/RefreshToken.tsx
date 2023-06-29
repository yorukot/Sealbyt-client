'use client';
import CheckHasPermisson from '@/function/Get/CheckHasPermisson';
import GetVerifyPerssiom from '@/function/Get/HelloWorld';
import RefreshToken from '@/function/Get/RefreshToken';
import { Metadata } from 'next';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RefreshTokenComponents({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  useEffect(() => {
    setInterval(async () => {
      const VerifyPerssiom = await CheckHasPermisson();
      if (VerifyPerssiom.status === 401 || VerifyPerssiom.status === 205) {
        const data = await RefreshToken();
        if (data.status === 401) {
          router.push('/login');
        }
      }
    }, 10000);
  }, [router]);

  return <>{children}</>;
}
