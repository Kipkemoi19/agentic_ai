'use client';

import { createContext, useState, ReactNode, useContext } from 'react';

interface NavigationContextType {
  isMobileNavOpen?: boolean;
  setIsMobileNavOpen: (open: boolean) => void;
  closeMobileNav: () => void;
}

export const NavigationContext = createContext<NavigationContextType>({
 isMobileNavOpen: false,
  setIsMobileNavOpen: () => {},
  closeMobileNav: () => {},
});

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const closeMobileNav = () => setIsMobileNavOpen(false);

  return (
    <NavigationContext.Provider value={{ isMobileNavOpen: isMobileNavOpen, setIsMobileNavOpen, closeMobileNav }}>
      {children}
    </NavigationContext.Provider>
  );
}

// Optional: Custom hook to use the NavigationContext
export function useNavigationContext() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigationContext must be used within a NavigationProvider');
  }
  return context;
}
