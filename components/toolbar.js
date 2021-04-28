import {useRouter} from 'next/router';
import styles from '../styles/Toolbar.module.css';
export const Toolbar =() =>{
    const router =useRouter();
    return(
        <div className={styles.main}>
<div onClick={()=>router.push('/')}>Home</div>
<div onClick={()=>router.push('/news')}>Feed</div>
<div onClick={()=>router.push('/about_maker')}>ME</div>
<div onClick={()=>window.location.href='https://github.com/Lolwa-Coder'}>Github</div>

        </div>
    )

}