
import styles from '../../styles/styles-pages/contato.module.css'

function Contato(){

    return(
        <div className={styles.ContainerContato}>

            <h1 className={styles.TituloContato}>Entre em Contato</h1>

            <div className={styles.BoxContato}>

                <form className={styles.FormContato}>
                    <label>Nome</label>
                    <input type="text" placeholder="Seu nome completo" required />

                    <label>Email</label>
                    <input type="email" placeholder="seuemail@examplo.com" required />

                    <label>Mensagem</label>
                    <textarea placeholder="Escreva sua mensagem..." required />

                    <button className={styles.BtnEnviar}>Enviar Mensagem</button>
                </form>

                <div className={styles.InfoContato}>
                    <h2>Informações</h2>

                    <p><strong>Email:</strong> contato@bytestore.com</p>
                    <p><strong>Telefone:</strong> (11) 99999-9999</p>
                    <p><strong>Endereço:</strong> Etec de Itanhaém - Itanhaém, SP</p>
                 
                </div>

            </div>

        </div>
    )
}

export default Contato
