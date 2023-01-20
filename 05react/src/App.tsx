//importa o componente de components
import {Botao} from './components/buton';
import {Pessoa} from './components/Pessoa';
// reenderizando conteúdo condicional
import { useState } from 'react';


function App() {

  const botaoEvent = (txt:string) => {
    alert("Frase do app: "+txt);
  }

  let list =[
    'Maneiro','Legal','Bacana','Show','Massa'
  ];
  //função map: executa algo em cada item do array

  let pessoa = [
    {name: 'Genilson', age: 45 },
    {name: 'Rosvald', age: 32 },
    {name: 'Gerald', age: 56 },
    {name: 'Gislene', age: 34}
  ]

  /* constante da condicional */
  const [show, setShow] = useState(false);
  /* fução para mostrar o condicional com toggle */
  const handleClick = () => {
    /* if(show){
      setShow(false);
    }
    else{
      setShow(true);
    }    
    
    é possível fazer o mesmo de uma maneira mais facil
    com apenas uma linha!
    */

    setShow(!show);

  }

  return (
    <div>
      <Botao text="clique aqui" clickfn={botaoEvent} ></Botao><br />
      <h2>Lista de adjetivos</h2>
      <ul>
        {list.map((item, index )=>(
          //colocar o key para ordenar, index = cada um tem um
          <li key={index} >{item}</li>
        ))}
        <br />
        {pessoa.map((item, index)=>(
          <Pessoa data={item}/>
        ) )}
        <br />
        <br />


        {/* reenderizar conteúdo condicional */}
        <button onClick={handleClick} >{show ? 'Ocultar' : 'Mostrar'}</button>

        {show === true && <div>Jacksons Five</div>}
      </ul>
    </div>
  )
}

export default App
