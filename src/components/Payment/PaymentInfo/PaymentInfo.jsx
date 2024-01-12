import { useState } from 'react';
import './stylePaymentInfo.css';

export default function PaymentInfo() {
    const [surname, setSurname] = useState({name:'', error: false});
    const [name, setName] = useState({name:'', error: false});
    const [twoSurname, setTwoSurname] = useState({name:'', error: false});
    const [telephoneValue, setTelephoneValue] = useState({number:'', error: false});
    const [emailValue, setEmailValue] = useState({name:'', error: false});
    const [paymentType, setPaymentType] = useState({name:'', error: false});

    const changePaymentType = (e) => {
       if (e.target.value !== paymentType.name || paymentType.name === undefined) {
            setPaymentType({...paymentType, name:e.target.value, error: false});
       }
    }

    const onChangeDocument = (e) => {
        if (e.target.classList.contains('surname')) {
            setSurname({...surname, name:e.target.value, error: false});  
        }

        if (e.target.classList.contains('name')) {
            setName({...surname, name:e.target.value, error: false});  
        }

        if (e.target.classList.contains('two_surname')) {
            setTwoSurname({...surname, name:e.target.value, error: false});  
        }

        if (e.target.classList.contains('telephone__info__input') ) {
            setTelephoneValue({...surname, number:e.target.value, error: false});
        }

        if (e.target.classList.contains('email__info__input')) {
            setEmailValue({...surname, name:e.target.value, error: false});
        }
    }

    const checkFullNameData = (obj, elem, regElem) => {
        if(obj.name === undefined || obj.name.length === 0) {
            elem({...obj, error:true});
        } else {
            if (obj.name.match(regElem)) {
                elem({...obj, error:false});
            } else {
            elem({...obj, error:true});
            }
        }
    }

    const checkTelephoneValue = (obj, elem) => {
        const regTelefone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?(\(?\d{3}\)?[\- ]?)?(\(?\d{2}\)?[\- ]?)?[\d\- ]{2}$/gm;
        if(obj.number === undefined || obj.number.length === 0) {
            elem({...obj, error:true});
        } else {
            if (obj.number.match(regTelefone)) {
                elem({...obj, error:false});
            } else {
                elem({...obj, error:true});
            }
        }
    }

    const checkEmailValue = (obj, elem) => {
        const regEmail = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/gm;
        if(obj.name === undefined || obj.name.length === 0) {
            elem({...obj, error:true});
        } else {
            if (obj.name.match(regEmail)) {
                elem({...obj, error:false});
            } else {
            elem({...obj, error:true});
            }
        }
    }
console.log(surname, name, twoSurname, telephoneValue, emailValue, paymentType)
    const VerificationForm = (e) => {
        e.preventDefault();
        const regName = /^([А-Я]{1}[а-яё]{1,23})$/gm;
        checkFullNameData(surname, setSurname , regName);
        checkFullNameData(name, setName , regName);
        checkFullNameData(twoSurname, setTwoSurname, regName);
    
        checkTelephoneValue(telephoneValue, setTelephoneValue);  
        checkEmailValue(emailValue, setEmailValue); 
        console.log(paymentType.name , 'paymentType.name ');

        if (paymentType.name === '' || paymentType.name === undefined) {
            setPaymentType({...paymentType, error: true});  
        }
    }
    console.log(paymentType.name , 'paymentType.name ');
    return (
        <>
            <section>
                <form className="form passengers__forms__box">
                    <div className="form__title">Персональные данные</div>
                    <div className='initials__box'>
                        <label htmlFor='surname' className='initials__lable'>
                            <div className='initials__text'>Фамилия</div>
                            <input className={`initials__input surname ${surname.error === true ? 'error' : ''} `} type='text' name='name' id='urname' value={surname.name} onChange={onChangeDocument}  required></input>
                        </label>
                        <label htmlFor='name' className='initials__lable'>
                        <div className='initials__text '>Имя</div>
                            <input className={`initials__input name ${name.error === true ? 'error' : ''} `} type='text' id='name' value={name.name} onChange={onChangeDocument}  required></input>
                        </label>
                        <label htmlFor='two_surname' className='initials__lable'>
                        <div className='initials__text'>Отчество</div>
                            <input className={`initials__input two_surname ${twoSurname.error === true ? 'error' : ''} `} type='text' id='two_surname' value={twoSurname.name} onChange={onChangeDocument}  required ></input>
                        </label>
                    </div>

                    <div className='telephone__info'>
                        <div className='telephone__info__title'>Контактный телефон</div>
                        <input type="tel" className={`telephone__info__input ${telephoneValue.error === true ? 'error' : ''} `} value={telephoneValue.number} placeholder="+7 ___ ___ __ __" onChange={onChangeDocument} required></input>
                    </div>

                    <div className='email__info'>
                        <div className='email__info__title'> E-mail</div>
                        <input type="email" className={`email__info__input ${emailValue.error === true ? 'error' : ''} `} value={emailValue.name} placeholder="inbox@gmail.ru" onChange={onChangeDocument} required></input>
                    </div>
                    <div className='payment__method__title'>Способ оплаты</div>
                    <div className='checkbox checkbox__online__payment'>
                        <input type="radio" name="payment" id="online__payment" value="onlinePayment" className='checkbox__input' onChange={(e) => changePaymentType(e)}/> 
                        <label htmlFor='online__payment' className={`checkbox__lable ${paymentType.error ? 'error' : ''}`}>Онлайн</label>
                    </div>
                    <div className='online__payment__list'>
                        <div className='online__payment__item'>Банковской картой</div>
                        <div className='online__payment__item'>PayPal</div>
                        <div className='online__payment__item'>Visa QIWI Wallet</div>
                    </div>

                    <div className='checkbox checkbox__cash__payment'>
                        <input type="radio" name="payment"  id="cash__payment" value="cashPayment" className='checkbox__input' onChange={(e) => changePaymentType(e)}/> 
                        <label htmlFor='cash__payment' className={`checkbox__lable ${paymentType.error  ? 'error' : ''}`}>Наличными</label>
                    </div>

                </form>

                <button className='buy__ticket__btn' onClick={VerificationForm} >Купить билет</button>
            </section>
        </>
    )
}