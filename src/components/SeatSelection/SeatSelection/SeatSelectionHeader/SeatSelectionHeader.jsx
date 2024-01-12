import './seatselectionheader.css';
import arrowright from '../../../../img/arrow-right.svg';
import AddHeaderTrainCard from './AddHeaderCard/AddHeaderTrainCard';

export default function SeatSelectionHeader() {
    return (
        <>
            <div className='choose__another__train' >
                <img className='choose__another__train_img' src={arrowright} alt='arrow'></img>
                <button className='choose__another__train_btn'>Выбрать другой поезд</button>
            </div>
            <AddHeaderTrainCard />
        </>
    )
}