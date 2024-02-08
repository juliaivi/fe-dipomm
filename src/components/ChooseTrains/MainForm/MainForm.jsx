import './mainForm.css';
import { useLocation } from 'react-router-dom';
import TicketSearchForm from '../../HomePage/Jumbotron/TicketSearchForm';
import { useSelector } from "react-redux";
import Loader from "../../Preloader";
import Error from "../../Error";

export default function MainForm() {
    const location = useLocation();
    const {loadingTrainsList, errorTrainsList, loadingTrainSeats, errorTrainSeats, loadingTrainSeatsBack, errorTrainSeatsBack} = useSelector(state => state.train);
    return (    
        <>
            <section className="main__form">
                <div className="main__form_box">
                    <div className="jumbotron__banner">
                        <div className="main__form__info">
                            <TicketSearchForm classElem={'main'}/>
                            {((loadingTrainsList && !errorTrainsList) || (loadingTrainSeats && !errorTrainSeats) || (loadingTrainSeatsBack && !errorTrainSeatsBack)) && <Loader/>}
                            {((errorTrainsList && !loadingTrainsList) || (!loadingTrainSeats && errorTrainSeats) || (!loadingTrainSeatsBack && errorTrainSeatsBack)) && <Error />}
                            {((!loadingTrainsList && !errorTrainsList ) && (!loadingTrainSeats && !errorTrainSeats) && (!loadingTrainSeatsBack && !errorTrainSeatsBack)) &&
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
                                        <div className={`stage__passengers ${location.pathname === '/passengers' || location.pathname === '/payment' || location.pathname === '/checkorder'? 'stage_active' : 'stage'} `}> 
                                            <div className="operation__name">
                                                <p className='list__number'>2</p> 
                                                <p className='list__title'>Пассажиры</p>
                                            </div>
                                        </div>    
                                        <div className={`${location.pathname === '/passengers' || location.pathname === 'payment' || location.pathname === '/checkorder'? 'arrow_active ' : 'arrow'}`}> </div>
                                    </div>

                                    <div className='status status__payment'>
                                        <div className={`stage__payment ${location.pathname === '/payment' || location.pathname === '/checkorder'? 'stage_active' : 'stage'}`}> 
                                            <div className="operation__name">
                                                <p className='list__number'>3</p> 
                                                <p className='list__title'>Оплата</p>
                                            </div>
                                        </div>    
                                        <div className={`${location.pathname === '/payment' || location.pathname === '/checkorder'? 'arrow_active ' : 'arrow'}`}> </div>
                                    </div>

                                    <div className='status status__check'>
                                        <div className={` stage__check ${location.pathname === '/checkorder'? 'stage_active' : 'stage'}`}> 
                                            <div className="operation__name">
                                                <p className='list__number'>4</p> 
                                                <p className='list__title'>Проверка</p>
                                            </div>
                                        </div>    
                                    </div>
                                </div>
                            </div>
                            }
                        </div>  
                    </div>  
                </div>
            </section>
        </>
    )
}