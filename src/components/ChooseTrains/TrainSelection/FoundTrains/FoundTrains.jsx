import './foundTrains.css';
import SortingType from './SortingType/SortingType';
import ShowBy from './ShowBy/ShowBy';
import { useState } from 'react';
import AddCardElement from './AddCard/AddCardElement.jsx';

import { useSelector } from 'react-redux';

export default function FoundTrains() {
    const {trainsList, lastRoutesItem} = useSelector(state => state.train);
    const [selected, setSelected] = useState("времени"); 
    
    // для пагинации
    // const [page, setPage] = useState(1); //текущая страница которая будет показваться
    // let arreyLists = []
    
    // if( trainsList.length !==0 && trainsList.total_count !== 0) {
    //     for (let i = (page-1)* limit; i < (page* limit) && trainsList.items[i]; i++ ) {
    //         arreyLists.push(trainsList.items[i])
    //     }
    // }
    // let totalPage;
    // if (arreyLists.length !== 0) {
    //     totalPage= Math.ceil(trainsList.total_count/limit); // общее количество страниц
    // }
    // let pageNo;
    // if ( page <= totalPage) {
    //     pageNo =page;
    // } else {
    //     setPage(totalPage);
    //     pageNo =page;
    // }
// обрабатывание изменение страницы - для пагинации
    //   function handlePageChange(value) {
    //     if (value === '&laquo;' || value === "...") {
    //         setPage(1);
    //     } else if (value === '&lsaquo;') {
    //         if (page !== 1) {
    //             setPage(page-1);
    //         }
    //     } else if (value === '&rsaquo;') {
    //         if(page !== totalPage) {
    //             setPage(page+1);
    //         }
    //     } else if (value ==='&raquo;' || value === "...") {
    //         setPage(totalPage);
    //     } else {
    //         setPage(value);
    //     }
    //   }
  
    return (
         <section className="train__list">
            <div className='was-found'>
                <div className='was-found__title'>
                    <span>{`найдено ${trainsList.total_count !== undefined ? trainsList.total_count : '0'}`}</span>
                </div>
                <div className='control__list'>
                    <div className='sorting__listing_select__wrapper'>
                        <span className='sorting__title'>сортировать по:</span>
                        <SortingType selected={selected} setSelected ={setSelected}/>
                    </div>
                        <ShowBy />      
                </div>
            </div>
            {lastRoutesItem !== null &&
                <AddCardElement classElem={"train__list"} el={lastRoutesItem} index={lastRoutesItem.departure._id} />    
            }

            {trainsList.total_count > 0 && lastRoutesItem === null && <>
               {trainsList.items.map((el, index) => (
                 <AddCardElement classElem={"train__list"} el={el} index={index} />))}
            </>}
            {/* пагинацию нужно доработать в зависимости от того что прийдет с сервера, сейчас она работает частично и то если пришел весь массив с данными, а не 5 постов */}
            {/* <ul className='pagination'>
                <Pagination totalPage={totalPage} page={pageNo} limits={limit} siblings={1} onPageChange={handlePageChange} />
            </ul> */}
         </section>
    )
}


