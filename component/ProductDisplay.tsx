'use client'
import { categoryTabs, vehicleData } from '@/constant/Arrays'
import React, { useEffect, useState } from 'react'
import CustomButton from './utils/CustomButton'
import VehicleCard from './utils/VehicleCard'

export default function ProductDisplay() {
  const [currentTab, setCurrentTab] = useState<number>()

  const handleClick = (id: number) => {
    setCurrentTab(id)
  }

  useEffect(() => {
    if (categoryTabs.length > 0) {
      setCurrentTab(categoryTabs[0].id)
    }
  }, [])

  const filteredVehicles = currentTab === 1
    ? vehicleData
    : vehicleData.filter(vehicle => vehicle.categoryId === currentTab)

  return (
    <div className='w-full mt-8'>
      <div className='w-7xl mx-auto'>
        <h1 className='text-4xl text-center font-black'>Browse by Category</h1>

        <div className='flex w-[74%] mx-auto mt-10 justify-between flex-wrap gap-4'>
          {categoryTabs.map((items) => (
            <CustomButton
              key={items.id}
              className={`px-3 py-3 shadow cursor-pointer border ${items.id === currentTab
                ? 'font-semibold bg-[#2C90FE] border-0 text-white'
                : ''
                }`}
              onClick={() => handleClick(items.id)}
            >
              {items.name}
            </CustomButton>
          ))}
        </div>

        <div className='w-full  mt-14'>
          <h2 className='text-3xl font-bold text-center mb-6'>Popular Trucks and Equipments</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 w-[70%] mx-auto gap-8 mt-4">
            {filteredVehicles.slice(0, 4).map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
