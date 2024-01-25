import { useSelector, useDispatch } from "react-redux";
import {addSeatThere,
        addSeatBack, 
        setTicketPricesThere,
        setTicketPricesBack} from '../../../../../../redux/slice/passengersSlice';
import { useEffect, useState } from "react";

export default function VagonPlacesList(props) {
    const { typeSeatsThere, typeSeatsBack, seatsThere, seatsBack,  selectedPlacesThere, selectedPlacesBack, ticketPricesThere, ticketPricesBack} = useSelector(state => state.passengers);

    const [value, setValue] = useState();
    const dispatch = useDispatch();
    let typeSeats;
    let price;

    useEffect(() => {
        if (props.type === 'there') {
            console.log(selectedPlacesThere, 'selectedPlacesThere')
            console.log(selectedPlacesThere.price, 'selectedPlacesThere.price')
            dispatch(setTicketPricesThere(priceCalculate(selectedPlacesThere, seatsThere, selectedPlacesThere.price))); 
        } 
        
        // if (props.type === 'back') {
            dispatch(setTicketPricesBack(priceCalculate(selectedPlacesBack, seatsBack, selectedPlacesBack.price))); 
        // }   
    }, [selectedPlacesThere, selectedPlacesBack])

    const toggleElement = (e) => {  
        if (e.target.classList.contains('place_item_busy')) {
            return;
        }
      
        if (props.type === 'there') {
            addingPlace(e, selectedPlacesThere, seatsThere);
           
        } else {
            addingPlace(e, selectedPlacesBack, seatsBack);
        } 
    }

    const addingPlace = (e, listPlaces, numberSeats) => {
        let indexVagon = listPlaces.findIndex(seat => (seat.seat_id === e.target.textContent && seat.vagon_id === props.vagon));
        let indexTypeSeat = listPlaces.findIndex(seat => (seat.vagon_id === props.vagon));
         
        if ((Number(numberSeats[0].count) + Number(numberSeats[1].count) !== listPlaces.length && indexVagon === -1) || 
            (Number(numberSeats[0].count) + Number(numberSeats[1].count) >= listPlaces.length && indexVagon !== -1) ||
            (listPlaces.length > 0 && indexTypeSeat === -1)
            ) {

            if (e.target.classList.contains('place_item_free-active')) {
                e.target.classList.remove('place_item_free-active');
            } else {
                e.target.classList.add('place_item_free-active');
            }

            if (props.type === 'there' ) {
                dispatch(addSeatThere({seat_id:e.target.textContent, vagon_id: props.vagon, price: props.price})); 
            } 
        
            if (props.type === 'back') {
                dispatch(addSeatBack({seat_id:e.target.textContent, vagon_id: props.vagon, price: props.price}))
            }  
        } else {
            return;
        } 
    }

    // if (selectedPlacesThere.length !== value) {

    //     setValue(selectedPlacesThere.length)
    //     dispatch(setTicketPricesThere(priceCalculate(selectedPlacesThere, seatsThere, selectedPlacesThere.price))); 
    // } 
    // else  {
    //     setValue(selectedPlacesBack.length)
    //     dispatch(setTicketPricesBack(priceCalculate(selectedPlacesBack)))
    // }

    function priceCalculate (listPlaces, numberSeats, price) {
        console.log(price, 'price');
        let priceAdult = 0;
        let priceChild  = 0;
            console.log(1)
            console.log(listPlaces, numberSeats,price, 'listPlaces, numberSeats, price')
        if (listPlaces.length > 0 && Number(numberSeats[0].count) >= listPlaces.length) {
            priceAdult  = price * listPlaces.length;
        } else if (listPlaces.length > 0 && Number(numberSeats[0].count) < listPlaces.length){
            priceAdult  = price * Number(numberSeats[0].count);
            priceChild = price * (listPlaces.length -  Number(numberSeats[0].count));
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
                                <div className={`place__number place__number_${el.index} ${el.available === true ? 'place_item_free' : 'place_item_busy'}`} key={el.index} onClick={(e) => toggleElement(e)} >{el.index}</div>       
                            ))}
                        </div>
                    </div>

                    {(selectedPlacesThere.length > 0 && ticketPricesThere !== 0 && props.type === 'there') && <div className="total__amount__tickets">{props.type === 'there' ? ticketPricesThere : ticketPricesBack} <span className="currency__sign">₽</span></div>}
                    {(selectedPlacesBack.length > 0 && ticketPricesBack!== 0 && props.type === 'back') && <div className="total__amount__tickets">{props.type === 'there' ? ticketPricesThere : ticketPricesBack} <span className="currency__sign">₽</span></div>}
                </>
        )
        case "third":
                return (
                    <>
                    <div className='vagon__places__list_reserved-seat'>
                        <div className='vagon__places__list'>
                            {props.listPlaces.map((el) => (
                                <div className={`place__number place__number_${el.index} ${el.available === true ? 'place_item_free' : 'place_item_busy'}`} key={el.index} onClick={(e) => toggleElement(e)}>{el.index}</div>       
                            ))}
                        </div>
                    </div>
                    {(selectedPlacesThere.length > 0 && ticketPricesThere !==0 && props.type === 'there') && <div className="total__amount__tickets">{props.type === 'there' ? ticketPricesThere : ticketPricesBack} <span className="currency__sign">₽</span></div>}
                    {(selectedPlacesBack.length > 0 && ticketPricesBack!== 0 && props.type === 'back') && <div className="total__amount__tickets">{props.type === 'there' ? ticketPricesThere : ticketPricesBack} <span className="currency__sign">₽</span></div>}
                    </>
            )
        case "second": 
            return (
                <>
                <div className='vagon__places__list_coupe'>
                    <div className='vagon__places__list'>
                        {props.listPlaces.map((el) => (
                            <div className={`place__number place__number_${el.index} ${el.available === true ? 'place_item_free' : 'place_item_busy'}`} key={el.index} onClick={(e) => toggleElement(e)} >{el.index}</div>       
                        ))}
                    </div>
                </div>
                
                {(selectedPlacesThere.length > 0 && ticketPricesThere !==0 && props.type === 'there') && <div className="total__amount__tickets">{props.type === 'there' ? ticketPricesThere : ticketPricesBack} <span className="currency__sign">₽</span></div>}
                {(selectedPlacesBack.length > 0 && ticketPricesBack!== 0 && props.type === 'back') && <div className="total__amount__tickets">{props.type === 'there' ? ticketPricesThere : ticketPricesBack} <span className="currency__sign">₽</span></div>}
                </>
            )
        case "first": 
        return (
            <>
            <div className='vagon__places__list_lux'>
                <div className='vagon__places__list'>
                    {props.listPlaces.map((el) => (
                        <div className={`place__number place__number_${el.index} ${(el.available === true) ? 'place_item_free' : 'place_item_busy'}`} key={el.index} onClick={(e) => toggleElement(e)} >{el.index}</div>       
                    ))}
                </div>
            </div>

            {(selectedPlacesThere.length > 0 && ticketPricesThere !==0 && props.type === 'there') && <div className="total__amount__tickets">{props.type === 'there' ? ticketPricesThere : ticketPricesBack} <span className="currency__sign">₽</span></div>}
            {(selectedPlacesBack.length > 0 && ticketPricesBack!== 0 && props.type === 'back') && <div className="total__amount__tickets">{props.type === 'there' ? ticketPricesThere : ticketPricesBack} <span className="currency__sign">₽</span></div>}
            </>
        )
        default: 
        return ('');
    }
}