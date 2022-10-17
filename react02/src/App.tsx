const App = () => {

  /* const buttonclick = () => {
    alert("Você clicou");
  } */

  return(
    <div>
      <button onClick={()=>{alert("You clicked")}} 
      /* onClick={buttonclick} */ > Click Here </button>
    </div>
  );
}

export default App;