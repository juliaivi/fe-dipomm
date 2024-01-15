import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { trainsListRequest, departureDay,citiesItemThere, returnDay, citiesItemTo , citiesItemToId, citiesItemThereId } from '../../../redux/slice/trainSlice';


export default function AddCalendar() {
    const {citiesFromList,  cityFrom, cityTo, cityFromId, loadingCitiesFrom, errorCitiesFrom, citiesToList, cityToId, dateStartThere, dateBackTo} = useSelector(state => state.train);
    const dispatch = useDispatch();
    const [valueStart] = useState(new Date());// от даты 1
    const [valueBack] = useState(new Date());
   
    const [dateHere, setDateHere] = useState(dateStartThere ? dateStartThere : '');
    const [dateBack, setDateBack] = useState(dateBackTo ? dateBackTo :'');

    const [showCalendarHere, setShowCalendarHere] = useState(false);
    const [showCalendarBack, setShowCalendarBack] = useState(false);//показывать 2
    const [dateStart, setDateStart] = useState(dateStartThere ? dateStartThere : null);//сегодняшней  дата to 1 
    const [dateEnd, setDateEnd] = useState(dateBackTo ? dateBackTo : null);

    let inputValue = ""; 


    const onChange = (value) => { //toLocaleDateString() возвращает строку с языкозависимым представлением части с датой в этой дате

        console.log(7777)
        console.log(value, 'value')
        const time = value.toLocaleDateString('en-ca'); //ту дату которую передали из календаря
        const start = valueStart.toLocaleDateString('en-ca');//текущая дата
        if (value > valueStart || (new Date(time).getTime() === new Date(start).getTime())) {//getTime()экземпляров Dateвозвращает количество миллисекунд для этой даты с эпохи 
            console.log(time, 'time777')
            setDateStart(time);
            console.log(value, 'value')
            dispatch(departureDay(dateToString(value)));
            setDateHere(dateToString(value)); //dateToString -Преобразует объект даты в строку в соответствии с заданным пользователем форматом
            console.log(value, 'value')
            
            console.log(dateHere, 'dateHere', dateStartThere, 'dateStartThere', value, 'value')
            setShowCalendarHere(false);// закрыть календарь
        }
    }

   console.log(dateHere, 'dateHere', dateStartThere, 'dateStartThere')

    const onChangeBack = (value) => {
        if (value > new Date(dateStart)) {
            setDateEnd(value.toLocaleDateString('en-ca'));
            setDateBack(dateToString(value));
            dispatch(returnDay(dateToString(value)));
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

   
    console.log(dateStartThere, 'dateStartThere', dateHere, 'dateHere')


    return (
        <>
            <div className='form__date-box form__date-box_to'>                         
                                {showCalendarHere &&  
                                    <>
                                        <Calendar  onChange={onChange} value={valueStart} defaultValue='month'/>
                                        <div className='triangle date__here__triangle'></div> 
                                    </>
                                }
                                <input id='date__here' className='date__here' placeholder='ДД/ММ/ГГ' defaultValue={dateHere}  onClick={() => setShowCalendarHere(!showCalendarHere)}/>
                    
                            </div>
                            <div className='form__date-box form__date-box_back'>  
                                {showCalendarBack &&  
                                    <>
                                        <Calendar onChange={onChangeBack} value={valueBack}/>
                                        <div className='triangle date__back__triangle'></div> 
                                    </>
                                }
                                <input id='date__back' className='date__back' placeholder='ДД/ММ/ГГ' defaultValue={dateBack}  onClick={() => setShowCalendarBack(!showCalendarBack)}/>
                        
            </div> 
        </>
    )
}