import {useRouter} from 'next/router';
import styles from '../styles/ToolbarNews.module.css';
export const ToolbarNews =() =>{
    const router =useRouter();
    return(
        <div className={styles.main}>
<div onClick={()=>router.push('/business')}>Business</div>
<div onClick={()=>router.push('/entertainment')}>Entertainment</div>
<div onClick={()=>router.push('/health')}>health</div>
<div onClick={()=>router.push('/science')}>Science</div>


        </div>
    )

}