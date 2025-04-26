import React from 'react'
import NavBar from "@/component/Navbar/NavBar";
import { Herolinks } from "@/constant/Arrays";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from 'react-icons/fa6';
export default function Hero() {
  return (
    <div className="w-full">
      <div>
        <NavBar />
      </div>
      <div className="h-[35rem] flex justify-center  relative w-full">
        <Image src={"/assets/f54b64a9-5d1d-465d-94e5-33bc97549c39 1.png"} alt={"esad"} priority={true} className="h-full absolute w-full" objectFit="cover" fill />
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute w-6xl h-[11rem] flex flex-col justify-center rounded-xl bg-white bottom-32">
          <div className="flex flex-col w-[80%] mx-auto">
            <div className="flex   gap-6 ">
              {
                Herolinks.map((item) => (
                  <div className="flex">
                    <div className="font-semibold cursor-pointer text-xl">{item.name}</div>
                  </div>
                ))
              }

            </div>
            <div className="border  border-[#2C90FE] h-18 justify-center flex items-center px-4 rounded-md mt-3">
              <div className='justify-between w-full flex'>
                <FaLocationDot size={26} />
                <input type="text" placeholder="Where do you want to rent?" className="border-0 h-[80%] w-[90%]  outline-0 font-medium  text-xl" />
                <div>
                  <FaSearch className='cursor-pointer' size={26} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
