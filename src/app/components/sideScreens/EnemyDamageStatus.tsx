'use client';

import React, { useEffect, useRef } from 'react';
import './sideScreens.css';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
gsap.registerPlugin(MotionPathPlugin);

const EnemyDamageStatus = ({ enemyScreenDmg }: { enemyScreenDmg: string }) => {
  const isCritical = enemyScreenDmg.includes('Critical');
  const isMissed = enemyScreenDmg.includes('Missed');

  const textClass = isCritical
    ? 'text-red-800'
    : isMissed
    ? 'text-emerald-500'
    : 'text-red-500';

  const textRef = useRef(null);

  useEffect(() => {
    const animationDuration = 3;
    const fadeInOutDuration = 0.5;

    gsap.set(textRef.current, { opacity: 0 });

    gsap.to(textRef.current, {
      opacity: 1,
      duration: fadeInOutDuration,
      ease: 'power2.inOut',
    });

    gsap.to(textRef.current, {
      opacity: 0,
      duration: fadeInOutDuration,
      delay: animationDuration - fadeInOutDuration,
      ease: 'power2.inOut',
      onComplete: () => {
        gsap.to(textRef.current, {
          opacity: 1,
          duration: fadeInOutDuration,
          ease: 'power2.inOut',
        });
      },
    });
  }, [enemyScreenDmg]);

  return (
    <div ref={textRef} className={`enemy-screen-dmg ${textClass}`}>
      {enemyScreenDmg}
    </div>
  );
};

export default EnemyDamageStatus;
