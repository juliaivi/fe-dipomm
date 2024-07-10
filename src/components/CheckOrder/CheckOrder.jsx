import MainForm from '../ChooseTrains/MainForm/MainForm';
import TripDetails from '../Passengers/TripDetails/TripDetails';
import CheckOrderPage from './CheckOrderPage/CheckOrderPage';
import React from 'react';

export default function CheckOrder() {
  return (
    <>
      <main className="main">
        <MainForm />
        <section className="payment__details__box">
          <TripDetails />
          <CheckOrderPage />
        </section>
      </main>
    </>
  );
}
