import NavLinksMobile from "./NavLinksMobile";
import React, { useEffect, useState} from 'react';
import jwtDecode from 'jwt-decode';
import NavLinksMobileLoggedIn from "./NavLinksMobileLoggedIn";
import './components.css';
import { MdMenu } from 'react-icons/md';
import logo from  './images/quotastic_logo.png';
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import {
    Link
  } from 'react-router-dom';

const MobileNavigation = () => {
    const [login, setLogin] = useState("");
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const key = localStorage.getItem('key');
        if (key) {
            const dateNow = new Date();
            const decoded = jwtDecode(key);
            if (decoded.exp * 1000 < dateNow.getTime()) {
                setLogin(false);
            } else {
                setLogin(true);
            }
        }

    },[open]);
    const hamburgerIcon = <MdMenu onClick={() => setOpen(!open)} className = "hamburger" width='30px' height='30px' color="orange"></MdMenu>
    const closeIcon = <AiOutlineClose onClick={() => setOpen(!open)} className = "close" width='30px' height='30px' color="orange"></AiOutlineClose>

    if(login === true){
        return (
            <div className="mobile-navigation-logged-in">
                <div className="visible-part" >
                 {open ? closeIcon : hamburgerIcon}
                <img className="logo" src={logo} ></img>
                <Link to='/create'>
                    <AiOutlinePlus className='create-simbol-mobile' size='25px' color='#EFB467' ></AiOutlinePlus>
                </Link>
                </div>
                
                {open && <NavLinksMobileLoggedIn></NavLinksMobileLoggedIn> }
            </div>
        );

    }else {
        return (
            <div className="mobile-navigation">
                <div className="visible-part" >
                {open ? closeIcon : hamburgerIcon}
                <img className="logo" src={logo} ></img>
                </div>
                
                {open && <NavLinksMobile></NavLinksMobile> }
                
            </div>
        );
    }
    
}

export default MobileNavigation;