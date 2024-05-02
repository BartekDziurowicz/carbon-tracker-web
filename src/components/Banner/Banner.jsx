import { $Banner } from './Banner.styles.jsx';
import Logo from './Logo/Logo.jsx';
import Navigation from './Navigation/Navigation.jsx';

export default function Banner () {
    return (
        <$Banner>
            <Logo />
            <Navigation />
        </$Banner>
    );
}