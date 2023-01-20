// exportar o componente para o principal
// prop para o botão
type Props = {
    text: string;
    clickfn: (txt:string) => void;
}

export const Botao = ({text, clickfn}: Props) => {

    const handleclick = () => {
        clickfn("FRASE DO BUTTON");
    }

    return(
        <button onClick={handleclick} >
            {text}
            {/* oque será escrito no botão é decidido no app */}
        </button>
    )
}