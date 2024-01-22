import { useContext } from 'react';
import { MainContext } from '@contexts/MainContext';
import { ReactComponent as PositiveChangeIcon } from '@images/svg/positive-change-icon.svg';
import { ReactComponent as NegativeChangeIcon } from '@images/svg/negative-change-icon.svg';

const CryptocurrencyCard = ({ item, index }) => {
  const { cryptocurrenciesPresets } = useContext(MainContext);
  const { id, symbol, name, price_usd, percent_change_24h } = item;

  let percentChangeSymbol = <></>;
  let priceChangeAdditionalClass = '';
  let percentChange24H = 0;

  if (percent_change_24h > 0) {
    priceChangeAdditionalClass = 'cryptocurrency__price__change--positive';
    percentChangeSymbol = <PositiveChangeIcon />;
    percentChange24H = percent_change_24h;
  }

  if (percent_change_24h < 0) {
    priceChangeAdditionalClass = 'cryptocurrency__price__change--negative';
    percentChangeSymbol = <NegativeChangeIcon />;
    percentChange24H = -percent_change_24h;
  }

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
          <p className='cryptocurrency__price'>
            <span className='cryptocurrency__price__currency-symbol'>$</span>
            {Number(price_usd).toLocaleString('en-US')}
          </p>
          <p className={`cryptocurrency__price__change ${priceChangeAdditionalClass}`}>
            <span className='cryptocurrency__price__change-symbol'>{percentChangeSymbol}</span>
            {Number(percentChange24H).toLocaleString('en-US')}
          </p>
        </div>
      </div>
      {(index + 1) % 3 === 0 && <div className='cryptocurrencies__line-break' />}
    </>
  );
};

export default CryptocurrencyCard;
