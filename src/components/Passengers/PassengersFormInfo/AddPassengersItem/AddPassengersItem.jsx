import Accordion from 'react-bootstrap/Accordion';
import circlePlus from '../../../../img/circlePlus.svg';
import circleMinus from '../../../../img/circleMinus.svg';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import Dropdown from '../Dropdown';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function AddPassengersItem({index, card, setCard}) {
    const [selected, setSelected] = useState({
        type:'adult',
        name: 'Взрослый'
    });

    const optionsType = [
        {
            type:'children',
            name: 'Детский'
        },
        {
            type:'adult',
            name: 'Взрослый'
        },];
        

    const optionsDocument = [
        {
            type:'passport',
            name: 'Паспорт РФ'
        },
        {
            type:'birth-certificate',
            name: 'Свидетельство о рождении'
        },]
        
    const [selectedDocument, setSelectedDocument] = useState( {
            type:'passport',
            name: 'Паспорт РФ'
        });
    const [genderType, setGenderType] = useState("M");

    const [date] = useState(new Date());
    const [showCalendar, setShowCalendar] = useState(false);//показывать календарьdeleteEl
    const [dateBirth, setDateBirth] = useState('');//изначально календарь пустой

    const [seriesValue, setSeriesValue] = useState({number:'', error: false});
    const [numberValue, setNumberValue] = useState({number:'', error: false});
    const [numberChildValue, setNumberChildValue] = useState({number:'', error: false});
    const [surname, setSurname] = useState({name:'', error: false});
    const [name, setName] = useState({name:'', error: false});
    const [twoSurname, setTwoSurname] = useState({name:'', error: false});
    const [examination, setExamination] = useState(false);
    const [checkDocument, setCheckDocument] = useState(false);

    const [valueForm, setValueForm] = useState([
        {
            type:'adult',
            surname:surname,
            name: name,
            twoSurname: twoSurname,
            series: seriesValue,
            number: numberValue,
            error:false
        },
        {
            type:'child',
            surname:surname,
            name: name,
            twoSurname: twoSurname,
            number: numberChildValue,
            error: false,
        },
    ]);

    const changeGender = (e) => { //конывертирование данные в дату
        e.preventDefault()
       if (e.target.textContent !== genderType) {
        setGenderType(e.target.textContent);
       }
    }

    const onChangeDate = (value) => {
        setDateBirth(dateToString(value)); //dateToString -Преобразует объект даты в строку в соответствии с заданным пользователем форматом
        setShowCalendar(false);// закрыть календарь
    }

    const dateToString = (date) => {
        const result = date.toLocaleString('ru-Ru', { //toLocaleString() возвращает строку с языкозависимым представлением даты
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        });

        return result.replace(/[,%]/g,''); //находит и заменяет символы
    } 


    const onChangeDocument = (e) => {

        if (examination) {
            setExamination(false);
        }
        
        if (e.target.classList.contains('surname')) {
            setSurname({...surname, name:e.target.value, error: false})  
        }

        if (e.target.classList.contains('name')) {
            setName({...surname, name:e.target.value, error: false})  
        }

        if (e.target.classList.contains('two_surname')) {
            setTwoSurname({...surname, name:e.target.value, error: false})  
        }

        if(e.target.classList.contains('passengers__document__series') && e.target.value.length <= e.target.maxLength) {
            setSeriesValue({...seriesValue, number:e.target.value, error: false})  
        }

        if(e.target.classList.contains('passengers__document__number') && e.target.value.length <= e.target.maxLength) {
            setNumberValue({...numberValue, number:e.target.value, error: false})  
        }
        
        if(e.target.classList.contains('passengers__document__number__child') && e.target.value.length <= e.target.maxLength) {
            setNumberChildValue({...numberChildValue, number:e.target.value, error: false});  
        }
    }

    const checkFullNameData = (obj, elem, regElem) => {
        if(obj.name === undefined || obj.name.length === 0) {
            elem({...obj, error:true})
        } else {
            if (obj.name.match(regElem)) {
                elem({...obj, error:false})
            } else {
            elem({...obj, error:true})
            }
        }
    }

    const checkDocumentData = (el, obj, elem, number, regElem) => {
        if(obj.number === undefined || obj.number.length === 0 ) {
            elem({...obj, error:true})
        } 

        if (el.type === 'adult') {
           if (obj.number.length === number) {
                elem({...obj, error:false})
           } else {
                elem({...obj, error:true})
           }
        }

        if (el.type === 'children') {
            if (obj.number.match(regElem) && 12 <= obj.number.length <= number) {
                elem({...obj, error:false})
            } else {
                elem({...obj, error:true})
            } 
        }
    }


    const VerificationForm = (e) => {
        e.preventDefault();
        const regCertificate = /^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})-[А-Яа-я\- ]{2}-\d{6}$/gm;
        const regName = /^([А-Я]{1}[а-яё]{1,23})$/gm;
        if (selected.type === 'adult' && selectedDocument.type === 'passport' || selected.type === 'children' && selectedDocument.type === 'birth-certificate' ) {
            setExamination(true);
        }

        if (selected.type === 'adult' && selectedDocument.type === 'passport') {
            checkFullNameData(surname, setSurname , regName);
            checkFullNameData(name, setName , regName);
            checkFullNameData(twoSurname, setTwoSurname, regName);
            
            checkDocumentData(selected, seriesValue, setSeriesValue, 4);
            checkDocumentData(selected, numberValue, setNumberValue, 6);
        }
        
        if (selected.type === 'children' && selectedDocument.type === 'birth-certificate') {
            checkFullNameData(surname, setSurname , regName);
            checkFullNameData(name, setName , regName);
            checkFullNameData(twoSurname, setTwoSurname, regName);
            checkDocumentData(selected, numberChildValue, setNumberChildValue, 14, regCertificate);
        }

        if (selected.type === 'adult' && selectedDocument.type !== 'passport' || selected.type === 'children' && selectedDocument.type !== 'birth-certificate') {
            setCheckDocument(true);
        }

        
    }

    const closeCard = (e, id) => {
        if (card !== undefined) {
            let indexEl = card.filter((el) => el !==id)
            setCard(indexEl);
        }
    }

    return (
        <>
            <form className='passengers__forms__item' key={index}>
                
                <Accordion className='accordion__passengers__forms' defaultActiveKey="0" alwaysOpen>
                        <Accordion.Item eventKey="0" className='accordion__passengers__forms__item'>
                            <Accordion.Header className='accordion__passengers__header'>
                                <div className='accordion__passengers__header__box'>
                                    <div className='accordion__passengers__header__title'>{` Пассажир ${index} `}</div> 
                                    <div className='accordion__passengers__header__btn btn__close' onClick={(e) => closeCard(e,index)}>X</div>   
                                </div>
                            </Accordion.Header>
                            <Accordion.Body className='accordion__passengers__forms__body'>
                            <Dropdown selected={selected} setSelected={setSelected} options={optionsType}/>
                                
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
                                <div className='passengers__detailed__info'>
                                    <div className='gender__type'>
                                        <div className='gender__type__title'>Пол</div> 
                                        <button className={`male gender__btn ${(genderType === "M" )? 'active' : ""}`} onClick={(e) => changeGender(e)}>M</button>
                                        <button className={`female gender__btn ${(genderType === "Ж") ? 'active' : ""}`} onClick={(e) => changeGender(e)}>Ж</button>
                                    </div>
                                       
                                    <label htmlFor='dateBirth' className='date__birth__label'>
                                        <div className='date__birth__title'>Дата рождения</div>
                                        <input className='date__birth' id='dateBirth' placeholder="ДД/ММ/ГГ" defaultValue={dateBirth} onClick={(e) =>{ console.log(e);setShowCalendar(!showCalendar)}} required></input>   
                                    </label>    
                                    {showCalendar  &&  
                                        <Calendar 
                                            onChange={onChangeDate} 
                                            value={date} 
                                            defaultValue='month'
                                        />
                                    } 
                                </div>

                                <div className='detailed__info__mobility checkbox'>
                                    <input type="checkbox" id="mobility" className='checkbox__input'/> 
                                    <label htmlFor='mobility' className='detailed__info__mobility__title checkbox__lable'>ограничения подвижность</label>
                                </div>

                               <div className='passengers__document__info'>
                                    <div className='passengers__document__item'>
                                        <div className='passengers__document'>
                                            <div className='passengers__document__title'>Тип документа</div>
                                            <Dropdown selected={selectedDocument} setSelected={setSelectedDocument} options={optionsDocument} setCheckDocument={setCheckDocument} checkDocument={checkDocument}/>
                                        </div>
                                        {selectedDocument.name === 'Паспорт РФ' ?
                                                <>
                                                    <label htmlFor='series' className={`passengers__document__label passengers__document__${selectedDocument.type}`}>
                                                        <div className='passengers__document__title passengers__document__title__series'>Серия</div>
                                                        <input 
                                                            type='number' 
                                                            id='series' 
                                                            className={`passengers__document__series passengers__document__input ${seriesValue.error === true ? 'error' : ''}`} 
                                                            placeholder="____" 
                                                            maxLength="4"
                                                            value={seriesValue.number}
                                                            onChange={onChangeDocument} 
                                                            required />
                                                        </label>
                                                        <label htmlFor='number' className={`passengers__document__label passengers__document__${selectedDocument.type}`}>
                                                        <div className='passengers__document__title passengers__document__title__number'>Номер</div>
                                                        <input 
                                                            type='number' 
                                                            id='number' 
                                                            className={`passengers__document__number passengers__document__input ${numberValue.error === true ? 'error' : ''}`} 
                                                            placeholder="______" 
                                                            maxLength="6" 
                                                            value={numberValue.number}
                                                            onChange={onChangeDocument} 
                                                            required />
                                                    </label>
                                                </> :

                                                <label htmlFor='surname' className={`passengers__document__label passengers__document__${selectedDocument.type}`}>
                                                    <div className='passengers__document__title'>Номер</div>
                                                    <input 
                                                        type='text' 
                                                        id='surname' 
                                                        className={`passengers__document__number__child passengers__document__input ${numberChildValue.error === true ? 'error' : ''}`} 
                                                        placeholder="____________"
                                                        onChange={onChangeDocument}
                                                        value={numberChildValue.number}
                                                        maxLength="14"  
                                                        required />
                                                        {!numberChildValue && <span className='passengers__document__text '>12 символов</span>}
                                                        
                                                </label>
                                        }
                                    </div>  
                                </div>

                               <div className={`next__passenger__control ${(surname.error === true || name.error === true || twoSurname.error === true || seriesValue.error === true || numberValue.error === true || numberChildValue.error === true || checkDocument === true)? 'error' : examination ? "next__passenger__examination" : ''}`}>
                                    
                                    {(surname.error === true || name.error === true || twoSurname.error === true || seriesValue.error === true || numberValue.error === true || numberChildValue.error === true || checkDocument === true)? <>
                                        <div className='error__icon'>X</div>
                                        {checkDocument === true ? <div className='error__text'>Проверьте тип документа!</div> : ''}
                                       { (surname.error === true || name.error === true || twoSurname.error === true) && <div className='error__text'>Проверьте поле! Оно должно быть заполнено кирилицей и никаких цифр!!!</div>}
                                       {(surname.error !== true && name.error !== true && twoSurname.error !== true && (seriesValue.error === true || numberValue.error === true)) && <div className='error__text'>Заполните поле! Серия состоит из 4 цифр, а номер из 6.</div>}
                                        
                                        {numberChildValue.error === true && <div className='error__text'>Номер свидетельства о рождении указан некорректно. Пример: VIII-ЫП-123456</div>}
                                    </>: !examination && <buttom className='next__passenger__btn' onClick={VerificationForm}>Следующий  пассажир</buttom>}
                                    {(surname.error !== true && name.error !== true && twoSurname.error !== true && numberValue.error !== true && seriesValue.error !== true && numberChildValue.error !== true && examination && checkDocument !== true) ? <>
                                        <div className='examination__box'>
                                           <div className='examination__icon'>V</div>
                                            <div className='examination__text'>Готово</div>   
                                        </div>
                                        <buttom className={`next__passenger__btn ${examination && "examination__btn"}`} onClick={VerificationForm}>Следующий  пассажир</buttom>
                                    </> : ''}  
                               </div>
                            </Accordion.Body>
                        </Accordion.Item>      
                    </Accordion>
                </form>
        </>
    )
}