import { useDispatch, useSelector } from 'react-redux';
import {
  selectQuantity,
  changeValidForm,
} from '../../../../../redux/slice/trainSlice';
import React from 'react';
import './showBy.css';

export default function ShowBy() {
  const { limit } = useSelector((state) => state.train);
  const dispatch = useDispatch();
  const data = [
    { id: 0, number: 5 },
    { id: 1, number: 10 },
    { id: 2, number: 20 },
  ];

  return (
    <>
      <div className="show__by">
        <p className="show__by__title">показывать по: </p>
        {data.map((el, index) => (
          <div
            key={index}
            onClick={() => {
              dispatch(changeValidForm(true));
              dispatch(selectQuantity(el.number));
            }}
            className={
              el.number === limit ? 'show__by__item_active' : 'show__by__item'
            }
          >
            {el.number}
          </div>
        ))}
      </div>
    </>
  );
}
