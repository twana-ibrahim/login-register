import React from "react";

function input(props){
    return(
        <div className="my-4">
            <input 
                className={props.className}
                name={props.name}
                type={props.type}
                placeholder={props.placeholder} 
            />
        </div>        
    );
}

export default input;