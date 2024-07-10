import './styleHeaderTrainCard.css';
import arroWrigth from '../../../../../img/arrowrigth.svg';
import littleTrain from '../../../../../img/littleTrain.svg';
import clock from '../../../../../img/clock.svg';
import AddBtnType from './AddBtnType/AddBtnType';
import { convertingSecondsHours } from '../../../../ChooseTrains/TrainSelection/FoundTrains/AddCard/convertingSecondsHours';
import {
  setCountNoSeatsThere,
  setCountNoSeatsBack,
  setCountSeatsChildThere,
  setCountSeatsChildBack,
  setCountSeatsAdultThere,
  setCountSeatsAdultBack,
} from '../../../../../redux/slice/passengersSlice';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';

export default function AddHeaderTrainCard({ selectedTrain, type }) {
  const { seatsThere, seatsBack } = useSelector((state) => state.passengers);
  const dispatch = useDispatch();
  let deleteThereActive = false;

  const changeInput = (e) => {
    e.preventDefault();
    if (e.target.value.length > 1) {
      return;
    }

    if (e.target.value > '4') {
      return;
    }

    if (
      e.target.classList.contains('number__tickets__input_child-there') &&
      0 <= e.target.value
    ) {
      dispatch(setCountSeatsChildThere(e.target.value));
    }
    if (
      e.target.classList.contains('number__tickets__input_child-back') &&
      0 <= e.target.value
    ) {
      dispatch(setCountSeatsChildBack(e.target.value));
    }

    if (
      e.target.classList.contains('input__child__no-seats-there') &&
      0 <= e.target.value
    ) {
      dispatch(setCountNoSeatsThere(e.target.value));
    }
    if (
      e.target.classList.contains('input__child__no-seats-back') &&
      0 <= e.target.value
    ) {
      dispatch(setCountNoSeatsBack(e.target.value));
    }

    if (
      e.target.classList.contains('number__tickets__input_adult-there') &&
      0 <= e.target.value
    ) {
      dispatch(setCountSeatsAdultThere(e.target.value));
    }
    if (
      e.target.classList.contains('number__tickets__input_adult-back') &&
      0 <= e.target.value
    ) {
      dispatch(setCountSeatsAdultBack(e.target.value));
    }
  };

  if (deleteThereActive === true) {
    deleteThereActive = false;
  }

  let time = convertingSecondsHours(selectedTrain.duration);
  let timeDuration = time.split(':');

  return (
    <div>
      <div className={`train__information_box train__information_box-${type}`}>
        <div className="train__information">
          <img
            className="train__information_icon"
            src={littleTrain}
            alt=""
          ></img>
          <div className="train__direction">
            <div className="train__direction_number">
              {selectedTrain.train.name}
            </div>
            <div className="train__direction_points">
              {selectedTrain.from.city.name}→
            </div>
            <div className="train__direction_point-arrival">
              {selectedTrain.to.city.name}
            </div>
          </div>
        </div>
        <div className="train__direction__there">
          <div className="train__direction__start">
            <div className="train__direction__time">
              {convertingSecondsHours(selectedTrain.from.datetime)}
            </div>
            <div className="train__direction__city">
              {selectedTrain.from.city.name}
            </div>
            <div className="train__direction__station">
              {selectedTrain.from.railway_station_name} <span>вокзал</span>{' '}
            </div>
          </div>
          <img className="train__direction__img" src={arroWrigth} alt=""></img>
          <div className="train__direction__end">
            <div className="train__direction__time">
              {convertingSecondsHours(selectedTrain.to.datetime)}
            </div>
            <div className="train__direction__city">
              {selectedTrain.to.city.name}
            </div>
            <div className="train__direction__station">
              {selectedTrain.to.railway_station_name} <span>вокзал</span>
            </div>
          </div>
        </div>
        <div className="seat__duration">
          <img className="seat__duration_img" src={clock} alt=""></img>
          <div className="seat__duration__time">
            <div className="seat__duration__time_watch">
              {'02,03,04,05,06,22,23,24'.includes(timeDuration[0])
                ? timeDuration[0] + ' часа'
                : '01,21'.includes(timeDuration[0])
                  ? timeDuration[0] + ' час'
                  : timeDuration[0] + ' часов'}
            </div>
            <div className="seat__duration__time_minutes">
              {' '}
              {'1, 21,31,41,51'.includes(timeDuration[1])
                ? timeDuration[1] + ' минута'
                : '2,3,4,22,23,24,32,33,34,42,43,44,52,53,54'.includes(
                      timeDuration[1],
                    )
                  ? timeDuration[1] + ' минуты'
                  : timeDuration[1] + ' минут'}
            </div>
          </div>
        </div>
      </div>

      <div className="number__tickets">
        <h3 className="number__tickets__title">Количество билетов</h3>
        <div className="number__tickets__menu">
          <div className="number__tickets__type number__tickets__type_adult">
            <div className="number__tickets__type_box">
              <span className="number__tickets__input__text">Взрослых — </span>
              <input
                type="number"
                className={`number__tickets__input number__tickets__input_adult number__tickets__input_adult-${type}`}
                id={`inputTypeTicketAdult-${type}`}
                value={
                  type === 'there' ? seatsThere[0].count : seatsBack[0].count
                }
                onChange={(e) => changeInput(e)}
              ></input>
            </div>
            {Number(
              type === 'there' ? seatsThere[0].count : seatsBack[0].count,
            ) === 1 && (
              <label
                htmlFor={`inputTypeTicketAdult-${type}`}
                className="number__tickets__adult__input__label"
              >
                Можно добавить еще 3 пассажиров
              </label>
            )}
            {Number(
              type === 'there' ? seatsThere[0].count : seatsBack[0].count,
            ) === 2 && (
              <label
                htmlFor={`inputTypeTicketAdult-${type}`}
                className="number__tickets__adult__input__label"
              >
                Можно добавить еще 2 пассажиров
              </label>
            )}
            {Number(
              type === 'there' ? seatsThere[0].count : seatsBack[0].count,
            ) === 3 && (
              <label
                htmlFor={`inputTypeTicketAdult-${type}`}
                className="number__tickets__adult__input__label"
              >
                Можно добавить еще 1 пассажира
              </label>
            )}
            {Number(
              type === 'there' ? seatsThere[0].count : seatsBack[0].count,
            ) >= 4 && (
              <label
                htmlFor={`inputTypeTicketAdult-${type}`}
                className="number__tickets__adult__input__label"
              >
                Можно добавить не более 4 пассажиров
              </label>
            )}
          </div>
          <div className="number__tickets__type number__tickets__type_child">
            <div className="number__tickets__type_box">
              <span className="number__tickets__input__text">Детских — </span>
              <input
                type="number"
                className={`number__tickets__input number__tickets__input_child number__tickets__input_child-${type}`}
                id={`inputTypeTicketChild-${type}`}
                value={
                  type === 'there' ? seatsThere[1].count : seatsBack[1].count
                }
                onChange={(e) => changeInput(e)}
              ></input>
            </div>
            {Number(
              type === 'there' ? seatsThere[1].count : seatsBack[1].count,
            ) === 1 && (
              <label
                htmlFor={`inputTypeTicketChild-${type}`}
                className="number__tickets__child__input__label"
              >
                Можно добавить еще 3 детей до 10 лет.Свое место в вагоне, как у
                взрослых, но дешевле в среднем на 50-65%
              </label>
            )}

            {Number(
              type === 'there' ? seatsThere[1].count : seatsBack[1].count,
            ) === 2 && (
              <label
                htmlFor={`inputTypeTicketChild-${type}`}
                className="number__tickets__child__input__label"
              >
                Можно добавить еще 2 детей до 10 лет.Свое место в вагоне, как у
                взрослых, но дешевле в среднем на 50-65%
              </label>
            )}

            {Number(
              type === 'there' ? seatsThere[1].count : seatsBack[1].count,
            ) === 3 && (
              <label
                htmlFor={`inputTypeTicketChild-${type}`}
                className="number__tickets__child__input__label"
              >
                Можно добавить еще 1 ребенка до 10 лет.Свое место в вагоне, как
                у взрослых, но дешевле в среднем на 50-65%
              </label>
            )}

            {Number(
              type === 'there' ? seatsThere[1].count : seatsBack[1].count,
            ) >= 4 && (
              <label
                htmlFor={`inputTypeTicketChild-${type}`}
                className="number__tickets__child__input__label"
              >
                Можно добавить не более 4 детей до 10 лет.Свое место в вагоне,
                как у взрослых, но дешевле в среднем на 50-65%
              </label>
            )}
          </div>

          <div className="number__tickets__type number__tickets__type_child-no-seats">
            <div className="number__tickets__type_box">
              <span className="number__tickets__input__text">
                Детских `&quot;`без места`&ldquo;` —{' '}
              </span>
              <input
                type="number"
                className={`number__tickets__input input__child__no-seats input__child__no-seats-${type}`}
                value={
                  type === 'there' ? seatsThere[2].count : seatsBack[2].count
                }
                onChange={(e) => changeInput(e)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="type__vagon">
        <h3 className="type__vagon__title">Тип вагона</h3>
        <AddBtnType type={type} />
      </div>
    </div>
  );
}

AddHeaderTrainCard.propTypes = {
  selectedTrain: PropTypes.object,
  type: PropTypes.string,
};
