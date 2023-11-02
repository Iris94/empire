import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '@/app/GlobalRedux/store';
import { Knight, Mage, Assassin } from '@/app/components/states&imports/imageImport';
import Image from 'next/image';

const AboutBasicInfo = () => {
    const { playerClass, playerHP, playerMana, playerAttack, playerPoints } = useSelector(
        (state: RootState) => state.player
    );

    return (
        <div className='w-full h-fit flex gap-2 items-center justify-center'>
            <div className='w-1/3 h-full blue-card flex items-center justify-center'>
                {playerClass === 'Knight' ? <Image src={Knight} alt='knight' /> : ''}
                {playerClass === 'Mage' ? <Image src={Mage} alt='mage' /> : ''}
                {playerClass === 'Assassin' ? <Image src={Assassin} alt='assassin' /> : ''}
            </div>
            <div className='w-2/3 h-full flex flex-col blue-card'>
                <div className='w-full h-1/6 flex items-center justify-center'>
                    <h5 className='text-white'>{playerClass}</h5>
                </div>
                <div className='w-full h-5/6 flex flex-col dark-blue-card justify-center items-center gap-1'>
                    <div className='w-full flex gap-2 justify-around items-center'>
                        <p className='text-red-700'>Health</p>
                        <hr className='bg-red-700 border-none w-full h-1' />
                        <p className='text-white'>{playerHP}</p>
                    </div>
                    <div className='w-full flex gap-2 justify-around items-center'>
                        <p className='text-blue-700'>Mana</p>
                        <hr className='bg-blue-700 border-none w-full h-1' />
                        <p className='text-white'>{playerMana}</p>
                    </div>
                    <div className='w-full flex gap-2 justify-around items-center'>
                        <p className='text-green-700'>Attack</p>
                        <hr className='bg-green-700 border-none w-full h-1' />
                        <p className='text-white'>{playerAttack}</p>
                    </div>
                    <div className='w-full flex gap-2 justify-around items-center'>
                        <p className='text-yellow-700'>Health</p>
                        <hr className='bg-yellow-700 border-none w-full h-1' />
                        <p className='text-white'>{playerPoints}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutBasicInfo