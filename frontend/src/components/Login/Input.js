function Input(props) {
  return (
    <div id={props.id}>
      <label>{props.label}</label>
      <br />
      <input type={props.type} placeholder={props.placeholder} />
    </div>
  );
}

export default Input;
