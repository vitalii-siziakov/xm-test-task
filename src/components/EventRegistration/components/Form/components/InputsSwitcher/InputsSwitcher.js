import { useContext } from 'react';
import { EventRegistrationContext } from '@contexts/EventRegistrationContext';

import FullNameInput from '../Inputs/FullNameInput';
import DateOfBirthInput from '../Inputs/DateOfBirthInput';
import EmailInput from '../Inputs/EmailInput';
import PasswordInput from '../Inputs/PasswordInput';

const InputsSwitcher = () => {
  const { currentRegistrationStep } = useContext(EventRegistrationContext);

  return (
    <>
      {(() => {
        switch (currentRegistrationStep) {
          case 1:
            return (
              <>
                <FullNameInput />
                <DateOfBirthInput />
              </>
            );

          case 2:
            return (
              <>
                <EmailInput />
                <PasswordInput />
              </>
            );

          default:
            return null;
        }
      })()}
    </>
  );
};

export default InputsSwitcher;
