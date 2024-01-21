import styles from './BrokerFeatures.module.css';
import { useContext } from 'react';
import { MainContext } from '../../contexts/MainContext';
import Introduction from './components/Introduction/Introduction';
import FeaturesList from './components/FeaturesList/FeaturesList';
import FeaturesSeparator from './components/FeaturesSeparator/FeaturesSeparator';

const BrokerFeatures = () => {
  const { brokerFeaturesList } = useContext(MainContext);

  return (
    <section className={styles['broker-features']}>
      <div className={styles['broker-features__inner']}>
        <Introduction styles={styles} />
        <FeaturesList styles={styles} list={brokerFeaturesList} />
      </div>
    </section>
  );
};

export default BrokerFeatures;
