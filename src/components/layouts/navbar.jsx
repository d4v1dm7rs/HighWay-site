import { Link } from 'react-router-dom'
import styles from '../../styles/styles-layouts/navbar.module.css'
import LogoEmpresa from '../../assets/imgNavbar/LogoEmpresa.png'
import NavHome from '../../assets/imgNavbar/icon-nav-Home.svg'
import NavEmpresa from '../../assets/imgNavbar/icon-nav-Empresa.svg'
import NavContato from '../../assets/imgNavbar/icon-nav-Contato.svg'
import NavCatalogo from '../../assets/imgNavbar/icon-nav-Catalogo.svg'


function Navbar(){
    const homePath = "/"
    return(
        <header className={styles.Header}>
            <Link to={homePath}>
                <img src={LogoEmpresa} alt="ByteStore" className={styles.LogoEmpresa}/>
            </Link>
            <nav className={styles.Nav}>
                <ul className={styles.List}>
                    <li className={styles.item}>
                        <Link to="/">Home</Link>
                        <img src={NavHome} alt="icone Home"/>
                    </li>

                    <li className={styles.item}>
                        <Link to="/empresa">Empresa</Link>
                        <img src={NavEmpresa} alt="icone Empresa"/>
                    </li>

                    <li className={styles.item}>
                        <Link to="/contato">Contato</Link>
                        <img src={NavContato} alt="icone Contato"/>
                    </li>

                    <li className={styles.item}>
                        <Link to="/catalogo">Catálogo</Link>
                        <img src={NavCatalogo} alt="icone Catalogo"/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Navbar;