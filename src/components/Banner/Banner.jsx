import Logo from './Logo/Logo.jsx';
import Navigation from './Navigation/Navigation.jsx';
import logo from '../../assets/carbon-tracker-logo.svg';
import './Banner.css';

export default function Banner () {
    return (
        <header>
            <Logo />
            <Navigation />
        </header>
    );
}