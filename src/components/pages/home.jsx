import fotoRodrigo from '../../assets/fotoEquipe/fotoRodrigo.jpg'
import fotoVinicius from '../../assets/fotoEquipe/fotoVinicius.jpeg'
import fotoChrystian from '../../assets/fotoEquipe/fotoChrystian.jpeg'
import fotoDavid from '../../assets/fotoEquipe/fotoDavid.jpeg'

import githubLogo from '../../assets/imgFooter/git-hub.svg'
import linkedinLogo from '../../assets/imgFooter/linkedin.svg'

import usoIndevido from '../../assets/imgUsoIndevido/usoIndevidoTodos.png'

import nomeEmpresa from '../../assets/imgHome/nomeEmpresa.svg'
import nomeEmpresa2 from '../../assets/imgHome/nomeEmpresaBranco.svg'

import styles from '../../styles/styles-pages/home.module.css'

function Home(){
    return(
        <div className={styles.containerHome} id='inicio'>
            
            <header className={styles.fundo}>
                <div className={styles.nome}>
                    <img src={nomeEmpresa} alt="Highway Logo"/>
                </div>
                <div className={styles.card}>
                    <h1>"Nessa rota, o destino é o reconhecimento"</h1>
                </div>
            </header>

            <section id='equipe' className={styles.equipe}>
                <div className={styles.contentEquipe}>
                    <h1>Nossa Equipe</h1>
                    
                    <div className={styles.gridMembros}>
                        
                        <div className={styles.membro}>
                            <div className={styles.imgMembro}>
                                <img src={fotoChrystian} alt="Foto Chrystian Gabriel" />
                            </div>
                            <h2>Chrystian Gabriel</h2>
                            <p>Front-End</p>
                            
                            <div className={styles.socialLinks}>
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                    <img src={githubLogo} alt="GitHub" />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <img src={linkedinLogo} alt="LinkedIn" />
                                </a>
                            </div>
                        </div>

                        <div className={styles.membro}>
                            <div className={styles.imgMembro}>
                                <img src={fotoRodrigo} alt="Foto Rodrigo dos Santos" />
                            </div>
                            <h2>Rodrigo dos Santos</h2>
                            <p>Front-End</p>

                            <div className={styles.socialLinks}>
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                    <img src={githubLogo} alt="GitHub" />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <img src={linkedinLogo} alt="LinkedIn" />
                                </a>
                            </div>
                        </div>
                        

                        <div className={styles.membro}>
                            <div className={styles.imgMembro}>
                                <img src={fotoVinicius} alt="Foto Vinicius Oliveira" />
                            </div>
                            <h2>Vinicius Oliveira</h2>
                            <p>Back-End</p>

                            <div className={styles.socialLinks}>
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                    <img src={githubLogo} alt="GitHub" />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <img src={linkedinLogo} alt="LinkedIn" />
                                </a>
                            </div>
                        </div>
                        
                        <div className={styles.membro}>
                            <div className={styles.imgMembro}>
                                <img src={fotoDavid} alt="Foto David Bernardes" />
                            </div>
                            <h2>David Bernardes</h2>
                            <p>DBA</p>

                            <div className={styles.socialLinks}>
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                    <img src={githubLogo} alt="GitHub" />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <img src={linkedinLogo} alt="LinkedIn" />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section id='nomeRepresentatividade' className={styles.containerMaisInfo}>
                <h1>Nome e Representatividade</h1>

                <div className={styles.contentInfo}>
                    <div className={styles.info1}>
                        <img src={nomeEmpresa2} alt="Logo Highway Branco"/>
                    </div>

                    <div className={styles.info}>
                        <p>
                            A palavra <strong>"Highway"</strong>, que significa "Autoestrada" em português, 
                            representa o fluxo contínuo e acelerado dos nossos estudos e evolução tecnológica.
                        </p>
                    </div>
                </div>
            </section>

            <section id='identidadeVisual' className={styles.identidadeVisual}>
                
                <div className={styles.wrapperIdentidade}>
                    
                    <div className={styles.containerBox}>
                        <h1>Uso Indevido</h1>
                        <div className={styles.imgUso}>
                            <img src={usoIndevido} alt="Exemplos de uso indevido da marca"/>
                        </div>
                    </div>

                    <div className={styles.containerBox}>
                        <h1>Paleta de Cores</h1>
                        
                        <div className={styles.cardPaletas}>
                            <div className={styles.paletaCores}>
                                <div className={styles.bolinhaCor} style={{background: '#FFAA00'}}></div>
                                <p>#FFAA00</p>
                            </div>

                            <div className={styles.paletaCores}>
                                <div className={styles.bolinhaCor} style={{background: '#FFFFFF'}}></div>
                                <p>#FFFFFF</p>
                            </div>

                            <div className={styles.paletaCores}>
                                <div className={styles.bolinhaCor} style={{background: '#000000', border: '2px solid #555'}}></div>
                                <p>#000000</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Home