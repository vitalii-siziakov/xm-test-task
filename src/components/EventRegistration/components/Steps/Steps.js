import { useContext, useEffect } from 'react';
import { EventRegistrationContext } from '@contexts/EventRegistrationContext';

const Steps = () => {
  const {
    isFullNameValid,
    isDateOfBirthValid,
    isEmailValid,
    isPasswordValid,
    currentRegistrationStep,
    firstRegistrationStepProgress,
    setFirstRegistrationStepProgress,
    secondRegistrationStepProgress,
    setSecondRegistrationStepProgress,
  } = useContext(EventRegistrationContext);

  useEffect(() => {
    let firstStepProgress = 0;
    if (isFullNameValid) {
      firstStepProgress += 25;
    }
    if (isDateOfBirthValid) {
      firstStepProgress += 25;
    }
    setFirstRegistrationStepProgress(firstStepProgress);

    let secondStepProgress = 0;
    if (isEmailValid) {
      secondStepProgress += 25;
    }
    if (isPasswordValid) {
      secondStepProgress += 25;
    }
    setSecondRegistrationStepProgress(secondStepProgress);
  }, [
    isFullNameValid,
    isDateOfBirthValid,
    isEmailValid,
    isPasswordValid,
    setFirstRegistrationStepProgress,
    setSecondRegistrationStepProgress,
  ]);

  return (
    <div className='event-registration-steps'>
      <div className='event-registration-step'>
        <span
          className={`event-registration-step__number ${
            currentRegistrationStep >= 1 && 'event-registration-step__number--active'
          }`}
        >
          1
        </span>
        <p className='event-registration-step__description'>Step 1</p>
        <progress
          className='event-registration-step__progress'
          max='100'
          value={currentRegistrationStep > 1 ? 100 : firstRegistrationStepProgress}
        />
      </div>

      <div className='event-registration-step'>
        <span
          className={`event-registration-step__number ${
            currentRegistrationStep >= 2 && 'event-registration-step__number--active'
          }`}
        >
          2
        </span>
        <p className='event-registration-step__description'>Step 2</p>
        <progress
          className='event-registration-step__progress'
          max='100'
          value={currentRegistrationStep > 2 ? 100 : secondRegistrationStepProgress}
        />
      </div>
    </div>
  );
};

export default Steps;
