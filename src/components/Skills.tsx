import skills from '../utils/skills';
import { ISkill } from '../utils/skills';
function Skills({myref}: any) {

    let skillsMap = skills.map((s, index) => {
        return <Tech key={index} {...s} />
    })

    return (
        <div ref={myref} className="mt-[32px] mb-[32px] font-semibold">
            <p className="text-[32px]">Skills</p>
            <div className='grid items-center justify-center grid-cols-[repeat(auto-fit,minmax(150px,1fr))] mt-[12px]'>
                {skillsMap}
            </div>
        </div>
    )
}

function Tech({name, url}: ISkill) {
    return (
        <div className='flex flex-col items-center mb-[8px]'>
            <img className='w-12 h-12' src={url} alt={name} />
            <p className='text-2xl text-center'>{name}</p>
        </div>

    )
}

export default Skills;