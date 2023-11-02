'use client'

import { useSelector } from "react-redux"
import { RootState } from "@/app/GlobalRedux/store"
import LevelState from "@/app/components/states&imports/LevelState"

const AutoStatsIncrement = () => {
    const playerLevel : number = LevelState()
    const { playerAttack, 
            playerHealth, 
            playerMana } = useSelector((state : RootState) => state.player);

    const levelModifier = (playerLevel - 1) * 10;
    const updatePlayerHP = Math.floor(playerHealth + levelModifier * 1.2);
    const updatePlayerMana = Math.floor(playerMana + levelModifier * 1.2);
    const updatePlayerAttack = Math.floor(playerAttack + levelModifier * 1.2)

    return {
        playerHealth: updatePlayerHP,
        playerMana: updatePlayerMana,
        playerAttack: updatePlayerAttack,
      };
}

export default AutoStatsIncrement;