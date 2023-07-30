import { IProject } from '../utils/projects';
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';


// const Project: React.FC<IProject> = (props: IProject) => {
//     return (
//         <div className='w-[350px] h-[350px] rounded border-2 border-grey-200 p-2'>
//             <h1>{props.name}</h1>
//         </div>

//     )
// }

function Project({name, technologies, description, preview_url, git_url}: IProject) {
    return (
        <div className='flex flex-col flex-shrink-0 justify-between w-[350px] h-[350px] sm:w-[300px] sm:h-[300px] rounded-lg border-4 shadow-lg border-grey-200 p-2 [&>*]:pl-2'>
            <p className='text-[24px] font-semibold'>{name}</p>
            <p className='text-[20px]'>{description}</p>
            <p className='text-[20px] font-medium'>{technologies}</p>
            <div className='flex flex-col'>  
                <a className='inline-block w-[105px]' href={git_url} target='_blank' rel="noreferrer">
                    <div className='flex flex-row items-center'>
                        <AiFillGithub size={32} color='cyan'/>
                        <p className='text-[22px] ml-2'>GitHub</p>
                    </div>
                </a>
                <a className='inline-block w-[105px]' href={preview_url} target='_blank' rel="noreferrer">
                    <div className='flex flex-row items-center'>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} color='cyan' size='xl'/>
                        <p className='text-[22px] ml-2'>Preview</p>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Project;