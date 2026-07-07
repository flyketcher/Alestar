import '../App.css'
import Phonecall from  '../assets/Phonecall.svg'
import Mail from '../assets/Mail.svg'
import Whatsapp_logo from '../assets/Whatsapp-logo.svg'
function Contacts(){
    return(
        <>
            <section id="contacts">
                <div className="container">
                    <div>
                        <div className="contacts-text">
                            <span>
                                <h2>ВЫ МОЖЕТЕ СПОКОЙНО ЗАНИМАТЬСЯ ДРУГИМИ СТРАТЕГИЧЕСКИМИ ЗАДАЧАМИ БИЗНЕСА, А ЗАБОТУ ОБ ОФОРМЛЕНИИ ВАШЕГО ГРУЗА ДОВЕРЬТЕ ПРОФЕССИОНАЛАМ</h2>
                                <p>Свяжитесь с нами и подробно расскажем об интересующей вас услуге и произведем предварительный расчет</p>
                            </span>
                        </div>
                        <div className="contacts-button">
                            <a href="" className="button-contact">СВЯЗАТЬСЯ</a>
                        </div>
                    </div>
                </div>
                <div className="contacts-background">
                    <div className="container">
                        <div className="contacts-info">
                            <div className="contacts-info-item">
                                <img src={Phonecall} alt="Phonecall.svg"/><br/>
                                <span>ТЕЛЕФОН</span><br/>
                                <a href="">+7 777 777 77 77</a>
                            </div>
                            <div className="contacts-info-item">
                                <img src={Mail} alt="Mail.svg"/><br/>
                                <span>EMAIL</span><br/>
                                <a href="">office@alestar.com</a>
                            </div>
                            <div className="contacts-info-item">
                                <img src={Whatsapp_logo} alt="Whatsapp-logo.svg"/><br/>
                                <span>WHATSAPP</span><br/>
                                <a href="">НАПИСАТЬ</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Contacts