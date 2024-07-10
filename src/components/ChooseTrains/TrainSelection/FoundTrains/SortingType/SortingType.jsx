import data from './dropdownSorting.json';
import './sortingType.css';
import React, { useState } from 'react';
import {
  selectSortType,
  changeValidForm,
} from '../../../../../redux/slice/trainSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function SortingType() {
  const { sort } = useSelector((state) => state.train);
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <div className="dropdown sorting__type">
        <div
          className="dropdown-btn"
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          {sort === 'date'
            ? 'времени'
            : sort === 'price'
              ? 'стоимости'
              : 'длительности'}
        </div>

        {isActive && (
          <div className="dropdown-content">
            {data[0].sortingtype.map((el, index) => {
              return (
                <div
                  className="dropdown-item"
                  key={index}
                  onClick={() => {
                    dispatch(changeValidForm(true));
                    dispatch(selectSortType(el.type));
                    setIsActive(false);
                  }}
                >
                  {el.name}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
