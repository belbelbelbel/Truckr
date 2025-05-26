'use client'
import { useEffect, useState } from 'react';
import NavbarMobile from './NavBarMobile';
import NavbarDesktop from './NavBarDesktop';


export default function NavBar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1280);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className='w-full h-full z-50 relative'>
      {isMobile ?
        <div className='fixed  w-full'>
          <NavbarMobile/>
        </div> :
        <div className=''>
         <NavbarDesktop/>
        </div>
      }
    </div>
  );
}
