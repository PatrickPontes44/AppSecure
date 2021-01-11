import styled from 'styled-components';
import Button from './Button';
import Input from './Input';

const Title = styled.h1`
    text-align: center;
    font-size: 30px;
`

const Section = styled.section`
    border-radius: 10px;
    width: 100%;
    padding: 10px 25px;
    max-width: 470px;
    background-color: white;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`

const BtnsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

function SingUpSection() {
    return (
        <Section>
            <Title>Singup</Title>
            <Input type='text' title='Nome' placeholder='Fake Name' />
            <Input type='email' title='Email' placeholder='Fake Email' />
            <Input type='password' title='Senha' placeholder='*******' />
            <Input type='date' id='date' title='Date de Nascimento' />
            <Input type='file' title='Foto de perfil' />
            <Input type='checkbox' title='Continuar conectado' />

            <BtnsContainer className='btns-container'>
                <Button
                    bg='pink'
                    id="btn-cadastrarse"
                    href="#"
                    icon="fas fa-user-plus"
                    text="Cadastrar-se"
                />

                <Button
                    bg='white'
                    id="btn-entrar"
                    href="#"
                    icon="fas fa-sign-in-alt"
                    text="Entrar"
                />
                
            </BtnsContainer>
        </Section>
    )
}

export default SingUpSection;