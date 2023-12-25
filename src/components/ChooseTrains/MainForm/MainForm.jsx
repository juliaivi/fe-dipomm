import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import { useState } from 'react';
import './mainForm.css';
import SearchCity from '../../HomePage/Jumbotron/SearchStations/SearchStations';

export default function MainForm() {
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

    const lookTickets = () => {
       let a=0;
    }

    return (
        <>
            <section className="main__form">
                <div className="main__form_box">
                    <div className="jumbotron__banner">
                        <div className="main__form__info">
                            <form className='form__order'>
                                <div className='order__box'>
                                <div className='direction'>
                                    <p className='form__title'>Направление</p>
                                    <div className='from__direction form__order_direction'>
                                        <SearchCity />

                                        <button className='btn btn_reverse'> </button> 

                                        <SearchCity />    
                                    </div>
                                </div>
                                <div className='date '>
                                <div className='form__order__date'>
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
                                </div></div>
                    </div>
                    </div>
                    <button className='button button-find' onClick={lookTickets} disabled={valid ? false : true}>Найти билеты</button>
                </form>
                            <div className='registration__stage'>
                                <div className='registration__stage__box'>
                                    <div className='status status__tickets'>
                                        <div className='stage__tickets stage_active'> 
                                            <div className="operation__name">
                                                <p className='list__number'>1</p> 
                                                <p className='list__title'>Билеты</p>
                                            </div>
                                        </div>    
                                        <div className="arrow_active"> </div>
                                    </div>
                                

                                    <div className='status status__passengers'>
                                        <div className=' stage__passengers stage_active'> 
                                            <div className="operation__name">
                                                <p className='list__number'>2</p> 
                                                <p className='list__title'>Пассажиры</p>
                                            </div>
                                        </div>    
                                        <div className="arrow_active"> </div>
                                    </div>

                                    <div className='status status__payment'>
                                        <div className=' stage__payment stage'> 
                                            <div className="operation__name">
                                                <p className='list__number'>3</p> 
                                                <p className='list__title'>Оплата</p>
                                            </div>
                                        </div>    
                                        <div className="arrow"> </div>
                                    </div>

                                    <div className='status status__check'>
                                        <div className=' stage__check stage'> 
                                            <div className="operation__name">
                                                <p className='list__number'>4</p> 
                                                <p className='list__title'>Проверка</p>
                                            </div>
                                        </div>    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </section>
        </>
    )
}