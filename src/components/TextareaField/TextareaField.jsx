import React from "react";
import "./index.css";

export const TextareaField = React.forwardRef((props, ref) => {
    return (
        <div className="textarea">
            <h2>{props.field.label}</h2>
            <textarea ref={ref} type="text" {...props.register(props.field.label, {required: "Value is required"})} />
            {props.errors && props.errors[props.field.label] && (
                <span className="errorMessage">{props.errors[props.field.label].message}</span>
            )}
        </div>
    )
});