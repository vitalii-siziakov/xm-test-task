import TraderBenefitsItem from '../TraderBenefitsItem/TraderBenefitsItem';

const TraderBenefitsList = ({ list }) => {
  return (
    <ul className='trader-benefits__list'>
      {list.map((item) => (
        <TraderBenefitsItem item={item} key={item.title} />
      ))}
    </ul>
  );
};

export default TraderBenefitsList;
