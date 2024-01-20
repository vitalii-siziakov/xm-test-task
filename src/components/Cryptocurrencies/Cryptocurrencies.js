import './Cryptocurrencies.css';
import { useContext } from 'react';
import { MainContext } from '../../contexts/MainContext';
import CryptocurrencyCard from './components/CryptocurrencyCard/CryptocurrencyCard';

const Cryptocurrencies = () => {
  const { cryptocurrenciesList } = useContext(MainContext);

  return (
    <section className='cryptocurrencies'>
      {cryptocurrenciesList.map((item, index) => (
        <CryptocurrencyCard item={item} index={index} key={item.abbreviation} />
      ))}
    </section>
  );
};

export default Cryptocurrencies;
