import { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { EmployeeContext } from "../../../store/employee-context.jsx";
import { CiCircleInfo } from "react-icons/ci";
import { $Logout, $LogoutLabel, $Icon, $Message } from "./Logout.styles.jsx";

export default function Logout() {

    const navigate = useNavigate();
    const timeoutRef = useRef(null);
    const { setEmployeeData } = useContext(EmployeeContext);

    const userLogoutObject = {
        commonName: null,
        surname: null,
        group: null,
        authenticated: false,
    }

    useEffect(() => {
        sessionStorage.clear();
        handleDelayedNavigation();
    }, [])

    function handleDelayedNavigation() { 
        timeoutRef.current = setTimeout(() => {
            navigate("/");
            setEmployeeData(userLogoutObject);
        }, 3000);
    }

    return (
        <$Logout>
            <$LogoutLabel>
                <$Icon>
                    <CiCircleInfo />
                </$Icon>
                <$Message>
                    You have been successfully logged out. <div>Thank you for using Carbon Tracker.</div>
                </$Message>
            </$LogoutLabel>
        </$Logout>
    )

}