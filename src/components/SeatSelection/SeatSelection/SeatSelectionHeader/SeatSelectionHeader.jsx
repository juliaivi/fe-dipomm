import './seatselectionheader.css';
import arrowright from '../../../../img/arrow-right.svg';
import arroWrigth from '../../../../img/arrowrigth.svg';
import littleTrain from '../../../../img/littleTrain.svg';
import clock from '../../../../img/clock.svg';
import Tooltip from 'react-bootstrap/Tooltip';
// import AddServiceButtons from './AddServiceButtons/AddServiceButtons';
import AddHeaderTrainCard from './AddHeaderCard/AddHeaderTrainCard';
// import AddVagonInfoDetailed from './AddVagonInfoDetailed/AddVagonInfoDetailed';

export default function SeatSelectionHeader() {
    return (
        <>
            <div className='choose__another__train' >
                <img className='choose__another__train_img' src={arrowright} alt='arrow'></img>
                <button className='choose__another__train_btn'>Выбрать другой поезд</button>
            </div>
            <AddHeaderTrainCard />
            <div className='vagon__info__box'>
                {/* <div className='vagon__info'>
                    <div className='vagon__info__amount'>
                        <span className='vagon__info__title'>Вагоны</span>
                        <button className='btn vagon__info__number vagon__number__active'>07</button>
                        <button className='btn vagon__info__number'>09</button>
                    </div>
                    <span className='vagon__info__text'>Нумерация вагонов начинается с головы поезда</span>
                </div> */}
                {/* <AddVagonInfoDetailed/> */}
                {/* <AddVagonInfoDetailed /> */}
            </div>



            {/* <div>
            <div className='vagon__info__box'>
                <div className='vagon__info'>
                    <div className='vagon__info__amount'>
                        <span className='vagon__info__title'>Вагоны</span>
                        <button className='btn vagon__info__number vagon__number__active'>07</button>
                        <button className='btn vagon__info__number'>09</button>
                    </div>
                    <span className='vagon__info__text'>Нумерация вагонов начинается с головы поезда</span>
                </div>

                <div className='vagon__info__detailed_box'>
                    <div className='vagon__info__detailed'>
                        <div className='vagon__number'>07</div>
                        <div className='vagon__title'>вагон</div>
                    </div>

                    <div className='vagon__seats__amount__block'> 
                        <div className='vagon__seats__title'>Места <span>11</span> </div>
                        <div className='vagon__seats_upper'>Верхние <span>3</span></div>
                        <div className='vagon__seats_lower'>Нижние <span>8</span></div>
                    </div>

                    <div  className='vagon__seats__price__list'>
                        <div className='vagon__seats__price__title'>Стоимость</div>
                        <div className='vagon__seats__price_number'>
                            2920 <span className='vagon__seats__price_sign'>₽</span>
                        </div>
                        <div className='vagon__seats__price_number'>
                            3530 <span className='vagon__seats__price_sign'>₽</span>
                        </div>
                    </div>

                    <div className='additional__services' > 
                        <div className='vagon__seats__service__block'>
                            <span className='vagon__seats__service__block__title'>Обслуживание</span>
                            <span className='vagon__seats__service__block__text'>ФПК</span>
                        </div>
                        <AddServiceButtons />               
                    </div>
                </div>
            </div>
                <div className='info__interest__people'>
                    <div className='info__interest__people__title'> 11 человек выбирают места в этом поезде</div>
                </div>

                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>

                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
            </div>
                
           </div> */}
            <div className='' ></div>
        </>
    )
}