'use client'

import React, {useEffect} from 'react';
import {gsap} from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
gsap.registerPlugin(MotionPathPlugin);
import './playerSword.css';


const PlayerSword = (
  { attackMode, enemyCoordinates, enemyCardId, enemyParentId }
  : 
  { attackMode: boolean; 
    enemyCoordinates: any, 
    enemyCardId : string, 
    enemyParentId: string }) => {
   
    useEffect(() => {
      const defaultAttack = document.getElementById('player-sword');
      if (defaultAttack) {
        const handleAttackOnTarget = (e : any) => {
          const target = MotionPathPlugin.getRelativePosition(
            defaultAttack, 
            window as any, 
            [0.50, 0.50], 
            {x: e.clientX, y: e.clientY})
            
        const controlPoints = [{ x: target.x, y: target.y }];  
              
        gsap.to(defaultAttack, {
            motionPath: {
              path: controlPoints,
              },
              ease: "power1.inOut",
              duration: 0.5,})
        }
        document.addEventListener('click', handleAttackOnTarget);
        return () => {
          document.removeEventListener('click', handleAttackOnTarget)
        }
      }
    }, [attackMode, enemyCardId]) 

    return (
      <svg
        id="player-sword"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 445.167 445.167"
        xmlSpace="preserve"
        className='sword-style-css'
      >

        <path
        d="M341.096,330.36l-11.788-25.336c-4.408-9.48-14.788-16.102-25.244-16.102h-33.804V70.595c0-5.453-2.346-12.943-5.457-17.423 l-33.55-48.314C229.109,1.771,225.95,0,222.584,0s-6.526,1.771-8.67,4.858l-33.55,48.313c-3.11,4.479-5.456,11.97-5.456,17.423 v218.328h-33.804c-10.453,0-20.833,6.619-25.243,16.097L104.07,330.36c-4.66,10.016-0.318,21.911,9.696,26.57 c10.014,4.659,21.91,0.319,26.57-9.695l8.52-18.313h41.912l8.426,40.698c-10.87,7.47-18.015,19.985-18.015,34.142 c0,22.83,18.574,41.404,41.405,41.404c22.831,0,41.405-18.574,41.405-41.404c0-14.157-7.145-26.672-18.015-34.142l8.425-40.698 h41.911l8.521,18.313c3.39,7.285,10.606,11.568,18.146,11.567c2.824,0,5.695-0.602,8.425-1.872 C341.416,352.271,345.757,340.376,341.096,330.36z" />
      </svg>
    );
  };

  export default PlayerSword;
