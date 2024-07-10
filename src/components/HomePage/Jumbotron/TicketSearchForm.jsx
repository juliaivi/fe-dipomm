import { useDispatch, useSelector } from 'react-redux';
import SearchCity from './SearchStations/SearchStations';
import { useNavigate } from 'react-router-dom';
import {
  trainsListRequest,
  addLastRoutesItem,
  citiesItemThere,
  citiesItemTo,
  citiesItemToId,
  citiesItemThereId,
} from '../../../redux/slice/trainSlice';
import AddCalendar from './AddCalendar';
import React from 'react';
import PropTypes from 'prop-types';

export default function TicketSearchForm({ title }) {
  const {
    citiesFromList,
    lastRoutesItem,
    cityFrom,
    cityTo,
    cityFromId,
    citiesToList,
    cityToId,
    dateStartThere,
    dateBackTo,
  } = useSelector((state) => state.train);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let valid = false;

  if (cityFrom !== '' && cityTo !== '' && dateStartThere && dateBackTo) {
    valid = true;
  }

  const lookTickets = (e) => {
    e.preventDefault();
    //очиска выбранного последнего билета, если он был выбран
    if (lastRoutesItem !== null) {
      dispatch(addLastRoutesItem(null));
    }
    const form = {
      from_city_id: cityFromId,
      to_city_id: cityToId,
      date_start: dateStartThere,
      date_end: dateBackTo,
      sort: 'date',
      limit: 5,
      offset: 0,
    };

    dispatch(trainsListRequest(form));
    navigate('/trains');
  };

  const swapCities = (e) => {
    e.preventDefault();
    let changeCity = null;
    let changeCityId = null;
    if (cityFrom !== '' && cityTo !== '') {
      changeCity = cityFrom;
      changeCityId = cityFromId;
      dispatch(citiesItemThere(cityTo));
      dispatch(citiesItemTo(changeCity));
      dispatch(citiesItemThereId(cityToId));
      dispatch(citiesItemToId(changeCityId));
    }
  };
  return (
    <>
      <form className="form__order jumbotron__form__order">
        <div className="order__box jumbotron__order__box">
          <div className="direction jumbotron__direction">
            <p className="form__title">Направление</p>
            <div className="from__direction">
              <SearchCity title={'Откуда'} listcites={citiesFromList} />

              <button
                className="button btn_reverse"
                onClick={(e) => swapCities(e)}
              >
                {' '}
              </button>

              <SearchCity title={'Куда'} listcites={citiesToList} />
            </div>
          </div>

          <div className="date">
            <p className="form__title">Дата</p>
            <div className="form__date ">
              <AddCalendar classElem={title} />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className={`button button-find ${valid ? '' : 'button-find-disabled'}`}
          disabled={valid === true ? false : true}
          onClick={(e) => lookTickets(e)}
        >
          Найти билеты
        </button>
      </form>
    </>
  );
}

TicketSearchForm.propTypes = {
  title: PropTypes.string,
};
