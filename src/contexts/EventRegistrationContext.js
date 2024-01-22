import { createContext, useState, useEffect } from 'react';
import dayjs from 'dayjs';

export const EventRegistrationContext = createContext(null);

export const EventRegistrationContextProvider = ({ children }) => {
  const [isRegistrationCompleted, setIsRegistrationCompleted] = useState(false);
  const [currentRegistrationStep, setCurrentRegistrationStep] = useState(1);
  const [firstRegistrationStepProgress, setFirstRegistrationStepProgress] = useState(0);
  const [secondRegistrationStepProgress, setSecondRegistrationStepProgress] = useState(0);

  const [fullName, setFullName] = useState('');
  const [isFullNameValid, setIsFullNameValid] = useState('');

  const [dateOfBirth, setDateOfBirth] = useState('');
  const [isDateOfBirthValid, setIsDateOfBirthValid] = useState('');

  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState('');

  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState('');

  const showInConsoleEventRegistrationData = () => {
    const registrationData = {
      fullName: fullName.trim(),
      dateOfBirth: dayjs(dateOfBirth).format('DD/MM/YY'),
      email: email.trim(),
      password,
    };
    console.log(registrationData);
  };

  const clearEventRegistrationStates = () => {
    setCurrentRegistrationStep(1);
    setFirstRegistrationStepProgress(0);
    setSecondRegistrationStepProgress(0);
    setIsFullNameValid('');
    setIsDateOfBirthValid('');
    setIsEmailValid('');
    setIsPasswordValid('');

    setFullName('');
    setDateOfBirth('');
    setEmail('');
    setPassword('');
  };

  useEffect(() => {
    isRegistrationCompleted && clearEventRegistrationStates();
  }, [isRegistrationCompleted]);

  return (
    <EventRegistrationContext.Provider
      value={{
        isRegistrationCompleted,
        setIsRegistrationCompleted,

        currentRegistrationStep,
        setCurrentRegistrationStep,
        firstRegistrationStepProgress,
        setFirstRegistrationStepProgress,
        secondRegistrationStepProgress,
        setSecondRegistrationStepProgress,
        fullName,
        setFullName,
        isFullNameValid,
        setIsFullNameValid,

        dateOfBirth,
        setDateOfBirth,
        isDateOfBirthValid,
        setIsDateOfBirthValid,

        email,
        setEmail,
        isEmailValid,
        setIsEmailValid,

        password,
        setPassword,
        isPasswordValid,
        setIsPasswordValid,

        showInConsoleEventRegistrationData,
        clearEventRegistrationStates,
      }}
    >
      {children}
    </EventRegistrationContext.Provider>
  );
};
