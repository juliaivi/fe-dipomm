import { useEffect, useState } from 'react';
import './stylePaymentInfo.css';
import {setPersonalData} from '../../../redux/slice/passengersSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function PaymentInfo() {
    const { personalData} = useSelector(state => state.passengers);
    const [surname, setSurname] = useState({name: '', error: false});
    const [name, setName] = useState({name: '', error: false});
    const [twoSurname, setTwoSurname] = useState({name:'' , error: false});
    const [telephoneValue, setTelephoneValue] = useState({number: '', error: false});
    const [emailValue, setEmailValue] = useState({name: '', error: false});
    const [paymentType, setPaymentType] = useState({name:'' , error: false});

    const dispatch = useDispatch();
    const navigete = useNavigate();

    const [validForm, setValidForm] = useState(false);
    const regName = /^([А-Я]{1}[а-яё]{1,23})$/gm;
    const regTelefone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?(\(?\d{3}\)?[\- ]?)?(\(?\d{2}\)?[\- ]?)?[\d\- ]{2}$/gm;
    const regEmail = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/gm;

    const changePaymentType = (e) => {
       if (e.target.value !== paymentType.name || paymentType.name === undefined) {
            setPaymentType({name:e.target.value, error: false});
            setValidForm(true);
       }
    }

    useEffect(() => {
        if ( personalData !== null) {
                setSurname({name: personalData.surname, error: false});
                setName({name: personalData.name, error: false});
                setTwoSurname({name: personalData.secondName, error: false});
                setTelephoneValue({number: personalData.telephone, error: false});
                setEmailValue({name: personalData.mail, error: false});
            }
    }, [])
    
    // проверка фио
    const checkFullNameData = (e, elem, regElem) => {
        if(e === undefined || e.length === 0) {
            elem({name:e, error:true})
            setValidForm(false)
        } else {
            if (e.match(regElem)) { // если не пусто проверяем на правильность заполнения
                elem({name:e, error:false})
                setValidForm(true)
            } else {
                elem({name:e, error:true})
                setValidForm(false)
            }
        }
    }

    const checkTelephoneValue = (obj, elem) => {
      
        if(obj === undefined || obj.length === 0) {
            elem({number:obj, error:true});
            setValidForm(false);
        } else {
            if (obj.match(regTelefone)) {
                elem({number:obj, error:false});
                setValidForm(true);
            } else {
                elem({number:obj, error:true});
                setValidForm(false);
            }
        }
    }

    const checkEmailValue = (obj, elem) => {   
        if(obj === undefined || obj.length === 0) {
            elem({name:obj, error:true});
            setValidForm(false);
        } else {
            if (obj.match(regEmail)) {
                elem({name:obj, error:false});
                setValidForm(true);
            } else {
            elem({name:obj, error:true});
            setValidForm(false);
            }
        }
    }

    const VerificationForm = (e) => {
        e.preventDefault();
     
        const form ={
            name: name.name,
            surname: surname.name,
            secondName: twoSurname.name,
            mail: emailValue.name,
            telephone: telephoneValue.number,
            payment: paymentType.name, 
        }

        checkFullNameData(surname.name, setSurname , regName);
        checkFullNameData(name.name, setName , regName);
        checkFullNameData(twoSurname.name, setTwoSurname, regName);
    
        checkTelephoneValue(telephoneValue.number, setTelephoneValue);  
        checkEmailValue(emailValue.name, setEmailValue); 

        if (paymentType.name === '' || paymentType.name === undefined) {
            setPaymentType({...paymentType, error: true});  
            setValidForm(false);
        } else {
            setPaymentType({...paymentType, error: false});
            setValidForm(true);
        }

        if (name.error === false && 
             surname.error === false &&
              twoSurname.error === false &&
               telephoneValue.error === false &&
                emailValue.error === false && 
                paymentType.error === false && 
                validForm === true) {
           
            dispatch(setPersonalData(form));
        }
    }

    const payTickets = (e) => {
        VerificationForm(e);
        if (validForm ===true) {
            navigete('/checkorder') 
        }
    }

    return (
        <>
            <section>
                <form className="form passengers__forms__box">
                    <div className="form__title">Персональные данные</div>
                    <div className='initials__box'>
                        <label htmlFor='surname' className='initials__lable'>
                            <div className='initials__text'>Фамилия</div>
                            <input 
                                className={`initials__input surname-personal surname ${surname.error === true ? 'error' : ''} `} 
                                type='text' name='name' 
                                id='surname' 
                                value={surname.name} 
                                onChange={(e) =>{  
                                    checkFullNameData(e.target.value,setSurname, regName);  
                                 }}  required></input>
                        </label>
                        <label htmlFor='name' className='initials__lable'>
                        <div className='initials__text '>Имя</div>
                            <input 
                                className={`initials__input name-personal name ${name.error === true ? 'error' : ''} `} 
                                type='text' 
                                id='name' 
                                value={name.name} 
                                onChange={(e) => {
                                    checkFullNameData(e.target.value, setName , regName);
                                }}  required></input>
                        </label>
                        <label htmlFor='two_surname' className='initials__lable'>
                        <div className='initials__text'>Отчество</div>
                            <input 
                                className={`initials__input two_surname-personal two_surname ${twoSurname.error === true ? 'error' : ''} `} 
                                type='text' 
                                id='two_surname' 
                                value={twoSurname.name} 
                                onChange={(e) => {
                                    checkFullNameData(e.target.value, setTwoSurname, regName);
                                }}  required ></input>
                        </label>
                    </div>

                    <div className='telephone__info'>
                        <div className='telephone__info__title'>Контактный телефон</div>
                        <input 
                            type="tel" 
                            className={`telephone__info__input ${telephoneValue.error === true ? 'error' : ''} `} 
                            value={telephoneValue.number} 
                            placeholder="+7 ___ ___ __ __" 
                            onChange={(e) => {
                                    checkTelephoneValue(e.target.value, setTelephoneValue); 
                            }} required></input>
                    </div>

                    <div className='email__info'>
                        <div className='email__info__title'> E-mail</div>
                        <input 
                            type="email" 
                            className={`email__info__input ${emailValue.error === true ? 'error' : ''} `} 
                            value={emailValue.name} 
                            placeholder="inbox@gmail.ru" 
                            onChange={(e) => { 
                                checkEmailValue(e.target.value, setEmailValue);
                            }} required></input>
                    </div>
                    <div className='payment__method__title'>Способ оплаты</div>
                    <div className='checkbox checkbox__online__payment'>
                        <input 
                            type="radio" 
                            name="payment" 
                            id="online__payment" 
                            value="onlinePayment" 
                            className='checkbox__input' 
                            onChange={(e) => changePaymentType(e)}/> 
                        <label 
                            htmlFor='online__payment' 
                            className={`checkbox__lable ${paymentType.error ? 'error' : ''}`}>Онлайн</label>
                    </div>
                    <div className='online__payment__list'>
                        <div className='online__payment__item'>Банковской картой</div>
                        <div className='online__payment__item'>PayPal</div>
                        <div className='online__payment__item'>Visa QIWI Wallet</div>
                    </div>

                    <div className='checkbox checkbox__cash__payment'>
                        <input 
                            type="radio" 
                            name="payment"  
                            id="cash__payment" 
                            value="cashPayment" 
                            className='checkbox__input' 
                            onChange={(e) => changePaymentType(e)}/> 
                        <label 
                            htmlFor='cash__payment' 
                            className={`checkbox__lable ${paymentType.error  ? 'error' : ''}`}>Наличными</label>
                    </div>

                </form>

                <button className={`buy__ticket__btn ${validForm === true ? '' : 'disabled'}`} onClick={(e) => payTickets(e) } >Купить билет</button>
            </section>
        </>
    )
}