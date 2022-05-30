import '../styles/globals.css'
import { Toolbar } from '../components/toolbar';
import {ToolbarNews} from '../components/toolbarnews';
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'

function MyApp({ Component, pageProps, router }) {
  return <><Toolbar /> <ToolbarNews />
 <AnimatePresence>
    <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" exit="pageExit" variants={{
      pageInitial: {
        opacity: 0
      },
      pageAnimate: {
        opacity: 1
      },
      pageExit: {
        
        filter: [
          'hue-rotate(0) sepia(100%)',
          'hue-rotate(360deg) sepia(0%)',
          'hue-rotate(45deg) sepia(100%)',
          'hue-rotate(0) contrast(100%)',],
        opacity: 0
      }
    }}>
  <Component {...pageProps} /></motion.div></AnimatePresence>
  </>
}

export default MyApp
