import React from 'react'
import { Map1, Map2, Map3, Map4, Map6, Map7, Map8, Map10 } from '../../states&imports/imageImport';
import Image from 'next/image';

const mapImages = [Map1, Map2, Map3, Map4, Map6, Map7, Map8, Map10];

const Map = () => {
  const randomIndex = Math.floor(Math.random() * mapImages.length);
  const selectedMap = mapImages[randomIndex];

  return (
    <div className='z-0 w-full h-screen absolute flex items-center justify-center'>
      <Image src={selectedMap} alt='Map' fill className="cover" />
    </div>
  )
}

export default Map