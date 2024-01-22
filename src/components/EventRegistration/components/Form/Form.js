import SubmitButton from './components/SubmitButton';

const Form = () => {
  return (
    <form className='event-registration-form'>
      <div className='event-registration-form__item'>
        <label className='event-registration-form__label' htmlFor='full-name'>
          Full Name:
        </label>
        <input className='event-registration-form__input' type='text' id='full-name' placeholder='Full Name' />
        <ul className='event-registration-form__input-messages-list'>
          <li className='event-registration-form__input-messages-item event-registration-form__input-messages-item--invalid'>
            Please Enter Valid Name
          </li>
        </ul>
      </div>

      <div className='event-registration-form__item'>
        <label className='event-registration-form__label' htmlFor='date-of-birth'>
          Date of Birth:
        </label>
        <input className='event-registration-form__input' type='date' id='date-of-birth' placeholder='dd/mm/yy' />
        <ul className='event-registration-form__input-messages-list'>
          <li className='event-registration-form__input-messages-item event-registration-form__input-messages-item--invalid'>
            Maximum age requirements, 60 years old
          </li>
          <li className='event-registration-form__input-messages-item event-registration-form__input-messages-item--invalid'>
            Minimum age requirements, 18 years old
          </li>
        </ul>
      </div>

      <div className='event-registration-form__item'>
        <label className='event-registration-form__label' htmlFor='email'>
          Email:
        </label>
        <input className='event-registration-form__input' type='email' id='email' placeholder='email@email.com' />
        <ul className='event-registration-form__input-messages-list'>
          <li className='event-registration-form__input-messages-item event-registration-form__input-messages-item--invalid'>
            Please Enter Valid Email
          </li>
        </ul>
      </div>

      <div className='event-registration-form__item'>
        <label className='event-registration-form__label' htmlFor='password'>
          Password:
        </label>
        <input className='event-registration-form__input' type='password' id='password' />
        <ul className='event-registration-form__input-messages-list'>
          <li className='event-registration-form__input-messages-item '>8 - 15 characters</li>
          <li className='event-registration-form__input-messages-item event-registration-form__input-messages-item--valid'>
            1 or more numbers
          </li>
          <li className='event-registration-form__input-messages-item event-registration-form__input-messages-item--invalid'>
            1 or more lower case letters
          </li>
          <li className='event-registration-form__input-messages-item event-registration-form__input-messages-item--invalid'>
            1 or more upper case letters
          </li>
          <li className='event-registration-form__input-messages-item event-registration-form__input-messages-item--invalid'>
            1 or more special characters (#[]()@$&*!?|,.^/\+_-)
          </li>
        </ul>
      </div>

      <SubmitButton />
    </form>
  );
};

export default Form;
