import './range.css';
import ReactSlider from 'react-slider';
import { useDispatch } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';

import {
  changePriceFrom,
  changePriceTo,
  changeStartDepartureFrom,
  changeStartDepartureTo,
  changeEndDepartureFrom,
  changeEndDepartureTo,
  changeStartArrivalFrom,
  changeStartArrivalTo,
  changeEndArrivalFrom,
  changeEndArrivalTo,
  changeValidForm,
} from '../../../../../redux/slice/trainSlice';

export default function AddRange({ min, max, type }) {
  const dispatch = useDispatch();
  const ChageValue = (value) => {
    if (type === 'price') {
      dispatch(changePriceFrom(value[0]));
      dispatch(changePriceTo(value[1]));
    }

    if (type === 'departure-from') {
      dispatch(changeStartDepartureFrom(value[0]));
      dispatch(changeStartDepartureTo(value[1]));
    }

    if (type === 'departure-to') {
      dispatch(changeEndDepartureFrom(value[0]));
      dispatch(changeEndDepartureTo(value[1]));
    }
    // обратно
    if (type === 'arrival-from') {
      dispatch(changeStartArrivalFrom(value[0]));
      dispatch(changeStartArrivalTo(value[1]));
    }

    if (type === 'arrival-to') {
      dispatch(changeEndArrivalFrom(value[0]));
      dispatch(changeEndArrivalTo(value[1]));
    }

    dispatch(changeValidForm(true));
  };

  return (
    <>
      <ReactSlider
        className={`horizontal-slider horizontal-slider_${type}`}
        thumbClassName="example-thumb"
        trackClassName="example-track"
        defaultValue={[min, max]}
        min={type === 'price' ? 1920 : 0}
        max={type === 'price' ? 7000 : 24}
        onChange={(value) => {
          ChageValue(value);
        }}
        renderThumb={(props, state) => (
          <div {...props}>
            {state.valueNow >= 0 && state.valueNow <= 24
              ? `${state.valueNow}:00`
              : state.valueNow}
          </div>
        )}
      />
      <div className={`renge-value__box renge-value__box_${type} `}>
        <div className="renge-value_min">
          {type !== 'price' ? `00:00` : 1920}
        </div>
        <div className="renge-value__max">
          {type !== 'price' ? `24:00` : 7000}
        </div>
      </div>
    </>
  );
}

AddRange.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  type: PropTypes.string,
};
