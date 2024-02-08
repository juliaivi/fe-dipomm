import './selectionMenu.css';
import AddRange from './AddRange/AddRange';
import {useEffect} from 'react';
import LatestTickets from './LatestTickets/LatestTickets';
import AccordionInfo from './AccordionInfi/AccordionInfo';
import AddCalendar from '../../../HomePage/Jumbotron/AddCalendar';

import { useDispatch, useSelector } from 'react-redux';
import { lastRoutesRequest, trainsListRequest, changeValidForm, addLastRoutesItem} from '../../../../redux/slice/trainSlice';
import AddListOptoins from './ListOptions/ListOptions';

export default function SelectionMenu (props) {
    const { validForm, lastRoutesItem, lastRoutes, sort, limit, endArrivalHourTo, endArrivalHourFrom, startArrivalHourTo, startArrivalHourFrom, endDepartureHourTo, endDepartureHourFrom, startDepartureHourTo, startDepartureHourFrom, options, priceFrom, priceTo, cityFromId, cityToId, dateStartThere, dateBackTo} = useSelector(state => state.train);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(lastRoutesRequest())
    }, []);

    useEffect(() => {
        if (cityFromId !== '' && cityToId !== '' && validForm === true) {   
            if(lastRoutesItem !== null){
                dispatch(addLastRoutesItem(null)); 
            } 

            const form = {
                'from_city_id': cityFromId,
                'to_city_id': cityToId,
                'date_start': dateStartThere,
                'date_end': dateBackTo,
                'have_second_class': options[0].check,
                'have_third_class': options[1].check,
                'have_fourth_class': options[2].check,
                'have_first_class': options[3].check,
                'have_wifi': options[4].check,
                'have_express': options[5].check,
                'have_air_conditioning': false,
                'price_min': 500,
                'price_from': priceFrom,
                'price_to': priceTo,
                'start_departure_hour_from': startDepartureHourFrom,
                'start_departure_hour_to': startDepartureHourTo,
                'end_departure_hour_from': endDepartureHourFrom,
                'end_departure_hour_to':  endDepartureHourTo,
                'start_arrival_hour_from': startArrivalHourFrom,
                'start_arrival_hour_to': startArrivalHourTo,
                'end_arrival_hour_from': endArrivalHourFrom,
                'end_arrival_hour_to': endArrivalHourTo,
                'sort':sort,
                'limit': limit,
                'offset': 0
            }
            dispatch(changeValidForm(false));
            dispatch(trainsListRequest(form));
        }
    }, [priceFrom, 
        priceTo, 
        startDepartureHourFrom,
        startDepartureHourTo,
        endDepartureHourFrom,
        endDepartureHourTo,
        startArrivalHourFrom,
        startArrivalHourTo,
        endArrivalHourFrom,
        endArrivalHourTo,
        options[0].check,
        options[1].check,
        options[2].check,
        options[3].check,
        options[4].check,
        options[5].check,
        priceFrom, 
        priceTo, 
        startDepartureHourFrom,
        startDepartureHourTo,
        endDepartureHourFrom,
        endDepartureHourTo,
        startArrivalHourFrom,
        startArrivalHourTo,
        endArrivalHourFrom,
        endArrivalHourTo,
        sort,
        limit])

    return (
        <>
            <aside className="sidebar">
                <div className="sidebar__options">
                    <form className='sidebar__form'>
                        <div className="date datego">
                            <h4 className="datego__title">Дата поездки</h4>
                            <AddCalendar classElem={props.classElem}>
                                <h4 className="datego__title">Дата возвращения</h4> 
                            </AddCalendar >
                        </div>

                        <div className='options list__options'>
                            <AddListOptoins />
                        </div>

                        <div className='price'>
                            <h2 className='price__title'>Стоимость</h2>
                            <div className='price__limit'>
                                <div className='price__limit__from'>от</div>
                                <div className='price__limit__before'>до</div>
                            </div>
                            <div className='range'>
                                <AddRange min={1920} max={7000} type={'price'}/>
                            </div>
                        </div>

                        <AccordionInfo />
                        
                    </form>
                </div>
                <div className="sidebar sidebar__info">
                    <h3 className='sidebar__title'>Последние билеты</h3>
                    <LatestTickets lastRoutes={lastRoutes}/>      
                </div>
            </aside>
        </>
    )
}