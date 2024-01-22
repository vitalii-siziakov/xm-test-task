import './TraderBenefits.css';
import { useContext } from 'react';
import { MainContext } from '../../contexts/MainContext';
import Introduction from './components/Introduction/Introduction';
import TraderBenefitsList from './components/TraderBenefitsList/TraderBenefitsList';

const TraderBenefits = () => {
  const { traderBenefitsList } = useContext(MainContext);

  return (
    <section className='trader-benefits'>
      <Introduction />
      <TraderBenefitsList list={traderBenefitsList} />
    </section>
  );
};

export default TraderBenefits;
