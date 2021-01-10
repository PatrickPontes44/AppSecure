function MobileNav(props) {
  return (
    <a href={props.href} onClick={(e) => e.preventDefault()} id={props.id}>
      <i className={props.icon}></i>
    </a>
  );
}

export default MobileNav;