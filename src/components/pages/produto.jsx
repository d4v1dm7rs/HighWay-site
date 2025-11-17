import { useParams, Link } from 'react-router-dom'
import styles from '../../styles/styles-pages/produto.module.css'
import Produto1 from '../../assets/imgCatalogo/produtoImg1.png'

function Produto(){

    const { id } = useParams()

    return(
        <div className={styles.ContainerProduto}>
            <div className={styles.BoxProduto}>

                <img src={Produto1} alt="Produto" className={styles.ImgProduto}/>

                <div className={styles.InfoProduto}>
                    <h1 className={styles.TituloProduto}>Produto #{id}</h1>
                    <p className={styles.Descricao}>
                        Este é um produto detalhado da ByteStore.  
                        Ele possui qualidade premium, ótimo custo-benefício e é perfeito para o seu setup!
                    </p>

                    <h2 className={styles.Preco}>R$ 99,99</h2>

                    <Link to={`/comprar/${id}`}>
                        <button className={styles.BtnComprar}>Ir para Compra</button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Produto
