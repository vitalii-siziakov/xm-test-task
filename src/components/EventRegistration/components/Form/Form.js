import SubmitButton from './components/SubmitButton';
import { useContext, useState, useEffect } from 'react';
import { MainContext } from '@contexts/MainContext';

import { emailValidator } from './validation/emailValidator';

const Form = () => {
  const { registrationStep, setFirstRegistrationStepProgress, setSecondRegistrationStepProgress } = useContext(MainContext);
  const [fullName, setFullName] = useState('');

  const fullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const [dateOfBirth, setDateOfBirth] = useState('');

  const dateOfBirthChange = (event) => {
    setDateOfBirth(event.target.value);
  };

  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);

  const emailChange = (event) => {
    setEmail(event.target.value);
    console.log(emailValidator(event.target.value));
    setIsEmailValid(emailValidator(event.target.value));
  };

  const [password, setPassword] = useState('');

  const passwordChange = (event) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    let firstStepProgress = 0;
    if (fullName) {
      firstStepProgress += 25;
    }
    if (dateOfBirth) {
      firstStepProgress += 25;
    }
    setFirstRegistrationStepProgress(firstStepProgress);

    let secondStepProgress = 0;
    if (email) {
      secondStepProgress += 25;
    }
    if (password) {
      secondStepProgress += 25;
    }
    setSecondRegistrationStepProgress(secondStepProgress);
  }, [fullName, dateOfBirth, email, password, setFirstRegistrationStepProgress, setSecondRegistrationStepProgress]);

  return (
    <form className='event-registration-form'>
      {(() => {
        switch (registrationStep) {
          case 2:
            return (
              <>
                <div className='event-registration-form__item'>
                  <label className='event-registration-form__label' htmlFor='full-name'>
                    Full Name:
                  </label>
                  <input
                    className='event-registration-form__input'
                    type='text'
                    id='full-name'
                    placeholder='Full Name'
                    value={fullName}
                    onChange={fullNameChange}
                  />
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
                  <input
                    className='event-registration-form__input'
                    type='date'
                    id='date-of-birth'
                    placeholder='dd/mm/yy'
                    value={dateOfBirth}
                    onChange={dateOfBirthChange}
                  />
                  <ul className='event-registration-form__input-messages-list'>
                    <li className='event-registration-form__input-messages-item event-registration-form__input-messages-item--invalid'>
                      Maximum age requirements, 60 years old
                    </li>
                    <li className='event-registration-form__input-messages-item event-registration-form__input-messages-item--invalid'>
                      Minimum age requirements, 18 years old
                    </li>
                  </ul>
                </div>
              </>
            );

          case 1:
            return (
              <>
                <div className='event-registration-form__item'>
                  <label className='event-registration-form__label' htmlFor='email'>
                    Email:
                  </label>
                  <input
                    className='event-registration-form__input'
                    type='email'
                    id='email'
                    placeholder='email@email.com'
                    value={email}
                    onChange={emailChange}
                  />
                  <ul className='event-registration-form__input-messages-list'>
                    {email && !isEmailValid && (
                      <li className='event-registration-form__input-messages-item event-registration-form__input-messages-item--invalid'>
                        Please Enter Valid Email
                      </li>
                    )}
                  </ul>
                </div>

                <div className='event-registration-form__item'>
                  <label className='event-registration-form__label' htmlFor='password'>
                    Password:
                  </label>
                  <input
                    className='event-registration-form__input'
                    type='password'
                    id='password'
                    value={password}
                    onChange={passwordChange}
                  />
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
              </>
            );

          default:
            return null;
        }
      })()}

      <SubmitButton />
    </form>
  );
};

export default Form;
