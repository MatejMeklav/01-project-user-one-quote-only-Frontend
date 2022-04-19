import {
    Link, useParams,
  } from 'react-router-dom';

const NavLinksSignUp = () => {
    return (
        <div>
            <ul>
                <li>
                  <Link id='login-navbar' to = "/login">
                     Login
                  </Link>
                </li>
            </ul>
        </div>
    );
}

export default NavLinksSignUp;