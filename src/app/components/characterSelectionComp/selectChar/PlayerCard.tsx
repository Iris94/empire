import React from 'react';
import Image from 'next/image';
import './playerCard.css'
import { GiHeartPlus, GiRollingEnergy, GiEnergySword, GiEnergyArrow } from 'react-icons/gi';

interface PlayerCardProps {
  playerClass: string;
  playerImage: any;
  playerHP: number;
  playerMana: number;
  playerAttack: number;
  playerPoints: number;
  onSelectCharacter: () => void;
}
const PlayerCard: React.FC<PlayerCardProps> = ({
  playerClass,
  playerImage,
  playerHP,
  playerMana,
  playerAttack,
  playerPoints,
  onSelectCharacter,
}) => {

    return (
      <div
        className={`w-1/4 h-full flex flex-col blue-card 
          justify-evenly items-center p-2 hover:scale-110 hover:cursor-pointer
          ${playerClass === 'Knight' ? 'knightEffect' : ''} 
          ${playerClass === 'Mage' ? 'mageEffect' : ''} 
          ${playerClass === 'Assassin' ? 'assassinEffect' : ''}`}
          onClick={onSelectCharacter}
      >
        <div className="w-2/3 flex justify-center items-center dark-blue-card">
          <h5 className="text-white opacity-85">{playerClass}</h5>
        </div>
  
        <div className="w-full flex justify-center items-center p-2">
          <div className="w-5/6 h-full flex justify-center items-center dark-blue-card">
            <Image
              src={playerImage}
              alt="image for player class"
              className="rounded-md"
            />
          </div>
        </div>
  
        <div className="w-full flex flex-col">
          <div className="flex justify-evenly items-center gap-1">
            <figure className="text-red-700">
              <GiHeartPlus />
            </figure>
            <hr className="w-full h-1 bg-red-700 border-none"></hr>
            <p className="text-white w-2/6">{playerHP}</p>
          </div>
  
          <div className="flex justify-evenly items-center gap-1">
            <figure className="text-blue-700">
              <GiRollingEnergy />
            </figure>
            <hr className="w-full h-1 bg-blue-700 border-none"></hr>
            <p className="text-white w-2/6">{playerMana}</p>
          </div>
  
          <div className="flex justify-evenly items-center gap-1">
            <figure className="text-green-700">
              <GiEnergySword />
            </figure>
            <hr className="w-full h-1 bg-green-700 border-none"></hr>
            <p className="text-white w-2/6">{playerAttack}</p>
          </div>
  
          <div className="flex justify-evenly items-center gap-1">
            <figure className="text-yellow-700">
              <GiEnergyArrow />
            </figure>
            <hr className="w-full h-1 bg-yellow-700 border-none"></hr>
            <p className="text-white w-2/6">{playerPoints}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default PlayerCard;
  
