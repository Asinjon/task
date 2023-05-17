import "./index.css";
import React from "react";

export const SelectField = React.forwardRef((props, ref) => {
    const options = props.field.values.map((opt, index) => {
        return <option key={index} value={opt.value}>{opt.label}</option>
    })

    return (
        <div className="select">
            <h2>{props.field.label}</h2>
            <select ref={ref} name="" id="" {...props.register(props.field.label, {required: "Value is required!"})} >
                <option key="placeholder" value="placeholder" disabled selected>
                    {props.field.placeholder ? props.field.placeholder : "Выберите поле"}
                </option>
                {options}
            </select>
            {props.errors && props.errors[props.field.label] && (
                <span className="errorMessage">{props.errors[props.field.label].message}</span>
            )}
        </div>
    )
});