import '../styles/globals.css'
import { Toolbar } from '../components/toolbar';
import {ToolbarNews} from '../components/toolbarnews';

function MyApp({ Component, pageProps }) {
  return <><Toolbar /> <ToolbarNews /><Component {...pageProps} />
  </>
}

export default MyApp
