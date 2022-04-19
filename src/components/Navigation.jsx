import NavLinksLoggedIn from "./NavLinksLoggedIn";
import React, { useEffect, useState} from 'react';
import NavLinks from "./NavLinks";
import jwtDecode from 'jwt-decode';
import logo from  './images/quotastic_logo.png';
import NavLinksSignUp from "./NavLinksSignUp";
import NavLinksLogin from "./NavLinksLogin";

const Navigation = () => {
    const [login, setLogin] = useState("");

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
    },[]);

    if(login === true){
        return (
            <div className="navigation-logged-in">
                <img className="quotastic-logo" src={logo}></img>
                <NavLinksLoggedIn></NavLinksLoggedIn>
            </div>
        );
    }else {

        if(window.location.pathname === '/login'){
            return (
                <div className="navigation">
                <img src={logo}></img>
                <NavLinksLogin></NavLinksLogin>
            </div>

            );

        }else if(window.location.pathname ==='/signup'){
            return (
                <div className="navigation">
                    <img src={logo}></img>
                    <NavLinksSignUp></NavLinksSignUp>
                </div>
            );
        }
        return (
            <div className="navigation">
                <img src={logo}></img>
                <NavLinks></NavLinks>
            </div>
            
        );
    }
}

export default Navigation;