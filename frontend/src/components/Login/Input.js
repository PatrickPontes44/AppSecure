import styled from "styled-components";

const InputType = styled.input`
  border: none;
  width: 219.91px;
  height: 25.89px;
  background: #ff5678;
  border-radius: 10px;
  padding-left: 11.76px;
  font-size: 14px;
  font-family: "Nunito", "sans-serif";
  color: #fff;
  font-weight: bold;
  outline: none;

  @media screen and (min-width: 768px) {
    width: 396.67px;
    height: 46.67px;
    font-size: 20px;
  }

  @media screen and (min-width: 1800px) {
    width: 600px;
    height: 60px;
    font-size: 40px;
  }

  @media screen and (min-width: 2650px) {
    width: 750px;
    height: 80px;
    font-size: 40px;
  }

  @media screen and (min-width: 3500px) {
    width: 1500px;
    height: 160px;
    font-size: 80px;
  }
`;

const Label = styled.label`
  font-size: 14px;
  position: relative;
  color: rgba(0, 0, 0, 0.6);

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1800px) {
    font-size: 40px;
  }

  @media screen and (min-width: 2650px) {
    font-size: 50px;
  }

  @media screen and (min-width: 3500px) {
    font-size: 70px;
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
