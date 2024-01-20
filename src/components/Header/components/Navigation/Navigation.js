const Navigation = ({ styles }) => {
  return (
    <nav className={styles['header__navigation']}>
      <ul className={styles['header__navigation-list']}>
        <li className={styles['header__navigation-item']}>
          <a href='/#' className={styles['header__navigation-link']}>
            XM Homepage
          </a>
        </li>
        <li className={styles['header__navigation-item']}>
          <a href='/#' className={styles['header__navigation-link']}>
            Support
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
