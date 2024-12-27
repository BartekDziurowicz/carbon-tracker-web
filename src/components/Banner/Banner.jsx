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
        console.log("Current path:", path);
        
        if (path.startsWith('/')) {
            path = path.slice(1);
        }
        console.log("Processed path:", path);
        
        if (checkAuthorization(path)) {
            selectNavItemHandler(path.charAt(0).toUpperCase() + path.slice(1));
        } else {
            if (path !== 'home') {
                console.log("Navigating to /home");
                navigate("/home");
            }
        }
    }, [location]);
    

    function checkAuthorization(path) {
        switch (path) {
            case "home":
                return "Employee,Manager,Admin".includes(userData.group);
            case "metrics":
                return "Employee,Manager,Admin".includes(userData.group);
            case "selector":
                return "Manager,Admin".includes(userData.group);
            case "company":
                return "Admin".includes(userData.group);
            case "reports":
                return "Manager,Admin".includes(userData.group);
            case "logout":
                return "Employee,Manager,Admin".includes(userData.group);
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