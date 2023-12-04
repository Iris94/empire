'use client'

import React, { useEffect, useRef } from 'react';
import AnimationTravel from '../../../math/gameplayScripting/AnimationTravel';
import PlayerWeapons from './PlayerWeapons';
import PlayerSwordEnd from './PlayerSwordEnd';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import './playerSword.css';

gsap.registerPlugin(MotionPathPlugin);

const PlayerSword = (
  { attackMode, playerClass }: { attackMode: boolean; playerClass: string; }) => {
  const weaponRef = useRef(null)
  const weaponEndRef = useRef(null);

  useEffect(() => {
    const handleAttackOnTarget = (e: any) => {
      const defaultAttack = weaponRef.current!
      const finalAnimation = weaponEndRef.current!

      const clickedElement = document.elementFromPoint(e.clientX, e.clientY);
      if (clickedElement && clickedElement.classList.contains('enemy-click-class')) {
        const target = MotionPathPlugin.getRelativePosition(
          defaultAttack,
          window as any,
          [0.50, 0.50],
          { x: e.clientX, y: e.clientY }
        );

        const controlPoints = [{ x: target.x, y: target.y }];

        const direction = AnimationTravel(controlPoints[0].x);
        gsap.to(defaultAttack, {
          motionPath: {
            path: controlPoints,
            autoRotate: direction,
            useRadians: true,
            end: 0.90
          },
          ease: "power1.inOut",
          duration: 0.5,
          onComplete: () => {
            gsap.to(defaultAttack, {
              duration: 1.5,
              scale: 10,
              opacity: 0,
            });
            gsap.set(finalAnimation, {
              x: target.x,
              y: target.y,
            });
            gsap.to(finalAnimation, {
              duration: 0.50,
              opacity: 1,
              scale: 1.2,
              rotationZ: -45,
              onComplete: () => {
                gsap.to(finalAnimation, {
                  opacity: 0,
                  duration: 0.5
                })
              }
            })
          },
        });
      }
    };

    document.addEventListener('click', handleAttackOnTarget);
    return () => {
      document.removeEventListener('click', handleAttackOnTarget);
    };
  }, [attackMode]);

  return (
    <>
      <PlayerWeapons weapon={weaponRef} playerClass={playerClass} />
      <PlayerSwordEnd finisherRef={weaponEndRef} />
    </>
  )
};

export default PlayerSword;
