import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {selectQuantity, changeValidForm } from '../../../../../redux/slice/trainSlice';

import './showBy.css';

export default function ShowBy() {
    const data = [
            {"id": 0, "number": 5},
            {"id": 1, "number": 10},
            {"id": 2, "number": 20},
        ];
    const [value, setValue] = useState(5);

    const handleOnClick = (number) => {
        setValue(number);
    }

    const dispatch = useDispatch();

    return (
        <>
            <div className='show__by'>    
            <p className='show__by__title'>показывать по: </p>
                {data.map((el, index) => (
                    <div key={index} onClick={() => {
                        handleOnClick(el.number);
                        dispatch(changeValidForm(true));
                        dispatch(selectQuantity(el.number));
                    }} className={el.number === value ? 'show__by__item_active' : 'show__by__item'}>{el.number}</div>
                ))}
            </div>
        </>
    )
}