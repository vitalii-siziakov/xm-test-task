const TraderBenefitsItem = ({ item, index }) => {
  const { icon, alt, title, description } = item;
  const additionalItemClass =
    index === 0 ? 'trader-benefits__item--vertical' : index === 1 ? 'trader-benefits__item--horizontal' : '';
  const additionalImgClass =
    index === 0 ? 'trader-benefits__item--vertical-img' : index === 1 ? 'trader-benefits__item--horizontal-img' : '';

  return (
    <li className={`trader-benefits__item ${additionalItemClass}`}>
      <div className='trader-benefits__item-info'>
        <h3 className='trader-benefits__item-title'>{title}</h3>
        <p className='trader-benefits__item-description'>{description}</p>
      </div>
      <img src={icon} alt={alt} className={`trader-benefits__item-img ${additionalImgClass}`} />
    </li>
  );
};

export default TraderBenefitsItem;
