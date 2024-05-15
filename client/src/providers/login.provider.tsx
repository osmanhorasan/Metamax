import React, { useMemo, useState } from "react";
import { IChildren } from "../interfaces/system/exported.interface";


interface IProvider extends IChildren { }

export const LoginContext = React.createContext<any>({});

export const LoginProvider: React.FC<IProvider> = ({
    children,
}) => {
    const [loginData, setLoginData] = useState<any>(null);
    const contextValue = useMemo(() => {
        return {
            loginData,
            setLoginData,
        }
    }, [loginData, setLoginData])
    return (
        <LoginContext.Provider value={contextValue}>
            {children}
        </LoginContext.Provider>
    );
};