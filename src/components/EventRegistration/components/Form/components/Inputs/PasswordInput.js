import { useContext, useState, useEffect } from 'react';
import { EventRegistrationContext } from '@contexts/EventRegistrationContext';
import { getPasswordValidationResult } from '../../validation/getPasswordValidationResult';
import InputMessagesList from '../InputsMessagesList/InputMessagesList';

const PasswordInput = () => {
  const { setIsPasswordValid, password, setPassword } = useContext(EventRegistrationContext);
  const [validationResult, setValidationResult] = useState({});
  const [inputModifierClass, setInputModifierClass] = useState('');

  const passwordChange = (event) => {
    setPassword(event.target.value);
    const validationResult = getPasswordValidationResult(event.target.value);
    setInputModifierClass(
      validationResult.isValid ? 'event-registration-form__input--valid' : 'event-registration-form__input--invalid',
    );
    setIsPasswordValid(validationResult.isValid);
    setValidationResult(validationResult);
  };

  useEffect(() => {
    setValidationResult(getPasswordValidationResult('', true));
  }, []);

  return (
    <div className='event-registration-form__item'>
      <label className='event-registration-form__label' htmlFor='password'>
        Password:
      </label>
      <input
        className={`event-registration-form__input ${inputModifierClass}`}
        type='password'
        id='password'
        autoComplete='xm-password'
        value={password}
        onChange={passwordChange}
      />
      {Boolean(validationResult?.messagesList && validationResult?.messagesList?.length > 0) && (
        <InputMessagesList messagesList={validationResult?.messagesList} />
      )}
    </div>
  );
};

export default PasswordInput;
