import { useEffect, useState } from 'react';
import './styleVagonInfo.css';
import AddServiceButtons from '../AddServiceButtons/AddServiceButtons';
import VagonPlacesList from './VagonPlacesList/VagonPlacesList';
import VagonInfoDetailed from './VagonPlacesList/VagonInfoDetailed/VagonInfoDetailed';
import Accordion from './Accordion';

export default function AddVagonInfo(props) {
// const [btnActive, setBtnActive] = useState(false)....active:false, number:null}
const [btnActive, setBtnActive] = useState([])

const data = [{
    activeTyne:'sedentary',
    object: [{
        type: 'sedentary',
        infoCars: [
            {
                number:'07',
                active: false,
                listPlaces: [
                {
                    number:1,
                    active:true,
                },
                {
                    number:2,
                    active:false,
                },
                {
                    number:3,
                    active:true,
                },
                {
                    number:4,
                    active:false,
                },
                {
                    number:5,
                    active:false,
                },
                {
                    number:6,
                    active:false,
                },
                {
                    number:7,
                    active:false,
                },
                {
                    number:8,
                    active:false,
                },
                {
                    number:9,
                    active:false,
                },
                {
                    number:10,
                    active:false,
                },
                {
                    number:11,
                    active:true,
                },
                {
                    number:12,
                    active:false,
                },
                {
                    number:13,
                    active:true,
                },
                {
                    number:14,
                    active:false,
                },
                {
                    number:15,
                    active:true,
                },
                {
                    number:16,
                    active:false,
                },
                {
                    number:17,
                    active:true,
                },
                {
                    number:18,
                    active:true,
                },
                {
                    number:19,
                    active:true,
                },
                {
                    number:20,
                    active:true,
                },
                {
                    number:21,
                    active:false,
                },
                {
                    number:22,
                    active:false,
                },
                {
                    number:23,
                    active:true,
                },
                {
                    number:24,
                    active:false,
                },
                {
                    number:25,
                    active:false,
                },
                {
                    number:26,
                    active:false,
                },
                {
                    number:27,
                    active:false,
                },
                {
                    number:28,
                    active:false,
                },
                {
                    number:29,
                    active:false,
                },
                {
                    number:30,
                    active:false,
                },
                {
                    number:31,
                    active:true,
                },
                {
                    number:32,
                    active:false,
                },
                {
                    number:33,
                    active:true,
                },
                {
                    number:34,
                    active:false,
                },
                {
                    number:35,
                    active:true,
                },
                {
                    number:36,
                    active:false,
                },
                {
                    number:37,
                    active:true,
                },
                {
                    number:38,
                    active:true,
                },
                {
                    number:39,
                    active:true,
                },
                {
                    number:40,
                    active:true,
                },
                {
                    number:41,
                    active:true,
                },
                {
                    number:42,
                    active:true,
                },
                {
                    number:43,
                    active:true,
                },
                {
                    number:44,
                    active:true,
                },
                {
                    number:45,
                    active:true,
                },
                {
                    number:46,
                    active:true,
                },
                {
                    number:47,
                    active:true,
                },
                {
                    number:48,
                    active:true,
                },
                ],
                totalPlaces: 21,
                topPlaces: 10,
                lowerPlaces: 11,
                topPlacesCost: 2020,
                lowesPlacesCost: 3030,
                additionalServices: [
                    {   type: 'condition',
                        text: 'кондиционер',
                        active:true,
                    },
                    {   type: 'wifi',
                        text: 'Wi-Fi',
                        active:true,
                    },
                    {   type: 'bedding',
                        text: 'белье',
                        active:true,
                    },
                    {   type: 'food',
                        text: 'питание',
                        active:true,
                    }
                ],
                numberPeopleWatching: 13,
            }, 
            {   
                number:'09',
                active: false,
                listPlaces: [
                    {
                        number:1,
                        active:true,
                    },
                    {
                        number:2,
                        active:false,
                    },
                    {
                        number:3,
                        active:true,
                    },
                    {
                        number:4,
                        active:false,
                    },
                    {
                        number:5,
                        active:false,
                    },
                    {
                        number:6,
                        active:false,
                    },
                    {
                        number:7,
                        active:false,
                    },
                    {
                        number:8,
                        active:false,
                    },
                    {
                        number:9,
                        active:false,
                    },
                    {
                        number:10,
                        active:false,
                    },
                    {
                        number:11,
                        active:true,
                    },
                    {
                        number:12,
                        active:false,
                    },
                    {
                        number:13,
                        active:true,
                    },
                    {
                        number:14,
                        active:false,
                    },
                    {
                        number:15,
                        active:true,
                    },
                    {
                        number:16,
                        active:false,
                    },
                    {
                        number:17,
                        active:true,
                    },
                    {
                        number:18,
                        active:true,
                    },
                    {
                        number:19,
                        active:true,
                    },
                    {
                        number:20,
                        active:true,
                    },
                    {
                        number:21,
                        active:false,
                    },
                    {
                        number:22,
                        active:false,
                    },
                    {
                        number:23,
                        active:true,
                    },
                    {
                        number:24,
                        active:false,
                    },
                    {
                        number:25,
                        active:false,
                    },
                    {
                        number:26,
                        active:false,
                    },
                    {
                        number:27,
                        active:false,
                    },
                    {
                        number:28,
                        active:false,
                    },
                    {
                        number:29,
                        active:false,
                    },
                    {
                        number:30,
                        active:false,
                    },
                    {
                        number:31,
                        active:true,
                    },
                    {
                        number:32,
                        active:false,
                    },
                    {
                        number:33,
                        active:true,
                    },
                    {
                        number:34,
                        active:false,
                    },
                    {
                        number:35,
                        active:true,
                    },
                    {
                        number:36,
                        active:false,
                    },
                    {
                        number:37,
                        active:true,
                    },
                    {
                        number:38,
                        active:true,
                    },
                    {
                        number:39,
                        active:true,
                    },
                    {
                        number:40,
                        active:true,
                    },
                    {
                        number:41,
                        active:true,
                    },
                    {
                        number:42,
                        active:true,
                    },
                    {
                        number:43,
                        active:true,
                    },
                    {
                        number:44,
                        active:true,
                    },
                    {
                        number:45,
                        active:true,
                    },
                    {
                        number:46,
                        active:true,
                    },
                    {
                        number:47,
                        active:true,
                    },
                    {
                        number:48,
                        active:true,
                    },
                    ],
                totalPlaces: 21,
                topPlaces: 10,
                lowerPlaces: 11,
                topPlacesCost: 2020,
                lowesPlacesCost: 3030,
                additionalServices: [
                    {   type: 'condition',
                        text: 'кондиционер',
                        active:true,
                    },
                    {   type: 'wifi',
                        text: 'Wi-Fi',
                        active:true,
                    },
                    {   type: 'bedding',
                        text: 'белье',
                        active:true,
                    },
                    {   type: 'food',
                        text: 'питание',
                        active:true,
                    }
                ],
                numberPeopleWatching: 13,
            }, 
            {
                number:'10',
                active:false,
                listPlaces: [
                    {
                        number:1,
                        active:true,
                    },
                    {
                        number:2,
                        active:false,
                    },
                    {
                        number:3,
                        active:true,
                    },
                    {
                        number:4,
                        active:false,
                    },
                    {
                        number:5,
                        active:false,
                    },
                    {
                        number:6,
                        active:false,
                    },
                    {
                        number:7,
                        active:false,
                    },
                    {
                        number:8,
                        active:false,
                    },
                    {
                        number:9,
                        active:false,
                    },
                    {
                        number:10,
                        active:false,
                    },
                    {
                        number:11,
                        active:true,
                    },
                    {
                        number:12,
                        active:false,
                    },
                    {
                        number:13,
                        active:true,
                    },
                    {
                        number:14,
                        active:false,
                    },
                    {
                        number:15,
                        active:true,
                    },
                    {
                        number:16,
                        active:false,
                    },
                    {
                        number:17,
                        active:true,
                    },
                    {
                        number:18,
                        active:true,
                    },
                    {
                        number:19,
                        active:true,
                    },
                    {
                        number:20,
                        active:true,
                    },
                    {
                        number:21,
                        active:false,
                    },
                    {
                        number:22,
                        active:false,
                    },
                    {
                        number:23,
                        active:true,
                    },
                    {
                        number:24,
                        active:false,
                    },
                    {
                        number:25,
                        active:false,
                    },
                    {
                        number:26,
                        active:false,
                    },
                    {
                        number:27,
                        active:false,
                    },
                    {
                        number:28,
                        active:false,
                    },
                    {
                        number:29,
                        active:false,
                    },
                    {
                        number:30,
                        active:false,
                    },
                    {
                        number:31,
                        active:true,
                    },
                    {
                        number:32,
                        active:false,
                    },
                    {
                        number:33,
                        active:true,
                    },
                    {
                        number:34,
                        active:false,
                    },
                    {
                        number:35,
                        active:true,
                    },
                    {
                        number:36,
                        active:false,
                    },
                    {
                        number:37,
                        active:true,
                    },
                    {
                        number:38,
                        active:true,
                    },
                    {
                        number:39,
                        active:true,
                    },
                    {
                        number:40,
                        active:true,
                    },
                    {
                        number:41,
                        active:true,
                    },
                    {
                        number:42,
                        active:true,
                    },
                    {
                        number:43,
                        active:true,
                    },
                    {
                        number:44,
                        active:true,
                    },
                    {
                        number:45,
                        active:true,
                    },
                    {
                        number:46,
                        active:true,
                    },
                    {
                        number:47,
                        active:true,
                    },
                    {
                        number:48,
                        active:true,
                    },
                    ],
                    totalPlaces: 21,
                    topPlaces: 10,
                    lowerPlaces: 11,
                    topPlacesCost: 2020,
                    lowesPlacesCost: 3030,
                    additionalServices: [
                        {   type: 'condition',
                            text: 'кондиционер',
                            active:true,
                        },
                        {   type: 'wifi',
                            text: 'Wi-Fi',
                            active:true,
                        },
                        {   type: 'bedding',
                            text: 'белье',
                            active:true,
                        },
                        {   type: 'food',
                            text: 'питание',
                            active:true,
                        }
                    ],
                    numberPeopleWatching: 13,
            }
        ],  
    },]


}]

   const toggleActive = (e) => {     
        e.preventDefault();
        if (btnActive.length === 0) {
        console.log(e.target.textContent);
        let copy = [...btnActive]
        copy.push(e.target.textContent)
        setBtnActive(copy)
        console.log(btnActive, '1')
        } else {
            let copy = [...btnActive]
            let indexa = copy.indexOf(e.target.textContent)
            console.log(indexa, 'indexa')
            indexa === -1 ? copy.push(e.target.textContent) : copy.splice(indexa, 1); 
            setBtnActive(copy)
            console.log(btnActive, '2')
        }
   }

// const toggleActiveState = (index) => {

//     btnActive.map((item) => {
//         if (data.objects.infoCars[index].number === item) {
//         return 'type__vagon__btn_active';
//     } else {
//        return 'type__vagon__btn';
//     }
//     })
    
// }

debugger

    return (
        <>
                <div className='vagon__info'>
                    <div className='vagon__info__amount'>
                        <span className='vagon__info__title'>Вагоны</span>
                        {data[0].object.map((el) => (
                            (el.type === data[0].activeTyne ) ? 
                            <>
                                {el.infoCars.map((el, index) => {
                                    return (
                                        <button 
                                            key={index} 
                                            className={`btn vagon__info__number  ${btnActive.map((item) => ((item == el.number) ? 'vagon__number__active' : '' ))}`} 
                                            onClick={(e)=> toggleActive(e)}>{el.number}
                                        </button>)
                                })}
                            </> : <></>
                        ))}
                       
                    </div>
                    <span className='vagon__info__text'>Нумерация вагонов начинается с головы поезда</span>
                </div>
                <div>
                    {
                        data[0].object.map((el) => (
                            (el.type === data[0].activeTyne ) ? 
                                <>
                                   {el.infoCars.map((item, index) => (
                                    <>
                                    <div key={index}>
                                        <div className={`vagon__info__detailed_box ${el.type}`} >
                                            <div className='vagon__info__detailed'>
                                                <div className='vagon__number'>{item.number}</div>
                                                <div className='vagon__title'>вагон</div>
                                            </div>
                                        
                                            <div className='vagon__seats__amount__block'> 
                                                <div className='vagon__seats__title'>Места <span>{item.totalPlaces}</span> </div>
                                                <div className='vagon__seats_upper'>Верхние <span>{item.topPlaces}</span></div>
                                                <div className='vagon__seats_lower'>Нижние <span>{item.lowerPlaces}</span></div>
                                            </div>

                                            <div  className='vagon__seats__price__list'>
                                                <div className='vagon__seats__price__title'>Стоимость</div>
                                                <div className='vagon__seats__price_number'>
                                                    {item.topPlacesCost} <span className='vagon__seats__price_sign'>₽</span>
                                                </div>
                                                <div className='vagon__seats__price_number'>
                                                    {item.lowesPlacesCost}<span className='vagon__seats__price_sign'>₽</span>
                                                </div>
                                            </div>

                                            <div className='additional__services' > 
                                                <div className='vagon__seats__service__block'>
                                                    <span className='vagon__seats__service__block__title'>Обслуживание</span>
                                                    <span className='vagon__seats__service__block__text'>ФПК</span>
                                                </div>
                                                <AddServiceButtons  services={item.additionalServices} />               
                                            </div>
                                        </div>

                                        <div className='info__interest__people'>
                                            <div className='info__interest__people__title'>{item.numberPeopleWatching} человек выбирают места в этом поезде</div>
                                        </div>

                                        <VagonPlacesList type={el.type} listPlaces={item.listPlaces}/>
                                    </div>
                                    </>
                                   ))}
                                   
                                </> : <></>
                        ))
                    }

                </div>
                        {/* {data.object.map((el) => (
                            (el.type === data.activeTyne ) ? 
                            <>
                                {   <div ke>
                                        <div className={`vagon__info__detailed_box  ${props.type}`}>

                                        </div>

                                    </div>
                                    
                                }

                            </>
                                {el.object
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
                <VagonPlacesList type={props.type} />}
                      
                            </> : <></>
                        ))}


                 </div>         */}











                    {/* {b.map((el, index) => (
                        <VagonInfoDetailed  type={props.type} numder={el} key={index}/>
                    ))} */}
                    {/* {btnSteat.tybType === '07' &&  <VagonInfoDetailed  type={props.type} numder={btnSteat.tybType}/> }
                    {btnSteat.tybType === '09' && <VagonInfoDetailed  type={props.type} numder={btnSteat.tybType} />} */}
               
                {/* {accordionOpen ?  <VagonInfoDetailed  type={props.type} class={'hidden'} /> : <></>} */}
                {/* <VagonInfoDetailed  type={props.type}/> */}
              
                {/* <div>
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
                <VagonPlacesList type={props.type} /> */}
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
                
           {/* </div> */}
        </>
    )
}