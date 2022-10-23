import React,{useState} from 'react';

const App = () => {

  const [name, setName] = useState('Vitor Lucas');

  const buttonclick = () => {
    setName('Vichelly');
  };

  const [n,setN] = useState(0);

  const handleminus = () => {
    setN(n-1);
  }
  const handleplus = () => {
    setN(n+1);
  }

  const[nome, setNome] = useState('');

  const handleinput = (event: React.ChangeEvent<HTMLInputElement> ) => {
    setNome(event.target.value);
  }

  return(
    <div>
      Nome: <input type="text" value={nome} onChange={handleinput} />
      <h2>seu nome é {nome}</h2>
      <hr />
      <h1>Contador</h1>
      <button onClick={handleminus} >-</button>
      <h2>{n}</h2>
      <button onClick={handleplus} >+</button>
      <hr />
      o número é {name}
      <button onClick={buttonclick} > Click Here </button>
    </div>
  );
}

export default App;