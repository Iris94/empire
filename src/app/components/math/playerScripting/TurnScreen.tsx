import React from 'react'

const TurnScreen = (
  { playerTurnBased }: { playerTurnBased: boolean | undefined }
) => {
  
  return (
    <div className='absolute z-0 top-0 w-screen h-screen flex items-center justify-center'>
        <div className='w-1/6 h-fit flex justify-center items-center blue-card'>
            {!playerTurnBased ? (
              <p className='text-red-500'>Enemies Turn</p>
            ) : (
              <p className='text-green-500'>Player Turn</p>
            )}
        </div>
    </div>
  )
}

export default TurnScreen