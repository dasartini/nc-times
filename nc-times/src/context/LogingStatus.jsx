import { createContext } from "react";


export const LogingStatusContext = createContext();

export const LoggingStatusProvider =({children})=>{
    return<LoggingStatus.Provider>{children}</LoggingStatus.Provider>
}