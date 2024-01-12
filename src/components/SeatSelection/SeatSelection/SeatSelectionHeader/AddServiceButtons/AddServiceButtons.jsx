import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import './styleServiceBottons.css';
import { useState } from 'react';

export default function AddServiceButtons(props) {
    const [value, setValue] = useState([]);

    const toggleElement = (e, type) => {
        if (e.target.classList.contains(`service__${type}_not-active `)) {
            return;
        }
    
        if (e.target.classList.contains(`service__${type}_active`)) {
            e.target.classList.remove(`service__${type}_active`);
        } else {
            e.target.classList.add(`service__${type}_active`);
        }

        let copy = [...value];
        let index = copy.indexOf(type);
        if (index === -1) {
            copy.push(type)
        } else (
            copy.splice(index, 1)
        )
        setValue(copy); 
    }


    return (
        <>
            <div className='service__list__buttons'>
                    {props.services.map((el, index) => (
                        <OverlayTrigger
                            key= {index}
                            placement='bottom'
                            overlay={
                                <Tooltip id='tooltip-bottom' className='service__tooltip' >
                                    {el.text}
                                </Tooltip>
                            }
                        >
                        {(el.active === true) ?
                            <Button className={`service service__${el.type} service__active`} onClick={(e) => toggleElement(e, el.type)}></Button> : 
                            <Button className={`service service__${el.type}`} onClick={toggleElement}></Button>
                        }
                        </OverlayTrigger>
                ))}
                          
            </div>
        </>
    )
} 
