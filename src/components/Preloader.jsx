import trainLoading from '../img/trainLoading.svg';
import './stylePreloader.css';
import React from 'react';

export default function Loader() {
  return (
    <div className="loader__block">
      <div className="loader__block__info">
        <p className="loader__text">Идет поиск</p>
        <div className="loader__block__info-img">
          <img src={trainLoading} alt="loading" className="loader" />
        </div>
      </div>
    </div>
  );
}
