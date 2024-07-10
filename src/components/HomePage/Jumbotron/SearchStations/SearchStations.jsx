import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  citiesFromListRequest,
  citiesItemThere,
  citiesItemTo,
  citiesItemThereId,
  citiesItemToId,
  citiesToListRequest,
} from '../../../../redux/slice/trainSlice';
import PropTypes from 'prop-types';

const SearchbarDropdown = ({ options, onInputChange, title }) => {
  const { citiesFromList, cityFrom, cityTo, citiesToList } = useSelector(
    (state) => state.train,
  );
  const ulRef = useRef();
  const inputRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    inputRef.current.addEventListener('click', (event) => {
      // stopPropagation()интерфейса Event предотвращает дальнейшее распространение текущего события на этапах захвата
      event.stopPropagation();
      ulRef.current.style.display = 'flex';
      onInputChange(event);
    });

    //если кликнули не на подсказку, тогда скрыть подсказку
    document.addEventListener('click', () => {
      if (ulRef?.current?.style) {
        ulRef.current.style.display = 'none';
      }
    });
  }, []);

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
      <div className="search-bar-dropdown from__direction_box">
        <div className="from__direction">
          <input
            type="text"
            className={`form-control direction__input direction__here`}
            onChange={onInputChange}
            ref={inputRef}
            placeholder={title}
            style={{ width: 'inherit' }}
            value={valueCity}
          />
        </div>
        <ul
          className="list-group"
          style={{ position: 'absolute', width: 'inherit' }}
          ref={ulRef}
        >
          {options.map((option, index) => {
            // клик по городу в подсказке и записывание его в инпут
            return (
              <button
                type="button"
                onClick={() => {
                  inputRef.current.value = option;
                  if (title === 'Откуда') {
                    dispatch(citiesItemThere(option));
                    if (citiesFromList[0]?._id !== undefined) {
                      dispatch(citiesItemThereId(citiesFromList[0]?._id));
                    }
                  } else {
                    dispatch(citiesItemTo(option));
                    if (citiesToList[0]?._id !== undefined) {
                      dispatch(citiesItemToId(citiesToList[0]?._id));
                    }
                  }
                }}
                className="list-group-item list-grop-item-action"
                key={index}
              >
                {option}
              </button>
            );
          })}
        </ul>
      </div>
    </>
  );
};

/// основная - поиск города
export default function SearchCity({ listcites, title }) {
  const [options, setOptions] = useState([]);
  const defaultOptions = [];
  const dispatch = useDispatch();

  const onInputChange = (e) => {
    if (e === null) {
      return;
    }

    if (title === 'Откуда') {
      dispatch(citiesFromListRequest(e.target.value.toLowerCase()));
    } else {
      dispatch(citiesToListRequest(e.target.value.toLowerCase()));
    }

    listcites.forEach((el) => {
      defaultOptions.push(el.name);
    });
    // если в инпут ввели значение определяем есть ли оно в выпадающем списке, если есть, то выводит отфильтрованый список похожих городов

    setOptions(
      defaultOptions.filter((option) =>
        option.includes(e.target.value.toLowerCase()),
      ),
    );
  };
  // отрисовываем список городов что ввели, список городов, направление,
  return (
    <div className="from__direction_box">
      <SearchbarDropdown
        options={options}
        onInputChange={onInputChange}
        title={title}
      />
    </div>
  );
}

SearchCity.propTypes = {
  title: PropTypes.string,
  listcites: PropTypes.array,
};

SearchbarDropdown.propTypes = {
  options: PropTypes.array,
  onInputChange: PropTypes.func,
  title: PropTypes.string,
};
