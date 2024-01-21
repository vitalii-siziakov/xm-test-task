import './EventGalleryCarousel.css';
import useEmblaCarousel from 'embla-carousel-react';
import { usePrevNextButtons } from '@hooks/usePrevNextButtons';
import PrevSlideButton from './components/PrevSlideButton';
import NextSlideButton from './components/NextSlideButton';

import plugImage from '@images/svg/grey-square.svg';

const EventGalleryCarousel = () => {
  const options = { dragFree: true, containScroll: 'trimSnaps' };
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  return (
    <div className='event-gallery__wrapper'>
      <div className='event-gallery__button-wrapper event-gallery__button-wrapper--prev'>
        <PrevSlideButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      </div>
      <div className='event-gallery'>
        <div className='event-gallery__viewport' ref={emblaRef}>
          <div className='event-gallery__container'>
            <div className='event-gallery__slide'>
              <img className='event-gallery__slide-img' src={plugImage} alt='Your alt text' />
            </div>
            <div className='event-gallery__slide'>
              <img className='event-gallery__slide-img' src={plugImage} alt='Your alt text' />
            </div>
            <div className='event-gallery__slide'>
              <img className='event-gallery__slide-img' src={plugImage} alt='Your alt text' />
            </div>
            <div className='event-gallery__slide'>
              <img className='event-gallery__slide-img' src={plugImage} alt='Your alt text' />
            </div>
            <div className='event-gallery__slide'>
              <img className='event-gallery__slide-img' src={plugImage} alt='Your alt text' />
            </div>
            <div className='event-gallery__slide'>
              <img className='event-gallery__slide-img' src={plugImage} alt='Your alt text' />
            </div>
          </div>
        </div>
      </div>
      <div className='event-gallery__button-wrapper event-gallery__button-wrapper--next'>
        <NextSlideButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </div>
  );
};

export default EventGalleryCarousel;
