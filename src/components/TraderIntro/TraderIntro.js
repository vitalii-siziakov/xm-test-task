import styles from './TraderIntro.module.css'
import Title from './components/Title/Title'
import TitleDescription from './components/TitleDescription/TitleDescription'
import Description from './components/Description/Description'
import OpenAccount from './components/OpenAccount/OpenAccount'
import DemoAccount from './components/DemoAccount/DemoAccount'
import Terms from './components/Terms/Terms'

const TraderIntro = () => {
  return (
    <section className={styles.trader__intro}>
      <Title />
      <TitleDescription />
      <Description />
      <OpenAccount />
      <DemoAccount />
      <Terms />
    </section>
  )
}

export default TraderIntro
