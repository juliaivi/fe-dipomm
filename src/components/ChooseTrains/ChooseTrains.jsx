import MainForm from "./MainForm/MainForm";
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