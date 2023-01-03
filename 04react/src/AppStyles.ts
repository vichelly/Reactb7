import styled from "styled-components";

export const Container = styled.div`
    background-color: blue;
    color: white;
    padding: 20px;
`

type BotaoProps = {
    bg: string;
    small?: boolean;
    height?: string;
}

export const Botao = styled.button<BotaoProps>`
    font-size: ${(props) => props.small ? '20px' : '40px' };
    background-color: ${(props) => props.bg};
    height: ${(props) => (props.height)};
`