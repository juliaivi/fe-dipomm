import './typeVagonPlacesList.css';

export default function VagonPlacesList(props) {
    switch (props.type) {
        case "sedentary":
            const placesSedentaryList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31, 32]
            const placesSecondRowSedentaryList = [1, 33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62]
            return (
                <div className='vagon__places__list vagon__places__list_sedentary'>
                    <div className='first_row'> 
                        {placesSedentaryList.map((el) => (
                                (el%2 === 0) ?  <div className='place__number place_item_busy' key={el} >{el}</div> : <></>
                        ))}
                    </div>
                    <div className='second__row'>
                    {placesSedentaryList.map((el) => (
                                (el%2 !== 0) ?  <div className='place__number place_item_busy' key={el} >{el}</div> : <></>
                        ))}
                    </div>
                    <div className='second__row'>
                        {
                            placesSecondRowSedentaryList.map((el) => (
                                (el%2 === 0) ? <div className='place__number place_item_busy' key={el} >{el}</div> : <></>
                            ))
                        } 
                    </div>
                    <div className='fourth__row'>
                        {
                            placesSecondRowSedentaryList.map((el) => (
                                (el%2 !== 0) ? <div className='place__number place_item_busy' key={el} >{el}</div> : <></>
                            ))
                        } 
                    </div>
                </div>
        )
        case "reserved-seat":
                const placesReservedSeatList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31, 32]
                const placessecondRowList = [33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48]
                return (
                    <div className='vagon__places__list vagon__places__list_reserved-seat'>
                        <div className='first_row'> 
                            {placesReservedSeatList.map((el) => (
                                    (el%2 === 0) ?  <div className='place__number place_item_busy' key={el} >{el}</div> : <></>
                            ))}
                        </div>
                        <div className='second__row'>
                        {placesReservedSeatList.map((el) => (
                                    (el%2 !== 0) ?  <div className='place__number place_item_busy' key={el} >{el}</div> : <></>
                            ))}
                        </div>
                        <div className='second__row'>
                            {
                                placessecondRowList.map((el) => (
                                    <div className='place__number place_item_busy' key={el} >{el}</div>
                                ))
                            } 
                        </div>
                    </div>
            )
        case "coupe": 
        const placesCoupeList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31, 32]
            return (
                <div className='vagon__places__list vagon__places__list_coupe'>
                    <div className='first_row'> 
                        {placesCoupeList.map((el) => (
                                (el%2 === 0) ?  <div className='place__number place_item_busy' key={el} >{el}</div> : <></>
                        ))}
                    </div>
                    <div className='second__row'>
                    {placesCoupeList.map((el) => (
                                (el%2 !== 0) ?  <div className='place__number place_item_busy' key={el} >{el}</div> : <></>
                        ))}
                    </div>
                </div>
            )
        case "lux": 
        const placesLuxList = [1,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18]
        return (
            <div className='vagon__places__list vagon__places__list_lux'>
                <div className='first_row'> 
                    {placesLuxList.map((el) => (
                        <>
                        <div className={`place__number place_item_busy place__number_${el}`} key={el} >{el}</div>
                        </>
                    ))}
                </div>
        
            </div>
        )
        default: 
        return (<></>);


    }
        // <div className='vagon__places__list'>
        //             <div className='first_row'>
        //                 <div className='place_item'>
        //                     <div className='place__number place_item_busy'>2</div>
        //                     <div className='place__number place_item_busy'>4</div>

        //                 </div>
        //                 <div className='place_item'>
        //                     <div className='place__number place_item_busy'>2</div>
        //                     <div className='place__number place_item_busy'>4</div>

        //                 </div>
        //                 <div className='place_item'>
        //                     <div className='place__number place_item_busy'>2</div>
        //                     <div className='place__number place_item_busy'>4</div>

        //                 </div>
        //                 <div className='place_item'>
        //                     <div className='place__number place_item_busy'>2</div>
        //                     <div className='place__number place_item_busy'>4</div>
        //                 </div>
        //                 <div className='place_item'>
        //                     <div className='place__number place_item_free'>2</div>
        //                     <div className='place__number place_item_busy'>4</div>
        //                 </div>
        //                 <div className='place_item'>
        //                     <div className='place__number place_item_busy'>2</div>
        //                     <div className='place__number place_item_busy'>4</div>
        //                 </div>
        //                 <div className='place_item'>
        //                     <div className='place__number place_item_busy'>2</div>
        //                     <div className='place__number place_item_busy'>4</div>
        //                 </div>
        //                 <div className='place_item'>
        //                     <div className='place__number place_item_free'>2</div>
        //                     <div className='place__number place_item_free'>4</div>
        //                 </div>
        //             </div>

        //             <div className='second__row'>
        //                 <div className='place_item'>
        //                     <div className='place__number place_item_free'>2</div>
        //                     <div className='place__number place_item_free'>4</div>

        //                 </div>
        //                 <div className='place_item'>
        //                     <div className='place__number place_item_busy'>2</div>
        //                     <div className='place__number place_item_busy'>4</div>

        //                 </div>
        //                 <div className='place_item'>
        //                     <div className='place__number place_item_busy'>2</div>
        //                     <div className='place__number place_item_free'>4</div>

        //                 </div>
        //                 <div className='place_item'>
        //                     <div className='place__number place_item_free'>2</div>
        //                     <div className='place__number place_item_free'>4</div>
        //                 </div>
        //                 <div className='place_item'>
        //                     <div className='place__number place_item_busy'>2</div>
        //                     <div className='place__number place_item_free'>4</div>
        //                 </div>
        //                 <div className='place_item'>
        //                     <div className='place__number place_item_busy'>2</div>
        //                     <div className='place__number place_item_busy'>4</div>
        //                 </div>
        //                 <div className='place_item'>
        //                     <div className='place__number place_item_busy'>2</div>
        //                     <div className='place__number place_item_free'>4</div>
        //                 </div>
        //                 <div className='place_item'>
        //                     <div className='place__number place_item_busy'>2</div>
        //                     <div className='place__number place_item_free'>4</div>
        //                 </div>
        //             </div>
                  
                   
                   
        //         </div>
    
}