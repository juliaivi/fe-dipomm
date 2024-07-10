import Accordion from 'react-bootstrap/Accordion';
import './accordioninfo.css';
import AddRange from '../AddRange/AddRange';
import arrowRight from '../../../../../img/arrow-right.svg';
import arrowLeft from '../../../../../img/arrow-left.svg';
import { useSelector } from 'react-redux';
import React from 'react';

export default function AccordionInfo() {
  const {
    endArrivalHourTo,
    endArrivalHourFrom,
    startArrivalHourTo,
    startArrivalHourFrom,
    endDepartureHourTo,
    endDepartureHourFrom,
    startDepartureHourTo,
    startDepartureHourFrom,
  } = useSelector((state) => state.train);

  return (
    <>
      <Accordion defaultActiveKey={['0', '1']} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <img
              src={arrowLeft}
              className="back__info__img"
              alt="arrowLeft"
            ></img>{' '}
            Туда
          </Accordion.Header>
          <Accordion.Body>
            <h2 className="timet__departures">Время отбытия</h2>
            <AddRange
              min={startDepartureHourFrom}
              max={startDepartureHourTo}
              type={'departure-from'}
            />
            <h2 className="time__arrivals">Время прибытия</h2>
            <AddRange
              min={endDepartureHourFrom}
              max={endDepartureHourTo}
              type={'departure-to'}
            />
          </Accordion.Body>
        </Accordion.Item>
        <div className="accordion__line" />
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <img src={arrowRight} className="back__info__img" alt="arrowLeft" />{' '}
            Обратно
          </Accordion.Header>

          <Accordion.Body>
            <h2 className="timet__departures">Время отбытия</h2>
            <AddRange
              min={startArrivalHourFrom}
              max={startArrivalHourTo}
              type={'arrival-from'}
            />
            <h2 className="time__arrivals">Время прибытия</h2>
            <AddRange
              min={endArrivalHourFrom}
              max={endArrivalHourTo}
              type={'arrival-to'}
            />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
