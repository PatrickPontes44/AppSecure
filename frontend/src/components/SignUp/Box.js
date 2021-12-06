import styled from 'styled-components';
import Button from './Button';
import Input from './Input';
import { Link } from "react-router-dom";
import Checkbox from "../Login/Checkbox";

const Title = styled.h1`
    text-align: center;
    font-size: 30px;
`

const Section = styled.section`
    border-radius: 10px;
    padding: 10px 25px;
    max-width: 470px;
    max-height: 580px;
    background: #fff;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);

    @media screen and (min-width: 1305px) {
        margin-left: 6%;
    }
`

const BtnsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

function Box() {
    return (
        <Section>
            <Title>Signup</Title>
            <Input type='text' title='Nome' placeholder='Nome' />
            <Input type='email' title='Email' placeholder='Email' />
            <Input type='password' title='Senha' placeholder='*******' />
            <Input type='date' id='date' title='Data de Nascimento' />
            <Input type='file' title='Foto de Perfil' />
            <Checkbox
                id="container-checkbox"
                idLabel="label-continuar-conectado"
                text="Continuar Conectado"
            />
            <BtnsContainer className='btns-container'>
                <Link to="/signup" style={{ textDecoration: "none" }}>
                    <Button
                        bg='pink'
                        id="btn-cadastrarse"
                        href="#"
                        icon="fas fa-user-plus"
                        text="Cadastrar-se"
                    />
                </Link>

                <Link to="/home" style={{ textDecoration: "none" }}>
                    <Button
                        bg='white'
                        id="btn-entrar"
                        href="#"
                        icon="fas fa-sign-in-alt"
                        text="Entrar"
                    />
                </Link>
            </BtnsContainer>
        </Section>
    )
}

export default Box;