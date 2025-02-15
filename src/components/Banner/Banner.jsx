import { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import $Banner from './Banner.styles.jsx';
import Logo from './Logo/Logo.jsx';
import UserInfo from './UserInfo/UserInfo.jsx';
import Navigation from './Navigation/Navigation.jsx';
import { NavigationContext } from '../../store/navigation-context.jsx';

export default function Banner () {
    const {selectNavItemHandler} = useContext(NavigationContext);
    const location = useLocation();
    const navigate = useNavigate();

    const userData = JSON.parse(sessionStorage.getItem("userData"));

    useEffect(() => {
        let path = location.pathname;
        
        if (path.startsWith('/')) {
            path = path.slice(1);
        }
        
        if (checkAuthorization(path)) {
            selectNavItemHandler(path.charAt(0).toUpperCase() + path.slice(1));
        } else {
            if (path !== 'home') {
                navigate("/home");
            }
        }
    }, [location]);
    

    function checkAuthorization(path) {
        switch (path) {
            case "home":
                return "EMPLOYEE,MANAGER,ADMIN".includes(userData.group);
            case "metrics":
                return "EMPLOYEE,MANAGER,ADMIN".includes(userData.group);
            case "selector":
                return "MANAGER,ADMIN".includes(userData.group);
            case "company":
                return "ADMIN".includes(userData.group);
            case "reports":
                return "MANAGER,ADMIN".includes(userData.group);
            case "logout":
                return "EMPLOYEE,MANAGER,ADMIN".includes(userData.group);
            default: return false;
        }
    }

    return (
        <$Banner>
            <Logo />
            <UserInfo />
            <Navigation />
        </$Banner>
    );
}