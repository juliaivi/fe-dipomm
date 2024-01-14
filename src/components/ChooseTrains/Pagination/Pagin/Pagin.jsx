import { useState } from "react";

const Pagin = ({countriesPerPage, totalCountries, paginate}) => {
    const [appState, setAppState] = useState({
        activeObject: null,
    })

    const pageNumbers = [];
// общее количество делин на количество стран которые нужно отобразить на странице
    for (let i = 1; i <= Math.ceil(totalCountries/countriesPerPage); i++) {
        pageNumbers.push(i); // получаем всегда правильное динамическое количество кнопок в пагинации
    }

    const toggleActive = (index) => {
        setAppState({...appState, activeObject: pageNumbers[index]});
    }

    const toggleActiveStyles = (index) => {
        if (pageNumbers[index] === appState.activeObject) {
            return 'page__item__active';
        } else {
            return 'page__item';
        }
    }
	
    return (
        <>
            <ul className="pagination">
                {pageNumbers.map((el, index) => (
                    <li className={toggleActiveStyles(index)}
                        key={index} 
                        onClick={() => { 
                            paginate(el);
                            toggleActive(index);
                        }}>
                        <a href="#" className="page__link" >
                            {el}
                        </a>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Pagin;