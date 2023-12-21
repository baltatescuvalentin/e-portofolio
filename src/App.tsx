import React, { useRef } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Menu from './components/Menu';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Title from './components/Title';

function scrollToElem() {
  
}

function App() {

  const refArray = useRef<Array<HTMLDivElement | null>>([]);

  function scrollToElem(id: number): void {
    refArray.current[id]?.scrollIntoView({behavior: "smooth", block: "start"});
      console.log('scrolling');
  }
  
  return (
    <>
        <div className="flex flex-col justify-center px-[20%] xl:px-[10%] sm:px-[3%] mt-[50px] mb-[50px]">
            <Title myref={(el: HTMLDivElement | null) => refArray.current[0] = el}/>
            <Profile />
            <About myref={(el: HTMLDivElement | null) => refArray.current[1] = el}/>
            <Experience myref={(el: HTMLDivElement | null) => refArray.current[2] = el}/>
            <Projects myref={(el: HTMLDivElement | null) => refArray.current[3] = el}/>
            <Skills myref={(el: HTMLDivElement | null) => refArray.current[4] = el}/>
            <Contact myref={(el: HTMLDivElement | null) => refArray.current[5] = el}/>
        </div>
        <Menu scrollToElem={scrollToElem}/>
    </>
  );
}
export {
  scrollToElem,
}
export default App;
