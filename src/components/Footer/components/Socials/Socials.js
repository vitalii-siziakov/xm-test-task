import './Socials.css'
import { useContext } from 'react'
import { MainContext } from '@contexts/MainContext'
import SocialItem from './components/SocialItem/SocialItem'

const Socials = () => {
  const { socialsList } = useContext(MainContext)

  return (
    <section className='socials'>
      <h2 className='socials__title'>Follow us on</h2>
      <ul className='socials__list'>
        {socialsList.map((item) => (
          <SocialItem item={item} key={item.name} />
        ))}
      </ul>
    </section>
  )
}

export default Socials
