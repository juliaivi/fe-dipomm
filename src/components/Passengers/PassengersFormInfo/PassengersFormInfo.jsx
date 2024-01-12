import './typePassengersFormInfo.css';
import { useState } from 'react';

import AddPassengersItem from './AddPassengersItem/AddPassengersItem';


export default function PassengersFormInfo() {
const state = [];

const [card, setCard] = useState(state);
const [index, setIndex] = useState(0);

const AddPassengers = (id) =>{
        setIndex(id + 1);
        setCard((el) => [...el, id + 1]);
    }

    console.log(card, 'card PassengersFormInfo')
    return (
        <>
            <section className="passengers__forms__box">
                {card.map((el,index) => (
                    <AddPassengersItem index={el} card={card} setCard={setCard}/>
                ))}   
          
                <div className='add_passengers__box' >
                    <div className='add_passengers__title'>Добавить пассажиров</div>
                    <button className='add_passengers' onClick={() => AddPassengers(index)}>+</button>
                </div>

                <button className='further-btn'>Далее</button>

            </section>
        </>
    )
}