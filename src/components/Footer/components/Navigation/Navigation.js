import styles from './Navigation.module.css'
import { useContext } from 'react'
import { MainContext } from '@contexts/MainContext'
import NavigationItem from './components/NavigationItem/NavigationItem'

const Navigation = () => {
  const { footerNavigationList } = useContext(MainContext)

  return (
    <nav className={styles['footer__navigation']}>
      <ul className={styles['footer__navigation-list']}>
        {footerNavigationList.map((item) => (
          <NavigationItem styles={styles} item={item} key={item.name} />
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
