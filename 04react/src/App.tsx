//importa o componente de components
import {Botao} from './components/buton';

function App() {

  const botaoEvent = (txt:string) => {
    alert("Frase do app: "+txt);
  }

  return (
    <div>
      <Botao text="clique aqui" clickfn={botaoEvent} ></Botao>
    </div>
  )
}

export default App
