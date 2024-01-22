import { createContext, useState, useEffect } from 'react';

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

        clearEventRegistrationStates,
      }}
    >
      {children}
    </EventRegistrationContext.Provider>
  );
};
