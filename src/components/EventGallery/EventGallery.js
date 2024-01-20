import styles from './EventGallery.module.css';
import EventGalleryCarousel from './components/EventGalleryCarousel/EventGalleryCarousel';

const EventGallery = () => {
  return (
    <section className={styles.event__gallery}>
      <h2 className={styles.event__gallery__title}>Event Gallery</h2>
      <EventGalleryCarousel />
    </section>
  );
};

export default EventGallery;
