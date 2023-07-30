import { ElemAsRefFunc } from '../utils/auxInterfaces';

function Menu({scrollToElem}: ElemAsRefFunc) {
    return (
        <div className="flex flex-row items-center justify-center fixed px-[16px] sm:px-0 bottom-0 left-[50%] translate-x-[-50%] sm:translate-x-0 sm:left-0 sm:w-full h-[64px] bg-white z-10 shadow-[rgba(0,_0,_0,_0.2)_0px_18px_50px_-10px]">
            <div className="flex flex-row justify-center space-x-[24px] sm:[&>*]:h-[32px] sm:[&>*]:w-[32px] &:not(:last-child)]:border-2 &:not(:last-child)]:border-black">
                <button onClick={() => scrollToElem(0)}
                    className="flex items-center justify-center w-[48px] h-[48px]" title="Home">
                    <img src="https://img.icons8.com/ios/50/null/home-page.png"/>
                </button>
                <button onClick={() => scrollToElem(1)}
                    className="flex items-center justify-center w-[48px] h-[48px]" title="About me">
                    <img src="https://img.icons8.com/ios/50/null/about.png"/>
                </button>
                <button onClick={() => scrollToElem(2)}
                    className="flex items-center justify-center w-[48px] h-[48px]" title="Experience">
                    <img src="https://img.icons8.com/ios/50/null/customer-insight--v1.png"/>
                </button>
                <button onClick={() => scrollToElem(3)}
                    className="flex items-center justify-center w-[48px] h-[48px]" title="Projects">
                    <img src="https://img.icons8.com/ios/50/null/group-of-projects.png"/>
                </button>
                <button onClick={() => scrollToElem(4)}
                    className="flex items-center justify-center w-[48px] h-[48px]" title="Skills">
                    <img src="https://img.icons8.com/ios/50/null/development-skill.png"/>
                </button>
                <button onClick={() => scrollToElem(5)}
                    className="flex items-center justify-center w-[48px] h-[48px]" title="Skills">
                    <img src="https://img.icons8.com/external-nawicon-detailed-outline-nawicon/64/null/external-contact-communication-nawicon-detailed-outline-nawicon.png"/>
                </button>
            </div>
        </div>
    )
}

export default Menu;