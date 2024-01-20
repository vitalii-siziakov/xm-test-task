const NavigationItem = ({ styles, item }) => {
  const { name, link } = item

  return (
    <li className={styles['footer__navigation-item']}>
      <a href={link} className={styles['footer__navigation-link']}>
        {name}
      </a>
    </li>
  )
}

export default NavigationItem
