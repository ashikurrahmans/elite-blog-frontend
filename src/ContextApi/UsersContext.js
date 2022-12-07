import React, { createContext } from 'react';

export const users = createContext();
const UsersContext = ({children}) => {

 const value = {}

    return (
       <users.Provider value={value}>{children}</users.Provider>
    );
};

export default UsersContext;