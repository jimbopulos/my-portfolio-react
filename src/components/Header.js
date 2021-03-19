import { Link, useLocation } from 'react-router-dom';

function Header() {
  // const location = useLocation();

  return (
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/aboutme'>About Me</Link>
      </li>
      <li>
        <Link to='/projects'>Projects</Link>
      </li>
    </ul>
  );
}

export default Header;
