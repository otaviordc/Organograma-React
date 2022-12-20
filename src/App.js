import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import CampoTexto from './componentes/CampoTexto';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';

function App() {

  

  const times = [
    {
      nome:'Counter-Strike',
      corPrimaria:'#57c278',
      corSecundaria:'#d9f7e9'

    },
    {
      nome:'League Of Legends',
      corPrimaria:'#82cffa',
      corSecundaria:'#e8f8ff'

    },
    {
      nome:'Dota 2',
      corPrimaria:'#a6d157',
      corSecundaria:'#fof8e2'

    },
    {
      nome:'Valheim',
      corPrimaria:'#e06869',
      corSecundaria:'#fde7e8'

    },
    {
      nome:'Valorant',
      corPrimaria:'#fae9fs',
      corSecundaria:'#db6ebf'

    },
        
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      <Rodape />
      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
      
    </div>
  );
}

export default App;
