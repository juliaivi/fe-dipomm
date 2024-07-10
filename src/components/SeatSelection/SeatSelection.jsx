import MainForm from '../ChooseTrains/MainForm/MainForm';
import SeatSelectionCoupe from './SeatSelectionCoupe/SeatSelectionCoupe';
import SelectionMenu from '../ChooseTrains/TrainSelection/SelectionMenu/SelectionMenu';
import { useSelector } from 'react-redux';
import React from 'react';

export default function SeatSelection() {
  const { loadingTrainSeats, errorTrainSeats } = useSelector(
    (state) => state.train,
  );
  return (
    <>
      <main className="main">
        <MainForm />

        {!loadingTrainSeats && !errorTrainSeats && (
          <section className="train__selection">
            <SelectionMenu />
            <SeatSelectionCoupe />
          </section>
        )}
      </main>
    </>
  );
}
