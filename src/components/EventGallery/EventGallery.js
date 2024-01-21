import './EventGallery.css';
import { useContext } from 'react';
import { MainContext } from '../../contexts/MainContext';
import EventGalleryCarousel from './components/EventGalleryCarousel/EventGalleryCarousel';

const EventGallery = () => {
  const { eventGallerySlidesList } = useContext(MainContext);

  return (
    <section className='event__gallery'>
      <h2 className='event__gallery__title'>Event Gallery</h2>
      <EventGalleryCarousel slides={eventGallerySlidesList} />
    </section>
  );
};

export default EventGallery;
