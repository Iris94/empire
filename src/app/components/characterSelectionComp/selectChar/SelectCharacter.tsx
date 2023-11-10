'use client'

import React, { FC } from 'react';
import { Knight, Mage, Assassin } from '../../states&imports/imageImport';
import PlayerCard from './PlayerCard';
import { useDispatch } from 'react-redux';
import {
  setPlayerClass,
  setPlayerHealth,
  setPlayerMana,
  setPlayerAttack,
  setPlayerPoints,
  setPlayerImage,
} from '@/app/GlobalRedux/Features/player/playerSlice';

interface SelectCharacterProps {
  setShowAboutCharacter: (show: boolean) => void;
}

const SelectCharacter: FC<SelectCharacterProps> = ({ setShowAboutCharacter }) => {
  const dispatch = useDispatch();

  const handleCharacterSelect = (characterClass: string) => {
    // Dispatch the selected character's data
    switch (characterClass) {
      case 'Knight':
        dispatch(setPlayerClass('Knight'));
        dispatch(setPlayerHealth(200));
        dispatch(setPlayerMana(130));
        dispatch(setPlayerAttack(70));
        dispatch(setPlayerPoints(5));
        dispatch(setPlayerImage(Knight));
        break;
      case 'Mage':
        dispatch(setPlayerClass('Mage'));
        dispatch(setPlayerHealth(150));
        dispatch(setPlayerMana(200));
        dispatch(setPlayerAttack(50));
        dispatch(setPlayerPoints(7));
        dispatch(setPlayerImage(Mage));
        break;
      case 'Assassin':
        dispatch(setPlayerClass('Assassin'));
        dispatch(setPlayerHealth(150));
        dispatch(setPlayerMana(150));
        dispatch(setPlayerAttack(100));
        dispatch(setPlayerPoints(6));
        dispatch(setPlayerImage(Assassin));
        break;
      default:
        break;
    }
    setShowAboutCharacter(true)
  };

  return (
    <div className="w-1/2 lg:h-3/6 h-4/6 z-10 flex justify-center items-center flex-col paper-card">
      <div className="lg:w-1/2 w-4/6 h-1/6 flex justify-center items-center">
        <h3 className="lg:text-xl font-semibold">Pick a character</h3>
      </div>
      <div className="w-full h-full flex flex-row justify-evenly items-center gap-3 p-3">
        <PlayerCard
          playerClass="Knight"
          playerImage={Knight}
          playerHealth={200}
          playerMana={130}
          playerAttack={70}
          playerPoints={5}
          onSelectCharacter={() => handleCharacterSelect('Knight')}
        />
        <PlayerCard
          playerClass="Mage"
          playerImage={Mage}
          playerHealth={150}
          playerMana={200}
          playerAttack={50}
          playerPoints={7}
          onSelectCharacter={() => handleCharacterSelect('Mage')}
        />
        <PlayerCard
          playerClass="Assassin"
          playerImage={Assassin}
          playerHealth={150}
          playerMana={150}
          playerAttack={100}
          playerPoints={6}
          onSelectCharacter={() => handleCharacterSelect('Assassin')}
        />
      </div>
    </div>
  );
};

export default SelectCharacter;
