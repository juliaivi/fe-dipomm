import calendar from '../../../../img/calendar.svg';
import coupe from '../../../../img/coupe.svg';
import reservedseat from '../../../../img/reservedSeat.svg';
import seat from '../../../../img/seat.svg';
import star from '../../../../img/star.svg';
import wifi from '../../../../img/wifi.svg';
import express from '../../../../img/express.svg';
import arrowRight from '../../../../img/arrow-right.svg';
import arrowLeft from '../../../../img/arrow-left.svg';
import mug from '../../../../img/mug.svg';
import './selectionMenu.css';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';

import AddRange from './AddRange/AddRange';
import { useState } from 'react';
import LatestTickets from './LatestTickets/LatestTickets';
import AccordionInfo from './AccordionInfi/AccordionInfo';



export default function SelectionMenu () {
    const [range, setRange] = useState('1920');
    const [span, setSpean] = useState('');
    const [inputColor, setInputColor] = useState("#3E3C41");

    const [checkedHere, setCheckedHere] = useState(false);
    const [checkedBack, setCheckedBack] = useState(false);

        //дата
        const [showCalendarHere, setShowCalendarHere] = useState(false);//показывать 1
        const [showCalendarBack, setShowCalendarBack] = useState(false);//показывать 2
        const [dateHere, setDateHere] = useState('');//пустой -1-календарь
        const [dateBack, setDateBack] = useState('');//пустой -2-календарь
        const [valueStart] = useState(new Date());// от даты 1
        const [valueBack] = useState(new Date());
        
        const [dateStart, setDateStart] = useState(null);//сегодняшней  дата to 1 
        const [dateEnd, setDateEnd] = useState(null);
        let iconClick = false;
        let valid = false;
    
        const onChange = (value) => { //toLocaleDateString() возвращает строку с языкозависимым представлением части с датой в этой дате
            const time = value.toLocaleDateString('en-ca'); //ту дату которую передали из календаря
            const start = valueStart.toLocaleDateString('en-ca');//текущая дата
            if (value > valueStart || (new Date(time).getTime() === new Date(start).getTime())) {//getTime()экземпляров Dateвозвращает количество миллисекунд для этой даты с эпохи 
                setDateStart(time);
                setDateHere(dateToString(value)); //dateToString -Преобразует объект даты в строку в соответствии с заданным пользователем форматом
                setShowCalendarHere(false);// закрыть календарь
            }
        }
    
         //выбор даты - конец
        const onChangeBack = (value) => {
            if (value > new Date(dateStart)) {
                setDateEnd(value.toLocaleDateString('en-ca'));
                setDateBack(dateToString(value));
                setShowCalendarBack(false);// закрыть календарь
            }
        }
    
        const dateToString = (date) => {
            const result = date.toLocaleString('ru-Ru', { //toLocaleString() возвращает строку с языкозависимым представлением даты
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
            });
    
            return result.replace(/[,%]/g,''); //находит и заменяет символы
        } 

   
    return (
        <>
            <aside className="sidebar">
                <div className="sidebar__options">
                    <form className='sidebar__form'>
                        <div className="date datego">
                        <div className='sidebar__datego'>
                        <h4 className="datego__title">Дата поездки</h4>
                            <div className='form__date-box form__date-box_to'>                         
                                {showCalendarHere &&  
                                    <>
                                        <Calendar onChange={onChange} value={valueStart} defaultValue='month'/>
                                        <div className='triangle date__here__triangle'></div> 
                                   </>
                                }
                                <input id='date__here' className='date__here' placeholder='ДД/ММ/ГГ' defaultValue={dateHere} onClick={() => setShowCalendarHere(!showCalendarHere)}/>
                    
                            </div>
                            </div>

                            <div className='sidebar__dateback'>
                            <h4 className="datego__title">Дата возвращения</h4> 
                            <div className='form__date-box form__date-box_back'>  
                                {showCalendarBack &&  
                                     <>
                                        <Calendar onChange={onChangeBack} value={valueBack}/>
                                        <div className='triangle date__back__triangle'></div> 
                                    </>
                                }
                                <input  id='date__back' className='date__back' placeholder='ДД/ММ/ГГ' defaultValue={dateBack} onClick={() => setShowCalendarBack(!showCalendarBack)}/>
                            </div>
                            </div> 
                        </div>

                        <div className='options list__options'>
                            <div className='item item__options'>
                                <img src={coupe}  className='item__img item__options__img' alt='coupe'></img>
                                <p className='item__title item__options__title'>Купе</p>
                                <input type="checkbox" id='check1' className='item__check item__options__check'/>
                                <label htmlFor='check1'className='button__check'></label>
                            </div>

                            <div className='item item__options'>
                                <img src={reservedseat} className='item__img item__options__img' alt='reservedseat'></img>
                                <p className='item__title item__options__title'>Плацкарт</p>
                                <input type="checkbox" id='check2' className='item__check item__options__check'/>
                                <label htmlFor='check2'className='button__check'></label>
                            </div>

                            <div className='item item__options'>
                                <img src={seat} className='item__img item__options__img' alt='seat'></img>
                                <p className='item__title item__options__title'>Сидячий</p>
                                <input type="checkbox" id='check3' className='item__check item__options__check'/>
                                <label htmlFor='check3'className='button__check'></label>
                            </div>

                            <div className='item item__options'>
                                <img src={star} className='item__img item__options__img' alt='star'></img>
                                <p className='item__title item__options__title'>Люкс</p>
                                <input type="checkbox" id='check4' className='item__check item__options__check'/>
                                <label htmlFor='check4'className='button__check'></label>
                            </div>

                            <div className='item item__options'>
                                <img src={wifi} className='item__img item__options__img' alt='wifi'></img>
                                <p className='item__title item__options__title'>Wi-Fi</p>
                                <input type="checkbox" id='check5' className='item__check item__options__check'/>
                                <label htmlFor='check5'className='button__check'></label>
                            </div>

                            <div className='item item__options'>
                                <img src={express} className='item__img item__options__img' alt='express'></img>
                                <p className='item__title item__options__title'>Экспресс</p>
                                <input type="checkbox" id='check6' className='item__check item__options__check'/>
                                <label htmlFor='check6'className='button__check'></label>
                            </div>
                        </div>

                        <div className='price'>
                            <h2 className='price__title'>Стоимость</h2>
                            <div className='price__limit'>
                                <div className='price__limit__from'>от</div>
                                <div className='price__limit__before'>до</div>
                            </div>
                            <div className='range'>
                                <AddRange min={1920} max={7000}/>
                            </div>
                        </div>

                        <AccordionInfo />

                        {/* <div  className='there__info'>
                            <div className='there__info__box'>
                                <img src={arrowRight} className='there__info__img' alt='arrowRight'></img>
                                <div className='there__info__title'>Туда</div>
                            </div>
                            <div  className={checkedHere ? 'label__checkbox__plus' : 'checkbox__minus'} 
                            onClick={(e)=> {checkedHere ? setCheckedHere(false) : setCheckedHere(true) }} ></div>  
                        </div>


                        <div className='back__info'>
                            <div className='back__info__box'>
                                <img src={arrowLeft} className='back__info__img' alt='arrowLeft'></img>
                                <div className='there__info__title'>Обратно</div>
                            </div>
                            <div  className={checkedBack ? 'label__checkbox__plus' : 'checkbox__minus'} 
                            onClick={(e)=> {checkedBack ? setCheckedBack(false) : setCheckedBack(true) }} ></div>
                          
                        </div> */}
                    </form>
                </div>
                <div className="sidebar sidebar__info">
                    <h3 className='sidebar__title'>Последние билеты</h3>
                    <LatestTickets />      
                </div>
            </aside>
        </>
    )
}