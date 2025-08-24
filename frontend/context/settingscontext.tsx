'use client';

import React, { createContext, useState, useEffect, useContext } from 'react';

interface Setting {
  id: string; 
  slug: string;
  value: string;
}

interface SettingContextType {
  settings: Setting[];
  loading: boolean;
}

const SettingContext = createContext<SettingContextType | undefined>(undefined);

export const SettingProvider = ({ children }: { children: React.ReactNode }) => {
  const [settings, setSettings] = useState<Setting[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchSettings = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/settings`);
      const data = await res.json();
      setSettings(data);
    } catch (error) {
      console.error('Error fetching settings:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  return (
    <SettingContext.Provider value={{ settings, loading }}>
      {children}
    </SettingContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingProvider');
  }
  return context;
};