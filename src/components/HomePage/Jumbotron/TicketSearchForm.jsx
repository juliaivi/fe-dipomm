import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useDispatch, useSelector } from 'react-redux';
import SearchCity from './SearchStations/SearchStations';
import { useNavigate } from 'react-router-dom';
import { trainsListRequest, departureDay,citiesItemThere, returnDay, citiesItemTo , citiesItemToId, citiesItemThereId } from '../../../redux/slice/trainSlice';
import AddCalendar from './AddCalendar';


export default function TicketSearchForm() {
    const {citiesFromList,  cityFrom, cityTo, cityFromId, loadingCitiesFrom, errorCitiesFrom, citiesToList, cityToId, dateStartThere, dateBackTo} = useSelector(state => state.train);
    const {train} = useSelector(state => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // useNavigate Перейти на предыдущую или следующую страницы Перенаправить пользователя на определенный URL-адрес
    //дата
    // const [showCalendarHere, setShowCalendarHere] = useState(false);//показывать 1
    // const [showCalendarBack, setShowCalendarBack] = useState(false);//показывать 2
    // const [dateHere, setDateHere] = useState('');//пустой -1-календарь
    // const [dateBack, setDateBack] = useState('');//пустой -2-календарь
    // const [valueStart] = useState(new Date());// от даты 1
    // const [valueBack] = useState(new Date());
    // const [dateStart, setDateStart] = useState(dateStartThere ? dateStartThere : null);//сегодняшней  дата to 1 
    // const [dateEnd, setDateEnd] = useState(dateBackTo ? dateBackTo : null);
    let valid = false;

    

    // const onChange = (value) => { //toLocaleDateString() возвращает строку с языкозависимым представлением части с датой в этой дате
    //     const time = value.toLocaleDateString('en-ca'); //ту дату которую передали из календаря
    //     const start = valueStart.toLocaleDateString('en-ca');//текущая дата&& value !== dateHere
    //     if (value > valueStart || (new Date(time).getTime() === new Date(start).getTime()) ) {//getTime()экземпляров Dateвозвращает количество миллисекунд для этой даты с эпохи 
    //        console.log(dateStartThere, 'dateStartThere')
    //        console.log(value, 'value')
    //        console.log(dateHere, 'dateHere')
    //        console.log(time, 'time')
    //         setDateStart(time);
    //         console.log(value, 'value1')
    //         setDateHere(dateToString(value)); //dateToString -Преобразует объект даты в строку в соответствии с заданным пользователем форматом
    //         dispatch(departureDay(dateToString(value)));
    //         setShowCalendarHere(false);// закрыть календарь
    //     }
    // }

    // let inputValue = ""; 
    // if ((dateStartThere && dateHere === "") || dateStartThere === dateHere) {
    //     inputValue = dateStartThere;
    // } else {
    //     inputValue = dateHere;
    // }

    // let inputValueBack = ""; 
    // if ((dateBackTo && dateBackTo === "") || dateBackTo === dateBack) {
    //     inputValueBack = dateBackTo;
    // } else {
    //     inputValueBack = dateBack;
    // }


    // const onChangeBack = (value) => {
    //     if (value > new Date(dateStart) && dateBackTo !== value) {
    //         setDateEnd(value.toLocaleDateString('en-ca'));
    //         setDateBack(dateToString(value));
    //         dispatch(returnDay(dateToString(value)));
    //         setShowCalendarBack(false);// закрыть календарь
    //     }
    // }

    // const dateToString = (date) => {
    //     const result = date.toLocaleString('ru-Ru', { //toLocaleString() возвращает строку с языкозависимым представлением даты
    //         year: 'numeric',
    //         month: '2-digit',
    //         day: '2-digit',
    //     });

    //     return result.replace(/[,%]/g,''); //находит и заменяет символы
    // } 

    // console.log(cityFrom, cityTo, dateStart, dateEnd, 'cityFrom, cityTo, dateStart, dateEnd' )

    if (cityFrom !== '' && cityTo !== '' && dateStartThere  && dateBackTo ) {
        valid = true
    }

    console.log( dateStartThere, 'dateStartThere789')
    // создается объект поиска с параметрами ДОПИСАТЬvalue={dateHere} onChange={dateStartThere ? setDateHere(dateStartThere) : 'ДД/ММ/ГГ'}
    const lookTickets = (e) => {
        e.preventDefault();
        // console.log(1)
        // console.log(cityFrom , 'cityFrom ', 'cityTo' ,cityTo, 'dateStart', dateStart, 'dateEnd ', dateEnd )
      
        const form = {
            'from_city_id': cityFromId,
            'to_city_id': cityToId,
            'date_start': dateStartThere,
            'date_end':  dateBackTo,
            'sort': 'date',
            'limit': 5,
            'offset': 0
          }
//   console.log(form, 'form')
        dispatch(trainsListRequest(form));
        navigate('/trains');
    }

   const swapCities = (e) => {
    e.preventDefault(); 
    let changeCity = null;
    let changeCityId = null;
    if (cityFrom !== '' && cityTo !== '') {
        changeCity = cityFrom;
        changeCityId = cityFromId;
        dispatch(citiesItemThere(cityTo));
        dispatch(citiesItemTo(changeCity));
        dispatch(citiesItemThereId(cityToId));
        dispatch(citiesItemToId(changeCityId));
    }
   }
    return (
        <>
                        <form className='form__order jumbotron__form__order'>
                <div className='order__box jumbotron__order__box'>
                    <div className='direction jumbotron__direction'>
                        <p className='form__title'>Направление</p>
                        <div className='from__direction'>
                            <SearchCity title={'Откуда'} listcites={citiesFromList}/>
                 
                            <button  className='button btn_reverse' onClick={(e) => swapCities(e)}> </button> 
        
                            <SearchCity title={'Куда'} listcites={citiesToList}/>
                        </div>
                    </div>

                    <div className='date'>
                        <p className='form__title'>Дата</p>
                        <div className='form__date'> 
                        < AddCalendar />
                        {/* < AddCalendar dateEnd={dateEnd} setDateEnd={setDateEnd} dateStart={dateStart} setDateStart={setDateStart}/> */}
                            {/* <div className='form__date-box form__date-box_to'>                         
                                {showCalendarHere &&  
                                    <>
                                        <Calendar  onChange={onChange} value={valueStart} defaultValue='month'/>
                                        <div className='triangle date__here__triangle'></div> 
                                    </>
                                }
                                <input id='date__here' className='date__here' placeholder='ДД/ММ/ГГ' defaultValue={inputValue}  onClick={() => setShowCalendarHere(!showCalendarHere)}/>
                    
                            </div>
                            <div className='form__date-box form__date-box_back'>  
                                {showCalendarBack &&  
                                    <>
                                        <Calendar onChange={onChangeBack} value={valueBack}/>
                                        <div className='triangle date__back__triangle'></div> 
                                    </>
                                }
                                <input id='date__back' className='date__back' placeholder='ДД/ММ/ГГ' defaultValue={inputValueBack}  onClick={() => setShowCalendarBack(!showCalendarBack)}/>
                                {/* // value={dateBack !== "" ? dateBack :'ДД/ММ/ГГ'} */}
{/*                         
                            </div>  */}
                        </div>
                    </div>
                    </div>
                    <button type="submit" className={`button button-find ${valid ? '' : 'button-find-disabled'}`} disabled={valid === true ? false : true} onClick={(e) => lookTickets(e)} >Найти билеты</button>
                </form>
        </>
    )
}