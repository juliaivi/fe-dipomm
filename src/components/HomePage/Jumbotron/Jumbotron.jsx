import {  useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './jumbotron.css';

import SearchCity from './SearchStations/SearchStations';

export default function Jumbotron() {

    //дата
    const [showCalendarHere, setShowCalendarHere] = useState(false);//показывать 1
    const [showCalendarBack, setShowCalendarBack] = useState(false);//показывать 2
    const [dateHere, setDateHere] = useState('');//пустой -1-календарь
    const [dateBack, setDateBack] = useState('');//пустой -2-календарь
    const [valueStart] = useState(new Date());// от даты 1
    const [valueBack] = useState(new Date());

    const [dateStart, setDateStart] = useState(null);//сегодняшней  дата to 1 
    const [dateEnd, setDateEnd] = useState(null);
    let valid = false;
    
    //выбор даты - начало
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

    // создается объект поиска с параметрами ДОПИСАТЬ
    const lookTickets = () => {
       
    }

// поменяться местами
    // const swapPlaces = () => {
    //     let change;
    //     if (cityFrom !== '' && cityTo !== '') {
    //         change = cityFrom;
    //         setCityFrom(cityTo);
    //         setCityTo(change);
    //     }
    // }

    return (
        <section className="jumbotron">
            <div className='jumbotron__box'>
            <div className='jumbotron__banner'>
            <div className='jumbotron__info'>     
                <div className='jumbotron__title__box'>
               
                    <p className="jumbotron__title">Вся жизнь -</p>
                    <h2 className="jumbotron__title strong">путешествие!</h2>
                </div>
                <form className='form__order jumbotron__form__order'>
                <div className='order__box jumbotron__order__box'>
                    <div className='direction jumbotron__direction'>
                        <p className='form__title'>Направление</p>
                        <div className='from__direction'>
                            <SearchCity title={'Откуда'}/>
                 
                            <button className='button btn_reverse'> </button> 
        
                            <SearchCity title={'Куда'}/>
                        </div>
                    </div>

                    <div className='date'>
                        <p className='form__title'>Дата</p>
                        <div className='form__date'> 
                            <div className='form__date-box form__date-box_to'>                         
                                {showCalendarHere &&  
                                    <>
                                        <Calendar onChange={onChange} value={valueStart} defaultValue='month'/>
                                        <div className='triangle date__here__triangle'></div> 
                                    </>
                                }
                                <input id='date__here' className='date__here' placeholder='ДД/ММ/ГГ' defaultValue={dateHere} onClick={() => setShowCalendarHere(!showCalendarHere)}/>
                    
                            </div>
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
                    </div>
                    <button className='button button-find' onClick={lookTickets} disabled={valid ? false : true}>Найти билеты</button>
                </form>
                </div>
                </div>
            </div> 
        </section>
    )
}