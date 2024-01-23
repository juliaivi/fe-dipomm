import { useState } from "react";
import { SvgSelector } from "../SvgSelector/SvgSelector";
import AddVagonInfo from "../../AddVagonInfo/AddVagonInfo";
import {choicetypeSeatsThere, choicetypeSeatsBack} from '../../../../../../redux/slice/passengersSlice';
import { useSelector, useDispatch } from 'react-redux';

    export default function AddBtnType({type}) {
        const {typeSeatsThere} = useSelector(state => state.passengers)
    const [btnSteat, setBtnSteat] = useState({
        activeObject:null,
        objects: [{
           type: 'fourth',
           text: 'Сидячий',
           id: 1
        },
        {
            type: 'third',
            text: 'Плацкарт',
            id: 2
         },
         {
            type: 'second',
            text: 'Купе',
            id: 3
         },
         {
            type: 'first',
            text: 'Люкс',
            id: 4
         },
    ]
    })
    const dispatch = useDispatch();
    const toggleActive = (e,index, el) => {
        e.preventDefault()  
        setBtnSteat({...btnSteat, activeObject: btnSteat.objects[index]});

        if (type === 'there') {
            console.log(e,index, el, 'e,index, el')
           dispatch(choicetypeSeatsThere(el)) 
        } else {
            dispatch(choicetypeSeatsBack(el)) 
        }

    }

    console.log(typeSeatsThere, 'typeSeatsThere')

    const toggleActiveState = (index) => {
        if (btnSteat.objects[index] === btnSteat.activeObject) {
            return 'type__vagon__btn_active';
        } else {
           return 'type__vagon__btn';
        }
    }

    return (
        <>
            <div className='type__vagon__items'>
                {btnSteat.objects.map((el,index) => {
                   return( 
                   <>   <div key={el.id}>
                        <button  className={toggleActiveState(index)} onClick={(e) => {toggleActive(e,index, el.type)}}>
                            <SvgSelector type={el.type}/>
                            <div className="type__vagon__text">{el.text}</div>
                        </button>
                        
                        </div>
                    </>)
                })}

                {(btnSteat.activeObject?.type === 'fourth' && btnSteat.activeObject !== null) && <AddVagonInfo typeSeats={'fourth'} type={type}/>}
                {(btnSteat.activeObject?.type === 'third' && btnSteat.activeObject !== null) && <AddVagonInfo typeSeats={'third'} type={type}/>}
                {(btnSteat.activeObject?.type === 'second'&& btnSteat.activeObject !== null) && <AddVagonInfo typeSeats={'second'} type={type}/>}
                {(btnSteat.activeObject?.type === 'first' && btnSteat.activeObject !== null) && <AddVagonInfo typeSeats={'first'} type={type}/>}
            </div>
        </>
    )
}