import MainForm from '../ChooseTrains/MainForm/MainForm';
import SeatSelectionCoupe from './SeatSelectionCoupe/SeatSelectionCoupe';
import SelectionMenu from '../ChooseTrains/TrainSelection/SelectionMenu/SelectionMenu';
import { useSelector } from "react-redux";

export default function SeatSelection() {
    const {loadingTrainSeats, errorTrainSeats, loadingTrainSeatsBack, errorTrainSeatsBack} = useSelector(state => state.train)
    return (
        <>
            <main className="main">
                <MainForm />

                {(!loadingTrainSeats && !errorTrainSeats && !loadingTrainSeatsBack && !errorTrainSeatsBack ) &&
                    <section className="train__selection">
                        <SelectionMenu />
                        <SeatSelectionCoupe />
                    </section>
                }
            </main>
        </>
    )
}