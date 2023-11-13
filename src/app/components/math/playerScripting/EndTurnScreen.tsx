import React from 'react'

const EndTurnScreen = ({
  playerTurnBased,
  setPlayerTurnBased,
}: {
  playerTurnBased: boolean | undefined;
  setPlayerTurnBased: React.Dispatch<any>;
}) => {

  const switchToEnemiesTurn = () => {
    setPlayerTurnBased(false)
  }

  return (
    <div className='absolute w-screen h-screen top-0 flex items-center justify-center'>
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