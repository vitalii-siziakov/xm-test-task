import { useContext } from 'react';
import { MainContext } from '../../../../contexts/MainContext';

const CryptocurrencyCard = ({ item, index }) => {
  const { cryptocurrenciesPresets } = useContext(MainContext);
  const { id, symbol, name, price_usd, percent_change_24h } = item;

  return (
    <>
      <div className='cryptocurrency__card'>
        <div className='cryptocurrency__introduction'>
          <img className='cryptocurrency__img' src={cryptocurrenciesPresets?.[id]?.['icon']} alt={`${name} Icon`} />
          <div className='cryptocurrency__name'>
            <p className='cryptocurrency__abbreviation'>{symbol}</p>
            <h3 className='cryptocurrency__fullname'>{name}</h3>
          </div>
        </div>
        <div className='cryptocurrency__stats'>
          <p className='cryptocurrency__price'>{Number(price_usd).toLocaleString('en-US')}</p>
          <p className='cryptocurrency__price__change'>{Number(percent_change_24h).toLocaleString('en-US')}</p>
        </div>
      </div>
      {(index + 1) % 3 === 0 && <div className='cryptocurrencies__line-break' />}
    </>
  );
};

export default CryptocurrencyCard;
