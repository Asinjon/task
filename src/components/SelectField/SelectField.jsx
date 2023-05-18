import "./index.css";
import React from "react";

export const SelectField = React.forwardRef((props, ref) => {
    const options = props.field.values.map((opt, index) => {
        return <option key={index} value={opt.value}>{opt.label}</option>
    })

    return (
        <div className="select">
            <h2>{props.field.label}</h2>
            <select ref={ref} name="" id="">
                {options}
            </select>
        </div>
    )
});