import styled from "styled-components";

const InputType = styled.input`
  border: none;
  width: 219.91px;
  height: 30px;
  background: #ff5678;
  border-radius: 10px;
  padding-left: 11.76px;
  font-size: 1.4rem;
  font-family: "Nunito", "sans-serif";
  color: #fff;
  font-weight: bold;
  outline: none;

  @media screen and (min-width: 1305px) {
    width: 396.67px;
    height: 46.67px;
    font-size: 2rem;
  }

`;

const Label = styled.label`
  font-size: 1.8rem;
  position: relative;
  color: rgba(0, 0, 0, 0.6);

  @media screen and (min-width: 1305px) {
    font-size: 2rem;
  }
`;

const Div = styled.div`
  margin: 0 0 16.47px 0;
`;

function Input(props) {
  return (
    <Div id={props.id}>
      <Label>{props.label}</Label>
      <br />
      {/* prettier-ignore */}
      <InputType id={props.idInput} type={props.type} placeholder={props.placeholder} />
    </Div>
  );
}

export default Input;
