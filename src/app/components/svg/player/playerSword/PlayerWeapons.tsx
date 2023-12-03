import React from 'react';
import KnightWeapon from './KnightWeapon';
import AssassinWeapon from './AssassinWeapon';
import MageWeapon from './MageWeapon';
import './playerSword.css'

const PlayerWeapons = ({ weapon, playerClass }: { weapon: any; playerClass: string }) => {

  const getViewBox = () => {
    switch (playerClass) {
      case 'Knight':
        return '0 0 445.167 445.167';
      case 'Mage':
        return '0 0 445.167 445.167';
      case 'Assassin':
        return '0 0 1792 1792';
      default:
        return ''; 
    }
  };

  const getPath = () => {
    switch (playerClass) {
      case 'Knight':
        return <KnightWeapon />
      case 'Mage':
        return <MageWeapon />;
      case 'Assassin':
        return <AssassinWeapon />
      default:
        return ''
    }
  }

  return (
    <svg
    ref={weapon}
    xmlns="http://www.w3.org/2000/svg"
    className={`${playerClass.toLowerCase()}-weapon`}
    viewBox={getViewBox()}
    >
    {getPath()}
    </svg>
  );
};

export default PlayerWeapons;
