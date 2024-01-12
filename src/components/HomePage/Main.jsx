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
