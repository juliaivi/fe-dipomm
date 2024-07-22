import howWorks1 from '../../../img/how-works1.svg';
import howWorks2 from '../../../img/how-works2.svg';
import howWorks3 from '../../../img/how-works3.svg';
import './howWorks.css';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function HowWorks({ setProgress }) {
  useEffect(() => {
    setProgress(70);
  }, []);

  return (
    <>
      <section className="how__works" id="howworks">
        <div className="how__works_box">
          <div className="how__works__header">
            <h2 className="how__works__title title">Как это работает</h2>
            <button className="button how__works__button">Узнать больше</button>
          </div>

          <ul className="how__works__list">
            <li className="how__works__item">
              <img className="how__works__icon" src={howWorks1} alt="website" />
              <p className="how__works__text">Удобный заказ на сайте</p>
            </li>
            <li className="how__works__item">
              <img className="how__works__icon" src={howWorks2} alt="office" />
              <p className="how__works__text">Нет необходимости ехать в офис</p>
            </li>
            <li className="how__works__item">
              <img className="how__works__icon" src={howWorks3} alt="planet" />
              <p className="how__works__text">Огромный выбор направлений</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

HowWorks.propTypes = {
  setProgress: PropTypes.func,
};
