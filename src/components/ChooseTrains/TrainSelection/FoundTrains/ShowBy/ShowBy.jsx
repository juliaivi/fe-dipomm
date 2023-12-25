import { useState } from "react";
import './showBy.css';

export default function ShowBy() {
    const data = [
            {"id": 0, "number": 5},
            {"id": 1, "number": 10},
            {"id": 0, "number": 20},
        ];
    const [value, setValue] = useState(0);

    const handleOnClick = (index) => {
        setValue(index);
    }

    return (
        <>
            <div className='show__by'>    
            <p className='show__by__title'>показывать по: </p>
                {data.map((el, index) => (
                    <div key={index} onClick={() => handleOnClick(index)} className={index === value ? 'show__by__item_active' : 'show__by__item'}>{el.number}</div>
                ))}
            </div>
        </>
    )
}