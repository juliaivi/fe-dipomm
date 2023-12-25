import data from './dropdownSorting.json'
import './sortingType.css';
import { useState } from 'react';

export default function SortingType({selected, setSelected}) {
    const [isActive, setIsActive] = useState(false);

    return (
        <>
        {console.log(data[0])}

            <div className='dropdown sorting__type'>
                <div className='dropdown-btn' onClick={(e) => {
                        setIsActive(!isActive)}
                        }>{selected}
                </div>

                {isActive &&  
                        (<div className='dropdown-content'>
                           {data[0].sortingtype.map((el, index) => {
                            return ( 
                                <div 
                                    className='dropdown-item' 
                                    key={index} 
                                    onClick={(e) => {
                                        setSelected(el.name); 
                                        setIsActive(false);
                                    }}
                                >{el.name}</div>  
                            )
                        })}
                        </div>
                     )}
                </div> 
        </>
    )
}