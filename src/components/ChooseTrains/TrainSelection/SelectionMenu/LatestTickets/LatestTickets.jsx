import mug from '../../../../../img/mug.svg';
import wifi from '../../../../../img/wifi.svg';
import express from '../../../../../img/express.svg';
import './latestTicket.css';
import {addLastRoutesItem} from '../../../../../redux/slice/trainSlice';
import { useDispatch } from 'react-redux';

export default function LatestTickets({lastRoutes}) {
    const dispatch = useDispatch();

    const ViewTicketInformation = (item) => { 
        dispatch(addLastRoutesItem(item));
    }

    return (
       <>
        {lastRoutes.map((item) => (
                        <div className='sidebar__item' key={item.departure._id} onClick={() => ViewTicketInformation(item)}> 
                            <div className='list__cities'>
                                <div className='city__name'>{item.departure.from.city.name}</div>
                                <div className='city__name'>{item.departure.to.city.name}</div>
                            </div>
                            <div className='list__stations'>
                                <div className='station__names station__names_start'>{item.departure.from.railway_station_name} вокзал</div>
                                <div className='station__names station__names_end'>{item.departure.to.railway_station_name} вокзал</div>
                            </div>
                            <div className='item__info'>
                                <div className='list__services'> 
                                    <img src={wifi} className='services__img' alt='wifi'></img>
                                    <img src={express} className='services__img' alt='express'></img>
                                    <img src={mug} className='services__img' alt='mug'></img>
                                </div>
                                
                                <div className='ticket__price__box'>
                                    <p className='ticket__price__from'>от</p>
                                    <p className='ticket__price__number'>{item.min_price}</p>
                                    <p className='ticket__price__type__currency'>₽</p>
                                </div>
                            </div>
                        </div>
        ))}
      </>
    )
}