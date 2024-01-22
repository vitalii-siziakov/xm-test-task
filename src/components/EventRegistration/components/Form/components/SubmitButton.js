import { useContext, useEffect, useState } from 'react';
import { EventRegistrationContext } from '@contexts/EventRegistrationContext';

const SubmitButton = () => {
  const {
    currentRegistrationStep,
    setCurrentRegistrationStep,
    firstRegistrationStepProgress,
    secondRegistrationStepProgress,
    showInConsoleEventRegistrationData,
    setIsRegistrationCompleted,
  } = useContext(EventRegistrationContext);
  const [submitButtonText, setSubmitButtonText] = useState('');

  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true);

  const submitHandler = (evt) => {
    evt.preventDefault();
    switch (currentRegistrationStep) {
      case 1:
        setCurrentRegistrationStep(2);
        break;

      case 2:
        showInConsoleEventRegistrationData();
        setIsRegistrationCompleted(true);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    switch (currentRegistrationStep) {
      case 1:
        setSubmitButtonText('Continue');
        firstRegistrationStepProgress === 50 ? setIsSubmitButtonDisabled(false) : setIsSubmitButtonDisabled(true);
        break;

      case 2:
        setSubmitButtonText('Register now');
        secondRegistrationStepProgress === 50 ? setIsSubmitButtonDisabled(false) : setIsSubmitButtonDisabled(true);
        break;

      default:
        break;
    }

    if (currentRegistrationStep === 1) {
      setSubmitButtonText('Continue');
    }
  }, [currentRegistrationStep, firstRegistrationStepProgress, secondRegistrationStepProgress]);

  return (
    <button
      className='event-registration-form__submit-button'
      disabled={isSubmitButtonDisabled}
      onClick={(evt) => {
        submitHandler(evt);
      }}
    >
      {submitButtonText}
    </button>
  );
};

export default SubmitButton;
