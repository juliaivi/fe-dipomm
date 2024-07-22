import React, { useEffect } from 'react';
import './about.css';
import PropTypes from 'prop-types';

export default function About({ setProgress }) {
  useEffect(() => {
    setProgress(35);
  }, []);

  return (
    <>
      <section className="about" id="about">
        <h2 className="about__title title">О нас</h2>
        <div className="paragraphs">
          <p className="paragraph">
            Мы рады видеть вас! Мы рботаем для Вас с 2003 года. 14 лет мы
            наблюдаем, как с каждым днем все больше людей заказывают жд билеты
            через интернет.
          </p>
          <p className="paragraph">
            Сегодня можно заказать железнодорожные билеты онлайн всего в 2
            клика, но стоит ли это делать? Мы расскажем о преимуществах заказа
            через интернет.
          </p>
          <p className="paragraph paragraph_bold">
            Покупать жд билеты дешево можно за 90 суток до отправления поезда.
            Благодаря динамическому ценообразованию цена на билеты в это время
            самая низкая.
          </p>
        </div>
      </section>
    </>
  );
}

About.propTypes = {
  setProgress: PropTypes.func,
};
