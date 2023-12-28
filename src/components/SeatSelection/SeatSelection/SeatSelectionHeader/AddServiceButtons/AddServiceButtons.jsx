import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import './styleServiceBottons.css';

export default function AddServiceButtons(props) {
    // const data = [
    //     {'class':'condition', 'text': 'кондиционер'}, 
    //     {'class':'wifi', 'text': 'Wi-Fi'}, 
    //     {'class':'bedding', 'text': 'белье'}, 
    //     {'class':'mug', 'text': 'питание'}]
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
                            <Button className={`service service__${el.type} service__active`}></Button> : 
                            <Button className={`service service__${el.type}`}></Button>
                            }
                        </OverlayTrigger>
                ))}
                          
            </div>
        </>
    )
} 
