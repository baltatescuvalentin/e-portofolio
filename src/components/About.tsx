import { ElemAsRef } from '../utils/auxInterfaces';

function About({myref}: any) {
    return (
        <div ref={myref} className="mt-[32px]">
            <p className="text-[32px] sm:text-[24px] font-semibold">About me</p>
            <p className="text-[24px] sm:text-base">
                This is a plceholder. Will add later.
            </p>
        </div>
    )
}

export default About;