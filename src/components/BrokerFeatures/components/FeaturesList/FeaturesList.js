import FeatureItem from '../FeatureItem/FeatureItem';
import FeaturesSeparator from '../FeaturesSeparator/FeaturesSeparator';

const FeaturesList = ({ list }) => {
  return (
    <div className='broker-features__container'>
      <ul className='broker-features__list'>
        {list.map((item) => (
          <FeatureItem item={item} key={item.title} />
        ))}
      </ul>
      <FeaturesSeparator />
    </div>
  );
};

export default FeaturesList;
