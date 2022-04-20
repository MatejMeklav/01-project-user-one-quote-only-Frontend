import {
    Link, useParams,
  } from 'react-router-dom';
import arrow from  './images/arrow_open.png';

const NavLinksMobile = () => {
    return (
        <div className='invisible-part'>
            <ul>
                <li id='link-arrow'>
                  <Link to = "/home">
                     Home
                  </Link>
                  <Link to = "/home">
                    <img src={arrow}></img>
                  </Link>
                  
                </li>
                <li className='sign-up-btn' id='buttons-sign-up'>
                  <Link to = "/signup">
                     Sign up
                  </Link>
                </li>
                <li className='login-btn' id='buttons-login'>
                  <Link to = "/login">
                     Login
                  </Link>
                </li>
            </ul>
        </div>
    );
}

export default NavLinksMobile;