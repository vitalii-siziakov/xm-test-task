import successCheckIcon from '@images/svg/circle-check-mark.svg';
import successDescriptionMark from '@images/svg/triangle-mark.svg';

const SuccessMessage = () => {
  return (
    <div className='event-registration__success-message__container'>
      <div className='event-registration__success-message'>
        <div className='event-registration__success-message__title__block'>
          <img className='event-registration__success-message-img' src={successCheckIcon} alt='Circle with a check mark' />
          <p className='event-registration__success-message__title'>Registration Successful</p>
        </div>
        <div className='event-registration__success-message__description__block'>
          <img className='event-registration__success-message__description-mark' src={successDescriptionMark} alt='Triangle mark' />
          <p className='event-registration__success-message__description'>
            Thank you for registering for our event with XM. You will receive an email shortly with confirmation of your
            registration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage;
