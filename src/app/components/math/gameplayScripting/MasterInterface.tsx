'use client'

import React, { useState } from "react"
import PlayerInterface from "./PlayerInterface"
import EnemyInterface from "./EnemyInterface"
import { RootState } from "@/app/GlobalRedux/store"
import { useSelector } from "react-redux"
import getRandomEnemy from "../scriptForEnemies/GetRandomEnemy"

export default function MasterInterface() {
    const {
        playerHealth,
        playerMana,
        playerPoints } = useSelector((state: RootState) => state.player)
    const enemyStats = getRandomEnemy()

    const [playerHP, setPlayerHP] = useState(playerHealth)
    const [enemyHP, setEnemyHP] = useState(enemyStats.enemyHP)
    console.log(enemyHP)

    const handlePlayerAttack = () => {
        const damage = 20;
        setEnemyHP((prevEnemyHP) => prevEnemyHP - damage)
    }

    return (
        <div className="hidden absolute">
            <PlayerInterface 
            onPlayerAttack={handlePlayerAttack}
            />

            <EnemyInterface />
        </div>
    )
}