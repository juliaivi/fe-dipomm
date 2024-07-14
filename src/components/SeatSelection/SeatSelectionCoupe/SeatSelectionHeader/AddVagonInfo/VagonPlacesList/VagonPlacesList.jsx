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
  }, [selectedPlacesThere, selectedPlacesBack, vagon]);

  debugger; // eslint-disable-line no-debugger
  const toggleElement = (e, selectedPlaces, addSeat, seats, vagon) => {
    if (e.target.classList.contains('place_item_busy')) {
      return;
    }

    // добавление места
    let indexSeat = selectedPlaces.findIndex(
      (seat) => seat.seat_id === e.target.textContent,
    );
    let indexVagon = selectedPlaces.findIndex((el) => el.vagon_id === vagon);

    if (indexSeat !== -1 && indexVagon !== -1) {
      if (e.target.classList.contains('place_item_free-active')) {
        e.target.classList.remove('place_item_free-active');
      }
      dispatch(
        addSeat({
          seat_id: e.target.textContent,
          vagon_id: vagon,
          price: price,
        }),
      );
      return;
    }

    if (
      (Number(seats[0].count) + Number(seats[1].count) >=
        selectedPlaces.length + 1 &&
        selectedPlaces.length !== 0 &&
        indexVagon !== -1) ||
      (selectedPlaces.length == 0 &&
        Number(seats[0].count) + Number(seats[1].count) > 0)
    ) {
      if (e.target.classList.contains('place_item_free-active')) {
        e.target.classList.remove('place_item_free-active');
      } else {
        e.target.classList.add('place_item_free-active');
      }

      dispatch(
        addSeat({
          seat_id: e.target.textContent,
          vagon_id: vagon,
          price: price,
        }),
      );
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

  return (
    <>
      <div
        className={`vagon__places__list_${typeSeats === 'fourth' ? 'sedentary' : typeSeats === 'third' ? 'reserved-seat' : typeSeats === 'second' ? 'coupe' : typeSeats === 'first' ? 'lux' : ''}`}
      >
        <div className="vagon__places__list">
          {listPlaces.map((el) => (
            <div
              className={`place__number place__number_${el.index} ${el.available === true ? 'place_item_free' : 'place_item_busy'}`}
              key={el.index}
              onClick={(e) => {
                type === 'there'
                  ? toggleElement(
                      e,
                      selectedPlacesThere,
                      addSeatThere,
                      seatsThere,
                      vagon,
                    )
                  : toggleElement(
                      e,
                      selectedPlacesBack,
                      addSeatBack,
                      seatsBack,
                      vagon,
                    );
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
}

VagonPlacesList.propTypes = {
  type: PropTypes.string,
  listPlaces: PropTypes.array,
  price: PropTypes.number,
  vagon: PropTypes.number,
};
