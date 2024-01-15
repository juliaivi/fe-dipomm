import './mainForm.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import TicketSearchForm from '../../HomePage/Jumbotron/TicketSearchForm';


export default function MainForm() {
    const {cityFrom, cityFromId, cityTo, cityToId, dateBackTo, dateStartThere, trainsList, citiesFromList, citiesToList} = useSelector(state => state.train);
    const {passengers} = useSelector(state => state);
    const {train} = useSelector(state => state);
    console.log(train, 'train')  
    console.log(cityFrom, cityFromId, cityTo, cityToId, dateBackTo, dateStartThere, trainsList, 'cityFrom, cityFromId, cityTo, cityToId, dateBackTo, dateStartThere, trainsList')
    // cityFrom, cityFromId, cityTo, cityToId, dateBackTo, dateStartThere, trainsList

    console.log(passengers, 'passengers')    
    const location = useLocation()

    return (
        <>
            <section className="main__form">
                <div className="main__form_box">
                    <div className="jumbotron__banner">
                        <div className="main__form__info">
                            <TicketSearchForm />

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
                                        <div className={`stage__passengers ${location === '/passengers' || location === 'payment' || location === '/checkorder'? 'stage_active' : 'stage'} `}> 
                                            <div className="operation__name">
                                                <p className='list__number'>2</p> 
                                                <p className='list__title'>Пассажиры</p>
                                            </div>
                                        </div>    
                                        <div className={`${location === '/passengers' || location === 'payment' || location === '/checkorder'? 'arrow_active ' : 'arrow'}`}> </div>
                                    </div>

                                    <div className='status status__payment'>
                                        <div className={`stage__payment ${location === 'payment' || location === '/checkorder'? 'stage_active' : 'stage'}`}> 
                                            <div className="operation__name">
                                                <p className='list__number'>3</p> 
                                                <p className='list__title'>Оплата</p>
                                            </div>
                                        </div>    
                                        <div className={`${location === 'payment' || location === '/checkorder'? 'arrow_active ' : 'arrow'}`}> </div>
                                    </div>

                                    <div className='status status__check'>
                                        <div className={` stage__check ${location === '/checkorder'? 'stage_active' : 'stage'}`}> 
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