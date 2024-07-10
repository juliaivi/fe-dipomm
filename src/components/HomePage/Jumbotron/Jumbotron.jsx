import './jumbotron.css';
import TicketSearchForm from './TicketSearchForm';
import React from 'react';

export default function Jumbotron() {
  return (
    <section className="jumbotron">
      <div className="jumbotron__box">
        <div className="jumbotron__banner">
          <div className="jumbotron__info">
            <div className="jumbotron__title__box">
              <p className="jumbotron__title">Вся жизнь -</p>
              <h2 className="jumbotron__title strong">путешествие!</h2>
            </div>
            <TicketSearchForm title={'jumbotron'} />
          </div>
        </div>
      </div>
    </section>
  );
}
