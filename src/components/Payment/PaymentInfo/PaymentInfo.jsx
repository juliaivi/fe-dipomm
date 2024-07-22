import React, { useEffect } from 'react';
import './stylePaymentInfo.css';
import { setPersonalData } from '../../../redux/slice/passengersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
// import { DevTool } from '@hookform/devtools';

export default function PaymentInfo() {
  const { personalData } = useSelector((state) => state.passengers);

  const form = useForm({
    defaultValues: async () => {
      return {
        surname: personalData !== null ? personalData.surname : '',
        name: personalData !== null ? personalData.name : '',
        two_surname: personalData !== null ? personalData.two_surname : '',
        telephone: personalData !== null ? personalData.telephone : '',
        payment: personalData !== null ? personalData.payment : '',
        email: personalData !== null ? personalData.email : '',
      };
    },
  });
  const dispatch = useDispatch();
  const navigete = useNavigate();
  const { register, handleSubmit, formState, reset } = form;
  const { errors, isSubmitSuccessful, isValid } = formState;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      navigete('/checkorder');
    }
  }, [isSubmitSuccessful, reset]);
  const regName = /^([А-Я]{1}[а-яё]{1,23})$/gm;
  const regEmail = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/gm;

  const onSubmit = (data) => {
    dispatch(setPersonalData(data));
  };
  const PATTERN = /\D/g;
  const getInputNamberValue = (value) => {
    return value.replace(PATTERN, '');
  };

  const handlePhoneInput = (event) => {
    const input = event.target;
    let inputNumberValue = getInputNamberValue(input.value);
    let formattedInputValue = '';

    if (!inputNumberValue) {
      return (input.value = '');
    }

    if (['7', '8', '9'].indexOf(inputNumberValue[0] > -1)) {
      if (inputNumberValue[0] === '9') {
        inputNumberValue = '7' + inputNumberValue;
      }

      const firstSymbols = inputNumberValue[0] === '8' ? '8' : '+7';
      formattedInputValue = firstSymbols + ' ';

      if (inputNumberValue.length > 1) {
        formattedInputValue += '(' + inputNumberValue.substring(1, 4);
      }

      if (inputNumberValue.length >= 5) {
        formattedInputValue += ') ' + inputNumberValue.substring(4, 7);
      }

      if (inputNumberValue.length >= 8) {
        formattedInputValue += '-' + inputNumberValue.substring(7, 9);
      }

      if (inputNumberValue.length >= 10) {
        formattedInputValue += '-' + inputNumberValue.substring(9, 11);
      }
    } else {
      formattedInputValue = '+' + inputNumberValue.substring(0, 16);
    }

    input.value = formattedInputValue;
  };

  const handlePhoneKeyDown = (event) => {
    const input = event.target;
    if (
      event.key === 'Backspace' &&
      getInputNamberValue(input.value).length === 1
    ) {
      input.value = '';
    }

    return input;
  };

  const handlePhonePaste = (event) => {
    const pasted = event.clipboardData || window.clipboardData;
    const input = event.target;
    let inputNumberValue = getInputNamberValue(input.value);

    if (pasted) {
      const pastedText = pasted.getData('Text');
      if (PATTERN.test(pastedText)) {
        input.value = inputNumberValue;
      }
    }
  };

  return (
    <>
      <section>
        <form
          className="form passengers__forms__box"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="form__title">Персональные данные</div>
          <div className="initials__box">
            <label htmlFor="surname" className="initials__lable">
              <div className="initials__text">Фамилия</div>
              <input
                type="text"
                id="surname"
                {...register('surname', {
                  required: {
                    value: true,
                    message: 'Введите фамилию',
                  },
                  pattern: {
                    value: regName,
                    message: 'Фамилия введено не правильно',
                  },
                  minLength: {
                    value: 2,
                    message: 'Фамилия должно быть не короче 2 символов',
                  },
                })}
                className={`initials__input surname-personal surname ${errors?.surname?.message ? 'error' : ''} `}
                required
              ></input>{' '}
              {errors.surname?.message && (
                <div className="form__clue__text error">
                  {errors.surname?.message}
                </div>
              )}
            </label>

            <label htmlFor="name" className="initials__lable">
              <div className="initials__text ">Имя</div>
              <input
                className={`initials__input name-personal name ${errors.name?.message ? 'error' : ''} `}
                type="text"
                id="name"
                {...register('name', {
                  required: {
                    value: true,
                    message: 'Введите имя',
                  },
                  pattern: {
                    value: regName,
                    message: 'Имя введено не правильно',
                  },
                  minLength: {
                    value: 2,
                    message: 'Фамилия должно быть не короче 2 символов',
                  },
                })}
              ></input>
              {errors.name?.message && (
                <div className="form__clue__text error">
                  {errors.name?.message}
                </div>
              )}
            </label>

            <label htmlFor="two_surname" className="initials__lable">
              <div className="initials__text">Отчество</div>
              <input
                className={`initials__input two_surname-personal two_surname ${errors.two_surname?.message ? 'error' : ''} `}
                type="text"
                id="two_surname"
                {...register('two_surname', {
                  required: {
                    value: true,
                    message: 'Введите отчество',
                  },
                  pattern: {
                    value: regName,
                    message: 'Отчество введено не правильно',
                  },
                  minLength: {
                    value: 2,
                    message: 'Фамилия должно быть не короче 2 символов',
                  },
                })}
                required
              ></input>
              {errors.two_surname?.message && (
                <div className="form__clue__text error">
                  {errors.two_surname?.message}
                </div>
              )}
            </label>
          </div>

          <div className="telephone__info">
            <div className="telephone__info__title">Контактный телефон</div>
            <input
              type="tel"
              placeholder="+7 (XXX) XXX-XX-XX"
              className={`telephone__info__input ${errors.telephone?.message ? 'error' : ''} `}
              {...register('telephone', {
                required: {
                  value: true,
                  message: 'Введите номер телефона',
                },
                minLength: {
                  value: 18,
                  message: 'Номер должен состоять из 11 цифр',
                },
              })}
              onInput={handlePhoneInput}
              onKeyDown={handlePhoneKeyDown}
              onPaste={handlePhonePaste}
              required
            ></input>
          </div>
          {errors.telephone?.message && (
            <div className="form__clue__text form__clue__text-telephone error">
              {errors.telephone?.message}
            </div>
          )}

          <div className="email__info">
            <div className="email__info__title"> E-mail</div>
            <input
              type="email"
              placeholder="inbox@gmail.ru"
              className={`email__info__input ${errors.email?.message ? 'error' : ''} `}
              {...register('email', {
                required: {
                  value: true,
                  message: 'Ведите email',
                },
                pattern: {
                  value: regEmail,
                  message: 'email введен не правильно. Проверьте свой email',
                },
              })}
              required
            ></input>
            {errors.email?.message && (
              <div className="form__clue__text error form__clue__text-email">
                {errors.email?.message}{' '}
              </div>
            )}
          </div>
          <div className="payment__method__title">Способ оплаты</div>
          <div
            className={`checkbox checkbox__online__payment ${errors.payment?.message ? 'error' : ''}`}
          >
            <input
              type="radio"
              name="payment"
              id="online__payment"
              value="onlinePayment"
              className="checkbox__input"
              {...register('payment', {
                required: {
                  value: true,
                  message: 'Выберите тип оплаты',
                },
              })}
            />
            <label
              htmlFor="online__payment"
              className={`checkbox__lable ${errors.payment?.message ? 'error' : ''}`}
            >
              Онлайн
            </label>
          </div>
          <div className="online__payment__list">
            <div className="online__payment__item">Банковской картой</div>
            <div className="online__payment__item">PayPal</div>
            <div className="online__payment__item">Visa QIWI Wallet</div>
          </div>

          <div className={`checkbox checkbox__cash__payment `}>
            <input
              type="radio"
              name="payment"
              id="cash__payment"
              value="cashPayment"
              className={`checkbox__input`}
              {...register('payment', {
                required: {
                  value: true,
                  message: 'Выберите тип оплаты',
                },
              })}
            />
            <label
              htmlFor="cash__payment"
              className={`checkbox__lable ${errors.payment?.message ? 'error' : ''}`}
            >
              Наличными
            </label>
          </div>
          <button
            className={`buy__ticket__btn ${isValid === true ? '' : 'disabled'}`}
          >
            Купить билет
          </button>
        </form>
        {/* <DevTool control={control} /> */}
      </section>
    </>
  );
}
