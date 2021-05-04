import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Toolbar} from '../components/toolbar';
export default function Home() {
  return (
    <div className="page-container">
      <Toolbar />
      <div className={styles.main}>
        <h1>
          Check Feed
        </h1>
        <h4>one step away from media literacy
          <br /></h4>
      </div>
    </div>
  )
}
