"use client";

import { useState, useEffect } from 'react';
import { Roboto_Condensed } from "next/font/google";
import "../globals.css";
import "../custom.css";
import { usePathname, useRouter } from 'next/navigation';

import Header from './components/header';
import Sidebar from './components/sidebar';
import Footer from './components/footer';

import { SettingProvider, useSettings } from '../../context/settingscontext';
import { useAuthStore } from '../../stores/authstore'; // ✅ Adjust this import path if needed

const roboto = Roboto_Condensed({ subsets: ["latin"], weight: ["300", "400", "700"] });

function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/admin/login';

  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const { settings, loading } = useSettings();

  const { isLoggedIn } = useAuthStore(); // ✅ Zustand store
  const router = useRouter();

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  // ✅ Redirect if already logged in and trying to access /admin/login
  useEffect(() => {
    if (isLoginPage && isLoggedIn) {
      router.replace('/admin/dashboard');
    }
  }, [isLoginPage, isLoggedIn]);

  if (isLoginPage) {
    return <>{children}</>;
  }

  return (
    <div className={`${roboto.className} antialiased min-h-screen bg-slate-50`}>
      <Header onSidebarToggle={toggleSidebar} />
      <Sidebar isSidebarExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <main className={`pt-16 transition-all duration-300 ${isSidebarExpanded ? 'pl-64' : 'pl-20'}`}>
        {loading ? (
          <div className="p-4"></div>
        ) : (
          <>
            {/* You can now use `settings` anywhere inside this layout */}
            {children}
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <SettingProvider>
      <LayoutContent children={children} />
    </SettingProvider>
  );
}