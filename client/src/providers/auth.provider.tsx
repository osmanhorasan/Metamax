import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { IChildren } from "../interfaces/system/exported.interface";
import axios from "axios";


interface IProvider extends IChildren { }

const AuthContext = createContext<any>({});

const AuthProvider: React.FC<IProvider> = ({
    children,
}) => {
    const [token, setToken_] = useState(localStorage.getItem("token"));

    const setToken = (newToken: string) => {
        setToken_(newToken);
    };

    useEffect(() => {
        if (token) {
            axios.defaults.headers.common["Authorization"] = "Bearer " + token;
            localStorage.setItem('token', token);
        } else {
            delete axios.defaults.headers.common["Authorization"];
            localStorage.removeItem('token')
        }
    }, [token]);

    const contextValue = useMemo(
        () => ({
            token,
            setToken,
        }),
        [token]
    );
    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};

export default AuthProvider;
