import React, { useState } from 'react';
import logInContext from './LogInContext'; 

const LogInProvider = ({ children }) => {
  const [logIn, setLogIn] = useState('initial value');

  return (
    <logInContext.Provider value={{ logIn, setLogIn }}>
      {children}
    </logInContext.Provider>
  );
};

export default LogInProvider;