import { useState, useRef, useEffect } from 'react';
// import city from '../../../../data/listCity.json';
import {  useSelector, useDispatch} from 'react-redux';
import {citiesFromListRequest,citiesItemThere, citiesItemTo, citiesItemThereId, citiesItemThereTo, citiesToListRequest} from '../../../../redux/slice/trainSlice';

const SearchbarDropdown = (props) => {
    const {options, onInputChange, title} = props;
    const ulRef = useRef(); 
    const inputRef = useRef(); 
    const dispatch = useDispatch();
    let {citiesFromList} = useSelector(state => state.train);

    useEffect(() => {
        inputRef.current.addEventListener('click', (event) => { 
            // stopPropagation()интерфейса Event предотвращает дальнейшее распространение текущего события на этапах захвата и барботирования.
            event.stopPropagation();

            // показать блок подсказки
            ulRef.current.style.display = 'flex';
            onInputChange(event);
        });

        //если кликнули не на подсказку, тогда скрыть подсказку
        document.addEventListener('click', (event) => {
            if (ulRef.current.style.display === null) {
                return;
            }
            if (ulRef.current.style) {
                ulRef.current.style.display = 'none';
            }    
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
                        // клик по городу в подсказке и записывание его в инпут
                        return (<button
                            type='button'
                            onClick={(e) => {
                                inputRef.current.value = option;
                                if (title === 'Откуда') {
                                    dispatch(citiesItemThere(option));
                                    dispatch(citiesItemThereId(citiesFromList[0]._id))
                                } else {
                                    dispatch(citiesItemTo(option));
                                    dispatch(citiesItemThereTo(citiesFromList[0]._id))
                                }
                                
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

/// основная - поиск города
export default function SearchCity(props) {
    const [options, setOptions] = useState([]);
    const defaultOptions = [];
    const dispatch = useDispatch();

    const onInputChange = (e) => { 

        if (e === null) {
            return;
        }
        
        console.log(e.target.value, ' e.target')
        if (props.title === 'Откуда') {
             dispatch(citiesFromListRequest(e.target.value.toLowerCase()))
        } else {
             dispatch(citiesToListRequest(e.target.value.toLowerCase()))
        }

        props.listcites.forEach((el) => {
            defaultOptions.push(el.name);
        })
        // если в инпут ввели значение определяем есть ли оно в выпадающем списке, если есть, то выводит отфильтрованый список похожих городов

        setOptions(defaultOptions.filter(option => option.includes(e.target.value.toLowerCase())));
    }
// отрисовываем список городов что ввели, список городов, направление, 
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


