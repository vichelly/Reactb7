import { ChangeEvent, useEffect, useState } from "react"

function App() {

  const [name, setName] = useState('')

  const [lastName, setLastName] = useState('')

  const [fullName, setFullName] = useState('')

  useEffect(()=>{
    setFullName( `${name} ${lastName}` )
   }, [name,lastName]);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }
  const handleLastNameChange = (e:ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  }

  

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}} >
      <input type="text" placeholder="Digite seu nome" value={name} onChange={handleNameChange} />
      <input type="text" placeholder="Digite seu sobrenome" value={lastName} onChange={handleLastNameChange} />
      Nome Completo: {fullName}
    </div>
  )
}

export default App
