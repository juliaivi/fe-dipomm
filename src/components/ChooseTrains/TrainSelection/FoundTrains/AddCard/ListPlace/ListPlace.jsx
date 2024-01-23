import "./stylelistplace.css";
import AddDepartureService from "../AddDepartureService";

export default function ListPlace({departure , index}) {  
    return (
        <>
            {(departure.have_first_class === true) ? <AddDepartureService index={index} type={'first'} text={'Люкс' } availableSeatsInfo={departure.available_seats_info.first} priceInfo={departure.price_info.first} /> : ''}
            {(departure.have_fourth_class=== true) ? <AddDepartureService index={index} type={'fourth'} text={'Сидячие' } availableSeatsInfo={departure.available_seats_info.fourth} priceInfo={departure.price_info.fourth} /> : ''}
            {(departure.have_second_class === true) ? <AddDepartureService index={index} type={'second'} text={'Купе' } availableSeatsInfo={departure.available_seats_info.second} priceInfo={departure.price_info.second} /> : ''}
            {(departure.have_third_class === true) ? <AddDepartureService index={index} type={'third'} text={'Плацкарт' } availableSeatsInfo={departure.available_seats_info.third} priceInfo={departure.price_info.third} /> : ''}
        </>
    )
}


