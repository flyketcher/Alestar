import '../App.css'
import Alestar from '../assets/алестар.png'
import { useState,useEffect } from 'react'
function Header(){
    const [headerState,setHeaderState] = useState('');
    const [windowScroll,setWindowScroll] = useState(null)
    window.addEventListener('scroll',()=>{
        setWindowScroll(window.scrollY)
        if(windowScroll > 250)
            setHeaderState(' visible');
        else if(windowScroll < 150)
            setHeaderState('')
        else
            setHeaderState(' hidden')
    })
    return(
        <>
            <header>
                <div className="container">
                    <div className="header-main">
                        <div className="logo">
                            <img src={Alestar} alt="алестар.png" height="100%" width="100%"/>
                        </div>
                        <div className="call_number">
                            <span className="action_name">ПОЗВОНИТЬ</span>
                            <a href="#" className="action_info">+7 777 777-77-77</a>
                        </div>
                        <div className="send_email">
                            <span className="action_name">ОТПРАВИТЬ ПИСЬМО</span>
                            <a href="#" className="action_info">office@alestar.com</a>
                        </div>
                        <div className="send_Whatsapp">
                            <span className="action_name">НАПИСАТЬ В WHATSAPP</span>
                            <a href="#" className="action_info">WHATSAPP</a>
                        </div>
                    </div>
                </div>
                <div className="border-line"/>
                <div className={`header-menu${headerState}`}>
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
        </>
    )
}
export default Header