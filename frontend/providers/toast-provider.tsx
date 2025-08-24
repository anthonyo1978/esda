'use client';

import { useEffect, useState } from 'react';
import { ToastProvider as ToastProviderPrimitive } from '@/components/ui/toast';
import { ToastViewport } from '@/components/ui/toast';

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <>{children}</>;

  return (
    <ToastProviderPrimitive>
      {children}
      <ToastViewport />
    </ToastProviderPrimitive>
  );
}
