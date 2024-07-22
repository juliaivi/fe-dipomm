import './typeSuccessfulOrder.css';
import sendTicket from '../../img/sendTicket.svg';
import showTicket from '../../img/showTicket.svg';
import reprintTicket from '../../img/reprintTicket.svg';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { orderResult } from '../../redux/slice/passengersSlice';
import Loader from '../Preloader';
import Error from '../Error';
import { resetData } from '../../redux/slice/trainSlice';

export default function SuccessfulOrder() {
  const { ticketPricesThere, personalData, errorOrder, loadingOrder } =
    useSelector((state) => state.passengers);
  const [star, setStar] = useState(null);
  const navigete = useNavigate();
  const dispatch = useDispatch();
  const amount = Array(5)
    .fill()
    .map((e, i) => i + 1);

  useEffect(() => {
    dispatch(resetData());
  }, []);

  return (
    <>
      <main className="main">
        <section className="successful__order__header">
          <div className="successful__order__jumbotron">
            <div className="jumbotron__banner"></div>
          </div>
        </section>

        {loadingOrder && <Loader />}
        {errorOrder && <Error />}
        {!loadingOrder && !errorOrder && (
          <section className="successful__order__box">
            <h2 className="successful__order__title">
              {' '}
              Благодарим Вас за заказ!
            </h2>
            <div className="result__order__info__box">
              <div className="result__order__info">
                <div className="result__order__number">№Заказа 285АА</div>
                <div className="order__cost__info">
                  <span className="result__order__text">сумма</span>
                  <span className="result__order__cost">
                    {ticketPricesThere}
                  </span>
                  <span className="currency__sign">₽</span>
                </div>
              </div>

              <div className="result__order__advice__list">
                <div className="result__order__advice__item">
                  <img
                    className="result__order__advice__img"
                    src={sendTicket}
                    alt="sendTicket"
                  />
                  <p className="result__order__advice__text">
                    билеты будут отправлены на ваш
                  </p>
                  <span className="result__order__advice__text bold">
                    e-mail
                  </span>
                </div>

                <div className="result__order__advice__item">
                  <img
                    className="result__order__advice__img"
                    src={reprintTicket}
                    alt="reprintTicket"
                  />
                  <span className="result__order__advice__text">
                    <span className="result__order__advice__text bold">
                      распечатайте
                    </span>{' '}
                    и сохраняйте билеты до даты поездки
                  </span>
                </div>

                <div className="result__order__advice__item">
                  <img
                    className="result__order__advice__img"
                    src={showTicket}
                    alt="showTicket"
                  />
                  <span className="result__order__advice__text bold">
                    предьявите{' '}
                  </span>
                  <span className="result__order__advice__text">
                    распечатанные билеты при посадке
                  </span>
                </div>
              </div>

              <div className="result__order__notice">
                <h2 className="result__order__notice__title">
                  {' '}
                  {personalData.name + ' ' + personalData.two_surname}!
                </h2>
                <p className="result__order__notice__text">
                  Ваш заказ успешно оформлен.
                </p>
                <p className="result__order__notice__text">
                  В ближайшее время с вами свяжется наш оператор для
                  подтверждения.
                </p>
                <p className="result__order__notice__text bold">
                  Благодарим Вас за оказанное доверие и желаем приятного
                  путешествия!
                </p>
              </div>

              <div className="rate__service__box">
                <div className="rate__service">
                  <span className="rate__service__text">Оценить сервис</span>

                  {amount.map((el, index) => (
                    <button
                      key={index}
                      className={`rate__service__btn_star ${star !== null && star >= el ? 'active' : ''}`}
                      onClick={() => setStar(el)}
                    ></button>
                  ))}
                </div>
                <button
                  className="rate__service__btn_back"
                  onClick={() => {
                    dispatch(orderResult());
                    navigete('/');
                  }}
                >
                  Вернуться на главную
                </button>
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
