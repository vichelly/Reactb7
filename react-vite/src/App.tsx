// como criar um componente?
// por meio da função
const App = () => {
  let name: string = "Vitor Lucas";
  let lastname: string = "Fujita Felício"
  let n1: number = 20;
  let n2: number = 20;
  let link: string = 'https://www.youtube.com/watch?v=10E6DjN4vIE&t=113s';

  function somar(n1: number, n2: number): number{
    return n1 + n2;
  }
  function mult(n1: number, n2: number): number{
    return n1 * n2;
  }

  return(
    // isso é jsx, não html
    // {} = expressão , é possivel fazer contas
    <div>
      Olá meu nome é {`${name.toUpperCase()} ${lastname.toLocaleLowerCase()}`}, você tem 
      quase {(n1+n2)/2} anos de idade! <br />
      20 + 20 = {somar(n1,n2)} <br />
      20 x 20 = {mult(n1,n2)} <br />
      Link para uma musica: <br />
      <a href={link}>Musica legal</a>
    </div>
  );
}
// exportar a interface
export default App;

