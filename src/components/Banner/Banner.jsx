import LoginButton from '../LoginButton/LoginButton.jsx';
import logo from '../../assets/carbon-tracker-logo.svg';
import './Banner.css';

export default function Banner () {
    return (
        <header>
            <img src={logo} alt="Carbon Tracker"/>
            <menu>Menu</menu>
            <LoginButton />
        </header>
    );
}