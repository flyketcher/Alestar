import { useState } from 'react';
import styles from './about_services.module.css'
function Service({title,children}){
    const [activeState,setActiveState] = useState(false);
    return(
        <>
            <button className={styles.button} onClick={()=>setActiveState(!activeState)}>{title}</button>
            <div className={`${styles.description} ${activeState?styles.active:styles.description}`}>
                {children}
            </div>
        </>
    )
}
export default Service