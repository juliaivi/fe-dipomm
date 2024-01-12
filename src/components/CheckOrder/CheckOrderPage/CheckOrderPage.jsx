import './typeCheckOrderPage.css';
import AddCardElement from '../../ChooseTrains/TrainSelection/FoundTrains/AddCard/AddCardElement';
import dataEl from '../../../data/datalistplace.json';
import AddPassengersInfo from './AddPassengerInfo/AddPassengerInfo';

export default function CheckOrderPage() {

    let findElem = dataEl.find((el) => { return el.itemcard.traininformation.name === "116С"});
    const data = {
        passsengersInfo:[
        {
            type: 'Взрослый',
            fullName: "Мартынюк Ирина Эдуардовна",
            gender: "женский",
            dateBirth: '17.02.1985',
            documentType: 'Паспорт РФ',
            documentData: '4204 380694'
        },
        {
            type: 'Детский',
            fullName: "Мартынюк Кирил Сергеевич",
            gender: "мужской",
            dateBirth: '25.01.2006',
            documentType: 'Свидетельство о рождении',
            documentData: 'VIII УН 256319'
        },
        {
            type: 'Взрослый',
            fullName: "Мартынюк Сергей Петрович",
            gender: "мужской",
            dateBirth: '19.06.1982',
            documentType: 'Паспорт РФ',
            documentData: '4204 380694'
        },
    ],
    totalCost: 7760,
    paymentMethod: "Hаличными",
}
    return (
        <>
            <div className='check__order__box'>
                <section className='train__info__box'>
                    <h3 className='train__info__title'>Поезд</h3>
                    <AddCardElement el={findElem} index={1}/>
                </section>
                
                <section className='passsengers__info'>
                    <h3 className='passsengers__info__title'>Пассажиры</h3>
                    <div className='passsengers__info__box'>
                        <div className='passsengers__info__list'>
                            {data.passsengersInfo.map((el, index) => (
                                <AddPassengersInfo el={el} index={index}/>
                            ))}
                        
                        </div> 
                        <div className='total__cost__info'>   
                            <div className='total__cost__text'>Всего 
                            <span className='total__cost__number'>{data.totalCost}</span> 
                                <span className='currency__sign'>₽</span>
                            </div>
                            <button className='change__btn'>Изменить</button>
                        </div> 
                    </div>
                </section>

                <section className='payment__method__info'>
                    <h3 className='payment__method__title'>Способ оплаты</h3>
                    <div className='payment__method'>{data.paymentMethod}</div>
                    <button className='change__btn'>Изменить</button>
                </section>

                <button className='confirm__btn'>Подтвердить</button>
            </div>
        </>
    )
}