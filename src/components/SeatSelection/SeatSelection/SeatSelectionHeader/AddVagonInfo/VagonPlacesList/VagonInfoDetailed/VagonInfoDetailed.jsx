import AddServiceButtons from "../../../AddServiceButtons/AddServiceButtons";
import VagonPlacesList from "../VagonPlacesList";

export default function VagonInfoDetailed(props) {
    console.log(props, 'props.')
    console.log(props.numder, 'props.')
    console.log(props.type, 'props.')
    
    return (
        <>
        <div key={props.key}>
                <div className={`vagon__info__detailed_box  ${props.type}`}>
                    <div className='vagon__info__detailed'>
                        <div className='vagon__number'>{props.numder}</div>
                        <div className='vagon__title'>вагон</div>
                    </div>

                    <div className='vagon__seats__amount__block'> 
                        <div className='vagon__seats__title'>Места <span>11</span> </div>
                        <div className='vagon__seats_upper'>Верхние <span>3</span></div>
                        <div className='vagon__seats_lower'>Нижние <span>8</span></div>
                    </div>

                    <div  className='vagon__seats__price__list'>
                        <div className='vagon__seats__price__title'>Стоимость</div>
                        <div className='vagon__seats__price_number'>
                            2920 <span className='vagon__seats__price_sign'>₽</span>
                        </div>
                        <div className='vagon__seats__price_number'>
                            3530 <span className='vagon__seats__price_sign'>₽</span>
                        </div>
                    </div>

                    <div className='additional__services' > 
                        <div className='vagon__seats__service__block'>
                            <span className='vagon__seats__service__block__title'>Обслуживание</span>
                            <span className='vagon__seats__service__block__text'>ФПК</span>
                        </div>
                        <AddServiceButtons />               
                    </div>
                </div>
     
                <div className='info__interest__people'>
                    <div className='info__interest__people__title'> 11 человек выбирают места в этом поезде</div>
                </div>
                <VagonPlacesList type={props.type} />
                </div>
        </>
    )
}