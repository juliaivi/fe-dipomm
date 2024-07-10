import trainLoading from '../img/trainLoading.svg';
import './stylePreloader.css';
import React from 'react';

export default function Loader() {
  return (
    <div className="loader__block">
      <p className="loader__text">Идет поиск</p>
      <img src={trainLoading} alt="loading" className="loader" />
    </div>
  );
}
