import { useParams, Link } from 'react-router-dom'
import styles from '../../styles/styles-pages/produto.module.css'
import Produto1 from '../../assets/imgCatalogo/produto1.png'
import Produto2 from '../../assets/imgCatalogo/produto2.jpeg'                               
import Produto3 from '../../assets/imgCatalogo/produto3.jpg'  
import Produto4 from '../../assets/imgCatalogo/produto4.jpg'  
import Produto5 from '../../assets/imgCatalogo/produto5.webp'  
import Produto6 from '../../assets/imgCatalogo/produto6.jpg'  
import Produto7 from '../../assets/imgCatalogo/produto7.jpg'  
import Produto8 from '../../assets/imgCatalogo/produto8.jpg'  
import Produto9 from '../../assets/imgCatalogo/produto9.jpg'  
import Produto10 from '../../assets/imgCatalogo/produto10.jpg'  

function Produto(){

    const { id } = useParams()

    const produtos = [
        {id: 1, nome: "Filtro de Linha Gamer",img:Produto1},
        {id: 2, nome: "Mouse RGB Pro", img:Produto2},
        {id: 3, nome: "Teclado Mecânico Blue Switch", img:Produto3},
        {id: 4, nome: "Headset Surround 7.1", img:Produto4},
        {id: 5, nome: "Webcam Full HD", img:Produto5},
        {id: 6, nome: "SSD 480GB", img:Produto6},
        {id: 7, nome: "Cadeira Gamer Dark", img:Produto7},
        {id: 8, nome: "Mousepad XXL", img:Produto8},
        {id: 9, nome: "Monitor 24’’ IPS", img:Produto9},
        {id: 10, nome: "Kit Fan RGB (3 unidades)", img:Produto10}
    ]

    const produto = produtos.find(p => p.id === Number(id))

    return(
        <div className={styles.ContainerProduto}>
            <div className={styles.BoxProduto}>

                <img src={produto.img} alt="Produto" className={styles.ImgProduto}/>

                <div className={styles.InfoProduto}>
                    <h1 className={styles.TituloProduto}>{produto?.nome}</h1>

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
