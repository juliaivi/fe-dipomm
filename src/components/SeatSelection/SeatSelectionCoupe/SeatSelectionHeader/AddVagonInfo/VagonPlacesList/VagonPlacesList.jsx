import { useSelector, useDispatch } from 'react-redux';
import {
  addSeatThere,
  addSeatBack,
  setTicketPricesThere,
  setTicketPricesBack,
} from '../../../../../../redux/slice/passengersSlice';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function VagonPlacesList({ type, listPlaces, price, vagon }) {
  const {
    typeSeatsThere,
    typeSeatsBack,
    seatsThere,
    seatsBack,
    selectedPlacesThere,
    selectedPlacesBack,
    ticketPricesThere,
    ticketPricesBack,
  } = useSelector((state) => state.passengers);
  const dispatch = useDispatch();
  let typeSeats;

  useEffect(() => {
    if (type === 'there') {
      dispatch(
        setTicketPricesThere(
          priceCalculate(
            selectedPlacesThere,
            seatsThere,
            selectedPlacesThere.price,
          ),
        ),
      );
    }

    if (type === 'back') {
      dispatch(
        setTicketPricesBack(
          priceCalculate(
            selectedPlacesBack,
            seatsBack,
            selectedPlacesBack.price,
          ),
        ),
      );
    }
  }, [selectedPlacesThere, selectedPlacesBack]);

  const toggleElement = (e) => {
    if (e.target.classList.contains('place_item_busy')) {
      return;
    }

    // добавление места
    if (type === 'there') {
      addingPlace(e, selectedPlacesThere, seatsThere);
    } else {
      addingPlace(e, selectedPlacesBack, seatsBack);
    }
  };

  const addingPlace = (e, listPlaces, numberSeats) => {
    // из списка находит место  по которому кликнули в том вагоне
    let indexVagon = listPlaces.findIndex(
      (seat) =>
        seat.seat_id === e.target.textContent && seat.vagon_id === vagon,
    );
    let indexTypeSeat = listPlaces.findIndex((seat) => seat.vagon_id === vagon);
    // места взрослые + дети с местами не равно количеству выбранных мест и это
    if (
      (Number(numberSeats[0].count) + Number(numberSeats[1].count) !==
        listPlaces.length &&
        indexVagon === -1) ||
      (Number(numberSeats[0].count) + Number(numberSeats[1].count) >=
        listPlaces.length &&
        indexVagon !== -1) ||
      (listPlaces.length > 0 && indexTypeSeat === -1)
    ) {
      if (e.target.classList.contains('place_item_free-active')) {
        e.target.classList.remove('place_item_free-active');
      } else {
        e.target.classList.add('place_item_free-active');
      }

      if (type === 'there') {
        dispatch(
          addSeatThere({
            seat_id: e.target.textContent,
            vagon_id: vagon,
            price: price,
          }),
        );
      }

      if (type === 'back') {
        dispatch(
          addSeatBack({
            seat_id: e.target.textContent,
            vagon_id: vagon,
            price: price,
          }),
        );
      }
    } else {
      return;
    }
  };

  function priceCalculate(listPlaces, numberSeats, price) {
    let priceAdult = 0;
    let priceChild = 0;

    if (
      listPlaces.length > 0 &&
      Number(numberSeats[0].count) >= listPlaces.length
    ) {
      priceAdult = Number(listPlaces[0]?.price) * listPlaces.length;
    } else if (
      listPlaces.length > 0 &&
      Number(numberSeats[0].count) < listPlaces.length
    ) {
      priceAdult = Number(listPlaces[0]?.price) * Number(numberSeats[0].count);
      priceChild =
        Number(listPlaces[0]?.price) *
        (listPlaces.length - Number(numberSeats[0].count));
    } else {
      return;
    }

    price = priceAdult + priceChild;
    return price;
  }

  if (type === 'there') {
    typeSeats = typeSeatsThere;
  } else {
    typeSeats = typeSeatsBack;
  }

  switch (typeSeats) {
    case 'fourth':
      return (
        <>
          <div className="vagon__places__list_sedentary">
            <div className="vagon__places__list">
              {listPlaces.map((el) => (
                <div
                  className={`place__number place__number_${el.index} ${el.available === true ? 'place_item_free' : 'place_item_busy'}`}
                  key={el.index}
                  onClick={(e) => {
                    toggleElement(e);
                  }}
                >
                  {el.index}
                </div>
              ))}
            </div>
          </div>

          {selectedPlacesThere.length > 0 &&
            ticketPricesThere !== 0 &&
            type === 'there' && (
              <div className="total__amount__tickets">
                {type === 'there' ? ticketPricesThere : ticketPricesBack}{' '}
                <span className="currency__sign">₽</span>
              </div>
            )}
          {selectedPlacesBack.length > 0 &&
            ticketPricesBack !== 0 &&
            type === 'back' && (
              <div className="total__amount__tickets">
                {type === 'there' ? ticketPricesThere : ticketPricesBack}{' '}
                <span className="currency__sign">₽</span>
              </div>
            )}
        </>
      );
    case 'third':
      return (
        <>
          <div className="vagon__places__list_reserved-seat">
            <div className="vagon__places__list">
              {listPlaces.map((el) => (
                <div
                  className={`place__number place__number_${el.index} ${el.available === true ? 'place_item_free' : 'place_item_busy'}`}
                  key={el.index}
                  onClick={(e) => {
                    toggleElement(e);
                  }}
                >
                  {el.index}
                </div>
              ))}
            </div>
          </div>
          {selectedPlacesThere.length > 0 &&
            ticketPricesThere !== 0 &&
            type === 'there' && (
              <div className="total__amount__tickets">
                {type === 'there' ? ticketPricesThere : ticketPricesBack}{' '}
                <span className="currency__sign">₽</span>
              </div>
            )}
          {selectedPlacesBack.length > 0 &&
            ticketPricesBack !== 0 &&
            type === 'back' && (
              <div className="total__amount__tickets">
                {type === 'there' ? ticketPricesThere : ticketPricesBack}{' '}
                <span className="currency__sign">₽</span>
              </div>
            )}
        </>
      );
    case 'second':
      return (
        <>
          <div className="vagon__places__list_coupe">
            <div className="vagon__places__list">
              {listPlaces.map((el) => (
                <div
                  className={`place__number place__number_${el.index} ${el.available === true ? 'place_item_free' : 'place_item_busy'}`}
                  key={el.index}
                  onClick={(e) => {
                    toggleElement(e);
                  }}
                >
                  {el.index}
                </div>
              ))}
            </div>
          </div>

          {selectedPlacesThere.length > 0 &&
            ticketPricesThere !== 0 &&
            type === 'there' && (
              <div className="total__amount__tickets">
                {type === 'there' ? ticketPricesThere : ticketPricesBack}{' '}
                <span className="currency__sign">₽</span>
              </div>
            )}
          {selectedPlacesBack.length > 0 &&
            ticketPricesBack !== 0 &&
            type === 'back' && (
              <div className="total__amount__tickets">
                {type === 'there' ? ticketPricesThere : ticketPricesBack}{' '}
                <span className="currency__sign">₽</span>
              </div>
            )}
        </>
      );
    case 'first':
      return (
        <>
          <div className="vagon__places__list_lux">
            <div className="vagon__places__list">
              {listPlaces.map((el) => (
                <div
                  className={`place__number place__number_${el.index} ${el.available === true ? 'place_item_free' : 'place_item_busy'}`}
                  key={el.index}
                  onClick={(e) => {
                    toggleElement(e);
                  }}
                >
                  {el.index}
                </div>
              ))}
            </div>
          </div>

          {selectedPlacesThere.length > 0 &&
            ticketPricesThere !== 0 &&
            type === 'there' && (
              <div className="total__amount__tickets">
                {type === 'there' ? ticketPricesThere : ticketPricesBack}{' '}
                <span className="currency__sign">₽</span>
              </div>
            )}
          {selectedPlacesBack.length > 0 &&
            ticketPricesBack !== 0 &&
            type === 'back' && (
              <div className="total__amount__tickets">
                {type === 'there' ? ticketPricesThere : ticketPricesBack}{' '}
                <span className="currency__sign">₽</span>
              </div>
            )}
        </>
      );
    default:
      return '';
  }
}

VagonPlacesList.propTypes = {
  type: PropTypes.string,
  listPlaces: PropTypes.array,
  price: PropTypes.number,
  vagon: PropTypes.number,
};
