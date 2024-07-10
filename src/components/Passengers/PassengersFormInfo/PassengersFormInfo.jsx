import './typePassengersFormInfo.css';
import React, { useEffect, useState } from 'react';
import AddPassengersItem from './AddPassengersItem/AddPassengersItem';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addPassengers } from '../../../redux/slice/passengersSlice';

export default function PassengersFormInfo() {
  const { passengersInfo, seatsThere } = useSelector(
    (state) => state.passengers,
  );
  const [index, setIndex] = useState(0);
  let valid = true;
  const dispatch = useDispatch();
  const navigete = useNavigate();

  const AddPassengers = (e, id) => {
    e.preventDefault();
    setIndex(id + 1);
    const form = {
      type: 'children',
      surname: '',
      name: '',
      genderType: 'M',
      dateBirth: '',
      twoSurname: '',
      mobilityInfo: false,
      series: '',
      number: '',
      numberChild: '',
      error: false,
      id: id + 1,
    };

    dispatch(addPassengers(form));
  };

  useEffect(() => {
    if (passengersInfo.length > 0) {
      setIndex(passengersInfo[passengersInfo.length - 1].id + 1);
    }
  }, []);

  if (
    Number(seatsThere[0].count) +
      Number(seatsThere[1].count) +
      Number(seatsThere[2].count) ===
    passengersInfo.length
  ) {
    valid = passengersInfo.some((el) => el.validForm === false);
  }

  return (
    <section className="passengers__forms__box">
      {passengersInfo.length !== 0 &&
        passengersInfo.map((el, index) => (
          <AddPassengersItem index={el.id} id={index} el={el} key={index} />
        ))}

      <div className="add_passengers__box">
        <div className="add_passengers__title">Добавить пассажиров</div>
        <button
          className="add_passengers"
          onClick={(e) => AddPassengers(e, index)}
        >
          +
        </button>
      </div>
      <button
        className={`further-btn ${valid === true ? 'disabled' : ''}`}
        onClick={() => {
          navigete('/payment');
        }}
        disabled={valid === true ? true : false}
      >
        Далее
      </button>
    </section>
  );
}
