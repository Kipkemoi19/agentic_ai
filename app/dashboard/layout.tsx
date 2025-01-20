'use client'
import Heaader from '@/components/ui/Heaader';
import Sidebar from '@/components/ui/Sidebar';
import { NavigationProvider } from '@/lib/NavigationProvider';
import { Authenticated } from 'convex/react';


import React from 'react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <NavigationProvider>
    <div className='flex h-screen'>
      <div>
        <Sidebar/>
        </div>
      
      
      <div className='w-full'>
      <Heaader />
      <main>  
      {children}
      </main>
      
      </div>
    </div>
    </NavigationProvider>
  );
}
