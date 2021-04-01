import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <ul className="nav nav-tabs justify-content-end">
      <li className="nav-item">
        <Link
          to="/"
          className={
            location.pathname === "/" ? "nav-link port-nav active" : "nav-link"
          }
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/aboutme"
          className={
            location.pathname === "/aboutme"
              ? "nav-link port-nav active"
              : "nav-link"
          }
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className={
            location.pathname === "/contact"
              ? "nav-link port-nav active"
              : "nav-link"
          }
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/projects"
          className={
            location.pathname === "/projects"
              ? "nav-link port-nav active"
              : "nav-link"
          }
        >
          Projects
        </Link>
      </li>
    </ul>
  );
}

export default Header;
