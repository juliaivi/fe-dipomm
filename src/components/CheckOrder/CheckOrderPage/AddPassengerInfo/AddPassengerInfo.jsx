import passengerIcon from '../../../../img/passengerIcon.svg';

export default function AddPassengersInfo({el, index}) {
    return(
        <>
            <div className="passengers__info__item" key={index}>
                <div className='passengers__info__type'>
                    <img src={passengerIcon} className='passengers__info__img' alt='passengerIcon'></img>
                    <div className='passengers__type'>{el.type}</div>
                </div>
                <div className='passengers__info__box'>
                    <div className='passengers__full__name'>{el.fullName}</div>
                    <div className='passengers__gender'>Пол{el.gender}</div>
                    <div className='passengers__date__birth'>{el.documentType}</div>
                    <div className='passengers__document__info'>{el.documentData}</div>
                </div>
            </div>
        </>
    )
}