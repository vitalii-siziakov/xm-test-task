import FeatureItem from '../FeatureItem/FeatureItem';
import FeaturesSeparator from '../FeaturesSeparator/FeaturesSeparator';

const FeaturesList = ({ styles, list }) => {
  return (
    <div className={styles['broker-features__container']}>
      <ul className={styles['broker-features__list']}>
        {list.map((item) => (
          <FeatureItem styles={styles} item={item} key={item.title} />
        ))}
      </ul>
      <FeaturesSeparator styles={styles} />
    </div>
  );
};

export default FeaturesList;
