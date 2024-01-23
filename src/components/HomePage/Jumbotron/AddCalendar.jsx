import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startDate, backDay, departureDay, returnDay } from '../../../redux/slice/trainSlice';

export default function AddCalendar({ children }) {
    const {dateStartThere, returnDayBack, departureDayHere} = useSelector(state => state.train);
    const dispatch = useDispatch();
    const [valueStart] = useState(new Date());// от даты 1
    const [valueBack] = useState(new Date());
   
    const [dateHere, setDateHere] = useState(departureDayHere  ? departureDayHere : '');
    const [dateBack, setDateBack] = useState(returnDayBack ? returnDayBack :'');

    const [showCalendarHere, setShowCalendarHere] = useState(false);
    const [showCalendarBack, setShowCalendarBack] = useState(false);//показывать 2

    useEffect(() => {
        setDateBack(returnDayBack );
        setDateHere(departureDayHere);
    }, [departureDayHere, returnDayBack])

    const onChange = (value) => { //toLocaleDateString() возвращает строку с языкозависимым представлением части с датой в этой дате
        const time = value.toLocaleDateString('en-ca'); //ту дату которую передали из календаря
        const start = valueStart.toLocaleDateString('en-ca');//текущая дата
        if (value > valueStart || (new Date(time).getTime() === new Date(start).getTime())) {//getTime()экземпляров Dateвозвращает количество миллисекунд для этой даты с эпохи 
            dispatch(departureDay(dateToString(value)));
            dispatch(startDate(time));
            setShowCalendarHere(false);// закрыть календарь
        }
    }

    const onChangeBack = (value) => {
        if (value > new Date(dateStartThere)) {
            dispatch(returnDay(dateToString(value)));
            dispatch(backDay(value.toLocaleDateString('en-ca')));
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
            <div className='form__date-box form__date-box_to'>                         
                {showCalendarHere &&  
                    <>
                        <Calendar  onChange={onChange} value={valueStart} defaultValue='month'/>
                        <div className='triangle date__here__triangle'></div> 
                    </>
                }
                    <input id='date__here' className='date__here' placeholder='ДД/ММ/ГГ' value={dateHere} onChange={() =>setDateHere(departureDayHere) } onClick={() => setShowCalendarHere(!showCalendarHere)}/>       
            </div>
            { children }
            <div className='form__date-box form__date-box_back'>  
                {showCalendarBack &&  
                    <>
                        <Calendar onChange={onChangeBack} value={valueBack}/>
                        <div className='triangle date__back__triangle'></div> 
                    </>
                }
            <input id='date__back' className='date__back' placeholder='ДД/ММ/ГГ' value={dateBack} onChange={() => setDateBack(returnDayBack)} onClick={() => setShowCalendarBack(!showCalendarBack)}/>                      
            </div> 
        </>
    )
}