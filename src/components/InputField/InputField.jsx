import { INTEGER } from "../../constants/data_types";
import "./index.css";
import React from "react";

export const InputField = React.forwardRef((props, ref) => {

    const input = props.field.data_type === INTEGER ? (
        <input ref={ref} type="number" value="0" />
    ) : (
        <input ref={ref} type="text" />
    );

    return (
        <div className="input">
            <h2>{props.field.label}</h2>
            {input}
        </div>
    )
});