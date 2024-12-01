import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import $Banner from './Banner.styles.jsx';
import Logo from './Logo/Logo.jsx';
import Navigation from './Navigation/Navigation.jsx';
import { NavigationContext } from '../../store/navigation-context.jsx';

export default function Banner () {
    const {selectNavItemHandler} = useContext(NavigationContext);
    const location = useLocation();

    useEffect(() => {
        let path = location.pathname;
        if (path.startsWith('/')) { 
            path = path.slice(1); 
        }
        selectNavItemHandler(path.charAt(0).toUpperCase() + path.slice(1));
    }, [location]);

    return (
        <$Banner>
            <Logo />
            <Navigation />
        </$Banner>
    );
}