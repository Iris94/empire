

import React from 'react'
import { GiSwordsEmblem } from "react-icons/gi";
import './sideScreens.css'

const LevelDelayScreen = () => {
  return (
    <div className='w-screen h-screen absolute z-50 flex items-center justify-center'> 
        <div className='w-1/2 h-1/3 paper-card rounded-md flex flex-col'>
            <div className='w-full h-1/2 flex justify-center items-center'>
                {<GiSwordsEmblem className='text-zinc-950 shield-logo' />}
            </div>
            <div className='w-full h-1/2 flex justify-center items-center shield-text'>
                Next Level
            </div>
        </div>
    </div> 
  )
}

export default LevelDelayScreen