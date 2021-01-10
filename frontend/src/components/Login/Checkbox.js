function Checkbox(props) {
  return (
    <div id={props.id}>
      <input type="checkbox" />
      <label id={props.idLabel}>{props.text}</label>
    </div>
  );
}

export default Checkbox;
