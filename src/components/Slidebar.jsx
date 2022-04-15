import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => {
    const [login, setLogin] = useState(false);
    useEffect(() => {
        const key = localStorage.getItem('key');
        if(key){
            var dateNow = new Date();
            const decoded = jwtDecode(key);
            if(decoded.exp * 1000 < dateNow.getTime()){
                setLogin(false)
            }else {
                setLogin(true)
            }
        }

    },[]);

    if(login == true){
        return (
            <Menu>
              <a className="menu-item" href="#">
                Close
              </a>
              <a className="menu-item" href="#">
                Profile
              </a>
              <a className="menu-item" href="#">
                Home
              </a>
              <a className="menu-item" href="#">
                Settings
              </a>
              <a className="menu-item" href="#">
                Logout
              </a>
            </Menu>
          );

    }else {
        return (
            <Menu>
              <a className="menu-item" href="#">
                Close
              </a>
              <a className="menu-item" href="#">
                Home
              </a>
              <a className="menu-item" href="#">
                Sign up
              </a>
              <a className="menu-item" href="#">
                Login
              </a>
            </Menu>
          );
    }
  
};
