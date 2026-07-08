import styles from './services.module.css'
import Blocknote from '../../assets/Blocknote.svg'
import turnkeyCar from '../../assets/Turnkey_car.svg'
import Wheel from '../../assets/Wheel.svg'
function Services(){
    return(
        <section id="services">
            <div className="container">
                <div>
                    <h1 className="services-h1">УСЛУГИ</h1>
                    <div className={styles.container}>
                        <div className={styles.registration}>
                            <img src={Blocknote} alt="Blocknote.svg" className={styles.img}/>
                            <h4 className={styles.title}>ТАМОЖЕННОЕ ОФОРМЛЕНИЕ</h4>
                            <p className={styles.text}>Импорт, экспорт, транзит</p>
                            <a href="#registration" className={styles.button}>ПОДРОБНЕЕ</a>
                        </div>
                        <div className={styles.turnkey_car}>
                            <img src={turnkeyCar} alt="Turnkey_car.svg" className={styles.img}/>
                            <h4 className={styles.title}>ОФОРМЛЕНИЕ АВТО ПОД КЛЮЧ</h4>
                            <h6>КИТАЙ, КОРЕЯ, ЯПОНИЯ</h6>
                            <a href="#turnkey_car" className={styles.button}>ПОДРОБНЕЕ</a>
                        </div>
                        <div className={styles.logistics}>
                            <img src={Wheel} alt="Wheel.svg" className={styles.img}/>
                            <h4 className={styles.title}>ЛОГИСТИКА</h4>
                            <p className={styles.text}>Транспортные услуги и мультимодальные перевозки</p>
                            <a href="#logistics" className={styles.button}>ПОДРОБНЕЕ</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Services