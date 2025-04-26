import React from 'react'
import { FaHeart, FaStar } from 'react-icons/fa'
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
  return (
    <div className="shadow-lg rounded-lg border border-gray-300 p-4 shadow-sm relative">
      <img src={vehicle.imageUrl} alt={vehicle.title} className="h-52 w-full object-contain" />
      <FaHeart size={35} className="absolute top-4 right-4 text-gray-400 cursor-pointer" />
      <div className="mt-4">
        <h3 className="font-black text-lg">{vehicle.title}</h3>
        <p className="flex items-center text-sm text-gray-600 mt-1">
          <FaLocationDot size={16} className="mr-1" /> {vehicle.location}
        </p>
        <p className="flex items-center text-sm text-gray-600 mt-1">
          🛞 {vehicle.driver}
        </p>
        <p className="flex items-center text-sm text-gray-600 mt-1">
          <FaStar size={16} className="mr-1 text-yellow-400"/> {vehicle.rating}
        </p>
        <p className="font-bold text-black mt-2">₦{vehicle.pricePerHour.toLocaleString()} Per hour</p>
        <CustomButton className='w-full mt-4 bg-blue-400 font-black text-lg cursor-pointer text-white py-2 rounded-md hover:bg-blue-500 transition'>
          View Details
        </CustomButton>
      </div>
    </div>
  )
}
