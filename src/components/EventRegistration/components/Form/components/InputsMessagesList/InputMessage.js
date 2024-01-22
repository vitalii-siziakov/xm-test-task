const InputMessage = ({ message }) => {
  const { text } = message;
  let modifierClass = '';
  if (message.hasOwnProperty('isValid')) {
    message.isValid
      ? (modifierClass = 'event-registration-form__input-messages-item--valid')
      : (modifierClass = 'event-registration-form__input-messages-item--invalid');
  }

  return <li className={`event-registration-form__input-messages-item ${modifierClass}`}>{text}</li>;
};

export default InputMessage;
