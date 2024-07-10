import './stylecard.css';
import ListPlace from './ListPlace/ListPlace';
import train from '../../../../../img/train.svg';
import arrowrigth from '../../../../../img/arrowrigth.svg';
import arrowleft from '../../../../../img/arrowleft.svg';
import wifi from '../../../../../img/wifi.svg';
import express from '../../../../../img/express.svg';
import mug from '../../../../../img/mug.svg';
import React from 'react';
import PropTypes from 'prop-types';

import {
  trainSeatsRequest,
  selectTrain,
  trainSeatsBackRequest,
  citiesItemThere,
  citiesItemTo,
  citiesItemToId,
  citiesItemThereId,
} from '../../../../../redux/slice/trainSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { convertingSecondsHours } from './convertingSecondsHours';
import { useEffect } from 'react';

export default function AddCardElement({ el, index }) {
  const { lastRoutesItem } = useSelector((state) => state.train);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (lastRoutesItem !== null) {
      dispatch(citiesItemThere(lastRoutesItem.departure.from.city.name));
      dispatch(citiesItemTo(lastRoutesItem.departure.to.city.name));
      dispatch(citiesItemThereId(lastRoutesItem.departure.from.city._id));
      dispatch(citiesItemToId(lastRoutesItem.departure.from.city._id));
    }
  }, []);

  const SelectSeatsInfo = (id) => {
    dispatch(trainSeatsRequest(id));
    dispatch(selectTrain(el));
    if (el?.arrival !== undefined) {
      dispatch(trainSeatsBackRequest(el?.arrival._id));
    }

    navigate(`/trains/${id}`);
  };

  return (
    <div className="cart__item" key={index}>
      <div className="cart__info">
        <img src={train} alt="train" className="train__icon"></img>
        <h2 className="train__name">{el?.departure.train.name}</h2>
        <p className="path__name">{el?.departure.from.city.name} →</p>
        <p className="path__name">{el?.departure.to.city.name}</p>
      </div>
      <div className="train__info_box">
        <div className="train__info">
          <div className="train__schedule__there">
            <div className="train__departure">
              <div className="departure__time">
                {convertingSecondsHours(el?.departure.from.datetime)}
              </div>
              <div className="departure__city">
                {el?.departure.from.city.name}
              </div>
              <div className="departure__station">
                {el?.departure.from.railway_station_name} вокзал
              </div>
            </div>

            <div className="travel__info">
              <div className="travel__time">
                {convertingSecondsHours(el.departure.duration)}
              </div>
              <img src={arrowrigth} alt="" className="travel__img"></img>
            </div>

            <div className="train__arrival">
              <div className="arrival__time">
                {convertingSecondsHours(el.departure.to.datetime)}
              </div>
              <div className="arrival__city">{el.departure.to.city.name}</div>
              <div className="arrival__station">
                {el.departure.to.railway_station_name} вокзал
              </div>
            </div>
          </div>
          {el?.arrival !== undefined ? (
            <div className="train__schedule__there">
              <div className="train__arrival">
                <div className="arrival__time">
                  {convertingSecondsHours(el.arrival.to.datetime)}
                </div>
                <div className="arrival__city">{el.arrival.to.city.name}</div>
                <div className="arrival__station">
                  {el.arrival.to.railway_station_name} вокзал
                </div>
              </div>

              <div className="travel__info">
                <div className="travel__time">
                  {convertingSecondsHours(el.arrival.duration)}
                </div>
                <img src={arrowleft} alt="" className="travel__img"></img>
              </div>

              <div className="train__departure">
                <div className="departure__time">
                  {convertingSecondsHours(el.arrival.from.datetime)}
                </div>
                <div className="departure__city">
                  {el.arrival.from.city.name}
                </div>
                <div className="departure__station">
                  {el.arrival.from.railway_station_name} вокзал
                </div>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>

        <div className="list__place__box">
          <div className="list__place__info">
            <ListPlace departure={el.departure} index={index} />
          </div>

          <div className="list__services_box">
            <div className="item__services">
              {el.departure.have_wifi !== false && (
                <img src={wifi} className="services__img" alt="wifi"></img>
              )}
              {el.departure.is_express !== false && (
                <img
                  src={express}
                  className="services__img"
                  alt="express"
                ></img>
              )}
              {el.departure.have_air_conditioning !== false && (
                <img src={mug} className="services__img" alt="mug"></img>
              )}
            </div>

            <button
              className="button btn__choose"
              onClick={() => SelectSeatsInfo(el.departure._id)}
            >
              Выбрать места
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

AddCardElement.propTypes = {
  el: PropTypes.object,
  index: PropTypes.number,
};
