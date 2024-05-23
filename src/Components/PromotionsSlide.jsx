import React from 'react'
import { useState } from 'react'
import Promotions from "../assets/img/Promotions.jpg"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function PromotionsSlide() {
    const [count , setCount] = useState(0)
  return (
    <div className='w-2/3 mx-auto'>
        <div className='flex text-5xl items-center'>
            <FaChevronLeft className='hover:cursor-pointer hover:text-green-500'/>
            <img className='mx-auto' src={Promotions} alt="" width={1000}/>
            <FaChevronRight className='hover:cursor-pointer hover:text-green-500'/>
        </div>
    </div>
  )
}

export default PromotionsSlide