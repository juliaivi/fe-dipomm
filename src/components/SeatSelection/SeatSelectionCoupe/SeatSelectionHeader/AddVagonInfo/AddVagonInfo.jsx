import { useState } from 'react';
import './styleVagonInfo.css';
import AddServiceButtons from '../AddServiceButtons/AddServiceButtons';
import VagonPlacesList from './VagonPlacesList/VagonPlacesList';
import { useSelector, useDispatch } from 'react-redux';
import {setTicketPricesThere, setTicketPricesBack} from '../../../../../redux/slice/passengersSlice';

export default function AddVagonInfo({type}) {
    const {typeSeatsThere, typeSeatsBack} = useSelector(state => state.passengers); // тип вагона
    const {trainSeats, trainSeatsBack} = useSelector(state => state.train);
    const dispatch = useDispatch();

    const [toggleState, setToggleState] = useState();
    let typeSeats;
    let trainSeatsInfo;
  
    const toggleActive = (e, index) => {
        e.preventDefault();
        if (toggleState !== index && type === 'there') {
            dispatch(setTicketPricesThere(0)); //цена, очистка при смене вагона
        } else {
            dispatch(setTicketPricesBack(0));
        }
        setToggleState(index);
    }

    if (type === 'there') {
        typeSeats = typeSeatsThere;  // тип вагона 
        trainSeatsInfo = trainSeats; // инфо по данному типу вагона
    } else {
        typeSeats = typeSeatsBack;
        trainSeatsInfo = trainSeatsBack;
    }

    return (
        <>
                <div className='vagon__info'>
                    <div className='vagon__info__amount'>
                        <span className='vagon__info__title'>Вагоны</span>
                        {/* просматривает по типам вагона, если совпадает делает активный */}
                        {trainSeatsInfo.map((el, index) => (
                            (el.coach.class_type === typeSeats ) ? 
                            
                                <button 
                                    key={index} 
                                    className={`btn vagon__info__number  ${(toggleState === index) ? 'vagon__number__active' : '' }`} 
                                    onClick={(e) => toggleActive(e, index)}>
                                    {index}
                                </button>  
                            : ''
                        ))}
                    
                    </div>
                    <span className='vagon__info__text'>Нумерация вагонов начинается с головы поезда</span>
                </div>
        {/* выводит инфо по данному вагону */}
                {trainSeatsInfo.map((el, index) => (
                            (el.coach.class_type === typeSeats ) ?  
                                    <div key={index} className={`detailed__box ${(toggleState == index) ? 'detailed__box__active' : '' }`}>
                                        <div className={`vagon__info__detailed_box ${el.type}`} >
                                            <div className='vagon__info__detailed'>
                                                <div className='vagon__number'>{index}</div>
                                                <div className='vagon__title'>вагон</div>
                                            </div>
                                        
                                            <div className='vagon__seats__amount__block'> 
                                                <div className='vagon__seats__title'>Места <span>{el.coach.available_seats}</span> </div>
                                                {(el.coach.bottom_price > 0) && <div className='vagon__seats_lower'>Нижние <span>{Math.round(el.coach.available_seats/3)}</span></div>}
                                                {(el.coach.top_price > 0) && <div className='vagon__seats_upper'>Верхние <span>{Math.round(el.coach.side_price === 0 ? 2*(el.coach.available_seats/3) : el.coach.available_seats/3)}</span></div>}
                                                {(el.coach.side_price > 0) && <div className='vagon__seats_upper'>Сидячие места <span>{Math.round(el.coach.available_seats/3)}</span></div>}            
                                            </div>

                                            <div  className='vagon__seats__price__list'>
                                                <div className='vagon__seats__price__title'>Стоимость</div>

                                                    {(el.coach.bottom_price > 0) && <div className='vagon__seats_lower'>
                                                        <span>{el.coach.bottom_price}</span>
                                                        <span className='vagon__seats__price_sign'>₽</span>
                                                    </div>}
                                                    {(el.coach.top_price > 0) && <div className='vagon__seats_upper'>
                                                        <span>{el.coach.top_price}</span>
                                                        <span className='vagon__seats__price_sign'>₽</span>
                                                    </div>}
                                                    {(el.coach.side_price !== 0) && <div className='vagon__seats_upper'>
                                                        <span>{el.coach.side_price}</span>
                                                        <span className='vagon__seats__price_sign'>₽</span>
                                                    </div>}
                                            </div>

                                            <div className='additional__services'> 
                                                <div className='vagon__seats__service__block'>
                                                    <span className='vagon__seats__service__block__title'>Обслуживание</span>
                                                    <span className='vagon__seats__service__block__text'>ФПК</span>
                                                </div>
                                                <div className='service__list__buttons'>
                                                    <AddServiceButtons type={'condition'} services={el.have_air_conditioning} />    
                                                    <AddServiceButtons type={'wifi'} services={el.have_wifi} /> 
                                                    <AddServiceButtons type={'food'} services={el.is_linens_included} /> 
                                                    <AddServiceButtons type={'bedding'} services={el.is_linens_included} />              
                                                </div>       
                                            </div>
                                        </div>

                                        <div className='info__interest__people'>
                                            <div className='info__interest__people__title'>20 человек выбирают места в этом поезде</div>
                                        </div>
                                    {/* тип, listPlaces - места, цена(если такой цены нет, то берет верхнюю цену, номер вагона) */}
                                        <VagonPlacesList type={type} listPlaces={el.seats} price={el.coach.price === 0 ? el.coach.top_price : el.coach.price } vagon={toggleState}/> 
                                    </div>    
                                    
                                : ''
                ))}
        </>
    )
}