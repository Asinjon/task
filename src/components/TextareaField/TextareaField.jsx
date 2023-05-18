import React from "react";
import "./index.css";

export const TextareaField = React.forwardRef((props, ref) => {
    return (
        <div className="textarea">
            <h2>{props.field.label}</h2>
            <textarea ref={ref} type="text" />
        </div>
    )
});