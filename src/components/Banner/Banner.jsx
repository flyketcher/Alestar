import styles from './Banner.module.css'
function Banner(){
    return(
        <main>
            <section className="banner">
                <div className="container">
                    <h1>ООО "АЛЕСТАР"</h1>
                    <div className={styles.info}>
                        <h4>ОФОРМЛЕНИЕ АВТО ПОД КЛЮЧ</h4>
                        <h4>(КИТАЙ, КОРЕЯ, ЯПОНИЯ)</h4>
                        <h5>Полное сопровождение сделок по таможенному оформлению и перевозке, сертификация и транспортировка грузов</h5>
                    </div>
                    <h5 className={styles.h5}>Заботимся о вашем грузе, пока вы сконцентрированы на решении иных вопросов вашего бизнеса</h5>
                    <a href='' className="button-contact">СВЯЗАТЬСЯ</a>
                </div>
            </section>
        </main>
    )
}
export default Banner