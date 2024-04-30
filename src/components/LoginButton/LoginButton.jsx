import { useState } from 'react';
import './LoginButton.css';

export default function Button () {

    const [isLogin, setIsLogin] = useState(false);

    let buttonText = isLogin ? "Logout" : "Login";

    function loginHandler() {
        setIsLogin(login => !login);
    }

    return (
        <button onClick={loginHandler}>{buttonText}</button>
    );
}