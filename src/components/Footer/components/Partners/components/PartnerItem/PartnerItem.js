const PartnerItem = ({ styles, item }) => {
  const { name, image, alt } = item

  return (
    <li className='partners__item'>
      <h3 className='partners__name visually-hidden'>{name}</h3>
      <img className='partners__logo' src={image} alt={alt} />
    </li>
  )
}

export default PartnerItem
