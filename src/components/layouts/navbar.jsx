import styles from '../../styles/styles-layouts/navbar.module.css'

function Navbar(){
    return(
        <header className={styles.Header}>
            <nav className={styles.Nav}>
                <ul>
                    <li>Botao</li>
                    <li>Botao</li>
                    <li>Botao</li>
                    <li>Botao</li>
                    <li>Botao</li>
                </ul>
            </nav>
        </header>
    )
}
export default Navbar;