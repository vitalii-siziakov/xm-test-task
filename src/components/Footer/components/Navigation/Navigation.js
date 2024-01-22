import './Navigation.css'
import { useContext } from 'react'
import { MainContext } from '@contexts/MainContext'
import NavigationItem from './components/NavigationItem/NavigationItem'

const Navigation = () => {
  const { footerNavigationList } = useContext(MainContext)

  return (
    <nav className='footer__navigation'>
      <ul className='footer__navigation-list'>
        {footerNavigationList.map((item) => (
          <NavigationItem  item={item} key={item.name} />
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
