import styles from './advantages.module.css'
import Stars from  '../../assets/Stars.svg'
import Building_bank from '../../assets/Building_bank.svg'
import Suitcase from '../../assets/Suitcase.svg'
import Banknote from '../../assets/Banknote.svg'
function Advantages(){
    return(
        <section className="advantages">
            <div className="container">
                <div>
                    <h1 className="services-h1">ПОЧЕМУ СТОИТ ОБРАТИТЬСЯ К НАМ?</h1>
                    <div className={styles.container}>
                        <div className={styles.content}>
                            <div className={styles.logo}>
                                <img src={Stars} alt="Stars.svg"/>
                            </div>
                            <div className={styles.info}>
                                <h5 className={styles.h5}>ОПЕРАТИВНОЕ ОФОРМЛЕНИЕ</h5>
                                <p>Благодаря профессионализму наших сотрудников и опыту работы с таможенными службами, у нас сформирован четкий порядок действий, позволяющий проходить процедуру таможенного оформления в ускоренном режиме.</p>
                            </div>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.logo}>
                                <img src={Building_bank} alt="Building_bank.svg"/>
                            </div>
                            <div className={styles.info}>
                                <h5 className={styles.h5}>ПОЛНОЕ СОПРОВОЖДЕНИЕ КЛИЕНТА</h5>
                                <p>Мы оказываем консультационное, информационное и практические содействие нашим клиентам с момента заключения договора и до его полного исполнения. Для постоянных клиентов действует гибкая система расчёта и оплаты.</p>
                            </div>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.logo}>
                                <img src={Suitcase} alt="Suitcase.svg"/>
                            </div>
                            <div className={styles.info}>
                                <h5 className={styles.h5}>ПРОЗРАЧНОСТЬ РАБОТЫ</h5>
                                <p>Мы информируем клиента о каждом этапе работы с демонстрацией движения денежных средств. Вы в любой момент можете увидеть, куда и в каком объеме перечисляются ваши деньги.</p>
                            </div>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.logo}>
                                <img src={Banknote} alt="Banknote.svg"/>
                            </div>
                            <div className={styles.info}>
                                <h5 className={styles.h5}>БЫСТРЫЙ РАСЧЕТ</h5>
                                <p>Расчет стоимости услуг осуществляется в день обращения, при условии предоставления полного пакета необходимых документов.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Advantages