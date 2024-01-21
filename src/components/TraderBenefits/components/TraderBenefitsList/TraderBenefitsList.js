import TraderBenefitsItem from '../TraderBenefitsItem/TraderBenefitsItem';

const TraderBenefitsList = ({ list }) => {
  return (
    <ul className='trader-benefits__list'>
      {list.map((item, index) => (
        <TraderBenefitsItem item={item} index={index} key={item.title} />
      ))}
    </ul>
  );
};

export default TraderBenefitsList;
