import { createContext, useContext, useReducer } from "react";

// 1. create context
const CounterContext = createContext('')

//2. define the reducer and the initial state
const counterReducer = (count, action) => {
    switch (action.type) {
        case 'INCREASE':
            return count + 1
        case "DECREASE":
            return count - 1
        default: {
            throw Error('Unknown Action' + action.type)
        }
    }
}

const initialCount = 0

// 3. create a useCounter hook 
export const useCounter = () => {
    return useContext(CounterContext)
}


// 4. Create the provider component
export const CounterProvider = ({ children }) => {
    const [counter, dispatch] = useReducer(
        counterReducer,
        initialCount
    )

    return (
        <CounterContext.Provider value={{ counter, dispatch }}>
            {children}
        </CounterContext.Provider>
    )
}


