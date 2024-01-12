import './foundTrains.css';
import SortingType from './SortingType/SortingType';
import ShowBy from './ShowBy/ShowBy';
import { useState } from 'react';
import AddCardElement from './AddCard/AddCardElement.jsx';

import Pagination from '../../Pagination/Pagination.jsx';
import data from '../../../../data/datalistplace.json'

export default function FoundTrains () {
    const [selected, setSelected] = useState("времени");

    return (
        <>
         <section className="train__list">
            <div className='was-found'>
                <div className='was-found__title'>
                    <span>найдено 20</span>
                </div>
                <div className='control__list'>
                    <div className='sorting__listing_select__wrapper'>
                        <span className='sorting__title'>сортировать по:</span>
                        <SortingType selected={selected} setSelected ={setSelected}/>
                    </div>
                        <ShowBy />      
                </div>
            </div>
            {data.map((el, index) => (
                <AddCardElement el={el} index={index}/>
            ))}
            

            <ul className='pagination'>
                <Pagination />
            </ul>

         </section>
        </>
    )
}