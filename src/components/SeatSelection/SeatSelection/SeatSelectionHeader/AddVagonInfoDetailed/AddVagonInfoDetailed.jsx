import './styleVagonInfoDetailed.css';
import AddServiceButtons from '../AddServiceButtons/AddServiceButtons';
import VagonPlacesList from './VagonPlacesList/VagonPlacesList';

export default function AddVagonInfoDetailed(props) {
    return (
        <>
              <div className='vagon__info'>
                    <div className='vagon__info__amount'>
                        <span className='vagon__info__title'>Вагоны</span>
                        <button className='btn vagon__info__number vagon__number__active'>07</button>
                        <button className='btn vagon__info__number'>09</button>
                    </div>
                    <span className='vagon__info__text'>Нумерация вагонов начинается с головы поезда</span>
                </div>
            <div>
                <div className='vagon__info__detailed_box'>
                    <div className='vagon__info__detailed'>
                        <div className='vagon__number'>07</div>
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
                {/* <div className='vagon__places__list'>
                    <div className='first_row'>
                        <div className='place_item'>
                            <div className='place__number place_item_busy'>2</div>
                            <div className='place__number place_item_busy'>4</div>

                        </div>
                        <div className='place_item'>
                            <div className='place__number place_item_busy'>2</div>
                            <div className='place__number place_item_busy'>4</div>

                        </div>
                        <div className='place_item'>
                            <div className='place__number place_item_busy'>2</div>
                            <div className='place__number place_item_busy'>4</div>

                        </div>
                        <div className='place_item'>
                            <div className='place__number place_item_busy'>2</div>
                            <div className='place__number place_item_busy'>4</div>
                        </div>
                        <div className='place_item'>
                            <div className='place__number place_item_free'>2</div>
                            <div className='place__number place_item_busy'>4</div>
                        </div>
                        <div className='place_item'>
                            <div className='place__number place_item_busy'>2</div>
                            <div className='place__number place_item_busy'>4</div>
                        </div>
                        <div className='place_item'>
                            <div className='place__number place_item_busy'>2</div>
                            <div className='place__number place_item_busy'>4</div>
                        </div>
                        <div className='place_item'>
                            <div className='place__number place_item_free'>2</div>
                            <div className='place__number place_item_free'>4</div>
                        </div>
                    </div>

                    <div className='second__row'>
                        <div className='place_item'>
                            <div className='place__number place_item_free'>2</div>
                            <div className='place__number place_item_free'>4</div>

                        </div>
                        <div className='place_item'>
                            <div className='place__number place_item_busy'>2</div>
                            <div className='place__number place_item_busy'>4</div>

                        </div>
                        <div className='place_item'>
                            <div className='place__number place_item_busy'>2</div>
                            <div className='place__number place_item_free'>4</div>

                        </div>
                        <div className='place_item'>
                            <div className='place__number place_item_free'>2</div>
                            <div className='place__number place_item_free'>4</div>
                        </div>
                        <div className='place_item'>
                            <div className='place__number place_item_busy'>2</div>
                            <div className='place__number place_item_free'>4</div>
                        </div>
                        <div className='place_item'>
                            <div className='place__number place_item_busy'>2</div>
                            <div className='place__number place_item_busy'>4</div>
                        </div>
                        <div className='place_item'>
                            <div className='place__number place_item_busy'>2</div>
                            <div className='place__number place_item_free'>4</div>
                        </div>
                        <div className='place_item'>
                            <div className='place__number place_item_busy'>2</div>
                            <div className='place__number place_item_free'>4</div>
                        </div>
                    </div>
                  
                   
                   
                </div> */}

                {/* <div className='vagon__list__places__box'>
                    <div className='vagon__list__places'>
                        <div className='place__number'>1</div>
                        <div className='place__number'>2</div>
                    </div>
                    <div>
                        <div className='place__number'>3</div>
                        <div className='place__number'>4</div>
                    </div>
                    <div>
                        <div className='place__number'>5</div>
                        <div className='place__number'>6</div>
                    </div>
                    <div>
                        <div className='place__number'>7</div>
                        <div className='place__number'>8</div>
                    </div>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                </div> */}
                
           </div>
        </>
    )
}