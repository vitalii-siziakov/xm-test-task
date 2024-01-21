import './EventGalleryCarousel.css';
import useEmblaCarousel from 'embla-carousel-react';
import { usePrevNextButtons } from '@hooks/usePrevNextButtons';
import PrevSlideButton from './components/PrevSlideButton';
import NextSlideButton from './components/NextSlideButton';
import CarouselSlide from './components/CarouselSlide';

const EventGalleryCarousel = ({ slides }) => {
  const options = { dragFree: true, containScroll: 'trimSnaps' };
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  return (
    <div className='event-gallery-carousel__wrapper'>
      <div className='event-gallery-carousel__button-wrapper event-gallery-carousel__button-wrapper--prev'>
        <PrevSlideButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      </div>
      <div className='event-gallery-carousel'>
        <div className='event-gallery-carousel__viewport' ref={emblaRef}>
          <div className='event-gallery-carousel__container'>
            {slides.map((slide, index) => (
              <CarouselSlide slide={slide} key={index} />
            ))}
          </div>
        </div>
      </div>
      <div className='event-gallery-carousel__button-wrapper event-gallery-carousel__button-wrapper--next'>
        <NextSlideButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </div>
  );
};

export default EventGalleryCarousel;
