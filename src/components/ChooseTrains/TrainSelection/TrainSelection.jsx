import SelectionMenu from "./SelectionMenu/SelectionMenu";
import FoundTrains from "./FoundTrains/FoundTrains";
import './trainSelection.css';

export default function TrainSelection() {
    return (
        <>
            <section className="train__selection">
                <SelectionMenu />
                <FoundTrains />
            </section>
        </>
    )
}