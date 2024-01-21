const TraderBenefitsItem = ({ item }) => {
  const { icon, alt, title, description } = item;

  return (
    <li className='trader-benefits__item'>
      <div className='trader-benefits__item-info'>
        <h3 className='trader-benefits__item-title'>{title}</h3>
        <p className='trader-benefits__item-description'>{description}</p>
      </div>
      <img src={icon} alt={alt} className='trader-benefits__item-img' />
    </li>
  );
};

export default TraderBenefitsItem;
