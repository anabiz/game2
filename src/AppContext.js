import { createContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
    const [lower, setLower] = useState(1)
    const [upper, setUpper] = useState(10)

    return (
        <AppContext.Provider
          value={{
            lower,
            upper,
            setLower,
            setUpper
          }}
        >
          {children}
        </AppContext.Provider>
      );
}
export default AppContext;