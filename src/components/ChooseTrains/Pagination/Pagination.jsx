// import { useState, useEffect } from "react";
// import axios from 'axios';
// import AddCardElement from "../TrainSelection/FoundTrains/AddCard/AddCardElement";

import { returnPaginationRange } from "../TrainSelection/FoundTrains/appUtils";

// import './pagination.css';
// import Pagin from "./Pagin/Pagin";
// import {changeCurrentCountryPage} from '../../../redux/slice/trainSlice';
// import { useDispatch, useSelector } from "react-redux";
// export {returnPaginationRange} from '../Pagination/Pagination';

export default function Pagination(props) {
    let array =  returnPaginationRange(props.totalPage, props.page, props.limit, props.siblins);
    return(
        <ul className="pagination pagination-md justify-content-end">
            <li  onClick={() => props.onPageChange('&laquo;')} className="page-item"><span className="page-link">&laquo;</span></li>
            <li onClick={() => props.onPageChange('&lsaquo;')} className="page-item"><span className="page-link">&lsaquo;</span></li>
            {array.map((el) => (
             (el === props.age) ?
                <li key={el} className="page-item active"><span className="page-link" onClick={() => props.onPageChange(el)}>{el}</span></li> :

                <li onClick={() => props.onPageChange(el)} key={el} className="page-item active"><span className="page-link">{el}</span></li>

            ))}
            <li onClick={() => props.onPageChange('&rsaquo;')} className="page-item"><span className="page-link">&rsaquo;</span></li>
            <li onClick={() => props.onPageChange('&raquo;')} className="page-item"><span className="page-link">&raquo;</span></li>
        </ul>
    );
}

// второй вариант пагинации
// // trainsList.items trainsList.total_count 
//     const {trainsList, limit, currentCountryPage} = useSelector(state => state.train);
//     console.log(trainsList, limit, 'trainsList, limit-Pagination')
//     // const [countries, setCountries] = useState([]); //количество постов
//     const [loading, setLoading] = useState(false);
//     const [currentPage, setCurrentPage] = useState(1); //текущая страница которая будет показваться
//     const [countriesPerPage] = useState(limit);// количество элементов на странице

//     const dispatch = useDispatch();

//     // let pageNumbers = [];
    
//     // useEffect(() => {
       
//     //     // let data = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] 
//     //     // setCountries(data);
//     //     if (trainsList?.items !== undefined) {
//     //         setCountries(trainsList?.items);
//     //     }
        
       
//     // }, []) // когда введется новый запрос или переход на др. страницу
    
//     const lastCountryIndex = currentPage * countriesPerPage; //высчитывание последнего индекса
//     const firstCountryIndex = lastCountryIndex - countriesPerPage; //первый эелемент
 
//     if (trainsList?.items !== undefined) {
//         let arrList = trainsList?.items.slice(firstCountryIndex, lastCountryIndex);
//         console.log(1, 'pagination')
//         console.log(trainsList?.items.slice(firstCountryIndex, lastCountryIndex), 'trainsList?.items.slice(firstCountryIndex, lastCountryIndex)')
//         dispatch(changeCurrentCountryPage(arrList))
//         // currentCountryPage = trainsList?.items.slice(firstCountryIndex, lastCountryIndex); // текущая страница
//     }
//     // const  currentCountry = countries.slice(firstCountryIndex, lastCountryIndex); // текущая страница
   

//     // for(let i = 1; i <= Math.ceil(countries.length/countriesPerPage); i++) {
//     //     pageNumbers.push(i); //количество кнопок в пагинации
//     // }

//     const paginate = (pageNumber) => setCurrentPage(pageNumber); //переключается по странице

//     const nextPage = () => setCurrentPage(prev => prev+1); //следующая страница (получаем предыдущее состояние и увеличиваем на 1)
//     const prevPage = () => setCurrentPage(prev => prev-1); // предыдущая страница onClick={() => paginate(el)

//     return (
          
//             <div className="pagination__control">  
//                 {loading && <h2 className="pagination__loading">Loading...</h2>}
//                 {/* {console.log(currentCountryPage, 'currentCountryPage')}
//                 <div>
//                     {(currentCountryPage.length !== 0 && currentCountryPage.map((el, index) => (
//                         <>
//                             {console.log(1, ' <AddCardElement el={el} index={index}/>')}
//                             <AddCardElement el={el} index={index}/>
//                         </>
//                     )))} */}
//                 </div>
//                 {trainsList?.total_count !== undefined && <>
//                     <button className="button__pagination btn__primary" onClick={prevPage}> {'<'} </button>
//                     <div className="pagination__control__list">
//                     {/* {!loading &&
//                         currentCountry.map((el) => (
//                             <li className={currentCountry !== el ? "page__item": "page__item__active"} key={el} onClick={() => paginate(el)}>
//                                 <a href="#" className="page__link">{el}</a>
//                             </li>
//                         ))
//                     } */} 
//                     <Pagin 
//                         countriesPerPage={countriesPerPage} 
//                         totalCountries={trainsList?.total_count} 
//                         paginate={paginate}
//                         currentCountry={currentCountryPage}
//                     />
//                     </div> 
//                     <button className="button__pagination btn__finite" onClick={nextPage}> {'>'} </button>
//                </> }
//             </div>
//     )
// }