import { createContext, useState } from "react";

export const UserContext = createContext({});

const UserContextProvider = ({children}) => {
    const [name, setName] = useState('Natalia');
    return (<UserContext.Provider value={{name, setName}}>{children}</UserContext.Provider>)
}

export default UserContextProvider;