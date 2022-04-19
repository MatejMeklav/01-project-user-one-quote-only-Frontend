import {
    Link, useParams,
  } from 'react-router-dom';

const NavLinksLogin = () => {
    return (
        <div>
            <ul>
                <li>
                  <Link id='signup-navbar' to = "/signup">
                      Sign up
                  </Link>
                </li>
            </ul>
        </div>
    );
}

export default NavLinksLogin;