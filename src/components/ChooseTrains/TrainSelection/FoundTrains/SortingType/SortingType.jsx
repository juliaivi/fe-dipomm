import data from './dropdownSorting.json'
import './sortingType.css';
import { useState } from 'react';
import {selectSortType, changeValidForm } from '../../../../../redux/slice/trainSlice';
import {useDispatch } from 'react-redux';

export default function SortingType({selected, setSelected}) {
    const [isActive, setIsActive] = useState(false);

    const dispatch = useDispatch();

    return (
        <>
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
                                        dispatch(changeValidForm(true))
                                        dispatch(selectSortType(el.type));
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