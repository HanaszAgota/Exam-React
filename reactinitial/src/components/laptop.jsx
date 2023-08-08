import { useState } from "react";

const Laptop = ({ name, details }) => {
    const [show, setShow] = useState(false);

    const toggle = () => {
        setShow(!show);
    }

    return (
        <div>
            <h2>{name}</h2>
            {show ? <p>{details}</p> : null}
            <button onClick={toggle}>
                {show ? 'Show less' : 'Show more'}
            </button>
        </div>
        )
    }

    export default Laptop;