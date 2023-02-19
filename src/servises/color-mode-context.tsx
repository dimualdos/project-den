import { createContext, useContext } from "react";

export type GlobalContent = {

    toggleColorMode: () => void;
}

export const ColorModeContext = createContext<GlobalContent>({
    // set a default value
    toggleColorMode: () => { },
})
