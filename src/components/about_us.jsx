import '../App.css'
import Car from  '../assets/Car.svg'
import Tick from '../assets/Tick.svg'
import cargoCar from '../assets/Cargo car.svg'
import Head from '../assets/Head.svg'
import threeCars from '../assets/three_cars.png'
function About_us(){
    return(
        <>
            <section id="about_us">
                <div className="container">
                    <div className="about_us-container">
                        <div className="about_us-info">
                            <h6>О НАС</h6>
                            <h1>КОМПАНИЯ ООО“АЛЕСТАР”</h1>
                            <p>Осуществляет услуги таможенного оформления, сертификации и транспортировки грузов, а также ведения внешнеэкономической деятельности.</p>
                            <div className="about_us-adv">
                                <div className="about_us-adv-img">
                                    <img src={Car} alt="Car.svg" width="100%" height="100%" />
                                </div>
                                <p>Мы ценим каждого клиента и предлагаем индивидуальные решения, которые соответствуют вашим потребностям и бюджету. Независимо от того, покупаете ли вы автомобиль для личного пользования или для бизнеса, мы обеспечим вам безупречный сервис.</p>
                            </div>
                            <div className="about_us-adv">
                                <div className="about_us-adv-img">
                                    <img src={Tick} alt="Car.svg" width="100%" height="100%" />
                                </div>
                                <p>В основе наших принципов лежит комплексный подход к решению ваших задач, клиентоориентированность, профессионализм, полная прозрачность отношений с партнерами.</p>
                            </div>
                            <div className="about_us-adv">
                                <div className="about_us-adv-img">
                                    <img src={cargoCar} alt="Car.svg" width="100%" height="100%"/>
                                </div>
                                <p>Организуем таможенное оформление и доставку груза наиболее быстрым и экономически выгодным путём, что позволяет снизить ваши затраты и избежать рисков.</p>
                            </div>
                            <div className="about_us-adv">
                                <div className="about_us-adv-img">
                                    <img src={Head} alt="Car.svg" width="100%" height="100%"/>
                                </div>
                                <p>Мы уверены в квалификации своего персонала и несём ответственность перед таможенными органами и нашими клиентами за качество и своевременность предоставления услуг.</p>
                            </div>
                        </div>
                        <div className="about_us-img">
                            <img src={threeCars} alt="three_cars.png" width="500px" height="400px"/>
                        </div>
                    </div>
                    <div className="about_us-button">
                        <a href="#services" className="button-contact">ПЕРЕЙТИ К УСЛУГАМ</a>
                    </div>
                </div>
            </section>
        </>
    )
}
export default About_us