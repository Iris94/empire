import React from 'react'
import Options from './subPlayerHUD/Options'
import Tutorial from './subPlayerHUD/Tutorial'
import Skills from './subPlayerHUD/Skills'

const specialHUD = () => {
  return (
    <div className='w-full h-full flex items-center justify-evenly'>
       <Tutorial />
       <Options />
       <Skills /> 
    </div>
  )
}

export default specialHUD