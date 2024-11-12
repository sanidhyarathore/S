import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

    const login = () => {
        setCurrentUser({
            id: 1,
            name: "Sanu",
            profilePic: "https://images.unsplash.com/profile-1588589289006-77599536a264image?w=150&dpr=2&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
        });
        console.log("login triggered")
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return <AuthContext.Provider value={{ currentUser, login }}>
        {children}
    </AuthContext.Provider>
}
