import { useEffect } from 'react';
import skills from '../utils/skills';
import { ISkill } from '../utils/skills';
function Skills({myref}: any) {

    let skillsMap = skills.map((s, index) => {
        return <Tech key={index} {...s} />
    });
    let logosMap = skills.map((s, index) => {
        return (
            <div key={index} className='flex flex-col items-center shrink-0'>
                <img className='w-[72px] h-[72px]' src={s.url} alt={s.name} />
            </div>
        )
    });
    let technamesMap = skills.map((s, index) => {
        return (
            <div key={index} className='flex flex-col items-center shrink-0'>
                <p className='text-xl text-center bg-gray-700 rounded-md text-white px-4 py-2'>{s.name}</p>
            </div>
        )
    });

    // var copy = document.querySelector(".scroller_inner").cloneNode(true);
    // document.querySelector(".scroller").appendChild(copy);\
    const copyScroll = (mainDiv: string, secondDiv: string) => {
        const scrollerInner = document.querySelector(`.${secondDiv}`) as HTMLElement | null;
        const scroller = document.querySelector(`.${mainDiv}`) as HTMLElement | null;
        console.log(scrollerInner);

        if (scrollerInner && scroller) {
            scroller.setAttribute("data-animated", 'true');
            const scrollerContent = Array.from(scrollerInner.children);
            console.log(scrollerContent.length);
            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                scrollerInner.appendChild(duplicatedItem);
            });
            console.log(scrollerInner);
        }
    }

    useEffect(() => {
        copyScroll('scroller1', 'scroller__inner1');
        copyScroll('scroller2', 'scroller__inner2');
    }, []);
    //const style = { "--_animation-duration": 40, '--animation-direction': 'right' } as React.CSSProperties;

    return (
        <div ref={myref} className="mt-[32px] font-semibold">
            <p className="text-[32px]">Skills</p>
            {/* <div className='grid items-center justify-center grid-cols-[repeat(auto-fit,minmax(150px,1fr))] mt-[12px]'>
                {skillsMap}
            </div> */}
            <div className='scroller1 scroller mt-[12px]' data-direction="left">
                <div className='scroller__inner1 scroller__inner'>
                    {logosMap}
                </div>
            </div>
            <div className='scroller2 scroller' data-direction="right">
                <div className='scroller__inner2 scroller__inner'>
                    {technamesMap}
                </div>
            </div>
        </div>
    )
}

function Tech({name, url}: ISkill) {
    return (
        <div className='flex flex-col items-center mb-[8px] shrink-0'>
            <img className='w-14 h-14' src={url} alt={name} />
            <p className='text-2xl text-center'>{name}</p>
        </div>

    )
}

export default Skills;