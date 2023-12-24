import React from "react";
import '../css/botonClear.css'

const botonClear = (props) => (
    <div className="botonClear" onClick={props.manejarClear}>
        {props.children}
    </div>
);

export default botonClear;