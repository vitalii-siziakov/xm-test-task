import { useContext, useState } from 'react';
import { EventRegistrationContext } from '@contexts/EventRegistrationContext';
import { getFullNameValidationResult } from '../../validation/getFullNameValidationResult';
import InputMessagesList from '../InputsMessagesList/InputMessagesList';

const FullNameInput = () => {
  const { setIsFullNameValid, fullName, setFullName } = useContext(EventRegistrationContext);
  const [validationResult, setValidationResult] = useState({});
  const [inputModifierClass, setInputModifierClass] = useState({});

  const fullNameChange = (event) => {
    setFullName(event.target.value);
    const validationResult = getFullNameValidationResult(event.target.value);
    setInputModifierClass(
      validationResult.isValid ? 'event-registration-form__input--valid' : 'event-registration-form__input--invalid',
    );
    setIsFullNameValid(validationResult.isValid);
    setValidationResult(validationResult);
  };

  return (
    <div className='event-registration-form__item'>
      <label className='event-registration-form__label' htmlFor='full-name'>
        Full Name:
      </label>
      <input
        className={`event-registration-form__input ${inputModifierClass}`}
        type='text'
        id='full-name'
        placeholder='Full Name'
        value={fullName}
        onChange={fullNameChange}
      />
      {Boolean(validationResult?.messagesList && validationResult?.messagesList?.length > 0) && (
        <InputMessagesList messagesList={validationResult?.messagesList} />
      )}
    </div>
  );
};

export default FullNameInput;
