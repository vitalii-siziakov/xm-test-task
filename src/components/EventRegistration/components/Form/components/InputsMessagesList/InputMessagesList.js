import InputMessage from './InputMessage';

const InputMessagesList = ({ messagesList }) => {
  return (
    <ul className='event-registration-form__input-messages-list'>
      {messagesList.map((message) => (
        <InputMessage message={message} key={message.text} />
      ))}
    </ul>
  );
};

export default InputMessagesList;
