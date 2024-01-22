import { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { EventRegistrationContext } from '@contexts/EventRegistrationContext';
import { getDateOfBirthValidationResult } from '../../validation/getDateOfBirthValidationResult';
import InputMessagesList from '../InputsMessagesList/InputMessagesList';
import { ReactComponent as CalendarIcon } from '@images/svg/calendar-icon.svg';

const DateOfBirthInput = () => {
  const { setIsDateOfBirthValid, dateOfBirth, setDateOfBirth } = useContext(EventRegistrationContext);
  const [validationResult, setValidationResult] = useState({});
  const [inputModifierClass, setInputModifierClass] = useState('');

  const dateOfBirthChange = (date) => {
    setDateOfBirth(date);
    const validationResult = getDateOfBirthValidationResult(date);
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
      <DatePicker
        showIcon
        toggleCalendarOnIconClick
        selected={dateOfBirth}
        onChange={dateOfBirthChange}
        placeholderText='dd/mm/yy'
        dateFormat='dd/MM/yy'
        className={`event-registration-form__input event-registration-form__input-date ${inputModifierClass}`}
        id='date-of-birth'
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode='select'
        icon={<CalendarIcon className='event-registration-form__input-date-icon' />}
      />

      {Boolean(validationResult?.messagesList && validationResult?.messagesList?.length > 0) && (
        <InputMessagesList messagesList={validationResult?.messagesList} />
      )}
    </div>
  );
};

export default DateOfBirthInput;
