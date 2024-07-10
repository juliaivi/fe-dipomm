import './seatselectioncoupe.css';
import SeatSelectionHeader from './SeatSelectionHeader/SeatSelectionHeader';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import React from 'react';

export default function SeatSelectionCoupe() {
  const { seatsThere, seatsBack, selectedPlacesThere, selectedPlacesBack } =
    useSelector((state) => state.passengers);
  const { selectedTrain } = useSelector((state) => state.train);
  const navigate = useNavigate();
  let valid = false;

  if (
    Number(seatsThere[0]?.count) + Number(seatsThere[1]?.count) ===
      selectedPlacesThere.length &&
    Number(seatsBack[0]?.count) + Number(seatsBack[1]?.count) ===
      selectedPlacesBack.length &&
    selectedPlacesThere.length !== 0
  ) {
    valid = true;
  } else {
    valid = false;
  }

  return (
    <>
      <section className="seat__selection">
        <h2 className="seat__selection_title">Выбор места</h2>
        <form className="seat__selection__form ">
          <div className="seat__selection__there">
            <SeatSelectionHeader
              selectedTrain={selectedTrain.departure}
              type={'there'}
            />
          </div>

          {selectedTrain.arrival && (
            <div className="seat__selection__to">
              <SeatSelectionHeader
                selectedTrain={selectedTrain.arrival}
                type={'back'}
              />
            </div>
          )}
        </form>

        <button
          className={`next__btn ${valid === false ? '' : 'active'}`}
          disabled={valid === true ? false : true}
          onClick={() => navigate('/passengers')}
        >
          Далее
        </button>
      </section>
    </>
  );
}
