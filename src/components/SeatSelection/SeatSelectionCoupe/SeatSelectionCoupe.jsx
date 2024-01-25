import './seatselectioncoupe.css';
import SeatSelectionHeader from './SeatSelectionHeader/SeatSelectionHeader';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function SeatSelectionCoupe() {
    const {selectedTrain, validForm} = useSelector(state => state.train);
    const {passengers} = useSelector(state => state);
    console.log(passengers, 'passengers')
    const navigate = useNavigate();
    let valid = false;
    // if (seatsThere[0] + seatsThere[1] == selectedPlacesThere.length && seatsBack[0] + seatsBack[1] == selectedPlacesBack.length) {
    //     valid = true
    // }

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
                
                <button className={`next__btn ${valid ? '' : 'next__btn-disabled'}`} disabled={valid === true ? false : true} onClick={() =>  navigate('/passengers')}>Далее</button>
                
            </section>
        </>
    )
}