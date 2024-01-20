const Form = () => {
  return (
    <form className='event-registration-form'>
      <div className='event-registration-form__item'>
        <label className='event-registration-form__label' htmlFor='full-name'>
          Full Name:
        </label>
        <input className='event-registration-form__input' type='text' id='full-name' placeholder='Full Name' />
      </div>

      <div className='event-registration-form__item'>
        <label className='event-registration-form__label' htmlFor='date-of-birth'>
          Date of Birth:
        </label>
        <input className='event-registration-form__input' type='date' id='date-of-birth' placeholder='dd/mm/yy' />
      </div>

      <button className='event-registration-form__submit-button'>Continue</button>
    </form>
  );
};

export default Form;
