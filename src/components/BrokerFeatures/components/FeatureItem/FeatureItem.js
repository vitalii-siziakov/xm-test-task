const FeatureItem = ({ item }) => {
  const { title, description, image, alt } = item;

  return (
    <li className='broker-feature__item'>
      <img className='broker-feature__img' src={image} alt={alt} />
      <h3 className='broker-feature__title'>{title}</h3>
      <p className='broker-feature__description'>{description}</p>
    </li>
  );
};

export default FeatureItem;
