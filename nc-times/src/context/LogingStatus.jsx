import { useState, createContext } from "react";


export const LogingStatusContext = createContext();

export const LoggingStatusProvider =({children})=>{

    const[isLogedIn, setIsLogedIn]= useState("Login")

    return(<LogingStatusContext.Provider value={{isLogedIn, setIsLogedIn}}>
        {children}
        </LogingStatusContext.Provider>)
        }