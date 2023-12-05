'use client'

import { useSelector } from "react-redux"
import { RootState } from "@/app/GlobalRedux/store"

const AutoStatsIncrement = () => {
    const { level } = useSelector((state: RootState) => state.levelReducer)
    const playerLevel : number = level
    const { playerAttack, 
            playerHealth, 
            playerMana,
            playerArmor} = useSelector((state : RootState) => state.player);

    const levelModifier = playerLevel * 10;
    const updatePlayerHP = Math.floor(playerHealth + levelModifier * 1.2);
    const updatePlayerMana = Math.floor(playerMana + levelModifier * 1.2);
    const updatePlayerAttack = Math.floor(playerAttack + levelModifier * 0.8)
    const updatePlayerArmor = Math.floor(playerArmor + levelModifier * 0.8)

    return {
        playerHealth: updatePlayerHP,
        playerMana: updatePlayerMana,
        playerAttack: updatePlayerAttack,
        playerArmor: updatePlayerArmor
      };
}

export default AutoStatsIncrement;