
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
            <Link className='' to={homePath}>
                <img src={LogoEmpresa} alt="ByteStore" className={styles.LogoEmpresa}/>
            </Link>
            <nav className={styles.Nav}>
                <ul className={styles.List}>
                    <Link to="/">
                        <img src={NavHome} alt="icone Home" className={styles.IconesNav}/>
                    </Link>

                        <Link to="/empresa">
                            <img src={NavEmpresa} alt="icone Empresa" className={styles.IconesNav}/>
                        </Link>


                        <Link to="/contato">
                            <img src={NavContato} alt="icone Contato" className={styles.IconesNav}/>
                        </Link>

                        <Link to="/catalogo">
                            <img src={NavCatalogo} alt="icone Catalogo" className={styles.IconesNav}/>
                        </Link>
                </ul>
            </nav>
        </header>
    )
}
export default Navbar;
