import React from 'react'
import { setPlayerPoints } from '@/app/GlobalRedux/Features/player/playerSlice';
import { useGame } from '@/app/context/GameContext';
import { useDispatch } from 'react-redux';

const EndTurnScreen = ({
  playerTurnBased,
  setPlayerTurnBased,
}: {
  playerTurnBased: boolean | undefined;
  setPlayerTurnBased: React.Dispatch<any>;
}) => {
  const {initialPlayerAP} = useGame()
  const dispatch = useDispatch()


  const switchToEnemiesTurn = () => {
    dispatch(setPlayerPoints(initialPlayerAP))
    setPlayerTurnBased(false)
  }

  return (
    <div className='absolute w-screen h-screen bottom-0 flex items-center justify-center'>
        <div className='w-fit h-fit right-0 absolute flex justify-center items-center blue-card z-50'>
            {!playerTurnBased ? (
              <button className='dark-blue-card text-zinc-500 disabled'>End Turn</button>
            ) : (
              <button 
              className='dark-blue-card text-blue-500 font-semibold w-full h-full hover:cursor-pointer'
              onClick={() => switchToEnemiesTurn()}>End Turn</button>
            )}
        </div>
    </div>
  )
}

export default EndTurnScreen