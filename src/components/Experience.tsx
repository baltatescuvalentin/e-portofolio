import { ElemAsRef } from '../utils/auxInterfaces';

function Experience({myref}: any) {
    return (
        <div ref={myref} className="mt-[32px]">
            <p className="text-[32px] sm:text-[24px] font-semibold">Experience</p>
            <p className="text-[24px] sm:text-base">
                Currently there's not much experience coming from an intership or job but I learned some front-end on my own which involves: HTML, CSS, React, TailWind and some TypeScript. The skills I obtained can be seen in the Projects section. In these projects I learned how to make a project from scratch, use APIs, use 3rd party tools as back-end, create intuitive and maintainable UIs, getting a grasp of how these tecnologies work alone and together.
            </p>
        </div>
    )
}

export default Experience;