const NavigationItem = ({ item }) => {
  const { name, link } = item

  return (
    <li className='footer__navigation-item'>
      <a href={link} className='footer__navigation-link'>
        {name}
      </a>
    </li>
  )
}

export default NavigationItem
