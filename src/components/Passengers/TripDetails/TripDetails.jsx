import arrowRight from '../../../img/arrow-right.svg';
import arrowLeft from '../../../img/arrow-left.svg';

import Accordion from 'react-bootstrap/Accordion';
import AddDetailsInfo from './AddDetailsInfo/AddDetailsInfo';
import arrowleft from '../../../img/arrowleft.svg';
import arrowrigth from '../../../img/arrowrigth.svg';
import human from '../../../img/human.svg';
import './styleTripDetails.css';

export default function TripDetails() {

    const data = {
        detailsInfo :{
            there: {
                data: '30.08.2018',
                trainNumber:'116C',
                namePlacePoint: 'Адлер',
                namePlaceCity: 'Санкт-Петербург',
                departureDate: '30.08.2018',
                departureTime: '00:10', 
                arrivalDate: '31.08.2018', 
                arrivalTime: '09:52',
                travelTime: '9:42',
                nameDepartureCity: "Москва",
                nameDepartureStation: "Курский вокзал",
                nameCityArrival: "Санкт-Петербург",
                nameArrivalStation: "Ладожский вокзал",
            },

            to: {
                data: '09.09.2018',
                trainNumber:'116C',
                namePlacePoint: 'Адлер',
                namePlaceCity: 'Санкт-Петербург',
                departureDate: '08.09.2018',
                departureTime: '09:52', 
                arrivalDate: '09.08.2018', 
                arrivalTime: '00:10',
                travelTime: '9:42',
                nameDepartureCity: "Санкт-Петербург",
                nameDepartureStation: "Ладожский вокзал",
                nameCityArrival: "Москва",
                nameArrivalStation: "Курский вокзал",
            },
            passengersInfo: {
                numberAdultTickets: 2,
                numberChildrenTickets: 1,
                costAdultTickets: 5840,
                costChildrenTickets: 1920,
                totalAmount: 7760,
            }
        }
    }
    return (
        <>
            <aside className="sidebar">
                <div className='sidebar__details__info'>
                    <div className='sidebar__details__title'> Детали поездки</div>
                    <Accordion defaultActiveKey="0" alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                <img src={arrowRight} className='back__info__img' alt='arrowRight' />
                                <span className='details__text'>Туда</span>
                                <span className='details__data'>{data.detailsInfo.there.data}</span> 
                            </Accordion.Header>
                            <Accordion.Body>
                                <div className='details__info__there'>
                                    <AddDetailsInfo data={data.detailsInfo.there}  arrow={arrowrigth}/>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>      
                        <div className='accordion__line' />
                        <Accordion.Item eventKey="1">
                            <Accordion.Header> 
                                <img src={arrowLeft} className='back__info__img' alt='arrowLeft' />
                                <span className='details__text'>Обратно</span>
                                <span className='details__data'>{data.detailsInfo.to.data}</span> 
                            </Accordion.Header>
                    
                            <Accordion.Body>
                                <div className='details__info__to'>
                                    <AddDetailsInfo data={data.detailsInfo.to}  arrow={arrowleft}/>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header> 
                                <img src={human} className='back__info__img' alt='human' />
                                <span className='details__text'>Пассажиры</span>
                            
                            </Accordion.Header>
                    
                            <Accordion.Body>
                                <div className='passengers__info'>
                                    <div className='passengers__item'>
                                        <span className='number__adult__tickets'>{data.detailsInfo.passengersInfo.numberAdultTickets}</span>
                                        <span className='passengers__text'> Взрослых</span>
                                    </div>
                                    <div className='cost__adult_tickets'>
                                        {data.detailsInfo.passengersInfo.costAdultTickets}
                                        <span className='currency__sign'> ₽</span>
                                    </div>
                                </div>
                                <div className='passengers__info'>
                                    <div className='passengers__item'>
                                        <span className='number__children__tickets'>{data.detailsInfo.passengersInfo.numberChildrenTickets}</span>
                                        <span className='passengers__text'> Ребенок</span>
                                    </div>
                                    <div className='cost__children__tickets'>
                                        {data.detailsInfo.passengersInfo.costChildrenTickets}
                                        <span className='currency__sign'> ₽</span>
                                    </div>
                                </div>   
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                 
                        <div className='information__total__amount__info'>
                            <div className='information__total__amount__title'>Итог</div>
                            <div className='information__total__amount'>
                                <span className='total__amount'>{data.detailsInfo.passengersInfo.totalAmount}</span>
                                <span className='currency__sign'> ₽</span>
                            </div>
                        </div>

                </div>
            </aside>
        </>
    )
}