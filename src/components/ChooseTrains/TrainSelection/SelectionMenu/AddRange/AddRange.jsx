import { useState} from 'react';
import './range.css';
import ReactSlider from 'react-slider';

export default function AddRange({min, max}) {
    const [value, setValue] = useState([]);

    return (
        <>
            <ReactSlider
                className="horizontal-slider"
                thumbClassName="example-thumb"
                trackClassName="example-track"
                defaultValue={[min, max]}
                min={min}
                max={max}
                onChange={(value, index) => setValue(value)}
                renderThumb={(props, state) => <div {...props}>{(state.valueNow >= 0 && state.valueNow <= 24) ?`${state.valueNow}:00` : state.valueNow}</div>}
            />
            <div className='renge-value__box'>
                <div className='renge-value_min'>{min === 0 ? `${min}:00` : min}</div>
                <div className='renge-value__max'>{max === 24 ? `${max}:00` : max}</div>
            </div>
        </>
    )
}



