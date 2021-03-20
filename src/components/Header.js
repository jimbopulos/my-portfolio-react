import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  return (
    // <nav classNameName='nav navbar-expand-lg justify-content-end'>
    //   <div classNameName='container-fluid'></div>
    //   <div classNameName='navbar-brand'>
    //     <Link to='/'>James Galantino</Link>
    //   </div>
    //   <button
    //     classNameName='navbar-toggler'
    //     type='button'
    //     data-bs-toggle='collapse'
    //     data-bs-target='#navbarSupportedContent'
    //     aria-controls='navbarSupportedContent'
    //     aria-expanded='false'
    //     aria-label='Toggle navigation'
    //   >
    //     <span classNameName='navbar-toggler-icon'></span>
    //   </button>
    //   <div classNameName='collapse navbar-collapse' id='navbarSupportedContent'>
    //     <ul classNameName='navbar-nav me-auto mb-2 mb-lg-0'>
    //       <li classNameName='nav-item'>
    //         <Link to='/aboutme'>About Me</Link>
    //       </li>
    //       <li classNameName='nav-item'>
    //         <Link to='/contact'>Contact</Link>
    //       </li>
    //       <li classNameName='nav-item'>
    //         <Link to='/projects'>Projects</Link>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
    <ul className='nav nav-tabs justify-content-end'>
      <li className='nav-item'>
        <Link
          to='/'
          className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          to='/aboutme'
          className={
            location.pathname === '/aboutme' ? 'nav-link active' : 'nav-link'
          }
        >
          About Me
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          to='/contact'
          className={
            location.pathname === '/contact' ? 'nav-link active' : 'nav-link'
          }
        >
          Contact
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          to='/projects'
          className={
            location.pathname === '/projects' ? 'nav-link active' : 'nav-link'
          }
        >
          Projects
        </Link>
      </li>
    </ul>
  );
}

export default Header;
