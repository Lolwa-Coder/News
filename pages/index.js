import Head from 'next/head'
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'
import styles from '../styles/Home.module.css'
import {Toolbar} from '../components/toolbar';
import { Canvas } from "@react-three/fiber";
//import { motion } from 'framer-motion';
export default function Home(router) {
  return (

    <div className="page-container">
    <AnimatePresence>
    <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" exit="pageExit" variants={{
      pageInitial: {
        opacity: 0
      },
      pageAnimate: {
        opacity: 1
      },
      pageExit: {
        backgroundColor: 'white',
        filter: [
          'hue-rotate(0) sepia(100%)',
          'hue-rotate(360deg) sepia(0%)',
          'hue-rotate(45deg) sepia(100%)',
          'hue-rotate(0) contrast(100%)',],
        opacity: 0
      }
    }}>  
     

      <div className={styles.main}>
        <h1>
          KNEWS<br></br>Check feed
        </h1>
        
        <h4>one step away from media literacy
          <br /></h4>
      </div>
     </motion.div></AnimatePresence>
    </div>
  )
}
