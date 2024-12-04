"use client";
import { AudioLines, Pause } from 'lucide-react';
import React, { useState, useRef } from 'react';

interface MusicButtonProps {
    musicLink: string;
}
const MusicButton = ({ musicLink}: MusicButtonProps) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const handleToggle = () => {
        if (isPlaying) {
            audioRef.current?.pause();
        } else {
            audioRef.current?.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="switchParent">
        <div className={"switch"} onClick={handleToggle}>
            <div className={`${isPlaying ? "relative float-left translate-y-[38%] ms-4 transition-all duration-300":" hidden transition-all duration-300"}`}>Pause</div>
            <div className={`${"slider"} ${isPlaying ? "playing" : "stopped"}`}>
                {isPlaying ? <Pause className='3xl:w-6 3xl:h-6 md:w-4 md:h-4 w-[12px] h-[14px] '/>  : <AudioLines className='3xl:w-6 3xl:h-6 md:w-4 md:h-4 w-[12px] h-[14px] '/>}
            </div>
            <div className={`${!isPlaying ? "absolute right-4 3xl:right-6 top-1/2 -translate-y-1/2  transition-all duration-300":" hidden transition-all duration-300  "}`}><p className=' text-sm md:text-lg 3xl:text-[28px] font-bold text-primary-white '>Listen</p></div>
            <audio ref={audioRef} src={musicLink} />
        </div>
        </div>
    );
};

export default MusicButton;
// just a comment
