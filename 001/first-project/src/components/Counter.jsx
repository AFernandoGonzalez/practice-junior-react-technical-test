
import { useCounter } from "../context/CounterContext"

export const Counter = () => {
    // const [ count, setCount] = useState(0)
    const {counter, dispatch} = useCounter()

    const handleDecrement = () => {
        dispatch({ type : "DECREASE"})
    }
    const handleIncrement = () => {
        dispatch({type: "INCREASE"})
    }

    return (
        <section>
        <h1>Counter</h1>
            <div>{counter}</div>
            <button
                onClick={handleDecrement}
            >Decrease</button>
            <button
                onClick={handleIncrement}
            >Increase</button>
        </section>
    )
}