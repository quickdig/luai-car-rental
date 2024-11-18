import React, { createContext, useState, useEffect, useContext } from "react";
import { LanguageContext } from "./languageContext";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
    const { language } = useContext(LanguageContext)

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {

    }, [language])

    return (
        <DataContext.Provider value={{ blogs }}>
            {children}
        </DataContext.Provider>
    )
}


export default DataProvider;