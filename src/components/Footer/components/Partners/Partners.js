import styles from './Partners.module.css'
import { useContext } from 'react'
import { MainContext } from '@contexts/MainContext'
import PartnerItem from './components/PartnerItem/PartnerItem'

const Partners = () => {
  const { partnersList } = useContext(MainContext)

  return (
    <section className={styles['partners']}>
      <ul className={styles['partners__list']}>
        {partnersList.map((item) => (
          <PartnerItem styles={styles} item={item} key={item.name} />
        ))}
      </ul>
    </section>
  )
}

export default Partners
