// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'

function Interval() {

    const [count, setCount] = useState(0);

    const tick = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [count])

    return (
        <div>
            <h2>{count}</h2>
        </div>
    )
}

export default Interval
