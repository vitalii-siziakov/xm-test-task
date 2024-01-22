import { createContext, useState } from 'react';

export const EventRegistrationContext = createContext(null);

export const EventRegistrationContextProvider = ({ children }) => {
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

  return (
    <EventRegistrationContext.Provider
      value={{
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
      }}
    >
      {children}
    </EventRegistrationContext.Provider>
  );
};
