import styled from 'styled-components';

const StyledButton = styled.button`
    border-radius: 10px;
    font-size: 16px;
    padding: 4px;
    cursor: pointer;

    ${props => props.bg==='pink' ? `
        background-color: var(--primary-pink);
        color: white;
    ` : `
        background-color: white;
        color: var(--primary-pink);
    `}

    @media (min-width: 400px) {
        padding: 5px 10px;
        font-size: 20px;
    }
`

function Button(props) {
    return (
        <StyledButton id={props.id} bg={props.bg} href={props.href}>
            <i className={props.icon}></i>
            {props.text}
        </StyledButton>
    );
}

export default Button;