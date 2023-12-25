import Accordion from 'react-bootstrap/Accordion';
import './accordioninfo.css';
import AddRange from '../AddRange/AddRange';

import arrowRight from '../../../../../img/arrow-right.svg';
import arrowLeft from '../../../../../img/arrow-left.svg';

export default function AccordionInfo() {
    return(
        <>
            <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                <img src={arrowLeft} className='back__info__img' alt='arrowLeft'></img> Туда</Accordion.Header>
                <Accordion.Body>
                    <h2 className='timet__departures'>Время отбытия</h2>
                    <AddRange min={0} max={24}/>
                    <h2 className='time__arrivals'>Время прибытия</h2>
                    <AddRange min={0} max={24}/>
                </Accordion.Body>
            </Accordion.Item>      
             <div className='accordion__line' />
            <Accordion.Item eventKey="1">
                <Accordion.Header> 
                    <img src={arrowRight} className='back__info__img' alt='arrowLeft' /> Обратно
                </Accordion.Header>
         
                <Accordion.Body>
                    <h2 className='timet__departures'>Время отбытия</h2>
                    <AddRange min={0} max={24}/>
                    <h2 className='time__arrivals'>Время прибытия</h2>
                    <AddRange min={0} max={24}/>
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </>
    )
}