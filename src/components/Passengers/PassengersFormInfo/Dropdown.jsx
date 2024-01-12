import { useState } from "react"

export default function Dropdown({selected, setSelected, options, setCheckDocument, checkDocument}) {
    const [isActive, setIsActive] = useState(false);

    return (
        <>
        <div className="dropdown">
            <div className={`dropdown-btn dropdown-btn__${selected.type} ${checkDocument && 'error'}`} onClick={(e)=>{setIsActive(!isActive)}}>{selected.name}</div>
           
            {isActive && (
                <div className='dropdown-content'>
                    {options.map((el, index) => (
                        <div onClick={()=> {
                            setSelected(el);
                            setIsActive(false);
                            if (setCheckDocument !== undefined) {
                                setCheckDocument(false);
                            }
                            
                        }} className="dropdown-item"
                            key={index} >{el.name}</div>
                    ))}
             
                </div>
            )}   
        </div>
        </>
    )
}