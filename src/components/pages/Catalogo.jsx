import styles from '../../styles/styles-pages/catalogo.module.css'
import Produto1 from '../../assets/imgCatalogo/produtoImg1.png'

function Catalogo(){
    return(
        <div className={styles.ContainerCatalogo}>
            <div className={styles.ContentCatalogo}>
                <div className={styles.BoxProduto}>
                    <img src={Produto1} alt="{nomeProduto}" className={styles.ImgProduto}/>
                    <div className={styles.NomeProduto}>
                        <h3>Filtro de linha</h3>
                        <div className={styles.PrecosProduto}>
                            <p className={styles.PrecoAntigo}>
                                <underline>R$199,99</underline>
                            </p>
                            
                            <p className={styles.PrecoNovo}>
                                R$99,99
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.BoxProduto}>
                    <img src={Produto1} alt="{nomeProduto}" className={styles.ImgProduto}/>
                    <div className={styles.NomeProduto}>
                        <h3>Filtro de linha</h3>
                        <div className={styles.PrecosProduto}>
                            <p className={styles.PrecoAntigo}>
                                <underline>R$199,99</underline>
                            </p>

                            <p className={styles.PrecoNovo}>
                                R$99,99
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Catalogo