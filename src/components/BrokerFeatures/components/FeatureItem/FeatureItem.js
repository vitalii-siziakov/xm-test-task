const FeatureItem = ({ styles, item }) => {
  const { title, description, image, alt } = item;

  return (
    <div className={styles['broker-feature__item']}>
      <img className={styles['broker-feature__img']} src={image} alt={alt} />
      <h3 className={styles['broker-feature__title']}>{title}</h3>
      <p className={styles['broker-feature__description']}>{description}</p>
    </div>
  );
};

export default FeatureItem;
