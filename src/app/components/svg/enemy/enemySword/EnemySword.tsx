'use client';

import React, { useEffect, useRef } from 'react';
import EnemySwordSvg from './EnemySwordSvg';
import EnemyAnimationTravel from '@/app/components/math/gameplayScripting/EnemyAnimationTravel';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
gsap.registerPlugin(MotionPathPlugin);

const EnemySword = ({ playerTurnBased, enemyIndex }: { playerTurnBased: boolean; enemyIndex : number }) => {
  const enemySwordRef = useRef(null);

  useEffect(() => {
    const handleEnemyAnimation = (index : number) => {
      const enemyAnimation = enemySwordRef.current!;
      const enemiesPosition = MotionPathPlugin.getRelativePosition(
        enemyAnimation,
        window as any,
        [0.50, 0.50]
      )
  
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const xOffSet = windowWidth * 0.50;
      const yOffSet = windowHeight * 0.70;
      const percentage = ((enemiesPosition.x + xOffSet) / windowWidth) * 100;
      const xAnimation = EnemyAnimationTravel(percentage)
      const enemyControlPoints = [{ x: xOffSet + enemiesPosition.x, y: yOffSet }];
      setTimeout(() => {
        gsap.to(enemyAnimation, {
          motionPath: {
            path: enemyControlPoints,
            autoRotate: xAnimation,
            useRadians: true,
            
          },
          duration: 2,
          ease: 'power1.inOut',
          onComplete: () => {
            gsap.to(enemyAnimation, {
              scale: 1.5,
              opacity: 0,
              duration: 1
            })
          }
        }); 
      }, index * 3000);
    };
    
    if (!playerTurnBased) {
      handleEnemyAnimation(enemyIndex);
    }
  }, [playerTurnBased]);

  return (
    <>
      <EnemySwordSvg sword={enemySwordRef} />
    </>
  );
};

export default EnemySword;
