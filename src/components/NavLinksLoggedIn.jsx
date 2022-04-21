import {
    Link, useParams,
  } from 'react-router-dom';
import { AiOutlinePlus } from "react-icons/ai";
import profile_logo from  './images/profile_picture.png';


const NavLinksLoggedIn = () => {
    return (
        <div>
            <ul>
                <li id='padding-navbar'>
                  <Link to = "/Home">
                      Home
                  </Link>
                </li>
                <li id='padding-navbar'>
                  <Link to = "/settings">
                     Settings
                  </Link>
                </li>
                <li id='padding-navbar'>
                  <Link onClick={localStorage.removeItem("key")} to = "/logout">
                     Logout
                  </Link>
                </li>
                <li>
                  <Link to = "/me">
                    <img src={profile_logo} alt='profile' ></img>
                  </Link>
                </li>

                <li id='padding-navbar'>
                  <Link to = "/create">
                     <AiOutlinePlus className='create-simbol' size='40px' color='#EFB467' ></AiOutlinePlus>
                  </Link>
                </li>
            </ul>
        </div>
    );
}

export default NavLinksLoggedIn;