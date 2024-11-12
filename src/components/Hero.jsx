import React from 'react'
import { CiShoppingBasket } from 'react-icons/ci'
import { IoIosArrowForward } from 'react-icons/io'
import { PiCheese } from 'react-icons/pi'

const Hero = () => {
    const heroMap = [
        {number: 1 , title: 'Cheese starters', icon: <IoIosArrowForward />, title2: 'Cheese molds'},
        {number: 2 , title: 'Cheese enzymes', icon: <IoIosArrowForward />, title2: 'Latex coating'},
        {number: 3 , title: 'Calcium chloride', icon: <IoIosArrowForward />, title2: 'Cheese wax'},
        {number: 4 , title: 'Cheese mold', icon: <IoIosArrowForward />, title2: 'Shrink bags'},
        {number: 5 , title: 'Fermented milk starters', icon: <IoIosArrowForward />, title2: 'Drainage mats'},
        {number: 6 , title: 'Cheese colorants', icon: <IoIosArrowForward />, title2: 'Drainage bags and pressing cloths'},
        {number: 7 , title: 'Cheese spices', icon: <IoIosArrowForward />, title2: 'Drainage containers'},
    ]

  return (
    <div>
        <div className='w-[250px] mb-5'>
        <div className='flex items-center gap-3 bg-[#FBE8BB] p-3 hover:text-[#FD9339]'>
                <PiCheese className='text-[25px]'/>
                <p className='font-bold'>Ingredients</p>
        </div>
            <div className='bg-[#fff] '>
                {heroMap.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border border-[#E6E6E6] border-solid hover:bg-[#FFF1DB] hover:text-[#FD9339]">
                        <h1>{item.title}</h1>
                        <h1>{item.icon}</h1>
                    </div>
                ))}
            </div>
        </div>
        <div className='w-[250px]'>
        <div className='flex items-center gap-3 bg-[#FBE8BB] p-3  hover:text-[#FD9339]'>
            <CiShoppingBasket className='text-[25px]'/>
            <p className='font-bold'>Equipment</p>
        </div>
        <div className='bg-[#fff]'>
            {heroMap.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-[#E6E6E6] border-solid hover:bg-[#FFF1DB] hover:text-[#FD9339]">
                    <h1>{item.title2}</h1>
                    <h1>{item.icon}</h1>
                </div>
            ))}
        </div>
    </div>
  </div>
  )
}

export default Hero