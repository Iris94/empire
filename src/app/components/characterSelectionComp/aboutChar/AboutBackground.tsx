import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '@/app/GlobalRedux/store';

const AboutBackground = () => {
    const { playerClass } = useSelector(
        (state: RootState) => state.player
      );

    return (
        <div className='w-full lg:h-3/6 h-2/6 flex blue-card p-1'>
           {playerClass === 'Knight' ? <p className='text-white dark-blue-card lg:overflow-hidden overflow-scroll'>
           The Knights of Eldoria are the proudest and most battle-hardened veterans out there. While many would fall, they remain steadfast. When the gates of abyss opened, they were the first to arrive, knowing full well that each time they fell, they would rise again through the magic of Eldoria. They will fight for their king, they will die for their king, and they will continue to do so until they lose their minds.
           </p> : ''}

           {playerClass === 'Mage' ? <p className='text-white dark-blue-card lg:overflow-hidden overflow-scroll'>
           The Mages of Caelumia hold the entire empire at their whim. They whisper through the darkness to serve the light. They may not be the most physically resistant fighters out there, but God help anyone who stands against them, for their power even terrifies the darkest creatures of hell. When the gates of the abyss opened, they stood in front, ready to sacrifice everything because they know that no mage can be killed. Each time they fall, their magic brings them back.
           </p> : ''}

           {playerClass === 'Assassin' ? <p className='text-white dark-blue-card lg:overflow-hidden overflow-scroll'>
           Stormhaven is protected not by an army but by a brotherhood, a brotherhood of the chosen few. When brute force or magic can&rsquo;t win battles, that&rsquo;s the time to keep your eyes open because that&rsquo;s when they strike. Each one is as skilled as a hundred men, hidden in plain sight, experts in weaponry and magic usage. There is no faith they would betray, and so it was when the gates of the abyss opened, they marched. For they know that the blood magic of their brotherhood will keep them fighting until there is no more dawn
           </p> : ''}
        </div>
      )
}

export default AboutBackground