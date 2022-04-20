import {
    Link, useParams,
  } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState} from 'react';
import { url } from '../globalVariables';
import arrow from  './images/arrow_open.png';
import logo_profile from  './images/profile_picture.png';

const NavLinksMobileLoggedIn = () => {
    const [firstName, setFirstName] = useState("");
    const[lastName, setLastName] = useState("");

    useEffect(() => {
        const headers = {
            'Authorization': 'Bearer '+ localStorage.getItem('key'),
          };
          axios.get(url + 'me',{headers}).then((response) => {
            const userquote = response.data;
            setFirstName(userquote.user.firstName);
            setLastName(userquote.user.lastName);
          });
    },[]);
    return (
        <div className='invisible-part-logged-in'>
            <ul>
                <li id='profile-name'>
                  <Link to = "/me">
                        <img src={logo_profile}></img> 
                  </Link>
                  <Link id='name-tag' to = "/me">
                        {firstName} {lastName}
                  </Link>
                  
                </li>
                <li>
                  <Link to = "/home">
                     Home
                  </Link>
                  <Link id='link-arrow'  to = "/home">
                    <img src={arrow}></img>
                  </Link>
                </li>
                <li>
                  <Link to = "/settings">
                     Settings
                  </Link>
                  <Link id='link-arrow'  to = "/settings">
                    <img src={arrow}></img>
                  </Link>
                </li>
                <li>
                  <Link to = "/logout">
                     Logout
                  </Link>
                  <Link id='link-arrow'  to = "/logout">
                    <img src={arrow}></img>
                  </Link>
                </li>
            </ul>
        </div>
    );
}

export default NavLinksMobileLoggedIn;