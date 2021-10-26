import React from "react";
import "./App.css";

// React hook
function Tweet (props){
    return(
        <div className="tweet">
            <h3>{props.name}</h3>
            <p>{props.message}</p>
            <h3>{props.like}</h3>
        </div>
    )
}
export default Tweet;