import { useContext, useState } from 'react';
import { EventRegistrationContext } from '@contexts/EventRegistrationContext';
import { getEmailValidationResult } from '../../validation/getEmailValidationResult';
import InputMessagesList from '../InputsMessagesList/InputMessagesList';

const EmailInput = () => {
  const { setIsEmailValid, email, setEmail } = useContext(EventRegistrationContext);
  const [validationResult, setValidationResult] = useState({});
  const [inputModifierClass, setInputModifierClass] = useState({});

  const emailChange = (event) => {
    setEmail(event.target.value);
    const validationResult = getEmailValidationResult(event.target.value);
    setInputModifierClass(
      validationResult.isValid ? 'event-registration-form__input--valid' : 'event-registration-form__input--invalid',
    );
    setIsEmailValid(validationResult.isValid);
    setValidationResult(validationResult);
  };

  return (
    <div className='event-registration-form__item'>
      <label className='event-registration-form__label' htmlFor='email'>
        Email:
      </label>
      <input
        className={`event-registration-form__input ${inputModifierClass}`}
        type='email'
        id='email'
        placeholder='email@email.com'
        value={email}
        onChange={emailChange}
      />
      {Boolean(validationResult?.messagesList && validationResult?.messagesList?.length > 0) && (
        <InputMessagesList messagesList={validationResult?.messagesList} />
      )}
    </div>
  );
};

export default EmailInput;
