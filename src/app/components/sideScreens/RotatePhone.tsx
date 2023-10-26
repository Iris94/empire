import React from 'react'
import { FaMobileAlt } from 'react-icons/fa'
import './sideScreens.css'

const RotatePhone = () => {
  return (
    <section className='w-screen h-screen bg-black text-white flex justify-center items-center'>
        <div className='w-full p-3 h-1/3 flex flex-col items-center justify-center gap-4'>
            <div className='flex items-center justify-center font-bold text-2xl text-white h-fit w-full'>
              Rotate Your Phone
            </div>
            <div className='flex items-center justify-center font-bold text-5xl text-white h-fit w-fit rotate-phone-css'>
              <FaMobileAlt />
            </div>
        </div>
    </section>
  )
}

export default RotatePhone