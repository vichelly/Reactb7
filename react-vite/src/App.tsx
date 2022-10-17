// como criar um componente?
// por meio da função

// importar componente de outro arquivo
import {Header} from './components/Header';
import {Photo} from './components/Photo';
import {Photo2} from './components/Photo2';

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
      {/* passsando props exemplo passar o title */}
      
      <Header title="Exemplo de prop" />
      <Header title='Outro exemplo de prop' />
      <Header></Header>

      <Photo url='https://uxwing.com/wp-content/themes/uxwing/download/hand-gestures/good-icon.png' legend='JOIA' />

      <Photo2 legend='foto 2' >
        <img src="https://static.wixstatic.com/media/894d3e_1ddace316ca84f08bf03e65c46edbf9e~mv2.jpeg/v1/fit/w_760%2Ch_500%2Cal_c%2Cq_80/file.jpeg" alt="" />
      </Photo2>  


      Olá meu nome é {`${name.toUpperCase()} ${lastname.toLocaleLowerCase()}`}, você tem 
      quase {(n1+n2)/2} anos de idade! <br />
      20 + 20 = {somar(n1,n2)} <br />
      20 x 20 = {mult(n1,n2)} <br />
      Link para uma musica: <br />
      <a href={link}>Musica legal</a>
      
    </div>
  );
}

/*  criando mais um componente
porém ele sempre vai ser chamado no app
 foi chamado por <Header />
vc usa componentes dentro de outros componentes */
/* 
const Header = () => {
  return(
    <header>
      <h1> Título da página </h1>
      <hr />
    </header>
  );
}
 */
/* 
porém é mais recomendado utilizar uma pasta para
cada novo componente.
obs criar e colocar os arquivos numa pasta components
 */
// exportar a interface
export default App;

