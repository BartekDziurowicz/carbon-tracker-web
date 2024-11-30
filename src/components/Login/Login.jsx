import { useRef } from "react";
import { $Login, $Form, $Input, $Button, $Logo } from "./Login.styles.jsx";
import logo from "../../assets/carbon-tracker-logo-pure.svg";

const Login = () => {  
    
    const usernameRef = useRef(null); 
    const passwordRef = useRef(null);

    return (
        <$Login>
            <$Logo src={logo} alt="Carbon Tracker"/>
            <$Form>
                <$Input type="text" ref={usernameRef} placeholder="Corporate key" required/>
                <$Input type="password" ref={passwordRef} placeholder="Password" required/>
                <$Button type="submit">Login</$Button>
            </$Form>
        </$Login>
    );
};

export default Login;
