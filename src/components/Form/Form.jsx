import SelectField from "../SelectField/SelectField";
import InputField from "../InputField/InputField";
import TextareaField from "../TextareaField/TextareaField";
import CheckboxField from "../CheckboxField/CheckboxField";
import RadioField from "../RadioField/RadioField";

import {INPUT, SELECT, TEXTAREA, CHECKBOX, RADIO} from "../../constants/field_types";


export default function({fields}) {

    fields = fields.sort((a, b) => a.position - b.position);

    const allFields = fields.map((field, index) => {
        switch(field.element.type) {
            case INPUT: 
                return <InputField key={index} field={field} />
                break;
            case SELECT:
                return <SelectField key={index} field={field} />
                break;
            case TEXTAREA:
                return <TextareaField key={index} field={field} />
                break;
            case CHECKBOX:
                return <CheckboxField key={index} field={field} />
                break;
            case RADIO:
                return <RadioField key={index} field={field} />
                break;
        }
    });

    return (
        <div className="form">
            <h1>Форма регистрации</h1>
            {allFields}
        </div>
    );
}