import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("en"); // default language is setting to English

    const toggleLanguage = (lang) => setLanguage(lang); // language changer

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageProvider;