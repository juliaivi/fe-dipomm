import data from '../../../../../data/latestTicketsBlock.json';
import mug from '../../../../../img/mug.svg';
import wifi from '../../../../../img/wifi.svg';
import express from '../../../../../img/express.svg';
import './latestTicket.css';

export default function LatestTickets() {
    return (
       <>
        {data[0].latestTickets.map((item, index) => (
                        <div className='sidebar__item' key={index}> 
                            <div className='list__cities'>
                                <div className='city__name'>{item.cityfrom}</div>
                                <div className='city__name'>{item.cityto}</div>
                            </div>
                            <div className='list__stations'>
                                <div className='station__names station__names_start'>{item.stationfrom}</div>
                                <div className='station__names station__names_end'>{item.stationto}</div>
                            </div>
                            <div className='item__info'>
                                <div className='list__services'> 
                                    <img src={wifi} className='services__img' alt='wifi'></img>
                                    <img src={express} className='services__img' alt='express'></img>
                                    <img src={mug} className='services__img' alt='mug'></img>
                                </div>
                                
                                <div className='ticket__price__box'>
                                    <p className='ticket__price__from'>от</p>
                                    <p className='ticket__price__number'>{item.ticketprice}</p>
                                    <p className='ticket__price__type__currency'>₽</p>
                                </div>
                            </div>
                        </div>
        ))}
      </>
    )
}