import coupe from '../../../../../img/coupe.svg';
import seat from '../../../../../img/seat.svg';
import star from '../../../../../img/star.svg';
import wifi from '../../../../../img/wifi.svg';
import express from '../../../../../img/express.svg';
import reservedseat from '../../../../../img/reservedSeat.svg';
import uniqid from 'uniqid';
import {changeOptions, changeValidForm} from '../../../../../redux/slice/trainSlice';
import { useDispatch} from 'react-redux';

const data = [
   { type:'coupe', 
     check: false,
     text: 'Купе',
     src: coupe,
     checkId: uniqid(),
    },
    { type:'reservedseat', 
      check: false,
      text: 'Плацкарт',
      src: reservedseat,
      checkId: uniqid(),
    },
    { type:'seat', 
      check: false,
      text: 'Сидячий',
      src: seat,
      checkId: uniqid(),
    },
    { type:'star', 
      check: false,
      text: 'Люкс',
      src: star,
      checkId: uniqid(),
    },
    { type:'wifi', 
      check: false,
      text: 'Wi-Fi',
      src: wifi,
      checkId: uniqid(),
    },
    { type:'express', 
      check: false,
      text: 'Экспресс',
      src: express,
      checkId: uniqid(),
    },
]

export default function AddListOptoins() {
const dispatch = useDispatch();

const ChangeOption = (e, type) => {
    dispatch(changeValidForm(true))
    if (e.target.classList.contains('button__check__coupe')) {
        dispatch(changeOptions(type));
    
    }
    if (e.target.classList.contains('button__check__reservedseat')) {
        dispatch(changeOptions(type))
    }
    if (e.target.classList.contains('button__check__seat')) {
        dispatch(changeOptions(type))
    }
    if (e.target.classList.contains('button__check__star')) {
        dispatch(changeOptions(type))
    }
    if (e.target.classList.contains('button__check__wifi')) {
        dispatch(changeOptions(type))
    }
    if (e.target.classList.contains('button__check__express')) {
        dispatch(changeOptions(type))
    }
}

    return(
        <>
            {data.map((el, index) => (   
                <div className='item item__options' key={index}>
                    <img src={el.src} className='item__img item__options__img' alt={el.type}></img>
                    <p className='item__title item__options__title'>{el.text}</p>
                    <input type="checkbox" id={`check${el.checkId}`} className='item__check item__options__check' />
                    <label htmlFor={`check${el.checkId}`} className={`button__check button__check__${el.type}`} onClick={(e) => ChangeOption(e, el.type)}></label>
                </div>  
            ))}

        </>
    )
}