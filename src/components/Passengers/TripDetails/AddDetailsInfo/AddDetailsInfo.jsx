import { useSelector } from 'react-redux';
import { convertingSecondsHours } from '../../../ChooseTrains/TrainSelection/FoundTrains/AddCard/convertingSecondsHours';
import { conversionData } from '../conversionData';
import React from 'react';
import PropTypes from 'prop-types';

export default function AddDetailsInfo({ data, arrow }) {
  const { form, departureDayHere } = useSelector((state) => state.train);
  return (
    <>
      <div className="details__train">
        <div className="details__train__text">№ Поезда</div>
        <div className="details__train__number">{data.train.name}</div>
      </div>
      <div className="details__name__info">
        <div className="details__train__text">Название</div>
        <div className="details__startin__point">
          <div className="details__departure__point">{data.from.city.name}</div>
          <div className="details__departure__city">{data.to.city.name}</div>
        </div>
      </div>

      <div className="details__time__info">
        <div className="departure__information">
          <div className="departure__time">
            {convertingSecondsHours(data.from.datetime)}
          </div>
          <div className="departure__date">
            {form.date_start
              ? conversionData(form.date_start)
              : departureDayHere}
          </div>
        </div>
        <div className="travel__time__info">
          <div className="trave__time">
            {convertingSecondsHours(data.duration)}
          </div>
          <img src={arrow} className="travel__arrow" alt="arrow" />
        </div>
        <div className="arrival__information">
          <div className="arrival__time">
            {convertingSecondsHours(data.to.datetime)}
          </div>
          <div className="arrival__date">
            {form.date_end ? conversionData(form.date_end) : departureDayHere}
          </div>
        </div>
      </div>

      <div className="details__place__info">
        <div className="details__place__departure">
          <div className="name__departure__city">{data.from.city.name}</div>
          <div className="name__departure__station">
            {data.from.railway_station_name}
          </div>
        </div>
        <div className="arrival__place__info">
          <div className="name__city__arrival">{data.to.city.name}</div>
          <div className="name__arrival__station">
            {data.to.railway_station_name}
          </div>
        </div>
      </div>
    </>
  );
}

AddDetailsInfo.propTypes = {
  data: PropTypes.object,
  arrow: PropTypes.any,
};
