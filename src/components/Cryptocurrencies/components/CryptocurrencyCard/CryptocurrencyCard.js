const CryptocurrencyCard = ({ item, index }) => {
  const { icon, abbreviation, fullname, priceUSD, priceChangePercent24H } = item;

  return (
    <>
      <div className='cryptocurrency__card'>
        <div className='cryptocurrency__introduction'>
          <img className='cryptocurrency__img' src={icon} alt={`${fullname} Icon`} />
          <div className='cryptocurrency__name'>
            <p className='cryptocurrency__abbreviation'>{abbreviation}</p>
            <h3 className='cryptocurrency__fullname'>{fullname}</h3>
          </div>
        </div>
        <div className='cryptocurrency__stats'>
          <p className='cryptocurrency__price'>{priceUSD}</p>
          <p className='cryptocurrency__price__change'>{priceChangePercent24H}</p>
        </div>
      </div>
      {(index + 1) % 3 === 0 && <div className='cryptocurrencies__line-break' />}
    </>
  );
};

export default CryptocurrencyCard;
