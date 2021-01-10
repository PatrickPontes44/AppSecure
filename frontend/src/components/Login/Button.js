function Button(props) {
  return (
    <a id={props.id} href={props.href}>
      <i className={props.icon}></i>
      {props.text}
    </a>
  );
}

export default Button;
