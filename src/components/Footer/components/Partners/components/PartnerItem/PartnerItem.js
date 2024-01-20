const PartnerItem = ({ styles, item }) => {
  const { name, image, alt } = item

  return (
    <li className={styles['partners__item']}>
      <h3 className={`${styles['partners__name']} visually-hidden`}>{name}</h3>
      <img className={styles['partners__logo']} src={image} alt={alt} />
    </li>
  )
}

export default PartnerItem
