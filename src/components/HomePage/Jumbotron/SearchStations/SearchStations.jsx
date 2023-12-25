import { useState, useRef, useEffect } from 'react';
import city from '../../../../data/listCity.json';

const SearchbarDropdown = (props) => {
    const {options, onInputChange, title} = props;
    const ulRef = useRef(); 
    const inputRef = useRef(); 
    useEffect(() => {
        inputRef.current.addEventListener('click', (event) => { 
            event.stopPropagation();
            ulRef.current.style.display = 'flex';
            onInputChange(event);
        });
        document.addEventListener('click', (event) => {
            ulRef.current.style.display = 'none';
        });
    }, []);

    return (
        <>
            <div className='search-bar-dropdown from__direction_box'>
                <div className='from__direction'>
                    <input 
                        type='text' 
                        className='form-control direction__input direction__here' 
                        onChange={onInputChange}
                        ref={inputRef}
                        placeholder={title}  
                        style={{'width': 'inherit'}}
                    />
                </div>
                <ul className='list-group' style={{'position': 'absolute', 'width': 'inherit'}} ref={ulRef}>
                    {options.map((option, index) => {
                        return (<button
                            type='button'
                            onClick={(e) => {
                                inputRef.current.value = option;
                            }}
                            className='list-group-item list-grop-item-action'
                            key={index}
                        >
                            {option}
                        </button>)
                    })}   
                </ul>
            </div>
        </>
    )
}

const defaultOptions = [];

city.forEach((el) => {
    defaultOptions.push(el.name);
})

export default function SearchCity(props) {
    const [options, setOptions] = useState([]);
    const onInputChange = (e) => { 
        if (e === null) {
            return;
        }
        
        setOptions(defaultOptions.filter(option => option.toLowerCase().includes(e.target.value.toLowerCase()))
        );
    }

    return (
            <div className='from__direction_box'>
                <SearchbarDropdown 
                    options={options} 
                    onInputChange={onInputChange}
                    title={props.title}
                />
            </div>
    )
}


