import styles from './Footer.module.css'
function Footer(){
    return(
        <footer>
            <div className={styles.copyright}>
                <p className="copyright">© 2026 ООО "Алестар" 8-777-777-77-77</p>
            </div>
        </footer>
    )
}
export default Footer