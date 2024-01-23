import { useState } from 'react';
import './styletooltip.css';

export default function Tooltip({text, index, children}) {
    const [isVisible, setIsVisible] = useState(false);

    return (
            <div className='tooltip-container'
                key={index}
                onMouseEnter={() => setIsVisible(true)}
                onMouseLeave={() => setIsVisible(false)} >
                {children}
                {isVisible && <>
                    <div className='toolip'>
                        {text?.bottom_price && <>
                                    <div className='tooltip__info'>
                                        <div className='tooltip__type__place'>нижние</div>
                                        <div className='tooltip__quantity'>5</div>
                                        <div className='tooltip__price'>{text.bottom_price}<span className='tooltip__price__type__currency'>₽</span> </div>
                                    </div>
                        
                        </>}

                        {text?.top_price && <>
                                    <div className='tooltip__info'>
                                        <div className='tooltip__type__place'>верхние</div>
                                        <div className='tooltip__quantity'>5</div>
                                        <div className='tooltip__price'>{text.top_price}<span className='tooltip__price__type__currency'>₽</span> </div>
                                    </div>
                        
                        </>}

                        {(text?.side_price || text?.price) && <>
                                    <div className='tooltip__info'>
                                        <div className='tooltip__type__place'>сидячие</div>
                                        <div className='tooltip__quantity'>5</div>
                                        <div className='tooltip__price'>{text?.side_price || text?.price}<span className='tooltip__price__type__currency'>₽</span> </div>
                                    </div>
                        
                        </>}
 
                    </div>    
                </>}  
            </div>
    )
}