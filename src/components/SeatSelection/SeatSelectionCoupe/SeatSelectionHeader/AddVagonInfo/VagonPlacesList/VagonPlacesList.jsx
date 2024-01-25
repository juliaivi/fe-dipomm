import { useSelector, useDispatch } from "react-redux";
import {addSeatThere,
        addSeatBack, 
        setTicketPricesThere,
        setTicketPricesBack} from '../../../../../../redux/slice/passengersSlice';
import { useState } from "react";

export default function VagonPlacesList(props) {
    const { typeSeatsThere, typeSeatsBack, seatsThere, seatsBack,  selectedPlacesThere, selectedPlacesBack, ticketPricesThere, ticketPricesBack} = useSelector(state => state.passengers);

    const [value, setValue] = useState();
    const dispatch = useDispatch();
    let typeSeats;
    let price;

    const toggleElement = (e ) => {  
        // let a; 
        // let b;
        // if (props.type === 'there') {
        //     a = selectedPlacesThere;
        //     b = seatsThere;
        // } else {
        //     a = selectedPlacesBack;
        //     b = seatsBack;
        // }
        if (e.target.classList.contains('place_item_busy')) {
            return;
        }
      
        // if (el === 'there') {
        let indexVagon = selectedPlacesThere.findIndex(seat => (seat.seat_id === e.target.textContent && seat.vagon_id === props.vagon));
        let indexTypeSeat = selectedPlacesThere.findIndex(seat => (seat.vagon_id === props.vagon));
         
        if ((Number(seatsThere[0].count) + Number(seatsThere[1].count) !== selectedPlacesThere.length && indexVagon === -1) || 
            (Number(seatsThere[0].count) + Number(seatsThere[1].count) >= selectedPlacesThere.length && indexVagon !== -1) ||
            (selectedPlacesThere.length > 0 && indexTypeSeat === -1)) {

            if (e.target.classList.contains('place_item_free-active')) {
                e.target.classList.remove('place_item_free-active');
            } else {
                e.target.classList.add('place_item_free-active');
            }

            if (props.type === 'there' ) {
                dispatch(addSeatThere({seat_id:e.target.textContent, vagon_id: props.vagon})); 
            } 
        
            if (props.type === 'back') {
                dispatch(addSeatBack({seat_id:e.target.textContent, vagon_id: props.vagon}))
            }  
        } else {
            return;
        } 
    //  }

    //  if (el === 'back') {
    //     let indexVagon = selectedPlacesBack.findIndex(seat => (seat.seat_id === e.target.textContent && seat.vagon_id === props.vagon));
    //     let indexTypeSeat = selectedPlacesBack.findIndex(seat => (seat.vagon_id === props.vagon));
         
    //     if ((Number(seatsBack[0].count) + Number(seatsBack[1].count) !== selectedPlacesBack.length && indexVagon === -1) || 
    //         (Number(seatsBack[0].count) + Number(seatsBack[1].count) >= selectedPlacesBack.length && indexVagon !== -1) ||
    //         (selectedPlacesBack.length > 0 && indexTypeSeat === -1)) {

    //         if (e.target.classList.contains('place_item_free-active')) {
    //             e.target.classList.remove('place_item_free-active');
    //         } else {
    //             e.target.classList.add('place_item_free-active');
    //         }

    //         if (props.type === 'there' ) {
    //             dispatch(addSeatThere({seat_id:e.target.textContent, vagon_id: props.vagon}));
         
               
    //         } 
        
    //         if (props.type === 'back') {
    //             dispatch(addSeatBack({seat_id:e.target.textContent, vagon_id: props.vagon}))
    //         }  
    //     } else {
    //         return;
    //     } 

    // } 

    }

    if (selectedPlacesThere.length !== value) {
        setValue(selectedPlacesThere.length)
        dispatch(setTicketPricesThere(priceCalculate(selectedPlacesThere)))
    }

    if (selectedPlacesBack.length !== value) {
        setValue(selectedPlacesBack.length)
        dispatch(setTicketPricesBack(priceCalculate(selectedPlacesBack)))
    }

    function priceCalculate (el) {
        let priceAdult = 0;
        let priceChild  = 0;

        if (el.length > 0 && Number(seatsThere[0].count) >= el.length) {
            priceAdult  = props.price * el.length;
        } else if (el.length > 0 && Number(seatsThere[0].count) < el.length){
            priceAdult  = props.price * Number(seatsThere[0].count);
            priceChild = props.price * (el.length -  Number(seatsThere[0].count));
        } else {
            return
        }

        price = priceAdult + priceChild;
        return price;
    }

   
    if (props.type === 'there') {
        typeSeats = typeSeatsThere; 
    } else {
        typeSeats = typeSeatsBack;
    }
        
    switch (typeSeats) {
        case "fourth":
            return (
                <>
                    <div className='vagon__places__list_sedentary'>
                        <div className='vagon__places__list'>
                            {props.listPlaces.map((el) => (
                                <div className={`place__number place__number_${el.index} ${el.available === true ? 'place_item_free' : 'place_item_busy'}`} key={el.index} onClick={(e) =>toggleElement(e)} >{el.index}</div>       
                            ))}
                        </div>
                    </div>

                    {(selectedPlacesThere.length > 0 && ticketPricesThere !== 0) && <div className="total__amount__tickets">{props.type === 'there' ? ticketPricesThere : ticketPricesBack} <span className="currency__sign">₽</span></div>}
                </>
        )
        case "third":
                return (
                    <>
                    <div className='vagon__places__list_reserved-seat'>
                        <div className='vagon__places__list'>
                            {props.listPlaces.map((el) => (
                                <div className={`place__number place__number_${el.index} ${el.available === true ? 'place_item_free' : 'place_item_busy'}`} key={el.index} onClick={(e) =>toggleElement(e)}>{el.index}</div>       
                            ))}
                        </div>
                    </div>
                    {(selectedPlacesThere.length > 0 && ticketPricesThere !==0) && <div className="total__amount__tickets">{props.type === 'there' ? ticketPricesThere : ticketPricesBack} <span className="currency__sign">₽</span></div>}

                    </>
            )
        case "second": 
            return (
                <>
                <div className='vagon__places__list_coupe'>
                    <div className='vagon__places__list'>
                        {props.listPlaces.map((el) => (
                            <div className={`place__number place__number_${el.index} ${el.available === true ? 'place_item_free' : 'place_item_busy'}`} key={el.index} onClick={(e) =>toggleElement(e)} >{el.index}</div>       
                        ))}
                    </div>
                </div>
                
                {(selectedPlacesThere.length > 0 && ticketPricesThere !==0) && <div className="total__amount__tickets">{props.type === 'there' ? ticketPricesThere : ticketPricesBack} <span className="currency__sign">₽</span></div>}
                </>
            )
        case "first": 
        return (
            <>
            <div className='vagon__places__list_lux'>
                <div className='vagon__places__list'>
                    {props.listPlaces.map((el) => (
                        <div className={`place__number place__number_${el.index} ${(el.available === true) ? 'place_item_free' : 'place_item_busy'}`} key={el.index} onClick={(e) =>toggleElement(e)} >{el.index}</div>       
                    ))}
                </div>
            </div>

            {(selectedPlacesThere.length > 0 && ticketPricesThere !==0) && <div className="total__amount__tickets">{props.type === 'there' ? ticketPricesThere : ticketPricesBack} <span className="currency__sign">₽</span></div>}

            </>
        )
        default: 
        return ('');
    }
}