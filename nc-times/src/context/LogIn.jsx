import { createContext, useState } from 'react'


export const LogInContext = createContext();

export const LogInProvider = ({ children }) => {
    const [logIn, setLogIn] = useState('');
    return (
        <LogInContext.Provider value={{ logIn, setLogIn}}>
            {children}
        </LogInContext.Provider>
    );
};