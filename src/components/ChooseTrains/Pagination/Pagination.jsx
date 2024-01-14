import { useState, useEffect } from "react";
import axios from 'axios';

import './pagination.css';
import Pagin from "./Pagin/Pagin";

export default function Pagination() {
    const [countries, setCountries] = useState([]); //количество постов
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1); //текущая страница которая будет показваться
    const [countriesPerPage] = useState(5);// количество элементов на странице

    // let pageNumbers = [];
    
    useEffect(() => {
        const getCountries = async () => {
            try {
               setLoading(true);
            const res = await axios.get('http://localhost:3001/trains');
            console.log(res.data, 'res');
            let data = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] 
            setCountries(data);
     
            setLoading(false);
            } catch (e) {
                console.log(e, "err");
            }
            
        }
        // getCountries()

        let data = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] 
        setCountries(data);
       
    }, []) // когда введется новый запрос или переход на др. страницу
    
    const lastCountryIndex = currentPage * countriesPerPage; //высчитывание последнего индекса
    const firstCountryIndex = lastCountryIndex - countriesPerPage; //первый эелемент
    const  currentCountry = countries.slice(firstCountryIndex, lastCountryIndex); // текущая страница
   

    // for(let i = 1; i <= Math.ceil(countries.length/countriesPerPage); i++) {
    //     pageNumbers.push(i); //количество кнопок в пагинации
    // }

    const paginate = (pageNumber) => setCurrentPage(pageNumber); //переключается по странице

    const nextPage = () => setCurrentPage(prev => prev+1); //следующая страница (получаем предыдущее состояние и увеличиваем на 1)
    const prevPage = () => setCurrentPage(prev => prev-1); // предыдущая страница onClick={() => paginate(el)

    return (
        <>
            {loading && <h2 className="pagination__loading">Loading...</h2>}
            <div className="pagination__control">
                <button className="button__pagination btn__primary" onClick={prevPage}> {'<'} </button>
                <div className="pagination__control__list">
                {/* {!loading &&
                    currentCountry.map((el) => (
                        <li className={currentCountry !== el ? "page__item": "page__item__active"} key={el} onClick={() => paginate(el)}>
                            <a href="#" className="page__link">{el}</a>
                        </li>
                    ))
                } */} 
                <Pagin 
                    countriesPerPage={countriesPerPage} 
                    totalCountries={countries.length} 
                    paginate={paginate}
                    currentCountry={currentCountry}
                />
                </div> 
                <button className="button__pagination btn__finite" onClick={nextPage}> {'>'} </button>
            </div>
        </>
    )
}