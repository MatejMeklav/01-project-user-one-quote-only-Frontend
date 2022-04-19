import {
    Link, useParams,
  } from 'react-router-dom';

const NavLinks = () => {
    return (
        <div>
            <ul>
                <li>
                  <Link id='signup-navbar' to = "/signup">
                      Sign up
                  </Link>
                </li>
                <li>
                  <Link id='login-navbar' to = "/login">
                     Login
                  </Link>
                </li>
            </ul>
        </div>
    );
}

export default NavLinks;