const SocialItem = ({ styles, item }) => {
  const { name, link, image, alt } = item

  return (
    <li className={styles['socials__item']}>
      <h3 className={`${styles['socials__name']} visually-hidden`}>{name}</h3>
      <a href={link} target='_blank' rel='noopener noreferrer' className={styles['socials__link']}>
        <img src={image} alt={alt} className={styles['socials__icon']} />
      </a>
    </li>
  )
}

export default SocialItem
