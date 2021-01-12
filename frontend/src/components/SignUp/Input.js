import styled from 'styled-components';

const Div = styled.div`
    ${props => props.type === 'checkbox' ? `
        display: flex;
        flex-direction: row-reverse;
        justify-content: flex-end;

        > input {
            margin-right: 10px;
        }

        > label {
            color: black;
        }
    ` : `
        display: flex;
        flex-direction: column;

        > label {
            color: rgba(0, 0, 0, 0.6);
        }
    `}
    
    margin: 10px 0;

    > label {
        margin-bottom: 5px;
        font-weight: 700;
    }
    
    @media (min-width: 400px) {
        font-size: 20px;

    }
`

const StyledInput = styled.input`

    ${props => props.type === 'checkbox' ? `
        
        width: 15px;
        height: 15px;

    ` : null}

    background-color: var(--primary-pink);

    padding: 3px;
    border-radius: 10px;
    font-weight: 700;
    color: white;

    @media (min-width: 400px) {
        min-height: 25px;
        padding: 5px 10px;
        font-size: 20px;
    }

`

function Input({title, placeholder, type, id}) {
    return(
        <Div className='input-area' type={type}>
            <label>{title}</label>
            
            <StyledInput id={id} type={type} placeholder={placeholder} />
        </Div>
    )
}

export default Input;