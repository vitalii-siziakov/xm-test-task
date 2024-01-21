import prevSlideIcon from '@images/svg/prev-arrow-icon.svg';

const PrevSlideButton = (props) => {
  const { ...restProps } = props;

  return (
    <button className='event-gallery__button event-gallery__button--prev' type='button' {...restProps}>
      <img className='event-gallery__button-img' src={prevSlideIcon} alt='Left Arrow' />
    </button>
  );
};

export default PrevSlideButton;
