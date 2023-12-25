import { useState } from 'react';
import './styletooltip.css';

export default function Tooltip({text, children}) {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <>
            <div className='tooltip-container'
                 onMouseEnter={() => setIsVisible(true)}
                 onMouseLeave={() => setIsVisible(false)} >
                {children}
                {isVisible && <>
                    <div className='toolip'> 
                        {text.map((el, index) => {
                            return(<div className='tooltip__info' key={index}>
                                        <div className='tooltip__type__place'>{el.typeplace}</div>
                                        <div className='tooltip__quantity'>{el.quantity}</div>
                                        <div className='tooltip__price'>{el.price}<span className='tooltip__price__type__currency'>₽</span> </div>
                                    </div>)   
                        })} 
                    </div>    
                </>}  
            </div>
        </>
    )
}