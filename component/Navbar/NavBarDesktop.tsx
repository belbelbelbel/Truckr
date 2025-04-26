import { NavLinks } from '@/constant/Arrays';
import React from 'react'
import { FiShoppingCart } from "react-icons/fi";
import CustomButton from '../utils/CustomButton';
export default function NavbarDesktop() {
  return (
    <div className='w-screen h-[4.5rem] flex  justify-center shadow items-center'>
      <div className='w-[86%] mx-auto flex justify-between items-center'>
        <div className='italic font-black text-2xl text-[#3A83D2]'>TRUCKR</div>
        <div className='flex gap-6'>
          {
            NavLinks.map((items) => (
              <div>
                <div className='font-black text-lg text-[#3A83D2] cursor-pointer'>{items.name}</div>
              </div>
            ))
          }
        </div>
        <div className='flex items-center gap-4'>
          <div>
            <div className='cursor-pointer'><FiShoppingCart size={30} /></div>
          </div>
          <div className=''>
            <CustomButton
              className="bg-none text-black cursor-pointer font-bold py-[3px] w-32  border-2 border-[#3A83D2] shadow-md"
              onClick={() => console.log("Button clicked!")}
            >
              Sign In
            </CustomButton>


          </div>
        </div>
      </div>
    </div>
  )
}
