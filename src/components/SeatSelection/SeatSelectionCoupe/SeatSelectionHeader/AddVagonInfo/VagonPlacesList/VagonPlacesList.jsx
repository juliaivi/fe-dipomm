import { useSelector } from "react-redux";
import {addSeatThere, addSeatBack, setTicketPricesThere,
    setTicketPricesBack} from '../../../../../../redux/slice/passengersSlice';
import { useDispatch } from "react-redux";

export default function VagonPlacesList(props) {
    const {typeSeatsThere, typeSeatsBack, seatsThere, selectedPlacesThere, selectedPlacesBack, ticketPricesThere, ticketPricesBack} = useSelector(state => state.passengers);
    const {trainSeats, trainSeatsBack} = useSelector(state => state.train);

    const dispatch = useDispatch();
    let typeSeats;
    let price;

    console.log(trainSeats, trainSeatsBack, 'trainSeats, trainSeatsBack')
    const toggleElement = (e) => {  
        if (e.target.classList.contains('place_item_busy')) {
            return;
        }
        console.log(selectedPlacesThere, 'selectedPlacesThere')
        console.log(props, 'props')
        // let indexVagon = selectedPlacesThere.findIndex(seat =>  seat.vagon_id === props.vagon);
        // if (indexVagon === -1) {
        //     console.log(88888)
        //     dispatch(addSeatThere({seat_id:e.target.textContent, vagon_id: props.vagon}));
        // }

        let index = selectedPlacesThere.findIndex(seat => (seat.seat_id === e.target.textContent && seat.vagon_id === props.vagon))
        if (Number(seatsThere[0].count) + Number(seatsThere[1].count) === selectedPlacesThere.length && index === -1) {
            return
        }

        if (e.target.classList.contains('place_item_free-active')) {
            e.target.classList.remove('place_item_free-active');
        } else {
            e.target.classList.add('place_item_free-active');
        }

        if (props.type === 'there') {
            console.log(9999999)   
            console.log(typeSeatsThere, 'typeSeatsThere')  
            dispatch(addSeatThere({seat_id:e.target.textContent, vagon_id: props.vagon, typeSeat: typeSeatsThere}));
            dispatch(setTicketPricesThere(priceCalculate(selectedPlacesThere)))
        } 
        
        if (props.type === 'back') {
            dispatch(addSeatBack({seat_id:e.target.textContent, vagon_id: props.vagon}))
        }  
    } 

    console.log(selectedPlacesThere, 'selectedPlacesThere')
    const priceCalculate = (el) => {

        if (el.length > 0 && Number(seatsThere[0].count) >= el.length) {
            console.log((Number(seatsThere[0].count) - el.length), '(Number(seatsThere[0].count) - selectedPlacesThere.length)')
            console.log(props.price, 'props.price')
            price = props.price * (Number(seatsThere[0].count) - el.length);
        }
        if (el.length > 0 && Number(seatsThere[1].count) >= selectedPlacesThere.length && Number(seatsThere[0].count) < selectedPlacesThere.length) {
            price = props.price * (el.length -  Number(seatsThere[0].count));
        }
        return price;
    }

    if (selectedPlacesThere.length > 0) {
        // priceCalculate(selectedPlacesThere);
        // dispatch(setTicketPricesThere(priceCalculate(selectedPlacesThere)))
    }

    // if (selectedPlacesThere.length > 0 && Number(seatsThere[0].count) >= selectedPlacesThere.length) {
    //     console.log((Number(seatsThere[0].count) - selectedPlacesThere.length), '(Number(seatsThere[0].count) - selectedPlacesThere.length)')
    //     console.log(props.price, 'props.price')
    //     price = props.price * (Number(seatsThere[0].count) - selectedPlacesThere.length);
    // }
    // if (selectedPlacesThere.length > 0 && Number(seatsThere[1].count) >= selectedPlacesThere.length && Number(seatsThere[0].count) < selectedPlacesThere.length) {
    //     price = props.price * (selectedPlacesThere.length -  Number(seatsThere[0].count));
    // }

    // if (selectedPlacesBack.length > 0 && Number(seatsThere[0].count) >= selectedPlacesThere.length) {
    //     console.log((Number(seatsThere[0].count) - selectedPlacesThere.length), '(Number(seatsThere[0].count) - selectedPlacesThere.length)')
    //     console.log(props.price, 'props.price')
    //     price = props.price * (Number(seatsThere[0].count) - selectedPlacesThere.length);
    // }
    // if (selectedPlacesThere.length > 0 && Number(seatsThere[1].count) >= selectedPlacesThere.length && Number(seatsThere[0].count) < selectedPlacesThere.length) {
    //     price = props.price * (selectedPlacesThere.length -  Number(seatsThere[0].count));
    // }

    console.log(selectedPlacesThere, 'selectedPlacesThere')
    if (props.type === 'there') {
        typeSeats = typeSeatsThere;
        // dispatch(addSeatThere());
        // priceCalculate(selectedPlacesThere);
      
    } else {
        typeSeats = typeSeatsBack;
        priceCalculate(selectedPlacesBack);
    }

    switch (typeSeats) {
        case "fourth":
            return (
                <>
                    <div className='vagon__places__list_sedentary'>
                        <div className='vagon__places__list'>
                            {props.listPlaces.map((el) => (
                                <div className={`place__number place__number_${el.index} ${el.available === true ? 'place_item_free' : 'place_item_busy'}`} key={el.index} onClick={toggleElement} >{el.index}</div>       
                            ))}
                        </div>
                    </div>

                    {selectedPlacesThere.length > 0 && <div className="total__amount__tickets">{price} <span className="currency__sign">₽</span></div>}
                </>
        )
        case "third":
                return (
                    <>
                    <div className='vagon__places__list_reserved-seat'>
                        <div className='vagon__places__list'>
                            {props.listPlaces.map((el) => (
                                <div className={`place__number place__number_${el.index} ${el.available === true ? 'place_item_free' : 'place_item_busy'}`} key={el.index} onClick={toggleElement}>{el.index}</div>       
                            ))}
                        </div>
                    </div>
                    {selectedPlacesThere.length > 0 && <div className="total__amount__tickets">{price} <span className="currency__sign">₽</span></div>}

                    </>
            )
        case "second": 
            return (
                <>
                <div className='vagon__places__list_coupe'>
                    <div className='vagon__places__list'>
                        {props.listPlaces.map((el) => (
                            <div className={`place__number place__number_${el.index} ${el.available === true ? 'place_item_free' : 'place_item_busy'}`} key={el.index} onClick={toggleElement} >{el.index}</div>       
                        ))}
                    </div>
                </div>
                
                {selectedPlacesThere.length > 0 && <div className="total__amount__tickets">{price} <span className="currency__sign">₽</span></div>}
                </>
            )
        case "first": 
        return (
            <>
            <div className='vagon__places__list_lux'>
                <div className='vagon__places__list'>
                    {props.listPlaces.map((el) => (
                        <div className={`place__number place__number_${el.index} ${(el.available === true) ? 'place_item_free' : 'place_item_busy'}`} key={el.index} onClick={toggleElement} >{el.index}</div>       
                    ))}
                </div>
            </div>

            {selectedPlacesThere.length > 0 && <div className="total__amount__tickets">{props.type === 'there' ? ticketPricesThere : ticketPricesBack} <span className="currency__sign">₽</span></div>}

            </>
        )
        default: 
        return (<></>);
    }
}