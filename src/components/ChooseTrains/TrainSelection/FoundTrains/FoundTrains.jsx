import './foundTrains.css';
import SortingType from './SortingType/SortingType';
import ShowBy from './ShowBy/ShowBy';
import React, { useEffect } from 'react';
import AddCardElement from './AddCard/AddCardElement.jsx';
import { useDispatch, useSelector } from 'react-redux';
import {
  trainsListRequest,
  changeValidForm,
  addLastRoutesItem,
} from '../../../../redux/slice/trainSlice';

export default function FoundTrains() {
  const { trainsList, lastRoutesItem } = useSelector((state) => state.train);
  const {
    validForm,
    sort,
    limit,
    endArrivalHourTo,
    endArrivalHourFrom,
    startArrivalHourTo,
    startArrivalHourFrom,
    endDepartureHourTo,
    endDepartureHourFrom,
    startDepartureHourTo,
    startDepartureHourFrom,
    options,
    priceFrom,
    priceTo,
    cityFromId,
    cityToId,
    dateStartThere,
    dateBackTo,
  } = useSelector((state) => state.train);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cityFromId !== '' && cityToId !== '' && validForm === true) {
      const form = {
        from_city_id: cityFromId,
        to_city_id: cityToId,
        date_start: dateStartThere,
        date_end: dateBackTo,
        have_second_class: options[0].check,
        have_third_class: options[1].check,
        have_fourth_class: options[2].check,
        have_first_class: options[3].check,
        have_wifi: options[4].check,
        have_express: options[5].check,
        have_air_conditioning: false,
        price_min: 500,
        price_from: priceFrom,
        price_to: priceTo,
        start_departure_hour_from: startDepartureHourFrom,
        start_departure_hour_to: startDepartureHourTo,
        end_departure_hour_from: endDepartureHourFrom,
        end_departure_hour_to: endDepartureHourTo,
        start_arrival_hour_from: startArrivalHourFrom,
        start_arrival_hour_to: startArrivalHourTo,
        end_arrival_hour_from: endArrivalHourFrom,
        end_arrival_hour_to: endArrivalHourTo,
        sort: sort,
        limit: limit,
        offset: 0,
      };
      dispatch(changeValidForm(false));

      setTimeout(() => dispatch(trainsListRequest(form)), 500);

      if (lastRoutesItem !== null) {
        dispatch(addLastRoutesItem(null));
      }
    }
  }, [sort, limit]);

  return (
    <section className="train__list">
      <div className="was-found">
        <div className="was-found__title">
          <span>{`найдено ${trainsList.total_count !== undefined ? trainsList.total_count : '0'}`}</span>
        </div>
        <div className="control__list">
          <div className="sorting__listing_select__wrapper">
            <span className="sorting__title">сортировать по:</span>
            <SortingType />
          </div>
          <ShowBy />
        </div>
      </div>
      {lastRoutesItem !== null && (
        <AddCardElement
          classElem={'train__list'}
          el={lastRoutesItem}
          index={Number(lastRoutesItem.departure._id)}
        />
      )}

      {trainsList.total_count > 0 && lastRoutesItem === null && (
        <>
          {trainsList.items.map((el, index) => (
            <AddCardElement
              classElem={'train__list'}
              el={el}
              index={Number(index)}
              key={index}
            />
          ))}
        </>
      )}
    </section>
  );
}
