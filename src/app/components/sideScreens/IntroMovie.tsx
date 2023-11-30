'use client'

import React, { useEffect, useState, useRef } from 'react'
import { IntroCastle, IntroChaos, IntroFlag, IntroKing, IntroMarch, IntroSky } from '../states&imports/imageImport';
import Image from 'next/image';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);

const IntroMovie = ({ disableIntro }: { disableIntro: (value: boolean) => void }) => {
  const [playGame, setPlayGame] = useState(false);
  const narratorOne = new Audio('/narationIntro.mp3');
  const introMusic = new Audio ('/narrationMusic.mp3');

  const slideOne = useRef(null);
  const slideTwo = useRef(null);
  const slideThree = useRef(null);
  const slideFour = useRef(null);

  const handleStartGame = () => {
    setPlayGame(true)
  }

  const handleSkipIntro = () => {
    disableIntro(true)
  } 
  
  useEffect(() => {
    const castle = slideOne.current;
    const flag = slideTwo.current;
    const sky = slideThree.current;
    const chaos = slideFour.current;

    if (playGame) {
        const timeline = gsap.timeline();
        timeline.set(castle, { opacity: 0, scale: 1 });
        timeline.set(flag, { opacity: 0, scale: 1.2 });
        timeline.set(sky, { opacity: 0, scale: 1.1});
        timeline.set(chaos, { opacity: 0, scale: 1});
        timeline.call(playIntroSound);
        timeline.to(castle, { opacity: 1, duration: 7, ease: 'power2.inOut' }, '+=1');
        timeline.to(castle, { scale: 1.2, duration: 15 }, '-=8');
        timeline.add(playFirstNarration, '-=10');
        timeline.to(castle, { opacity: 0, duration: 5, ease: 'power2.inOut' }, '-=1'); 
        timeline.to(flag, { opacity: 1, duration: 5, ease: 'power2.inOut' }, '-=5');
        timeline.to(flag, { scale: 1, duration: 20, ease: 'power2.inOut'}, '-=5');
        timeline.to(flag, { opacity: 0, duration: 5, ease: 'power2.inOut' }, '-=2');
        timeline.to(sky, { opacity: 1, duration: 5, ease: 'power2.inOut' }, '-=6');
        timeline.to(sky, { scale: 1, duration: 10, ease: 'power2.inOut'}, '-=5')
        timeline.to(sky, { opacity: 0, duration: 5, ease: 'power2.inOut'}, '-=2');
        timeline.to(chaos, { opacity: 1, duration: 5, ease: 'power2.inOut'}, '-=6')
        timeline.to(chaos, { scale: 1.1, opacity: 1, duration: 15, ease: 'power2.inOut'}, '-=5')
        
        return () => {
            timeline.kill(); 
        };
    }

    function playFirstNarration () {
        gsap.set(narratorOne, { volume: 0.1});
        gsap.to(narratorOne, { volume: 0.3, duration: 5, ease: 'power2.inOut'});
        narratorOne.play()
    }

    function playIntroSound() {
        gsap.set(introMusic, { volume: 0 });
        gsap.to(introMusic, { volume: 0.3, duration: 20, ease: 'power2.inOut' });
        introMusic.play();
      }
  }, [playGame])

  return (
    <div className='bg-black w-screen h-screen flex items-center justify-center overflow-hidden'>
        {!playGame ? (
            <button
            className='text-white opacity-90 blue-card w-1/6 
            h-fit p-1 text-center z-20'
            onClick={() => handleStartGame()}>Start Game</button>
        ) : (
            <>
            <div className='w-full h-full fixed overflow-hidden'>
                <Image src={IntroCastle} alt='castle' fill ref={slideOne}/>
                <Image src={IntroFlag} alt='flag' fill ref={slideTwo} />
                <Image src={IntroSky} alt='sky' fill ref={slideThree} />
                <Image src={IntroChaos} alt='chaos' fill ref={slideFour} />
            </div>
            <button
            className='text-black paper-card w-1/6 
            h-fit p-2 text-center absolute bottom-10 z-20'
            onClick={() => handleSkipIntro()}>Skip Intro</button>
            </>
        )}
    </div>
  )
}

export default IntroMovie