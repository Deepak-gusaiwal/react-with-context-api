import { createContext, useContext, useState } from "react";
const userConstext = createContext();

export const UserProvider = ({ children }) => {
    const [name, setName] = useState('Deepak');
    return (
        <userConstext.Provider value={{name,setName}}>
            {children}
        </userConstext.Provider>
    )
}

export const userContextProvider = () => {
    return useContext(userConstext)
}
