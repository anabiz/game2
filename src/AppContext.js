import { createContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
    const [lower, setLower] = useState(1)
    const [upper, setUpper] = useState(10)
    const [lastNumber, setLastNumber] = useState('none');
    const [randomValue, setRandomValue] = useState(getRandomValue());
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
    
  function getRandomValue() {
    const lower = 1;
    const upper = 10;
    return Math.floor(Math.random() * (upper - lower + 1)) + lower;
  }
     

    return (
        <AppContext.Provider
          value={{
            lower,
            upper,
            setLower,
            setUpper,
            lastNumber,
            setLastNumber,
            randomValue,
            setRandomValue,
            guess,
            setGuess,
            message,
            setMessage
          }}
        >
          {children}
        </AppContext.Provider>
      );
}
export default AppContext;