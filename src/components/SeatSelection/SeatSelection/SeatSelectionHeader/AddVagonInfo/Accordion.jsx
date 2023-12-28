import { useState } from "react";

export default function Accordion(props) {
    const [accordionOpen, setAccordionOpen] = useState(false);
    
    return (
        <>

        <button className='btn vagon__info__number' key={props.index} onClick={setAccordionOpen(!accordionOpen)}>{props.number}</button>

        </>
    )
}