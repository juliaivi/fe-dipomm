import MainForm from "./MainForm/MainForm";
import HowWorks from "../HomePage/HowWorks/HowWorks";
import TrainSelection from "./TrainSelection/TrainSelection";

export default function ChooseTrains() {
    return (
        <>
            <main className="main">
                <MainForm />
                <TrainSelection />
            </main>
        </>
    )
}