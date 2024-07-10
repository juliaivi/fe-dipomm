import SelectionMenu from './SelectionMenu/SelectionMenu';
import FoundTrains from './FoundTrains/FoundTrains';
import './trainSelection.css';
import React from 'react';

export default function TrainSelection() {
  return (
    <>
      <section className="train__selection">
        <SelectionMenu classElem={'train'} />
        <FoundTrains />
      </section>
    </>
  );
}
