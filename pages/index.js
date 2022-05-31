import Head from 'next/head'
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'
import styles from '../styles/Home.module.css'
import {Toolbar} from '../components/toolbar';
import { Canvas } from "@react-three/fiber";
//import { motion } from 'framer-motion';
export default function Home(router) {
  return (

    <div className="page-container">
    
     

      <div className={styles.main}>
        <h1>
          KNEWS<br></br>Check feed
        </h1>
        
        <h4>one step away from media literacy
          <br /></h4>
      </div>
     
    </div>
  )
}
