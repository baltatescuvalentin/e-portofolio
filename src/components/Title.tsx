import React, { useEffect, useState } from 'react';
import { IoGameControllerOutline } from 'react-icons/io5';
import { HiOutlineCodeBracket } from 'react-icons/hi2';
import { GiBrain } from 'react-icons/gi';
import {ElemAsRef} from '../utils/auxInterfaces';
interface Carousel {
    text: String,
    emoji: JSX.Element,
}


function Title({myref}: any) {

    const [current, setCurrent] = useState<number>(0);

    useEffect(() => {
        const changeEmoji = setInterval(() => {
            if(current + 1 > carousel.length - 1)
                setCurrent(0);
            else setCurrent(current + 1);
        }, 3000);

        return () => clearInterval(changeEmoji);
    }, [current]);


    const carousel: Carousel[] = [
        {text: 'code', emoji: <HiOutlineCodeBracket />},
        {text: 'learn', emoji: <GiBrain />},
        {text: 'play', emoji: <IoGameControllerOutline />},
    ];

    return (
        <div ref={myref}>
            <div className='2xl:[&>p]:text-[54px]'>
                <p className='text-cyan-300 text-center font-bold text-[154px]'> 
                    Hi, I'm Valentin
                </p>
                <div className='flex flex-row sm:flex-col items-center text-center justify-center 2xl:[&>p]:text-[48px]'>
                <p className=' text-cyan-300 text-center font-bold text-[154px] '> and I like to {' '}</p>
                <div className='ml-3 2xl:[&>p]:text-[54px] [&>*]:text-cyan-300 flex flex-row items-center [&>*]:text-center [&>*]:font-bold [&>*]:text-[154px] [&>p]:m-0'>
                        <p>
                            { carousel[current].text}
                        </p> 
                        <p>
                            {carousel[current].emoji}
                        </p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Title;