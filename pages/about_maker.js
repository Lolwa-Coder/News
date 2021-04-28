import styles from '../styles/am.module.css';
import {Toolbar} from '../components/toolbar';
export const about_maker = ({me})=>{
    console.log(me.me.name);
    return(
        <div className="page-container">
            <Toolbar />
           <div className={styles.main}>
               <h1 className={styles.h}>
                   {me.me.name}
               </h1>
               <h2 className={styles.h22}>{me.me.description}</h2>
               <h2 className={styles.h22}>{me.me.position}</h2>
           </div>

        </div>


    )
}
export const getServerSideProps = async pageContext =>{
  const apiResponse = await fetch('https://raw.githubusercontent.com/Lolwa-Coder/Images/main/data.json')
  const me = await apiResponse.json();
  return{
      props:{
          me:me
      }
  }
};

export default about_maker;