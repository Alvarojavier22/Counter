import React from "react";

const Contador = (props) => {

    return (

        <div className="container">
            <div className="calendar">
                <i className="far fa-clock"></i>
            </div>
            <div className="cuarto">{Math.floor(props.second / 3600)}</div>
            <div className="tercero">{Math.floor(props.second / 60)}</div>
            <div className="segundo">{Math.floor(props.second / 3600) * 60}</div>
            <div className="primero">{Math.floor(props.miliSeconds)}</div>


        </div>

    )
}


export default Contador