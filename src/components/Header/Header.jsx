import styles from './Header.module.css'
import Alestar from '../../assets/алестар.png'
import { useState,useEffect } from 'react'
function Header(){
    const [headerState,setHeaderState] = useState('');
    useEffect(()=>{
        function handleScroll(){
            if(window.scrollY > 250)
                setHeaderState(styles.visible);
            else if(window.scrollY < 150)
                setHeaderState('')
            else
                setHeaderState(styles.hidden)
        }
        window.addEventListener('scroll',handleScroll)
        return()=>{
            window.removeEventListener('scroll',handleScroll)
        }
    },[])
    return(
        <header>
            <div className="container">
                <div className={styles.main}>
                    <div className={styles.logo}>
                        <img src={Alestar} alt="алестар.png" height="100%" width="100%"/>
                    </div>
                    <div className="call_number">
                        <span className={styles.name}>ПОЗВОНИТЬ</span>
                        <a href="#" className={styles.info}>+7 777 777-77-77</a>
                        </div>
                    <div className={styles.email}>
                        <span className={styles.name}>ОТПРАВИТЬ ПИСЬМО</span>
                        <a href="#" className={styles.info}>office@alestar.com</a>
                    </div>
                    <div className="send_Whatsapp">
                        <span className={styles.name}>НАПИСАТЬ В WHATSAPP</span>
                        <a href="#" className={styles.info}>WHATSAPP</a>
                    </div>
                </div>
            </div>
            <div className={styles.line}/>
            <div className={`${styles.menu} ${headerState}`}>
                <div className="container">
                    <nav>
                        <ul>
                            <li><a href="#about_us">О НАС</a></li>
                            <li><a href="#services">Услуги</a></li>
                            <li><a href="#contacts">Контакты</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
export default Header