import { NavigationContext } from '@/lib/NavigationProvider';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

import React, { useContext } from 'react';

function Sidebar() {
  const router = useRouter();
  const { closeMobileNav, isMobileNavOpen } = useContext(NavigationContext);

  return (
    <div>
      {isMobileNavOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 block md:hidden"
          onClick={closeMobileNav}
        >
          <div
        className={cn(
          "fixed   md:inset-y-0 top-14 bottom-0 left-0 z-50 w-72 bg-gray-50/80 backdrop-blur-xl border-r border-gray-200/50 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:top-0 flex flex-col",
          isMobileNavOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="p-4 border-b border-gray-200/50">
          <Button className="w-full bg-white hover:bg-gray-50 text-gray-700 border border-gray-200/50 shadow-sm">
            New Chat
          </Button>
        </div>
      </div>
        </div>
      )}
      <div
        className={cn(
          "fixed   md:inset-y-0 top-14 bottom-0 left-0 z-50 w-72 bg-gray-50/80 backdrop-blur-xl border-r border-gray-200/50 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:top-0 flex flex-col",
          isMobileNavOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="p-4 border-b border-gray-200/50">
          <Button className="w-full bg-white hover:bg-gray-50 text-gray-700 border border-gray-200/50 shadow-sm">
            New Chat
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
