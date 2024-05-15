import React, { useMemo, useState } from "react";
import { IChildren } from "../interfaces/system/exported.interface";


interface IProvider extends IChildren { }

export const ListContext = React.createContext<any>({});

export const ListProvider: React.FC<IProvider> = ({
    children,
}) => {
    const [listData, setListData] = useState<any>({});
    const contextValue = useMemo(() => {
        return {
            listData,
            setListData,
        }
    }, [listData, setListData])
    return (
        <ListContext.Provider value={contextValue}>
            {children}
        </ListContext.Provider>
    );
};