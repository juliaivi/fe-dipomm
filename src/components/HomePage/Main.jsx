import Jumbotron from './Jumbotron/Jumbotron';
import About from './About/About';
import HowWorks from './HowWorks/HowWorks';
import CarouselBox from './CarouselBox/CarouselBox';
import ProgressBar from 'react-bootstrap/ProgressBar';
import React, { useState } from 'react';

export default function Main() {
  const [progress, setProgress] = useState(0);

  return (
    <main className="main">
      <Jumbotron />
      <div className="progress__bar">
        <ProgressBar now={`${progress}%`} style={{ width: `${progress}%` }} />;
      </div>
      <About setProgress={setProgress} />
      <HowWorks setProgress={setProgress} />
      <CarouselBox setProgress={setProgress} />
    </main>
  );
}
