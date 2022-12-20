import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
const css = {backgroundColor: props.corSecundaria}

    return(
        props.colaboradores.length > 0 && <section className='time' style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
           <div className='colaboradores' style={css}>
            {props.colaboradores.map( colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} posição={colaborador.posição} imagem={colaborador.imagem} />)}
            </div>
        </section>
    )
}
export default Time