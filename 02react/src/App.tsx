import React,{useState} from 'react';

const App = () => {

  const [numero, setNumero] = useState(1);

  const [mult, setMult] = useState(32);

  const More = () => {
    setNumero(numero + 1)
    setMult(mult * 32)
  } 
  const Minus = () => {
    setNumero(numero - 1)
    setMult(mult / 32 )
  }


  return(
    <div>
      <button onClick={More}  >+</button>
      <h1>Tabuada do 32: 32 x {numero} = {mult} </h1>
      <button onClick={Minus}  >-</button>
    </div>
  );
}

export default App;