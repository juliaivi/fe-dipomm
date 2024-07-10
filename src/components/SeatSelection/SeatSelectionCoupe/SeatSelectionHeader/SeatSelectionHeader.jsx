import './seatselectionheader.css';
import arrowright from '../../../../img/arrow-right.svg';
import AddHeaderTrainCard from './AddHeaderCard/AddHeaderTrainCard';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';

export default function SeatSelectionHeader({ selectedTrain, type }) {
  const navigate = useNavigate();

  const chooseAnotherTrain = () => {
    navigate('/trains');
  };
  return (
    <>
      <div className="choose__another__train">
        <img
          className="choose__another__train_img"
          src={arrowright}
          alt="arrow"
        ></img>
        <button
          className="choose__another__train_btn"
          onClick={() => chooseAnotherTrain()}
        >
          Выбрать другой поезд
        </button>
      </div>
      <AddHeaderTrainCard selectedTrain={selectedTrain} type={type} />
    </>
  );
}

SeatSelectionHeader.propTypes = {
  type: PropTypes.string,
  selectedTrain: PropTypes.object,
};
