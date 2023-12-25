import  './seatselection.css';
import MainForm from '../ChooseTrains/MainForm/MainForm';
import SeatSelectionCoupe from './SeatSelection/SeatSelectionCoupe';
import SelectionMenu from '../ChooseTrains/TrainSelection/SelectionMenu/SelectionMenu';

export default function SeatSelection() {
    return (
        <>
            <main className="main">
                <MainForm />
                <section className="train__selection">
                    <SelectionMenu />
                    <SeatSelectionCoupe />
                </section>
            </main>
        </>
    )
}