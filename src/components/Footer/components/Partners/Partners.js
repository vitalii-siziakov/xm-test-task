import './Partners.css';
import { useContext } from 'react';
import { MainContext } from '@contexts/MainContext';
import PartnerItem from './components/PartnerItem/PartnerItem';

const Partners = () => {
  const { partnersList } = useContext(MainContext);

  return (
    <section className='partners'>
      <ul className='partners__list'>
        {partnersList.map((item) => (
          <PartnerItem item={item} key={item.name} />
        ))}
      </ul>
    </section>
  );
};

export default Partners;
