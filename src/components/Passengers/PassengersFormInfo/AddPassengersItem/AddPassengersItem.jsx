import Accordion from 'react-bootstrap/Accordion';
import React, { useEffect, useState } from 'react';
import Dropdown from '../Dropdown';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useDispatch, useSelector } from 'react-redux';
import {addPassengers, deletePassenger} from '../../../../redux/slice/passengersSlice';

export default function AddPassengersItem({index, id, el}) {
    const {passengersInfo } = useSelector(state => state.passengers);
    const [selected, setSelected] = useState({
        type: el.type === 'adult' ? 'adult' : 'children',
        name: el.type === 'adult' ? 'Взрослый' : 'Детский'
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
            type: el.type === 'adult' ? 'passport' : 'birth-certificate',
            name: el.type === 'adult' ? 'Паспорт РФ' : 'Свидетельство о рождении'
    });
    const [genderType, setGenderType] = useState({genderType:"M", valid: true});//
    const [date] = useState(new Date());
    const [showCalendar, setShowCalendar] = useState(false);//показывать календарьdeleteEl
    const [dateBirth, setDateBirth] = useState({date: el.dateBirth, error: false});//изначально календарь пустой
// документы
    const [seriesValue, setSeriesValue] = useState({number:el.series, error: false, valid: false});
    const [numberValue, setNumberValue] = useState({number:el.number, error: false, valid: false});
    const [numberChildValue, setNumberChildValue] = useState({number:el.numberChild, error: false, valid: false});
  // фио  
    const [surname, setSurname] = useState({name:el.surname, error: false, valid: false});//
    const [name, setName] = useState({name:el.name, error: false, valid: false});//
    const [twoSurname, setTwoSurname] = useState({name:el.twoSurname, error: false, valid: false});//
    
    const [examination, setExamination] = useState();
    const [checkDocument, setCheckDocument] = useState(false);
    const [mobilityInfo, setMobilityInfo] = useState({value: el.mobilityInfo, valid: true})
        
    const [validForm, setValidForm] = useState(false);
    const dispatch = useDispatch();
    const regName = /^([А-Я]{1}[а-яё]{1,23})$/gm; // проверка фио   
    const regCertificate = /^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})-[А-Яа-я\- ]{2}-\d{6}$/gm; // проверка свидетельства о рождении

    useEffect(()=> {
        const form = {
            type:selected.type,
            surname:surname.name,
            name: name.name,
            genderType: genderType.genderType,
            dateBirth: dateBirth.date,
            twoSurname: twoSurname.name,
            mobilityInfo:mobilityInfo.value,
            series: seriesValue.number,
            number: numberValue.number,
            numberChild: numberChildValue.number,
            error:false,
            id: index, 
            validForm: validForm,
        } 

        if (validForm === true) {  
            dispatch(addPassengers(form)); 
        }

        if (passengersInfo.validForm !== validForm) {
            dispatch(addPassengers(form));
        }
    }, [validForm])
    
    // изменения пола которое нужно проверить и изменить статус|| passengersInfo[index-1]?.type === undefined
    const changeGender = (e) => { //конывертирование данные в дату
        e.preventDefault()
       if (e.target.textContent !== genderType) {
        setGenderType({genderType:e.target.textContent, valid: false});
        setValidForm(false);
       }
    }

// выбор даты рождения
    const onChangeDate = (value) => {
        setDateBirth({date:dateToString(value), error: false}); //dateToString -Преобразует объект даты в строку в соответствии с заданным пользователем форматом
        setShowCalendar(false);// закрыть календарь
        setValidForm(false)
    }
// преобразование даты
    const dateToString = (date) => {
        const result = date.toLocaleString('ru-Ru', { //toLocaleString() возвращает строку с языкозависимым представлением даты
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        });

        return result.replace(/[,%]/g,''); //находит и заменяет символы
    } 

// проверка фио
    const checkFullNameData = (e, elem, regElem) => {
        if(e === undefined || e.length === 0) {
            elem({name:e, error:true, valid: false})
            setValidForm(false)
        } else {
            if (e.match(regElem)) { // если не пусто проверяем на правильность заполнения
                elem({name:e, error:false, valid: true}) // заполнено правильно
                setValidForm(true)
            } else {
                elem({name:e, error:true, valid: false}) // ошибка при заполнении и форма не валидна
                setValidForm(false)
            }
        }
    }

// проверка документов
    const checkDocumentData = (el, obj, elem, number, regElem) => {
        if(obj === undefined || obj.length === 0 ) { // если форма пустая
            elem({number:obj, error:true, valid: false});
            setValidForm(false);
           return;
        } 

        if (el.type === 'adult') {// если это взрослый  и длина символов равна  определенному количеству
            if (obj.length === number) {
                 elem({number:obj, error:false, valid: true})// проверку прошла и все валидно
                 setValidForm(true);
            } else {
                 elem({number:obj, error:true, valid: false})// не прошла проверку
                 setValidForm(false);
            }
         }

        if (el.type === 'children') { // если документ ребенка , еще проверяем на правильнось заполнения
            if (obj.match(regElem) && 12 <= obj.length <= number) { // прошел проверку 
                elem({number:obj, error:false, valid: true});
                setValidForm(true);
            } else {
                elem({number:obj , error:true, valid: false})// не прошла проверку
                setValidForm(false);
            } 
        }
    }

// главная проверка формы ии ее отправка
    const VerificationForm = (e, index) => {
        e.preventDefault();                   
//пол
        if (genderType.valid === false) {
            setGenderType({...genderType, valid: true})
            setValidForm(true);
        }
// передвижение
        if (mobilityInfo.valid === false) {
            setMobilityInfo({...mobilityInfo, valid: true})
            setValidForm(true);
        }
   //  тип и док не совпадают 
        if (selected.type === 'adult' && selectedDocument.type === 'passport') {
            setExamination(false);
            setValidForm(true);
        } 

        if (selected.type === 'adult' && selectedDocument.type !== 'passport') {
            setExamination(true);
            setValidForm(false);
        }

        if (selected.type === 'children' && selectedDocument.type === 'birth-certificate') {
            setExamination(false);
            setValidForm(true);
        } 
        if (selected.type === 'children' && selectedDocument.type !== 'birth-certificate') {
            setExamination(true);
            setValidForm(false);
        }

        if (selected.type === 'adult' && seriesValue.number !== '' && seriesValue.error === false) {
            setValidForm(true);
        } 

        if (selected.type === 'adult' && seriesValue.number === '') {
            setSeriesValue({...seriesValue, error:true});
            setValidForm(false);
        }

        if (selected.type === 'adult' && numberValue.number === '') {
            setNumberValue({...numberValue, error:true});
            setValidForm(false);
        }

        if (selected.type === 'adult' && numberValue.number !== '' && numberValue.error === false) {
            setValidForm(true);
        } 

        if (selected.type === 'children' && numberChildValue.number !== '' && numberChildValue.error === false) {
            setValidForm(true);
        }

        if (selected.type === 'children' && numberChildValue.number === '') {
            setNumberChildValue({...numberChildValue, error:true});
            setValidForm(false);
        }

// день рожденье
        if (dateBirth.date !== '') { // если заполнен
            setDateBirth({...dateBirth, error:false});
            setValidForm(true);
        } else {
            setDateBirth({...dateBirth, error:true});   
        }
        // фио

        if (surname.name !== '' && surname.error === false) {
            setValidForm(true);
        } else {
            setSurname({...surname, error: true})
            setValidForm(false);
        }

        if (name.name !== '' && name.error === false) {
            setValidForm(true);
        } else {
            setName({...name, error: true})
            setValidForm(false);
        }

        if (twoSurname.name !== '' && twoSurname.error === false) {
            setValidForm(true);
        } else {
            setTwoSurname({...surname, error: true})
            setValidForm(false);
        }
    }
    
    // удаление карты
    const closeCard = (e, id) => {
        dispatch(deletePassenger(id));
    }

    return (

            <form className='passengers__forms__item' key={index} >
                
                <Accordion className='accordion__passengers__forms' defaultActiveKey="0" alwaysOpen>
                        <Accordion.Item eventKey="0" className='accordion__passengers__forms__item'>
                            <Accordion.Header className='accordion__passengers__header'>
                                <div className='accordion__passengers__header__box'>
                                    <div className='accordion__passengers__header__title'>{` Пассажир ${id+1} `}</div> 
                                    <div className='accordion__passengers__header__btn btn__close' onClick={(e) => closeCard(e,index)}>X</div>   
                                </div>
                            </Accordion.Header>
                            <Accordion.Body className='accordion__passengers__forms__body'>
                            <Dropdown selected={selected} setSelected={setSelected} options={optionsType}  setSeriesValue={setSeriesValue}
                                                setNumberValue={setNumberValue}
                                                setNumberChildValue={setNumberChildValue}/>
                                
                                <div className='initials__box'>
                                    <label htmlFor='surname' className='initials__lable'>
                                        <div className='initials__text'>Фамилия</div>
                                        <input 
                                            className={`initials__input surname ${surname.error === true ? 'error' : ''} `} 
                                            type='text' 
                                            name='name' 
                                            id='urname' 
                                            value={surname.name} 
                                            onChange={(e) =>{  
                                                checkFullNameData(e.target.value,setSurname, regName);  
                                                setValidForm(false);
                                             }}  required></input>
                                    </label>
                                    <label htmlFor='name' className='initials__lable'>
                                    <div className='initials__text '>Имя</div>
                                        <input 
                                            className={`initials__input name ${name.error === true ? 'error' : ''} `} 
                                            type='text' 
                                            id='name' 
                                            value={name.name} 
                                            onChange={(e) => {
                                                checkFullNameData( e.target.value, setName , regName);
                                                setValidForm(false);
                                            }} required></input>
                                    </label>
                                    <label htmlFor='two_surname' className='initials__lable'>
                                    <div className='initials__text'>Отчество</div>
                                        <input 
                                            className={`initials__input two_surname ${twoSurname.error === true ? 'error' : ''} `} 
                                            type='text' 
                                            id='two_surname' value={twoSurname.name} 
                                            onChange={ (e) => {
                                                checkFullNameData( e.target.value, setTwoSurname , regName);
                                                setValidForm(false);
                                            }}  
                                            required ></input>
                                    </label>
                                </div>
                                <div className='passengers__detailed__info'>
                                    <div className='gender__type'>
                                        <div className='gender__type__title'>Пол</div> 
                                        <button className={`male gender__btn ${(genderType.genderType === "M" )? 'active' : ""}`} onClick={(e) => changeGender(e)}>M</button>
                                        <button className={`female gender__btn ${(genderType.genderType === "Ж") ? 'active' : ""}`} onClick={(e) => changeGender(e)}>Ж</button>
                                    </div>
                                       
                                    <label htmlFor='dateBirth' className='date__birth__label'>
                                        <div className='date__birth__title'>Дата рождения</div>
                                        <input className={`date__birth ${dateBirth.error === true ? 'error' : ''}`} id='dateBirth' placeholder="ДД/ММ/ГГ" defaultValue={dateBirth.date} onClick={(e) =>{ console.log(e);setShowCalendar(!showCalendar)}} required></input>   
                                    </label>    
                                    {showCalendar  &&  
                                        <Calendar 
                                            onChange={(value) => {
                                                onChangeDate(value);
                                            }} 
                                            value={date} 
                                            defaultValue='month'
                                        />
                                    } 
                                </div>

                                <div className='detailed__info__mobility checkbox'>
                                    <input type="checkbox" id={`mobility_${index}`} className='checkbox__input'/> 
                                    <label 
                                        htmlFor={`mobility_${index}`} 
                                        className='detailed__info__mobility__title checkbox__lable' 
                                        value={mobilityInfo.value} 
                                        onClick={(e) => {
                                            setMobilityInfo({value: (mobilityInfo.value === true ? false : true), valid: false});
                                            setValidForm(false);
                                        }}>ограничения подвижность</label>
                                </div>

                               <div className='passengers__document__info'>
                                    <div className='passengers__document__item'>
                                        <div className='passengers__document'>
                                            <div className='passengers__document__title'>Тип документа</div>
                                            <Dropdown 
                                                selected={selectedDocument} 
                                                setSelected={setSelectedDocument} 
                                                options={optionsDocument} 
                                                setCheckDocument={setCheckDocument} 
                                                checkDocument={checkDocument}
                                                setSeriesValue={setSeriesValue}
                                                setNumberValue={setNumberValue}
                                                setNumberChildValue={setNumberChildValue}
                                                />

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
                                                            onChange={(e) =>  {
                                                                checkDocumentData(selected, e.target.value, setSeriesValue, 4);
                                                                setValidForm(false);
                                                            }} 
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
                                                            onChange={(e) => {
                                                                checkDocumentData(selected, e.target.value, setNumberValue, 6);
                                                                setValidForm(false);
                                                            }} 
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
                                                        onChange={(e) =>  {
                                                            checkDocumentData(selected, e.target.value, setNumberChildValue, 14, regCertificate); 
                                                            setValidForm(false);         
                                                        }}
                                                        value={numberChildValue.number}
                                                        maxLength="14"  
                                                        required />
                                                        {!numberChildValue && <span className='passengers__document__text '>12 символов</span>}
                                                        
                                                </label>
                                        }
                                    </div>  
                                </div>
                                    {/* при ошибке меняет цвет фона красный */}
                               <div className={`next__passenger__control ${(
                                    dateBirth.error === true || 
                                    surname.error === true || 
                                    name.error === true || 
                                    twoSurname.error === true || 
                                    seriesValue.error === true || 
                                    numberValue.error === true || 
                                    numberChildValue.error === true 
                                    )? 'error' : 
                                
                                    ( validForm === true &&
                                    examination === false &&
                                    mobilityInfo.valid !== false &&
                                    genderType.valid !== false &&
                                    dateBirth.error !== true &&
                                    checkDocument === false
                                    ) ? "next__passenger__examination" : examination === undefined && ''} `}>

                                     {/* при ошибке добавляет уведомления */}
                                    {(dateBirth.error === true ||
                                    surname.error === true ||
                                    name.error === true ||
                                    twoSurname.error === true ||
                                    seriesValue.error === true ||
                                    numberValue.error === true ||
                                    numberChildValue.error === true 

                                    )? <>
                                        <div className='error__icon'>X</div>
                                
                                        {( dateBirth.error === true || dateBirth.name === '') ? <div className='error__text'>Заполните поле с датой о рождении!!</div> : ''}  
                                        {examination !== false ? <div className='error__text'>Проверьте тип документа! &nbsp;</div> : ''}
                                        { (surname.error === true || name.error === true || twoSurname.error === true) && <div className='error__text'>Проверьте поле c ФИО! Оно должно быть заполнено кирилицей и никаких цифр!!!</div>}
                                        {(((seriesValue.error === true || numberValue.error === true ) && dateBirth.error !== true)) && <div className='error__text'> Заполните поле! Серия состоит из 4 цифр, а номер из 6.</div>}  
                                        {(numberChildValue.error === true && examination === false)  && <div className='error__text'>Номер свидетельства о рождении указан некорректно. Пример: VIII-ЫП-123456</div>}
                                        </>: (validForm === false) &&<buttom className='next__passenger__btn' onClick={(e) => VerificationForm(e, index)}>Следующий  пассажир</buttom>}
                                  
                                    {/* Если все правильно */}
                                        {(
                                        validForm === true &&
                                        mobilityInfo.valid !== false &&
                                        dateBirth.error !== true &&
                                        surname.error !== true &&
                                        name.error !== true &&
                                        twoSurname.error !== true &&
                                        numberValue.error !== true &&
                                        seriesValue.error !== true &&
                                        numberChildValue.error !== true &&
                                        checkDocument !== true
                                        ) ? <>

                                        <div className='examination__box'>
                                           <div className='examination__icon'>V</div>
                                            <div className='examination__text'>Готово</div>   
                                        </div>
                                        <buttom className={`next__passenger__btn ${(examination !== undefined && examination) ? "examination__btn" : ''}`} onClick={(e) => VerificationForm(e, index)}>Следующий  пассажир</buttom>
                                    </> : ''}
                               </div>
                            </Accordion.Body>
                        </Accordion.Item>      
                    </Accordion>
                </form>
    )
}