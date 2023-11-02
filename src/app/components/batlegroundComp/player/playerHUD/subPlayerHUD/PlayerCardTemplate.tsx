import React from 'react'
import { GiEnergySword } from 'react-icons/gi';
import Image from 'next/image';
import '../hud.css'
import AutoStatsIncrement from '@/app/components/math/playerScripting/AutoStatsIncrement';

interface PlayerProps {
    playerClass: string,
    playerImage: any
}

const PlayerCardTemplate: React.FC<PlayerProps> = (
    { playerClass, playerImage }
) => {

    const {playerAttack} = AutoStatsIncrement()

    return (
        <>
            <div className='dark-blue-card p-1 flex gap-1 relative items-center justify-center'>
                <div className='text-yellow-400 w-fit h-fit'>{playerAttack}</div>
                <div className='text-yellow-400 w-fit h-fit'><GiEnergySword /></div>
            </div>
            <div className='dark-blue-card p-1 flex gap-1 relative items-center justify-center'>
                <h5 className='text-zinc-400 h-1/6 w-full flex justify-center items-center'>
                    {playerClass}
                </h5>
            </div>
            <div className='dark-blue-card w-full h-full flex justify-center items-center playerCard'>
                <Image src={playerImage} alt='player-image' className='playerCard h-full w-full p-1' />
            </div>
        </>
    )
}

export default PlayerCardTemplate