import React from 'react'
import Link from 'next/link'
import './sideScreens.css'

const DeathScreen = () => {


  return (
    <div className='w-screen h-screen absolute flex items-center justify-center death-section'>
        <section className='w-1/2 lg:h-1/3 h-5/6 dark-blue-card rounded-md flex flex-col death-box'>
          <div className='w-full h-2/3 flex items-center justify-center'>
            <h2 className='text-red-950 death-text'>You Died</h2>
          </div>
          <div className='w-full h-1/3 flex items-center justify-center'>
              <Link 
              href={'/'}
              className='w-fit h-fit p-2 text-zinc-400 blue-card'>Back to Menu</Link>
          </div>
        </section>
    </div>
  )
}

export default DeathScreen