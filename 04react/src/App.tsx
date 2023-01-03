import * as S from './AppStyles'
import { useState } from 'react'


function App() {

  const [number, setNumber] = useState(40);

  function handleClick() {
    setNumber(number + 3)
  }

  return (
    <>
      <S.Container>
        Texto do componente
        <S.Botao bg="#FF0000" onClick={handleClick} >green button height = {number}px </S.Botao>
        <S.Botao bg="#00FF00" small={true} height={number+'px'} > green </S.Botao>
      </S.Container>
    </>
  )
}

export default App
