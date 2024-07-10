import coupe from '../../../../../img/coupe.svg';
import seat from '../../../../../img/seat.svg';
import star from '../../../../../img/star.svg';
import wifi from '../../../../../img/wifi.svg';
import express from '../../../../../img/express.svg';
import reservedseat from '../../../../../img/reservedSeat.svg';
import {
  changeOptions,
  changeValidForm,
} from '../../../../../redux/slice/trainSlice';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';

export default function AddListOptoins() {
  const { options } = useSelector((state) => state.train);
  const dispatch = useDispatch();

  const ChangeOption = (e, type) => {
    dispatch(changeValidForm(true));
    if (e.target.classList.contains('button__check__coupe')) {
      dispatch(changeOptions(type));
    }

    if (e.target.classList.contains('button__check__reservedseat')) {
      dispatch(changeOptions(type));
    }

    if (e.target.classList.contains('button__check__seat')) {
      dispatch(changeOptions(type));
    }

    if (e.target.classList.contains('button__check__star')) {
      dispatch(changeOptions(type));
    }

    if (e.target.classList.contains('button__check__wifi')) {
      dispatch(changeOptions(type));
    }

    if (e.target.classList.contains('button__check__express')) {
      dispatch(changeOptions(type));
    }
  };

  return (
    <>
      {options.map((el, index) => (
        <div className="item item__options" key={index}>
          <div className="item__options__info">
            <div>
              <img
                src={
                  el.type === 'coupe'
                    ? coupe
                    : el.type === 'reservedseat'
                      ? reservedseat
                      : el.type === 'seat'
                        ? seat
                        : el.type === 'star'
                          ? star
                          : el.type === 'wifi'
                            ? wifi
                            : express
                }
                className="item__img item__options__img"
                alt={
                  el.type === 'coupe'
                    ? 'coupe'
                    : el.type === 'reservedseat'
                      ? 'reservedseat'
                      : el.type === 'seat'
                        ? 'seat'
                        : el.type === 'star'
                          ? 'star'
                          : el.type === 'wifi'
                            ? 'wifi'
                            : 'express'
                }
              ></img>
            </div>
            <p className="item__title item__options__title">
              {el.type === 'coupe'
                ? 'Купе'
                : el.type === 'reservedseat'
                  ? 'Плацкарт'
                  : el.type === 'seat'
                    ? 'Сидячий'
                    : el.type === 'star'
                      ? 'Люкс'
                      : el.type === 'wifi'
                        ? 'Wi-Fi'
                        : 'Экспресс'}
            </p>
          </div>
          <input
            type="checkbox"
            id={`check${index}`}
            className={`item__check item__options__check`}
          />
          <label
            htmlFor={`check${index}`}
            className={`button__check button__check__${el.type} ${el.check === true ? 'active' : ''}`}
            onClick={(e) => ChangeOption(e, el.type)}
          ></label>
        </div>
      ))}
    </>
  );
}
