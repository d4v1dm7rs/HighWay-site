import styles from '../../styles/styles-pages/catalogo.module.css'
import Produto1 from '../../assets/imgCatalogo/produtoImg1.png'
import { Link } from 'react-router-dom'

function Catalogo(){

    const produtos = [
        {id: 1, nome: "Filtro de Linha Gamer", precoAntigo: "199,99", precoNovo: "99,99"},
        {id: 2, nome: "Mouse RGB Pro", precoAntigo: "149,99", precoNovo: "89,99"},
        {id: 3, nome: "Teclado Mecânico Blue Switch", precoAntigo: "399,99", precoNovo: "249,99"},
        {id: 4, nome: "Headset Surround 7.1", precoAntigo: "299,99", precoNovo: "159,99"},
        {id: 5, nome: "Webcam Full HD", precoAntigo: "189,99", precoNovo: "99,99"},
        {id: 6, nome: "SSD 480GB", precoAntigo: "259,99", precoNovo: "139,99"},
        {id: 7, nome: "Cadeira Gamer Dark", precoAntigo: "999,99", precoNovo: "699,99"},
        {id: 8, nome: "Mousepad XXL", precoAntigo: "99,99", precoNovo: "49,99"},
        {id: 9, nome: "Monitor 24’’ IPS", precoAntigo: "899,99", precoNovo: "699,99"},
        {id: 10,nome: "Kit Fan RGB (3 unidades)", precoAntigo: "159,99", precoNovo: "99,99"}
    ]

    return(
        <div className={styles.ContainerCatalogo}>
            <h1 className={styles.TituloCatalogo}>Catálogo de Produtos</h1>

            <div className={styles.ContentCatalogo}>
                {produtos.map((p) => (
                    <div key={p.id} className={styles.BoxProduto}>
                        
                        <Link to={`/produto/${p.id}`} className={styles.ImgArea}>
                            <img src={Produto1} alt={p.nome} className={styles.ImgProduto}/>
                        </Link>

                        <div className={styles.InfoArea}>
                            <h3 className={styles.TituloProduto}>{p.nome}</h3>

                            <div className={styles.PrecosProduto}>
                                <p className={styles.PrecoAntigo}>R${p.precoAntigo}</p>
                                <p className={styles.PrecoNovo}>R${p.precoNovo}</p>
                            </div>

                            <Link to={`/produto/${p.id}`}>
                                <button className={styles.BtnComprar}>Ver Produto</button>
                            </Link>

                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Catalogo
