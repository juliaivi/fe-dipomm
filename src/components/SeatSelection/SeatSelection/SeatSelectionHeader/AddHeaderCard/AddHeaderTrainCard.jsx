import './styleHeaderTrainCard.css';
import arroWrigth from '../../../../../img/arrowrigth.svg';
import littleTrain from '../../../../../img/littleTrain.svg';
import clock from '../../../../../img/clock.svg';
import { useState } from 'react';
// import AddBtnType from './AddBtnType/AddBtnType';
import AddBtnType from './AddBtnType/AddBtnType';

export default function AddHeaderTrainCard() {
    const [valueInputChild, setValueInputChild] = useState(0);
    const [valueInputAdult, setValueInputAdult] = useState(1);
    const [valueInputChildNoSeats, setValueInputChildNoSeats] = useState(0);
    const [typeVagonBtn, setTypeVagonBtn] = useState(false);

    const changeInput = (e) => {
        if (e.target.classList.contains('number__tickets__input_child')) {
            setValueInputChild(e.target.value);
        } else if (e.target.classList.contains('number__tickets__input_adult')) {
            setValueInputAdult(e.target.value);
        } else (
            setValueInputChildNoSeats(e.target.value)
        )  
    }

    return (
        <>
            <div>
                <div className='train__information_box' >
                    <div className='train__information'>
                        <img className='train__information_icon' src={littleTrain} alt=''></img>
                        <div className='train__direction'>
                            <div className='train__direction_number'>116C</div>
                            <div className='train__direction_points'>Адлер →</div>
                            <div className='train__direction_depature'>Москва →</div>
                            <div className='train__direction_point-arrival'>Санкт-Петербург</div>
                        </div>
                    </div>
                    <div className='train__direction__there'>
                        <div className='train__direction__start'>
                            <div className='train__direction__time'>00:10</div>
                            <div className='train__direction__city'>Москва</div>
                            <div className='train__direction__station'>Курский вокзал</div>
                        </div>
                            <img className='train__direction__img' src={arroWrigth} alt='' ></img>
                        <div className='train__direction__end'>
                        <div className='train__direction__time'>09:52</div>
                            <div className='train__direction__city'>Санкт-Петербург</div>
                            <div className='train__direction__station'>Ладожский вокзал</div>
                        </div>
                    </div>
                    <div className='seat__duration'>
                        <img className='seat__duration_img' src={clock} alt='' ></img>
                        <div className='seat__duration__time'>
                            <div className='seat__duration__time_watch'> 9 часов</div>
                            <div className='seat__duration__time_minutes'> 42 минуты</div>
                        </div>
                        
                    </div>
                </div>

                <div className='number__tickets' >
                    <h3 className='number__tickets__title'>Количество билетов</h3>
                    <div className='number__tickets__menu'>
                        <div className='number__tickets__type number__tickets__type_adult'>
                            <div className='number__tickets__type_box'>
                                <span className='number__tickets__input__text'>Взрослых   — </span>
                                <input type='number' className='number__tickets__input number__tickets__input_adult' id='inputTypeTicketAdult' defaultValue="1" onChange={changeInput}></input>
                            </div>
                            {( Number(valueInputAdult) === 1 ) &&   <label htmlFor='inputTypeTicketAdult' className='number__tickets__adult__input__label' >Можно добавить еще 3 пассажиров</label> }
                            {( Number(valueInputAdult) === 2 ) &&   <label htmlFor='inputTypeTicketAdult' className='number__tickets__adult__input__label' >Можно добавить еще 2 пассажиров</label> }
                            {( Number(valueInputAdult) === 3 ) &&   <label htmlFor='inputTypeTicketAdult' className='number__tickets__adult__input__label' >Можно добавить еще 1 пассажирf</label> }
                        </div>
                        <div className='number__tickets__type number__tickets__type_child'>
                            <div className='number__tickets__type_box'>
                                <span className='number__tickets__input__text' >Детских   — </span>
                                <input type='number' className='number__tickets__input number__tickets__input_child' id='inputTypeTicketChild' defaultValue="0" onChange={changeInput}></input>
                            </div>
                           {( Number(valueInputChild) === 1 ) &&   <label htmlFor='inputTypeTicketChild' className='number__tickets__child__input__label'>Можно добавить еще 3 детей до 10 лет.Свое место в вагоне, как у взрослых, но дешевле в среднем на 50-65%</label> }
                           {( Number(valueInputChild) === 2 ) &&   <label htmlFor='inputTypeTicketChild' className='number__tickets__child__input__label'>Можно добавить еще 2 детей до 10 лет.Свое место в вагоне, как у взрослых, но дешевле в среднем на 50-65%</label> }
                           {( Number(valueInputChild) === 3 ) &&   <label htmlFor='inputTypeTicketChild' className='number__tickets__child__input__label'>Можно добавить еще 1 ребенка до 10 лет.Свое место в вагоне, как у взрослых, но дешевле в среднем на 50-65%</label> }
                        </div>

                        <div className='number__tickets__type number__tickets__type_child-no-seats'>
                            <div className='number__tickets__type_box'>
                                <span className='number__tickets__input__text'>Детских "без места"   — </span>
                                <input type='number' className='number__tickets__input input__child__no-seats' defaultValue="0"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='type__vagon'>
                    <h3 className='type__vagon__title'>Тип вагона</h3>
                    <AddBtnType />   
                </div>
            </div>
        </>
    )
}