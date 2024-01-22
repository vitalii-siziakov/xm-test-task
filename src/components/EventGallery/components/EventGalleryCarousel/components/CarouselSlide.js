const CarouselSlide = ({ slide }) => {
  const { image, alt } = slide;

  return (
    <div className='event-gallery-carousel__slide'>
      <img className='event-gallery-carousel__slide-img' src={image} alt={alt} />
    </div>
  );
};

export default CarouselSlide;
