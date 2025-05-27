import { useState } from "react"
import './Counter.css'

const Counter = () => {

    const[count,setCount]=useState(0)

    const handleIncrement = () => {

        setCount(prevCount => prevCount+1)
    }

    const handleDecrement = () => {

        setCount(prevCount => prevCount-1)
    }

    return(
        <>
            <p>
                Count = {count}
            </p>

            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
        </>
    )
}

export default Counter