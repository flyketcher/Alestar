import '../App.css'
import Blocknote from '../assets/Blocknote.svg'
import turnkeyCar from '../assets/Turnkey_car.svg'
import Wheel from '../assets/Wheel.svg'
function Services(){
    return(
        <section id="services">
            <div className="container">
                <div>
                    <h1 className="services-h1">УСЛУГИ</h1>
                    <div className="services-container">
                        <div className="service-registration">
                            <img src={Blocknote} alt="Blocknote.svg" className="img-service"/>
                            <h4 className="service-title">ТАМОЖЕННОЕ ОФОРМЛЕНИЕ</h4>
                            <p className="service-p">Импорт, экспорт, транзит</p>
                            <a href="#registration" className="service-button">ПОДРОБНЕЕ</a>
                        </div>
                        <div className="service-turnkey_car">
                            <img src={turnkeyCar} alt="Turnkey_car.svg" className="img-service"/>
                            <h4 className="service-title">ОФОРМЛЕНИЕ АВТО ПОД КЛЮЧ</h4>
                            <h6>КИТАЙ, КОРЕЯ, ЯПОНИЯ</h6>
                            <a href="#turnkey_car" className="service-button">ПОДРОБНЕЕ</a>
                        </div>
                        <div className="service-logistics">
                            <img src={Wheel} alt="Wheel.svg" className="img-service" />
                            <h4 className="service-title">ЛОГИСТИКА</h4>
                            <p className="service-p">Транспортные услуги и мультимодальные перевозки</p>
                            <a href="#logistics" className="service-button">ПОДРОБНЕЕ</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Services