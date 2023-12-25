import "./stylelistplace.css";
import Tooltip from "./Tooltip/Tooltip";

export default function ListPlace(props) {
   
    return (
        <>
            {props.informationplace.map((el, index) => {
               return (
                            <div className="item__place__info_box" key={index}>
                                <p className="view__place">{el.type}</p>
                                <div className="item__place__info">
                                    <Tooltip text={el.description}>
                                        <p className="number__seats">{el.quantity}</p>
                                    </Tooltip>
                                    <p className="price__from">от</p>
                                    <p className="price__number">{el.price}</p>
                                    <p className="price__type__currency">₽</p> 
                                </div>   
                            </div>
                )
            })}
                
        </>
    )
}


