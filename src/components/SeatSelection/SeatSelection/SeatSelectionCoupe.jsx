import './seatselectioncoupe.css';
import SeatSelectionHeader from './SeatSelectionHeader/SeatSelectionHeader';

export default function SeatSelectionCoupe() {
    return (
        <>
            <section className="seat__selection">
                <h2 className='seat__selection_title'>Выбор места</h2>
                <form className='seat__selection__form '>
                    <div className='seat__selection__there'>
                        <SeatSelectionHeader />
                    </div>
                    <div className='seat__selection__to'></div>
                </form>
                
                <button>Далее</button>
                
            </section>
        </>
    )
}