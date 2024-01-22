import nextSlideIcon from '@images/svg/next-arrow-icon.svg';

const NextSlideButton = (props) => {
  const { ...restProps } = props;

  return (
    <button className='event-gallery__button event-gallery__button--next' type='button' {...restProps}>
      <img className='event-gallery__button-img' src={nextSlideIcon} alt='Right Arrow' />
    </button>
  );
};

export default NextSlideButton;
