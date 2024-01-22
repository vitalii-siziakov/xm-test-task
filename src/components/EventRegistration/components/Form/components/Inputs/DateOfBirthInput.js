import { useContext, useState } from 'react';
import { EventRegistrationContext } from '@contexts/EventRegistrationContext';
import { getDateOfBirthValidationResult } from '../../validation/getDateOfBirthValidationResult';
import InputMessagesList from '../InputsMessagesList/InputMessagesList';

const DateOfBirthInput = () => {
  const { setIsDateOfBirthValid, dateOfBirth, setDateOfBirth } = useContext(EventRegistrationContext);
  const [validationResult, setValidationResult] = useState({});
  const [inputModifierClass, setInputModifierClass] = useState({});

  const dateOfBirthChange = (event) => {
    setDateOfBirth(event.target.value);

    const validationResult = getDateOfBirthValidationResult(event.target.value);
    setInputModifierClass(
      validationResult.isValid ? 'event-registration-form__input--valid' : 'event-registration-form__input--invalid',
    );
    setIsDateOfBirthValid(validationResult.isValid);
    setValidationResult(validationResult);
  };

  return (
    <div className='event-registration-form__item'>
      <label className='event-registration-form__label' htmlFor='date-of-birth'>
        Date of Birth:
      </label>
      <input
        className={`event-registration-form__input ${inputModifierClass}`}
        type='date'
        id='date-of-birth'
        placeholder='dd/mm/yy'
        value={dateOfBirth}
        onChange={dateOfBirthChange}
      />
      {Boolean(validationResult?.messagesList && validationResult?.messagesList?.length > 0) && (
        <InputMessagesList messagesList={validationResult?.messagesList} />
      )}
    </div>
  );
};

export default DateOfBirthInput;
