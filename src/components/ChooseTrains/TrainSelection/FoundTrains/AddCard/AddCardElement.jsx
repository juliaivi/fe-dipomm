import "./stylecard.css";
import data from './datalistplace.json';
import ListPlace from "./ListPlace/ListPlace";

import train from '../../../../../img/train.svg';
import arrowrigth from '../../../../../img/arrowrigth.svg';
import arrowleft from '../../../../../img/arrowleft.svg';
import wifi from '../../../../../img/wifi.svg';
import express from '../../../../../img/express.svg';
import mug from '../../../../../img/mug.svg';



export default function AddCardElement() {

    return (

        <>
        {data.map((el, index) => {
          return(<div className="cart__item" key={index}>
                <div className="cart__info">
                    <img src={train} alt="train" className="train__icon"></img>
                    <h2 className="train__name">{el.itemcard.traininformation.name}</h2>
                    <p className="path__name">{el.itemcard.traininformation.initialstart}</p>
                    {(el.itemcard.traininformation.from !== null) ? <p className="path__name">{el.itemcard.traininformation.from}</p> : <></> }
                    <p className="path__name">{el.itemcard.traininformation.to}</p>
                </div>
                <div className="train__info_box">
                    <div className='train__info'>
                    <div className="train__schedule__there">
                        <div className="train__departure">
                            <div className="departure__time">{el.itemcard.pathinformationfrom.timefrom}</div>
                            <div className="departure__city">{el.itemcard.pathinformationfrom.cityfrom}</div>
                            <div className="departure__station">{el.itemcard.pathinformationfrom.railwaystationfrom}</div>
                        </div>

                        <div className="travel__info">
                            <div className="travel__time">{el.itemcard.pathinformationfrom.timefrom}</div>
                            <img src={arrowrigth} alt="" className="travel__img"></img>
                        </div>

                        <div className="train__arrival">
                            <div className="arrival__time">{el.itemcard.pathinformationfrom.timeto}</div>
                            <div className="arrival__city">{el.itemcard.pathinformationfrom.cityto}</div>
                            <div className="arrival__station">{el.itemcard.pathinformationfrom.railwaystationto}</div>
                        </div>
                    </div>

                    {el.itemcard.pathinformationto !==null ? <>
                            <div className="train__schedule__there">
                                <div className="train__departure">
                                    <div className="departure__time">{el.itemcard.pathinformationto.timefrom}</div>
                                    <div className="departure__city">{el.itemcard.pathinformationto.cityfrom}</div>
                                    <div className="departure__station">{el.itemcard.pathinformationto.railwaystationfrom}</div>
                                </div>

                                <div className="travel__info">
                                    <div className="travel__time">{el.itemcard.pathinformationto.timefrom}</div>
                                    <img src={arrowleft} alt="" className="travel__img"></img>
                                </div>

                                <div className="train__arrival">
                                    <div className="arrival__time">{el.itemcard.pathinformationto.timeto}</div>
                                    <div className="arrival__city">{el.itemcard.pathinformationto.cityto}</div>
                                    <div className="arrival__station">{el.itemcard.pathinformationto.railwaystationto}</div>
                                </div>
                            </div>
                        </> : <></>}
                    </div>

                    <div className='list__place__box'>    
                        <div className="list__place__info">
                            <ListPlace  informationplace={el.itemcard.informationplace} />
                        </div>  

                        <div className='list__services_box'>
                            <div className='item__services'>
                                <img src={wifi} className='services__img' alt='wifi'></img>
                                <img src={express} className='services__img' alt='express'></img>
                                <img src={mug} className='services__img' alt='mug'></img>
                            </div>
     
                            <button className='button btn__choose'>Выбрать места</button>
                       </div> 
                       
                   </div>
                </div>
            </div>)
        })}
                      
        
        </>
    )
}


