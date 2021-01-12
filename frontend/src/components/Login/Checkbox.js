import styled from "styled-components";

const Label = styled.label`
  font-size: 10px;
  color: #000;
  font-weight: bold;
  margin: 0 0 0 5.29px;

  @media screen and (min-width: 768px) {
    font-size: 15px;
  }

  @media screen and (min-width: 1800px) {
    font-size: 25px;
  }

  @media screen and (min-width: 2650px) {
    font-size: 35px;
  }

  @media screen and (min-width: 3500px) {
    font-size: 45px;
  }
`;

const CheckboxDiv = styled.div`
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin-top: 29.7px;
    margin-bottom: 24.34px;
  }

  @media screen and (min-width: 1800px) {
    margin-top: 50px;
  }

  @media screen and (min-width: 2650px) {
    margin-top: 30px;
  }

  @media screen and (min-width: 3500px) {
    margin-top: 60px;
    margin-bottom: 30px;
  }
`;

const Input = styled.input`
  appearance: none;
  width: 11.76px;
  height: 10.59px;
  padding: 5px;
  border: 2px solid #ff5678;
  border-radius: 5px;
  cursor: pointer;
  &:checked {
    background-color: #ff5678;
  }

  @media screen and (min-width: 768px) {
    width: 21.21px;
    height: 19.09px;
  }

  @media screen and (min-width: 1800px) {
    width: 42px;
    height: 38px;
  }

  @media screen and (min-width: 2650px) {
    width: 42px;
    height: 38px;
  }

  @media screen and (min-width: 3500px) {
    width: 84px;
    height: 66px;
  }
`;

function Checkbox(props) {
  return (
    <CheckboxDiv>
      <Input type="checkbox" />
      <Label>{props.text}</Label>
    </CheckboxDiv>
  );
}

export default Checkbox;
