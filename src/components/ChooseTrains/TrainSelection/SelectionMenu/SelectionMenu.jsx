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
import AddCalendar from '../../../HomePage/Jumbotron/AddCalendar';

import { useDispatch, useSelector } from 'react-redux';

export default function SelectionMenu () {
    
    return (
        <>
            <aside className="sidebar">
                <div className="sidebar__options">
                    <form className='sidebar__form'>
                        <div className="date datego">
                            <h4 className="datego__title">Дата поездки</h4>
                            <AddCalendar>
                                <h4 className="datego__title">Дата возвращения</h4> 
                            </AddCalendar>
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