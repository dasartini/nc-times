import { createContext, useState } from 'react'


export const LogInStatusContext = createContext();

export const IsLogInProvider = ({ children }) => {
    const [isLogIn, setIsLogIn] = useState(false);
    return (
        <LogInStatusContext.Provider value={{ isLogIn, setIsLogIn}}>
            {children}
        </LogInStatusContext.Provider>
    );
};