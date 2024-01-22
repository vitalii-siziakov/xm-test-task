import InputsSwitcher from './components/InputsSwitcher/InputsSwitcher';
import SubmitButton from './components/SubmitButton';

const Form = () => {
  return (
    <form className='event-registration-form'>
      <InputsSwitcher />
      <SubmitButton />
    </form>
  );
};

export default Form;
