import styled from "styled-components";

const Label = styled.label`
  font-size: 1rem;
  color: #000;
  font-weight: bold;
  margin: 0 0 0 5.29px;

  @media screen and (min-width: 1305px) {
    font-size: 1.5rem;
  }
`;

const CheckboxDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  @media screen and (min-width: 1305px) {
    margin-top: 29.7px;
    margin-bottom: 24.34px;
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

  @media screen and (min-width: 1305px) {
    width: 21.21px;
    height: 19.09px;
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
