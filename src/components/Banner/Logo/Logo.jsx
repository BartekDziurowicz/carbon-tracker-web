import { Link } from "react-router-dom"
import $HeaderLogo from './Logo.styles.jsx';
import logo from '../../../assets/carbon-tracker-logo.svg';

export default function Logo() {
    return (
        <Link to="/home">
            <$HeaderLogo src={logo} alt="Carbon Tracker"/>
        </Link>
    );
}