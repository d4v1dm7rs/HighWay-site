import styles from '../../styles/styles-layouts/navbar.module.css'
import LogoEmpresa from '../../assets/imgNavbar/logo1.png'

function Navbar(){
    
    const handleScroll = (e, id) => {
        e.preventDefault();
        const element = document.querySelector(id);
        if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return(
        <header className={styles.Header}>
            <nav className={styles.Nav}>
                
                <div onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                    <img src={LogoEmpresa} alt="Logo Highway" className={styles.LogoEmpresa}/>
                </div>

                <ul className={styles.List}>
                    <li className={styles.link}>
                        <a href="#inicio" onClick={(e) => handleScroll(e, '#inicio')}>Início</a>
                    </li>
                    <li className={styles.link}>
                        <a href="#equipe" onClick={(e) => handleScroll(e, '#equipe')}>Equipe</a>
                    </li>
                    <li className={styles.link}>
                        <a href="#nomeRepresentatividade" onClick={(e) => handleScroll(e, '#nomeRepresentatividade')}>Sobre a Empresa</a>
                    </li>
                    <li className={styles.link}>
                        <a href="#identidadeVisual" onClick={(e) => handleScroll(e, '#identidadeVisual')}>Identidade Visual</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Navbar;