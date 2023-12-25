import { useState } from "react";
import { SvgSelector } from "../SvgSelector/SvgSelector";
import AddVagonInfoDetailed from "../../AddVagonInfoDetailed/AddVagonInfoDetailed";

export default function AddBtnType() {
    const [btnSteat, setBtnSteat] = useState({
        activeObject:null,
        objects: [{
           type: 'sedentary',
           text: 'Сидячий',
           id: 1
        },
        {
            type: 'reserved-seat',
            text: 'Плацкарт',
            id: 1
         },
         {
            type: 'coupe',
            text: 'Купе',
            id: 1
         },
         {
            type: 'lux',
            text: 'Люкс',
            id: 1
         },
    ]
    })

    const toggleActive = (e,index) => {
        e.preventDefault()  
        setBtnSteat({...btnSteat, activeObject: btnSteat.objects[index]})
    }

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
                   <>   <div>
                        <button key={index} className={toggleActiveState(index)} onClick={(e) => {toggleActive(e,index)}}>
                            <SvgSelector type={el.type}/>
                            <div className="type__vagon__text">{el.text}</div>
                        </button>
                        
                        </div>
                    </>)
                })}

                {(btnSteat.activeObject?.type === 'sedentary' && btnSteat.activeObject !== null) && <AddVagonInfoDetailed type={'sedentary'} />}
                {(btnSteat.activeObject?.type === 'reserved-seat' && btnSteat.activeObject !== null) && <AddVagonInfoDetailed type={'reserved-seat'} />}
                {(btnSteat.activeObject?.type === 'coupe'&& btnSteat.activeObject !== null) && <AddVagonInfoDetailed type={'coupe'} />}
                {(btnSteat.activeObject?.type === 'lux' && btnSteat.activeObject !== null) && <AddVagonInfoDetailed type={'lux'} />}
            </div>
        </>
    )
}