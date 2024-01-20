import styles from './Socials.module.css'
import { useContext } from 'react'
import { MainContext } from '@contexts/MainContext'
import SocialItem from './components/SocialItem/SocialItem'

const Socials = () => {
  const { socialsList } = useContext(MainContext)

  return (
    <section className={styles['socials']}>
      <h2 className={styles['socials__title']}>Follow us on</h2>
      <ul className={styles['socials__list']}>
        {socialsList.map((item) => (
          <SocialItem styles={styles} item={item} key={item.name} />
        ))}
      </ul>
    </section>
  )
}

export default Socials
