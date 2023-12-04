import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar-menu">
      <Link className="navbar-menu a" to="/"> Home </Link> | <Link className="navbar-menu a" to="/favoritos"> Favoritos </Link>
    </nav>
  );
};
export default Navbar;
