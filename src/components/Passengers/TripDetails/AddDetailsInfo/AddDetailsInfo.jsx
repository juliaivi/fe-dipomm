export default function AddDetailsInfo(props) {
    return (
        <>
                    <div className="details__train">
                        <div className="details__train__text">№ Поезда</div>
                        <div className="details__train__number">{props.data.trainNumber}</div>
                    </div>
                    <div className="details__name__info">
                        <div className="details__train__text">Название</div>
                        <div className="details__startin__point">
                            <div className="details__departure__point">{props.data.namePlacePoint}</div>
                            <div className="details__departure__city">{props.data.namePlaceCity}</div>
                        </div>
                    </div>

                    <div className="details__time__info">
                        <div className="departure__information">
                            <div className="departure__time">{props.data.departureTime}</div>
                            <div className="departure__date">{props.data.departureDate}</div>
                        </div>
                        <div className="travel__time__info">
                            <div className="trave__time">{props.data.travelTime}</div>
                            <img src={props.arrow} className="travel__arrow" alt="arrow" />
                        </div>
                        <div className="arrival__information">
                            <div className="arrival__time">{props.data.arrivalTime}</div>
                            <div className="arrival__date">{props.data.arrivalDate}</div>
                        </div>
                    </div>

                    <div className="details__place__info">
                        <div className="details__place__departure">
                            <div className="name__departure__city">{props.data.nameDepartureCity}</div>
                            <div className="name__departure__station">{props.data.nameDepartureStation}</div>
                        </div>
                        <div className="arrival__place__info">
                        <div className="name__city__arrival">{props.data.nameCityArrival}</div>
                            <div className="name__arrival__station">{props.data.nameArrivalStation}</div>
                        </div>
            
                    </div>
        </>
    )
}