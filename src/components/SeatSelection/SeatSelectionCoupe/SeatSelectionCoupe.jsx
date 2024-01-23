import './seatselectioncoupe.css';
import SeatSelectionHeader from './SeatSelectionHeader/SeatSelectionHeader';
import { useSelector } from 'react-redux';

export default function SeatSelectionCoupe() {
    const {selectedTrain} = useSelector(state => state.train);
    return (
        <>
            <section className="seat__selection">
                <h2 className='seat__selection_title'>Выбор места</h2>
                <form className='seat__selection__form '>
                    <div className='seat__selection__there'>
                        <SeatSelectionHeader selectedTrain={selectedTrain.departure} type={'there'}/>
                    </div>

                    {selectedTrain.arrival && 
                        <div className='seat__selection__to'>
                            <SeatSelectionHeader selectedTrain={selectedTrain.arrival} type={'back'}/>
                        </div>
                    }
                </form>
                
                <button className='next__btn'>Далее</button>
                
            </section>
        </>
    )
}