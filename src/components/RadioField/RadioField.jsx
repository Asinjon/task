import React from "react";
import "./index.css";

export const RadioField = React.forwardRef((props, ref) => {
    const radios = props.field.values.map((radio, index) => {
        return (
            <div className="radio" key={index}>
                <input ref={ref} type="radio" name={props.field.label} id={radio.label} value={radio.value} />
                <label htmlFor={radio.label}>{radio.label}</label>
            </div>
        )
    })

    return (
        <div className="radios">
            <h2>{props.field.label}</h2>
            {radios}
            {props.errors && props.errors[props.field.label] && (
                <span className="errorMessage">{props.errors[props.field.label].message}</span>
            )}
        </div>
    )
});