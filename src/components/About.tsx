import { ElemAsRef } from '../utils/auxInterfaces';

function About({myref}: any) {

    let currYear: number = new Date().getFullYear()
    let age: number = currYear - 2000


    return (
        <div ref={myref} className="mt-[32px]">
            <p className="text-[32px] sm:text-[24px] font-semibold">About me</p>
            <p className="text-[24px] sm:text-base">
                Hello, I'm Valentin,{age} years old, and I'm from Bălțătești, Neamț, România. I graduated Colegiul Național de Informatică Piatră-Neamț and Faculty of Computer Science Iași.  
            </p>

            <p className="text-[24px] sm:text-base">
                Currently I am looking for a path to follow for my future career. I am eager to learn new things, I am a good team player and ready to take on any challenge.
            </p>
        </div>
    )
}

export default About;