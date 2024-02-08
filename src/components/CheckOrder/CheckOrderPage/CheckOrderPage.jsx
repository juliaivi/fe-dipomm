import './typeCheckOrderPage.css';
import AddCardElement from '../../ChooseTrains/TrainSelection/FoundTrains/AddCard/AddCardElement';
import AddPassengersInfo from './AddPassengerInfo/AddPassengerInfo';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {orderRequest} from '../../../redux/slice/passengersSlice';

export default function CheckOrderPage() {
    const {selectedTrain, trainId, trainIdBack} = useSelector(state => state.train);
    const {ticketPricesThere, passengersInfo, personalData,seatsThere, selectedPlacesThere, selectedPlacesBack} = useSelector(state => state.passengers);
    const navigete= useNavigate();
    const dispatch = useDispatch();
    
    const confirm = (e) => {
        e.preventDefault();
            const dataThere = passengersInfo.map((passenger) => {
                let ticket;
                let date = passenger.dateBirth.split('.');
                const info = {
                    "is_adult": passenger.type === "adult" ? 'Взрослый' : 'Детский',
                    "first_name": passenger.name,
                    "last_name": passenger.surname,
                    "patronymic": passenger.twoSurname,
                    "gender": passenger.genderType === 'M' ? true : false,
                    "birthday": date[2]+'-'+date[1]+'-'+date[0],
                    "document_type":  passenger.type === "adult" ? 'Паспорт' : 'Свидетельство о рождении',
                    "document_data":  passenger.type === "adult" ? passenger.series + passenger.number : passenger.numberChild

                } 
                
                selectedPlacesThere.map((seat) => {
                    ticket = {
                        "coach_id": seat.vagon_id,
                        "person_info": info,
                        "seat_number": seat.seat_id,
                        "include_children_seat": seatsThere[2].count > 0 ?  true : false
                    }
                })
                return ticket;
           
            })

            const dataBack = selectedPlacesBack.length > 0 ? passengersInfo.map((passenger) => {
                let ticket
                const info = {
                    "is_adult": passenger.type === "adult" ? 'Взрослый' : 'Детский',
                    "first_name": passenger.name,
                    "last_name": passenger.surname,
                    "patronymic": passenger.twoSurname,
                    "gender": passenger.genderType === 'M' ? true : false,
                    "birthday": passenger.dateBirth,
                    "document_type":  passenger.type === "adult" ? 'Паспорт' : 'Свидетельство о рождении',
                    "document_data":  passenger.type === "adult" ? passenger.series + passenger.number : passenger.numberChild

                }
                
                selectedPlacesBack.map(seat => {
                    ticket = {
                        "coach_id": seat.vagon_id,
                        "person_info": info,
                        "seat_number": seat.seat_id,
                        "include_children_seat": passenger.type === "adult" ? false : true
                    }
                })
                return ticket;

            }): null
       
        const order = JSON.stringify({
            "user": {
                "first_name": personalData.name,
                "last_name": personalData.surname,
                "patronymic": personalData.secondName,
                "phone": personalData.telephone,
                "email": personalData.mail,
                "payment_method": personalData.payment === "onlinePayment" ? 'online' : 'cash'
              },
            "departure": {
                "route_direction_id": trainId,
                "seats": dataThere
            },
            "arrival": {
                "route_direction_id": trainIdBack,
                "seats": dataBack
            },

        })

        dispatch(orderRequest(order));
        navigete('/result');
    }

    return (
        <>
            <div className='check__order__box'>
                <section className='train__info__box'>
                    <h3 className='train__info__title'>Поезд</h3>
                    <AddCardElement el={selectedTrain} index={1}/>
                </section>
                
                <section className='passsengers__info'>
                    <h3 className='passsengers__info__title'>Пассажиры</h3>
                    <div className='passsengers__info__box'>
                        <div className='passsengers__info__list'>
                            {passengersInfo.map((el, index) => (
                                <AddPassengersInfo el={el} index={index}/>
                            ))}
                        
                        </div> 
                        <div className='total__cost__info'>   
                            <div className='total__cost__text'>Всего 
                            <span className='total__cost__number'>{ticketPricesThere}</span> 
                                <span className='currency__sign'>₽</span>
                            </div>
                            <button className='change__btn' onClick={() => navigete('/passengers')}>Изменить</button>
                        </div> 
                    </div>
                </section>

                <section className='payment__method__info'>
                    <h3 className='payment__method__title'>Способ оплаты</h3>
                    <div className='payment__method'>{personalData?.payment === "onlinePayment" ? "Онлайн" : "Наличными"}</div>
                    <button className='change__btn' onClick={() => navigete('/payment')}>Изменить</button>
                </section>

                <button className='confirm__btn' onClick={(e) => confirm(e)}>Подтвердить</button>
            </div>
        </>
    )
}