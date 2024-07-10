import { useSelector } from 'react-redux';
import MainForm from './MainForm/MainForm';
import TrainSelection from './TrainSelection/TrainSelection';
import React from 'react';

export default function ChooseTrains() {
  const { loadingTrainsList, errorTrainsList } = useSelector(
    (state) => state.train,
  );

  return (
    <>
      <main className="main">
        <MainForm />
        {!loadingTrainsList && !errorTrainsList && <TrainSelection />}
      </main>
    </>
  );
}
