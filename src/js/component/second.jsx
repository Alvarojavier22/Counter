import React from "react";

const Contador = (props) => {

    return (
        <div className="container">
            <div>
            <div className="row">
                <h1><i className="bi bi-clock-fill">
                {props.second}
                </i></h1>
                    
            </div>
            </div>
        </div>
    )
}


export default Contador