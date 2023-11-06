import { useState } from "react"

export const Counter = () => {
    
    const [ count, setCount] = useState(0)
    

    const handleIncrement = () => {
        setCount( count + 1)
    }
    const handleDecrement = () => {
        setCount( count - 1)
    }

    return (
        <section>
        <h1>Counter</h1>
            <div>{count}</div>
            <button
                onClick={handleIncrement}
            >Increase</button>
            <button
                onClick={handleDecrement}
            >Decrease</button>
        </section>
    )
}