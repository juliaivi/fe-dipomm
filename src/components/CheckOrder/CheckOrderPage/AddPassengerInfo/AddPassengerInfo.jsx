import passengerIcon from '../../../../img/passengerIcon.svg';
import React from 'react';
import PropTypes from 'prop-types';

export default function AddPassengersInfo({ el, index }) {
  return (
    <>
      <div className="passengers__info__item" key={index}>
        <div className="passengers__info__type">
          <img
            src={passengerIcon}
            className="passengers__info__img"
            alt="passengerIcon"
          ></img>
          <div className="passengers__type">
            {el.type === 'adult' ? 'Взрослый' : 'Детский'}
          </div>
        </div>
        <div className="passengers__info__box">
          <div className="passengers__full__name">
            {el.surname + ' ' + el.name + ' ' + el.twoSurname}
          </div>
          <div className="passengers__gender">Пол{' ' + el.genderType}</div>
          <div className="passengers__date__birth">
            Дата рождения{' ' + el.dateBirth}
          </div>
          <div className="passengers__document__info">
            {el.type === 'adult'
              ? `Паспорт  ${el.series}  ${el.number}`
              : `Свидетельство о рождении ${el.numberChild}`}
          </div>
        </div>
      </div>
    </>
  );
}

AddPassengersInfo.propTypes = {
  el: PropTypes.object,
  index: PropTypes.number,
};
