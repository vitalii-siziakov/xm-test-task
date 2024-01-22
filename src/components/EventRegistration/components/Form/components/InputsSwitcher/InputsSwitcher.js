import FullNameInput from '../Inputs/FullNameInput';
import DateOfBirthInput from '../Inputs/DateOfBirthInput';
import EmailInput from '../Inputs/EmailInput';
import PasswordInput from '../Inputs/PasswordInput';

const InputsSwitcher = () => {
  return (
    <>
      <FullNameInput />
      <DateOfBirthInput />
      <EmailInput />
      <PasswordInput />
    </>
  );
};

export default InputsSwitcher;
