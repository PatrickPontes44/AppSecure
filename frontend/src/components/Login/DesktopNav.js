function DesktopNav(props) {
  return (
    <a href={props.href} onClick={(e) => e.preventDefault()} id={props.id}>
      {props.text}
    </a>
  );
}

export default DesktopNav;
