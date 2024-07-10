import arrowRight from '../../../img/arrow-right.svg';
import arrowLeft from '../../../img/arrow-left.svg';
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import AddDetailsInfo from './AddDetailsInfo/AddDetailsInfo';
import arrowleft from '../../../img/arrowleft.svg';
import arrowrigth from '../../../img/arrowrigth.svg';
import human from '../../../img/human.svg';
import './styleTripDetails.css';
import { useSelector } from 'react-redux';
import { conversionData } from './conversionData';

export default function TripDetails() {
  const { form, selectedTrain, departureDayHere } = useSelector(
    (state) => state.train,
  );
  const {
    seatsThere,
    selectedPlacesThere,
    ticketPricesThere,
    selectedPlacesBack,
  } = useSelector((state) => state.passengers);
  return (
    <>
      <aside className="sidebar">
        <div className="sidebar__details__info">
          <div className="sidebar__details__title"> Детали поездки</div>
          <Accordion defaultActiveKey={['0', '1', '2']} alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <img
                  src={arrowRight}
                  className="back__info__img"
                  alt="arrowRight"
                />
                <span className="details__text">Туда</span>
                <span className="details__data">
                  {form.date_start
                    ? conversionData(form.date_start)
                    : departureDayHere}
                </span>
              </Accordion.Header>
              <Accordion.Body>
                <div className="details__info__there">
                  <AddDetailsInfo
                    data={selectedTrain.departure}
                    arrow={arrowrigth}
                  />
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <div className="accordion__line" />
            {selectedPlacesBack.length > 0 && selectedTrain.arrival && (
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <img
                    src={arrowLeft}
                    className="back__info__img"
                    alt="arrowLeft"
                  />
                  <span className="details__text">Обратно</span>
                  <span className="details__data">
                    {form.date_end ? conversionData(form.date_end) : ''}
                  </span>
                </Accordion.Header>

                <Accordion.Body>
                  <div className="details__info__to">
                    <AddDetailsInfo
                      data={selectedTrain.arrival}
                      arrow={arrowleft}
                    />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            )}
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <img src={human} className="back__info__img" alt="human" />
                <span className="details__text">Пассажиры</span>
              </Accordion.Header>

              <Accordion.Body>
                <div className="passengers__info">
                  <div className="passengers__item">
                    <span className="number__adult__tickets">
                      {seatsThere[0].count}
                    </span>
                    <span className="passengers__text"> Взрослых</span>
                  </div>
                  <div className="cost__adult_tickets">
                    {Number(seatsThere[0].count) * selectedPlacesThere[0].price}
                    <span className="currency__sign"> ₽</span>
                  </div>
                </div>
                {Number(seatsThere[1].count) > 0 && (
                  <div className="passengers__info">
                    <div className="passengers__item">
                      <span className="number__children__tickets">
                        {Number(seatsThere[1].count) +
                          Number(seatsThere[2].count)}
                      </span>
                      <span className="passengers__text"> Ребенок</span>
                    </div>
                    <div className="cost__children__tickets">
                      {Number(seatsThere[0].count) *
                        selectedPlacesThere[0].price}
                      <span className="currency__sign"> ₽</span>
                    </div>
                  </div>
                )}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <div className="information__total__amount__info">
            <div className="information__total__amount__title">Итог</div>
            <div className="information__total__amount">
              <span className="total__amount">{ticketPricesThere}</span>
              <span className="currency__sign"> ₽</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
