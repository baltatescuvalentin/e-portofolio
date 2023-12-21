import projects from "../utils/projects";
import Project from "./Project";
function Projects({myref}: any) {

    let projs: JSX.Element[] = projects.map((p, index) => {
        return <Project key={index} {...p} />
    })

    return (
        <div ref={myref}>
            <p className="text-[32px] sm:text-[24px] font-semibold mt-[32px]">Projects</p>
            <p className="text-[24px] sm:text-base">These are a few projects that I made during the journey I learned front-end. </p>
            <div className={`flex flex-row items-center overflow-x-scroll overflow-y-hidden space-x-2 scrollbar mt-[32px]`}>
                {projs}
            </div>
        </div>
    )
}

export default Projects;