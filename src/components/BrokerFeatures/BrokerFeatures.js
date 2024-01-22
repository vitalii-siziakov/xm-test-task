import './BrokerFeatures.css';
import { useContext } from 'react';
import { MainContext } from '../../contexts/MainContext';
import Introduction from './components/Introduction/Introduction';
import FeaturesList from './components/FeaturesList/FeaturesList';

const BrokerFeatures = () => {
  const { brokerFeaturesList } = useContext(MainContext);

  return (
    <section className='broker-features'>
      <div className='container'>
        <div className='broker-features__inner'>
          <Introduction />
          <FeaturesList list={brokerFeaturesList} />
        </div>
      </div>
    </section>
  );
};

export default BrokerFeatures;
