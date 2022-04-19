import {
    Link, useParams,
  } from 'react-router-dom';
import arrow from  './images/arrow_open.png';

const NavLinksMobile = () => {
    return (
        <div className='invisible-part'>
            <ul>
                <li>
                  <Link to = "/home">
                     Home
                  </Link>
                  <Link to = "/home">
                    <img src={arrow}></img>
                  </Link>
                  
                </li>
                <li>
                  <Link to = "/signup">
                     Sign up
                  </Link>
                  <Link to = "/signup">
                    <img src={arrow}></img>
                  </Link>
                </li>
                <li>
                  <Link to = "/login">
                     Login
                  </Link>
                  <Link to = "/login">
                    <img src={arrow}></img>
                  </Link>
                </li>
            </ul>
        </div>
    );
}

export default NavLinksMobile;