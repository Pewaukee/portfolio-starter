'use client'; // for framer motion
import styles from '../styles/page.module.css'

import Info from './info'
import CCDC from './ccdc'
import Snowboarding from './snowboarding'

const Home: React.FC = () => { 

  return (
    // pass into component prop with custom styles
    <div>
      <Info />

      {/** about me header */}
      <div className={styles.descContainer}>
        <h1>About Me</h1>
      </div>

      {/** define hobbies and more */}
      <Snowboarding />

      {/** events header */}
      <div className={styles.descContainer}>
        <h1>Events</h1>
      </div>
      <CCDC />
    </div>

    // define the accomplishments
  )
}

export default Home;