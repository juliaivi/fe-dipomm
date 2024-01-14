import Jumbotron from "./Jumbotron/Jumbotron";
import About from "./About/About";
import HowWorks from "./HowWorks/HowWorks";
import CarouselBox from "./CarouselBox/CarouselBox";

import ProgressBar from 'react-bootstrap/ProgressBar';
import { useEffect, useRef, useState } from "react";

export default function Main() {
    const [progress, setProgress] = useState(0);

    // первый варинт полосы прогресса при загрузке страницы
    // console.log()
    //  const progressInterval = useRef(null);

    // useEffect(() => {
    //     progressInterval.current = setTimeout(() => {
    //       if (progress > 100) {
    //         // clear interval
    //         clearTimeout(progressInterval.current);
    //         progressInterval.current = null;
    //         return;
    //       }
    //       setProgress((progress) => progress + 1);
    //     }, 100);
    
    //     return () => clearTimeout(progressInterval.current);
    //   }, [progress]);
  

    return (
        <main className="main">
            <Jumbotron />
            <div className="progress__bar" >
               <ProgressBar now={`${progress}%`} style={{width: `${progress}%`}}/>; 
            </div>
            <About setProgress={setProgress}/>
            <HowWorks setProgress={setProgress}/>
            <CarouselBox setProgress={setProgress}/>
        </main>
    )
}
