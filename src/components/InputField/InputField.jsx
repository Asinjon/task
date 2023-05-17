import { INTEGER } from "../../constants/data_types";
import "./index.css";
import React from "react";

export const InputField = React.forwardRef((props, ref) => {

    const inputProps = props.field.data_type === INTEGER
    ? { ...props.register(props.field.label, {required: "Value is required!"}), type: "number" }
    : { ...props.register(props.field.label, {required: "Value is required!"}), type: "text" };

    const input = props.field.data_type === INTEGER ? (
        <input ref={ref} {...inputProps} />
    ) : (
        <input ref={ref} {...inputProps} />
    );

    return (
        <div className="input">
            <h2>{props.field.label}</h2>
            {input}
            {props.errors && props.errors[props.field.label] && (
                <span className="errorMessage">{props.errors[props.field.label].message}</span>
            )}
        </div>
    )
});