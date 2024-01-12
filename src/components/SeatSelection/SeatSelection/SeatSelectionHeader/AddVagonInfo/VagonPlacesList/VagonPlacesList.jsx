import { useState } from "react"

export default function VagonPlacesList(props) {
    const [value, setValue] = useState([]);

    const toggleElement = (e) => {
        if (e.target.classList.contains('place_item_busy')) {
            console.log(1)
            return;
        }

        if (e.target.classList.contains('place_item_free-active')) {
            e.target.classList.remove('place_item_free-active');
        } else {
            e.target.classList.add('place_item_free-active');
        }

        let copy = [...value];
        let index = copy.indexOf(e.target.textContent);
        if (index === -1) {
            copy.push(e.target.textContent)
        } else (
            copy.splice(index, 1)
        )
        setValue(copy);   
    }

    console.log(props, 'props')

    switch (props.type) {
        case "sedentary":
            return (
                <>
                    <div className='vagon__places__list_sedentary'>
                        <div className='vagon__places__list'>
                            {props.listPlaces.listPlaces.map((el) => (
                                <div className={`place__number place__number_${el.number} ${el.free === true ? 'place_item_free' : 'place_item_busy'}`} key={el.number} onClick={toggleElement} >{el.number}</div>       
                            ))}
                        </div>
                    </div>

                    {value.length > 0 && <div className="total__amount__tickets">{value.length*props.listPlaces.costPlace} <span className="currency__sign">₽</span></div>}
                </>
        )
        case "reserved-seat":
                return (
                    <>
                    <div className='vagon__places__list_reserved-seat'>
                        <div className='vagon__places__list'>
                            {props.listPlaces.listPlaces.map((el) => (
                                <div className={`place__number place__number_${el.number} ${el.free === true ? 'place_item_free' : 'place_item_busy'}`} key={el.number} onClick={toggleElement}>{el.number}</div>       
                            ))}
                        </div>
                    </div>

                    {value.length > 0 && <div className="total__amount__tickets">{value.length*props.listPlaces.costPlace}</div>}

                    </>
            )
        case "coupe": 
            return (
                <div className='vagon__places__list_coupe'>
                    <div className='vagon__places__list'>
                        {props.listPlaces.map((el) => (
                            <div className={`place__number place__number_${el.number} ${el.free === true ? 'place_item_free' : 'place_item_busy'}`} key={el.number} onClick={toggleElement} >{el.number}</div>       
                        ))}
                    </div>
                </div>
            )
        case "lux": 
        return (
            <div className='vagon__places__list_lux'>
                <div className='vagon__places__list'>
                    {props.listPlaces.map((el) => (
                        <div className={`place__number place__number_${el.number} ${(el.free === true) ? 'place_item_free' : 'place_item_busy'}`} key={el.number} onClick={toggleElement} >{el.number}</div>       
                    ))}
                </div>
            </div>
        )
        default: 
        return (<></>);
    }
}