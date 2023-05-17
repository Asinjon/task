import React from "react"

export const CheckboxField = React.forwardRef((props, ref) => {

    return (
        <>
            <input ref={ref} type="checkbox" name={props.field.label} id={props.field.label} value={props.field.value} />
            <label htmlFor={props.field.label}>{props.field.label}</label>
        </>
    )
});