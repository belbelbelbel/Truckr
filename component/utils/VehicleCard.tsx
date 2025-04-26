'use client'

import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import CustomButton from './CustomButton'

interface VehicleProps {
  vehicle: {
    id: number
    title: string
    location: string
    driver: string
    rating: number
    pricePerHour: number
    imageUrl: string
  }
}

export default function VehicleCard({ vehicle }: VehicleProps) {
  const [liked, setLiked] = useState(false)

  const handleLike = () => {
    setLiked(!liked)
    // if (!liked) {
    //   toast.success('Added to Liked!')
    // } else {
    //   toast('Removed from Liked', { icon: '❌' })
    // }
  }

  return (
    <div className="shadow-lg rounded-lg border-2 border-gray-300 p-4 shadow-sm relative">
      <img src={vehicle.imageUrl} alt={vehicle.title} className="h-52 w-full object-contain" />
      
      <svg
        onClick={handleLike}
        xmlns="http://www.w3.org/2000/svg"
        fill={liked ? "black" : "transparent"}
        viewBox="0 0 24 24"
        stroke="black"
        strokeWidth={2.5}
        className="w-10 h-10 absolute top-4 right-4 cursor-pointer transition-all duration-300"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.752 7.911c0-2.204-1.789-3.993-3.993-3.993-1.278 0-2.516.617-3.259 1.636-.743-1.019-1.981-1.636-3.259-1.636-2.204 0-3.993 1.789-3.993 3.993 0 6.105 7.252 10.578 7.252 10.578s7.252-4.473 7.252-10.578z"
        />
      </svg>

      <div className="mt-4">
        <h3 className="font-black text-lg">{vehicle.title}</h3>
        <p className="flex items-center text-sm text-gray-600 mt-1">
          <FaLocationDot size={16} className="mr-1" /> {vehicle.location}
        </p>
        <p className="flex items-center text-sm text-gray-600 mt-1">
          🛞 {vehicle.driver}
        </p>
        <p className="flex items-center text-sm text-gray-600 mt-1">
          <FaStar size={16} className="mr-1 text-yellow-400" /> {vehicle.rating}
        </p>
        <p className="font-bold text-black mt-2">₦{vehicle.pricePerHour.toLocaleString()} Per hour</p>

        <CustomButton className='w-full mt-4 bg-blue-400 font-black text-lg cursor-pointer text-white py-2 rounded-md hover:bg-blue-500 transition'>
          View Details
        </CustomButton>
      </div>
    </div>
  )
}
