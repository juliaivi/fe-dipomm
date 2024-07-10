import './stylePassengers.css';
import MainForm from '../ChooseTrains/MainForm/MainForm';
import TripDetails from './TripDetails/TripDetails';
import PassengersFormInfo from './PassengersFormInfo/PassengersFormInfo';
import React from 'react';

export default function PassengersInfo() {
  return (
    <main className="main">
      <MainForm />
      <section className="passengers__details__box">
        <TripDetails />
        <PassengersFormInfo />
      </section>
    </main>
  );
}
