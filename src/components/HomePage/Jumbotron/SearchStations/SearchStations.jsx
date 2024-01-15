import { useState, useRef, useEffect } from 'react';
// import city from '../../../../data/listCity.json';
import {  useSelector, useDispatch} from 'react-redux';
import {citiesFromListRequest,citiesItemThere, citiesItemTo,  citiesItemThereId, citiesItemToId, citiesToListRequest} from '../../../../redux/slice/trainSlice';

const SearchbarDropdown = (props) => {
    const {citiesFromList,  cityFrom, cityTo, citiesToList} = useSelector(state => state.train)
    const {options, onInputChange, title} = props;
    const ulRef = useRef(); 
    const inputRef = useRef(); 
    const dispatch = useDispatch();

    console.log(citiesFromList, 'citiesFromList', citiesToList, 'citiesToList')

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
            if (ulRef?.current?.style) {
                ulRef.current.style.display = 'none';
            }    
        });
    }, []);


    // if (cityFrom !== "" && inputRef.current?.value !== '' && inputRef.current?.value  === undefined) {

    //     if (cityFrom !== inputRef.current?.value && inputRef.current?.placeholder === 'Откуда'  && inputRef.current !== undefined) {
    //         inputRef.current.value = cityFrom;
    //     }  
    
    //     if (cityTo !== inputRef.current?.value && inputRef.current?.placeholder !== 'Откуда' && inputRef.current !== undefined) {
    //         inputRef.current.value = cityTo;
    //     }  
    // }
    
// если значения уже есть, то заполняем инпут
    let valueCity = '';
    if (title === 'Откуда' && cityFrom !== '' && title !== undefined) {
        valueCity = cityFrom;
    } 

    if (title === 'Куда' && cityTo !== '' && title !== undefined) {
        valueCity = cityTo; 
    } 

    return (
        <>
            <div className='search-bar-dropdown from__direction_box'>
                <div className='from__direction'>
                    <input 
                        type='text' 
                        className={`form-control direction__input direction__here`}
                        onChange={onInputChange}
                        ref={inputRef}
                        placeholder={title}  
                        style={{'width': 'inherit'}}
                        value={valueCity}
                    />
                </div>
                <ul className='list-group' style={{'position': 'absolute', 'width': 'inherit'}} ref={ulRef}>
                    {options.map((option, index) => {
                        // клик по городу в подсказке и записывание его в инпут
                        return (<button
                            type='button'
                            onClick={(e) => {
                                inputRef.current.value = option;
                                console.log(option , 'option')
                                if (title === 'Откуда') {
                                    dispatch(citiesItemThere(option));
                                    dispatch(citiesItemThereId(citiesFromList[0]._id))
                                } else {
                                    dispatch(citiesItemTo(option));
                                    dispatch(citiesItemToId(citiesToList[0]._id))
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


