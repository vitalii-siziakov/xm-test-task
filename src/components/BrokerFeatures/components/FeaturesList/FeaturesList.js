import FeatureItem from '../FeatureItem/FeatureItem';

const FeaturesList = ({ styles, list }) => {
  return (
    <ul className={styles['broker-features__list']}>
      {list.map((item) => (
        <FeatureItem styles={styles} item={item} key={item.title} />
      ))}
    </ul>
  );
};

export default FeaturesList;
