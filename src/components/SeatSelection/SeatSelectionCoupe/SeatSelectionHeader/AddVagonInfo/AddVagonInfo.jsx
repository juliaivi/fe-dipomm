import React, { useState } from 'react';
import './styleVagonInfo.css';
import AddServiceButtons from '../AddServiceButtons/AddServiceButtons';
import VagonPlacesList from './VagonPlacesList/VagonPlacesList';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

export default function AddVagonInfo({ type }) {
  const { typeSeatsThere, typeSeatsBack } = useSelector(
    (state) => state.passengers,
  );
  const { trainSeats, trainSeatsBack } = useSelector((state) => state.train);

  const [toggleState, setToggleState] = useState(null);
  let typeSeats;
  let trainSeatsInfo;

  const toggleActive = (e, index) => {
    e.preventDefault();
    setToggleState(index);
  };

  if (type === 'there') {
    typeSeats = typeSeatsThere; // тип вагона
    trainSeatsInfo = trainSeats; // инфо по данному типу вагона
  } else {
    typeSeats = typeSeatsBack;
    trainSeatsInfo = trainSeatsBack;
  }

  return (
    <>
      <div className="vagon__info">
        <div className="vagon__info__amount">
          <span className="vagon__info__title">Вагоны</span>
          {trainSeatsInfo.map((el, index) =>
            el.coach.class_type === typeSeats ? (
              <button
                key={index}
                className={`btn vagon__info__number  ${toggleState === index && toggleState !== null ? 'vagon__number__active' : ''}`}
                onClick={(e) => toggleActive(e, index)}
              >
                {index}
              </button>
            ) : (
              ''
            ),
          )}
        </div>
        <span className="vagon__info__text">
          Нумерация вагонов начинается с головы поезда
        </span>
      </div>
      {trainSeatsInfo.map((el, index) =>
        el.coach.class_type === typeSeats ? (
          <div
            key={index}
            className={`detailed__box ${toggleState == index ? 'detailed__box__active' : ''}`}
          >
            <div className={`vagon__info__detailed_box ${el.type}`}>
              <div className="vagon__info__detailed">
                <div className="vagon__number">{index}</div>
                <div className="vagon__title">вагон</div>
              </div>

              <div className="vagon__seats__amount__block">
                <div className="vagon__seats__title">
                  Места <span>{el.coach.available_seats}</span>{' '}
                </div>
                {el.coach.bottom_price > 0 && (
                  <div className="vagon__seats_lower">
                    Нижние{' '}
                    <span>{Math.round(el.coach.available_seats / 3)}</span>
                  </div>
                )}
                {el.coach.top_price > 0 && (
                  <div className="vagon__seats_upper">
                    Верхние{' '}
                    <span>
                      {Math.round(
                        el.coach.side_price === 0
                          ? 2 * (el.coach.available_seats / 3)
                          : el.coach.available_seats / 3,
                      )}
                    </span>
                  </div>
                )}
                {el.coach.side_price > 0 && (
                  <div className="vagon__seats_upper">
                    Сидячие места{' '}
                    <span>{Math.round(el.coach.available_seats / 3)}</span>
                  </div>
                )}
              </div>

              <div className="vagon__seats__price__list">
                <div className="vagon__seats__price__title">Стоимость</div>

                {el.coach.bottom_price > 0 && (
                  <div className="vagon__seats_lower">
                    <span>{el.coach.bottom_price}</span>
                    <span className="vagon__seats__price_sign">₽</span>
                  </div>
                )}
                {el.coach.top_price > 0 && (
                  <div className="vagon__seats_upper">
                    <span>{el.coach.top_price}</span>
                    <span className="vagon__seats__price_sign">₽</span>
                  </div>
                )}
                {el.coach.side_price !== 0 && (
                  <div className="vagon__seats_upper">
                    <span>{el.coach.side_price}</span>
                    <span className="vagon__seats__price_sign">₽</span>
                  </div>
                )}
              </div>

              <div className="additional__services">
                <div className="vagon__seats__service__block">
                  <span className="vagon__seats__service__block__title">
                    Обслуживание
                  </span>
                  <span className="vagon__seats__service__block__text">
                    ФПК
                  </span>
                </div>
                <div className="service__list__buttons">
                  <AddServiceButtons
                    type={'condition'}
                    services={el.coach.have_air_conditioning}
                  />
                  <AddServiceButtons
                    type={'wifi'}
                    services={el.coach.have_wifi}
                  />
                  <AddServiceButtons
                    type={'food'}
                    services={el.coach.is_linens_included}
                  />
                  <AddServiceButtons
                    type={'bedding'}
                    services={el.coach.is_linens_included}
                  />
                </div>
              </div>
            </div>

            <div className="info__interest__people">
              <div className="info__interest__people__title">
                20 человек выбирают места в этом поезде
              </div>
            </div>
            {/* цена(если такой цены нет, то берет верхнюю цену, номер вагона) */}
            <VagonPlacesList
              type={type}
              listPlaces={el.seats}
              price={el.coach.price === 0 ? el.coach.top_price : el.coach.price}
              vagon={toggleState}
            />
          </div>
        ) : (
          ''
        ),
      )}
    </>
  );
}

AddVagonInfo.propTypes = {
  type: PropTypes.string,
};
