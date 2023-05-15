import { useState } from "react";
import SelectField from "../SelectField/SelectField";
import InputField from "../InputField/InputField";
import TextareaField from "../TextareaField/TextareaField";
import CheckboxField from "../CheckboxField/CheckboxField";
import RadioField from "../RadioField/RadioField";

export default function({fields}) {

    const [selects, setSelects] = useState(fields.filter(field => field.element.type === "select"));
    const [inputs, setInputs] = useState(fields.filter(field => field.element.type === "input"));
    const [textareas, setTextareas] = useState(fields.filter(field => field.element.type === "textarea"));
    const [checkboxes, setCheckboxes] = useState(fields.filter(field => field.element.type === "checkbox"));
    const [radios, setRadios] = useState(fields.filter(field => field.element.type === "radio"));

    return (
        <div className="form">
            <h1>Форма регистрации</h1>
            {selects.map((field, index) => {
                return <SelectField key={index} field={field} />
            })}
            {inputs.map((field, index) => {
                return <InputField key={index} field={field} />
            })}
            {textareas.map((field, index) => {
                return <TextareaField key={index} field={field} />
            })}
            {checkboxes.map((field, index) => {
                return <CheckboxField key={index} field={field} />
            })}
            {radios.map((field, index) => {
                return <RadioField key={index} field={field} />
            })}
        </div>
    );
}