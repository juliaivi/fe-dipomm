import Jumbotron from "./Jumbotron/Jumbotron";
import About from "./About/About";
import HowWorks from "./HowWorks/HowWorks";
import CarouselBox from "./CarouselBox/CarouselBox";

export default function Main() {
    return (
        <main className="main">
            <Jumbotron />
            <About />
            <HowWorks />
            <CarouselBox />
        </main>
    )
}

// border: 1px solid;
//361 border-radius: 78px;