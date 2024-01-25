import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {addSeatThere,
    addSeatBack, 
    setTicketPricesThere,
    setTicketPricesBack} from '../../../../../../redux/slice/passengersSlice';

export default function Price(props) {
    const { typeSeatsThere, typeSeatsBack, seatsThere, seatsBack,  selectedPlacesThere, selectedPlacesBack, ticketPricesThere, ticketPricesBack} = useSelector(state => state.passengers);
    const dispatch = useDispatch();
    console.log(selectedPlacesThere, 'selectedPlacesThere - price')

    dispatch(setTicketPricesThere(priceCalculate(selectedPlacesThere, seatsThere, selectedPlacesThere.price))); 
    console.log(ticketPricesThere, 'ticketPricesThere - price')
    // useEffect(() => {
    //     let a;
    //     // if (props.type === 'there') {
    //     //     a = priceCalculate(selectedPlacesThere, seatsThere);
    //     // } else {
    //     //     a = priceCalculate(selectedPlacesBack, seatsBack);
    //     // }
    //     if (props.type === 'there' && selectedPlacesThere?.price !== undefined) {
    //         a = selectedPlacesThere.price
    //         console.log(a, 'a')
    //         console.log(seatsThere, 'seatsThere')
    //         console.log(selectedPlacesThere, 'selectedPlacesThere')
    //         console.log(selectedPlacesThere.price, 'selectedPlacesThere.price')
    //         dispatch(setTicketPricesThere(priceCalculate(selectedPlacesThere, seatsThere, selectedPlacesThere.price))); 
    //     } 
        

    //     // if (props.type === 'back') {
    //         dispatch(setTicketPricesBack(priceCalculate(selectedPlacesBack, seatsBack, selectedPlacesBack.price))); 
    //     // }   
    // }, [selectedPlacesThere, selectedPlacesBack])

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
    return (
        <>
            {(selectedPlacesThere.length > 0 && ticketPricesThere !== 0 && props.type === 'there') && <div className="total__amount__tickets">{props.type === 'there' ? ticketPricesThere : ticketPricesBack} <span className="currency__sign">₽</span></div>}
        </>
    )
}