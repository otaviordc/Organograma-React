import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao/Index'
import { useState } from 'react'

const Formulario = (props) => {
    const [nome , setNome] = useState('')
    const [posição , setPosição] = useState('')
    const [imagem , setImagem] = useState('')
    const [time , setTime] = useState('')



    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            posição,
            imagem,
            time
        })
        setNome ('')
        setPosição ('')
        setImagem ('')
        setTime ('')
    }
    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2> Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                     />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Posição" 
                    placeholder="Digite sua posição" 
                    valor={posição}
                    aoAlterado={valor => setPosição(valor)}
                        />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)} />
                <ListaSuspensa 
                    label="Time" 
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                    />
                <Botao texto="Criar Card"/>
            </form>
        </section>
    )
}

export default Formulario