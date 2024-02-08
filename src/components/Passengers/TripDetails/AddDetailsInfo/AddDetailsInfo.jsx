import { useSelector } from "react-redux";
import { convertingSecondsHours } from "../../../ChooseTrains/TrainSelection/FoundTrains/AddCard/convertingSecondsHours";
import { conversionData } from "../conversionData";

export default function AddDetailsInfo(props) {
    const { form } = useSelector(state => state.train);

// код повторяется можно вынести

    return (
        <>
                    <div className="details__train">
                        <div className="details__train__text">№ Поезда</div>
                        <div className="details__train__number">{props.data.train.name}</div>
                    </div>
                    <div className="details__name__info">
                        <div className="details__train__text">Название</div>
                        <div className="details__startin__point">
                            <div className="details__departure__point">{props.data.from.city.name}</div>
                            <div className="details__departure__city">{props.data.to.city.name}</div>
                        </div>
                    </div>

                    <div className="details__time__info">
                        <div className="departure__information">
                            <div className="departure__time">{convertingSecondsHours(props.data.from.datetime)}</div>
                            <div className="departure__date">{conversionData(form.date_start)}</div>
                        </div>
                        <div className="travel__time__info">
                            <div className="trave__time">{convertingSecondsHours(props.data.duration)}</div>
                            <img src={props.arrow} className="travel__arrow" alt="arrow" />
                        </div>
                        <div className="arrival__information">
                            <div className="arrival__time">{convertingSecondsHours(props.data.to.datetime)}</div>
                            <div className="arrival__date">{conversionData(form.date_end)}</div>
                        </div>
                    </div>

                    <div className="details__place__info">
                        <div className="details__place__departure">
                            <div className="name__departure__city">{props.data.from.city.name}</div>
                            <div className="name__departure__station">{props.data.from.railway_station_name}</div>
                        </div>
                        <div className="arrival__place__info">
                        <div className="name__city__arrival">{props.data.to.city.name}</div>
                            <div className="name__arrival__station">{props.data.to.railway_station_name}</div>
                        </div>
            
                    </div>
        </>
    )
}