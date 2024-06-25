// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
 
function MouseOver() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [isactive, setisactive] = useState(true)

    const mousePosition = (e) => {
        setX(e.clientX);
        setY(e.clientY);
    };

    useEffect(() => {
        if (isactive) {
            window.addEventListener('mousemove', mousePosition);
            console.log('mouse moved');
        }
        return () => {
            window.removeEventListener('mousemove', mousePosition)
        }

    });

    const removeMouse = () => {
        if (isactive) {
            setisactive(false)
        }
        else {
            setisactive(true)
        }
    }

    return (
        <div>
            <button onClick={removeMouse}>btn clicked</button>
            <h4>value X: {x}</h4>
            <h4>value Y: {y}</h4>
        </div>
    );
}

export default MouseOver;
