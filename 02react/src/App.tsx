import React,{useState} from 'react';

const App = () => {

  // uso de states

 /*  const [name, setName] = useState('Vitor Lucas');

  const buttonclick = () => {
    setName('Vichelly');
  };
 */

  //criando o contador usando state
  const [n,setN] = useState(0);

  const handleminus = () => {
    setN(n-1);
  }
  const handleplus = () => {
    setN(n+1);
  }

  
  // criando o input que atualiza
  const[nome, setNome] = useState('');

  const handleinput = (event: React.ChangeEvent<HTMLInputElement> ) => {
    setNome(event.target.value);
  }

  return(
    <div>
      <hr />
      <h2>Contador</h2>
      <button onClick={handleminus} >-</button>
      <h1>{n}</h1>
      <button onClick={handleplus} >+</button>
      <hr />
      <br /><br />
      <hr />
      <h2>atualiza em tempo real</h2>
      <h2>Digite seu nome</h2> <input type="text" value={nome} onChange={handleinput} />
      <h2>seu nome é {nome}</h2>
      <hr />
      <br /><br />
     {/*  o número é {name}
      <button onClick={buttonclick} > Click Here </button> */}
    </div>
  );
}

export default App;