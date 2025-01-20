import React, { useContext } from 'react';
import { UserButton } from '@clerk/clerk-react';
import { CiMenuBurger } from 'react-icons/ci';
import { NavigationContext } from '@/lib/NavigationProvider';

const Header = () => {
  const { setIsMobileNavOpen } = useContext(NavigationContext);

  return (
    <div className='flex items-center justify-between w-full p-4 shadow-md border-b border-gray-300'>
      <div className='flex items-center'>
        <CiMenuBurger
          className='mx-4 cursor-pointer text-2xl text-gray-800'
          onClick={() => {
            setIsMobileNavOpen(true);
            console.log('isMobileNavOpen');
          }}
        />
        <div className='text-purple-600 font-bold text-xl'>Chat with AI</div>
      </div>
      <div>
        <UserButton />
      </div>
    </div>
  );
};

export default Header;
