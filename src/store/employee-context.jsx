import { createContext, useState } from "react";

export const EmployeeContext = createContext({
    commonName: null,
    surname: null,
    group: null,
    authenticated: false,
    setEmployeeData: () => {}
});

export default function EmployeeContextProvider({ children }) {
    const [employeeData, setEmployeeData] = useState({
        commonName: null,
        surname: null,
        group: null,
        authenticated: false
    });

    return (
        <EmployeeContext.Provider value={{...employeeData, setEmployeeData}}>
            {children}
        </EmployeeContext.Provider>
    )
}