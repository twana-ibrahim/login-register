import React from "react";

const img = (props) => {
    return (
        <img className={props.className} src={props.src} alt={props.alt} />
    )
}

export default img;