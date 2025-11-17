import { useParams } from 'react-router-dom'
import styles from '../../styles/styles-pages/secaoCompra.module.css'
import Produto1 from '../../assets/imgCatalogo/produtoImg1.png'

function SecaoCompra(){

    const { id } = useParams()

    return(
        <div className={styles.ContainerCompra}>

            <h1 className={styles.Titulo}>Finalizar Compra</h1>

            <div className={styles.BoxCompra}>

                <img src={Produto1} alt="Produto" className={styles.ImgProduto}/>

                <div className={styles.InfoCompra}>
                    <h2>Produto #{id}</h2>
                    <p className={styles.Preco}>R$99,99</p>

                    <form className={styles.Form}>
                        <input type="text" placeholder="Nome completo" required />
                        <input type="text" placeholder="Endereço" required />
                        <input type="text" placeholder="CEP" required />
                        <input type="text" placeholder="Número do cartão" required />

                        <button className={styles.BtnFinalizar}>Finalizar Compra</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default SecaoCompra
