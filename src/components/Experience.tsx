import CV from '../utils/CV.pdf';

function Experience({myref}: any) {
    return (
        <div ref={myref} className="mt-[32px]">
            <p className="text-[32px] sm:text-[24px] font-semibold">Experience</p>
            <p className="text-[24px] sm:text-base">
                Currently there's not much experience coming from an intership or job but I learned some front-end on
                 my own which involves: <span className="font-medium">HTML</span>, <span className="font-medium"> CSS</span>,
                  <span className="font-medium"> JS</span>,<span className="font-medium"> ReactJS</span>,
                 <span className="font-medium"> Tailwind CSS</span>, <span className="font-medium"> TypeScript</span>,
                  <span className="font-medium"> NextJS</span>, <span className="font-medium"> Express</span>,  
                 <span className="font-medium"> Sass</span> and <span className="font-medium"> React-Redux</span>.
                  The skills I obtained can be
                  seen in the Projects section. In these projects I learned how to make a project from scratch, use 
                  APIs, use 3rd party tools as back-end, create intuitive and maintainable UIs, getting a grasp of 
                  how these tecnologies work alone and together.
            </p>
            <div className='mt-6'>
                <a className='p-2 text-2xl border-2 border-cyan-500 rounded-md text-cyan-700 shadow-md' href={CV} download="CV_Baltatescu_Valentin_Constantin" target='_blank'>
                    Curriculum Vitae
                </a>
            </div>
            
        </div>
    )
}

export default Experience;