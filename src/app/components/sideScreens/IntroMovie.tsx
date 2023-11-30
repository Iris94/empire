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
  const narratorKing = new Audio('/narationKing.mp3')
  const introMusic = new Audio ('/narrationMusic.mp3');
  const narratorEnd = new Audio ('/naratorEnd.mp3');

  const slideOne = useRef(null);
  const slideTwo = useRef(null);
  const slideThree = useRef(null);
  const slideFour = useRef(null);
  const slideFive = useRef(null);
  const slideSix = useRef(null);
  const textOne = useRef(null);
  const textTwo = useRef(null);
  const textThree = useRef(null);

  const handleStartGame = () => {
    setPlayGame(true)
  }

  const handleSkipIntro = () => {
    disableIntro(true)
    gsap.killTweensOf([narratorOne, narratorKing, introMusic, slideOne.current, slideTwo.current, slideThree.current, slideFour.current, slideFive.current, slideSix.current]);
    gsap.set([narratorOne, narratorKing, introMusic, slideOne.current, slideTwo.current, slideThree.current, slideFour.current, slideFive.current, slideSix.current, textOne.current, textTwo.current, textThree.current], { volume: 0, opacity: 0 });
  } 
  
  useEffect(() => {
    const castle = slideOne.current;
    const flag = slideTwo.current;
    const sky = slideThree.current;
    const chaos = slideFour.current;
    const king = slideFive.current;
    const march = slideSix.current;
    const textSlideOne = textOne.current;
    const textSlideTwo = textTwo.current;
    const textSlideThree = textThree.current;

    if (playGame) {
        const timeline = gsap.timeline();
        timeline.set(castle, { opacity: 0, scale: 1 });
        timeline.set(flag, { opacity: 0, scale: 1.2 });
        timeline.set(sky, { opacity: 0, scale: 1.2});
        timeline.set(chaos, { opacity: 0, scale: 1});
        timeline.set(king, { opacity: 0, scale: 1.2});
        timeline.set(march, { opacity: 0, scale: 1});
        timeline.set(textSlideOne, { opacity: 0})
        timeline.set(textSlideTwo, { opacity: 0})
        timeline.set(textSlideThree, { opacity: 0})

        timeline.call(playIntroSound);
        timeline.to(castle, { opacity: 1, duration: 7, ease: 'power2.inOut' }, '+=1');
        timeline.to(castle, { scale: 1.2, duration: 15 }, '-=8');
        timeline.to(textSlideOne, {opacity: 1}, '-=12')
        timeline.add(playFirstNarration, '-=10');

        timeline.to(castle, { opacity: 0, duration: 5, ease: 'power2.inOut' }, '-=1'); 
        timeline.to(flag, { opacity: 1, duration: 5, ease: 'power2.inOut' }, '-=5');
        timeline.to(flag, { scale: 1, duration: 20, ease: 'power2.inOut'}, '-=5');
        timeline.to(flag, { opacity: 0, duration: 5, ease: 'power2.inOut' }, '-=2');
        timeline.to(sky, { opacity: 1, duration: 5, ease: 'power2.inOut' }, '-=6');
        timeline.to(sky, { scale: 1, duration: 10, ease: 'power2.inOut'}, '-=5')
        timeline.to(sky, { opacity: 0, duration: 3, ease: 'power2.inOut'}, '-=2');
        timeline.to(chaos, { opacity: 1, duration: 5, ease: 'power2.inOut'}, '-=3');
        timeline.to(chaos, { scale: 1.1, opacity: 1, duration: 15, ease: 'power2.inOut'}, '-=4')
        timeline.to(chaos, { opacity: 0, duration: 3, ease: 'power2.inOut'}, '-=2');
        timeline.to(textSlideOne, { opacity: 0}, '-=2')
        timeline.to(textSlideTwo, { opacity: 1}, '-=1')
        timeline.add(playKingSpeech, '-=2')

        timeline.to(king, { opacity: 1, duration: 3, ease: 'power2.inOut'}, '-=3');
        timeline.to(king, { scale: 1, duration: 30, ease: 'power2.inOut'}, '-=2');
        timeline.to(king, { opacity: 0, duration: 3, ease: 'power2.inOut'}, '-=3');
        timeline.to(march, { opacity: 1, duration: 3, ease: 'power2.inOut'}, '-=2');
        timeline.to(textSlideTwo, { opacity: 0}, '+=2')
        timeline.to(textSlideThree, { opacity: 1}, '-=1')
        timeline.add(playEndNarration, '+=2');
        timeline.to(march, { scale: 1.3, duration: 45, ease: 'power2.inOut'}, '-=3');
        timeline.call(endIntro)

        return () => {
            timeline.kill(); 
        };
    }

    function playFirstNarration () {
        gsap.set(narratorOne, { volume: 0.1});
        gsap.to(narratorOne, { volume: 0.3, duration: 5, ease: 'power2.inOut'});
        narratorOne.play()
    }

    function playKingSpeech () {
        gsap.to(narratorKing, { volume: 0.3, ease: 'power2.inOut'});
        narratorKing.play()
    }

    function endIntro () {
        gsap.to([narratorOne, narratorKing, introMusic], { volume: 0, duration: 3, ease: 'power2.inOut' });
        gsap.to([slideOne.current, slideTwo.current, slideThree.current, slideFour.current, slideFive.current, slideSix.current, textOne.current, textTwo.current, textThree.current], { opacity: 0, duration: 3, ease: 'power2.inOut', onComplete: () => disableIntro(true) });
    }

    function playEndNarration () {
        gsap.to(narratorEnd, { volume: 0.4, ease: 'power2.inOut'})
        narratorEnd.play()
    }

    function playIntroSound() {
        gsap.set(introMusic, { volume: 0 });
        gsap.to(introMusic, { volume: 0.2, duration: 20, ease: 'power2.inOut' });
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
            <div className='w-screen h-screen fixed overflow-hidden'>
                <Image src={IntroCastle} alt='castle' fill ref={slideOne}/>
                <Image src={IntroFlag} alt='flag' fill ref={slideTwo} />
                <Image src={IntroSky} alt='sky' fill ref={slideThree} />
                <Image src={IntroChaos} alt='chaos' fill ref={slideFour} />
                <Image src={IntroKing} alt='king' fill ref={slideFive} />
                <Image src={IntroMarch} alt='march' fill ref={slideSix} />
            </div>
                <p className='p-2 mx-2 w-full h-fit absolute bottom-3 paper-card text-black' ref={textOne}>It started as a whisper, like a morning breeze. First, fires vanished from unborn children, leaving them raised as husks—soulless and devoid of fire. Then trust disappeared, both in the people and in the empire. After that, the Gods vanished. Why did they do that? Had we angered them? The Empire of the Sun was slowly crumbling, becoming hopeless and desperate, and that's when they arrived. Forces of Chaos suddenly emerged from the sky. Like a thousand candles, the sky tore open, and an army of soulless demons descended upon us. Was it too early? Maybe if they had waited a bit longer, there wouldn't have been any resistance</p>

                <p className='p-2 w-full h-fit absolute bottom-3 paper-card text-black' ref={textTwo}>By the gods who have forsaken us, we shall demonstrate our worthiness. Generals, journey to the farthest corners of the empire and rally your armies, for tomorrow marks our march. Instruct your soldiers to savor a hearty meal and bid farewell to their loved ones, for as of tomorrow, chaos is the only fate that awaits them—and awaits me. Mages and priests, ready your magic. This is not our demise. We shall banish each of those beasts back to the depths of hell from whence they came</p>

                <p className='p-2 w-full h-fit absolute bottom-3 paper-card text-black' ref={textThree}>And thus, our Emperor raised his banners, rallied his men, and pressed forward to confront the very hell we all feared would one day befall us. As I pen this letter, I gaze upon my child—without fire and soul. I look at my wife, feigning sleep while shedding tears, and I am aware of my destiny. Tomorrow, the march of millions begins, and I shall be among them. I march for my family and my Emperor. We will encounter them, we will battle them, and we will emerge victorious, for we have no other choice. Onward, we march.</p>
            <button
            className='text-black paper-card w-1/6 
            h-fit p-2 text-center absolute top-1 z-20'
            onClick={() => handleSkipIntro()}>Skip Intro</button>
            </>
        )}
    </div>
  )
}

export default IntroMovie