import SelectField from "../SelectField/SelectField";
import InputField from "../InputField/InputField";
import TextareaField from "../TextareaField/TextareaField";
import CheckboxField from "../CheckboxField/CheckboxField";
import RadioField from "../RadioField/RadioField";

import {INPUT, SELECT, TEXTAREA, CHECKBOX, RADIO} from "../../constants/field_types";


export default function({form}) {

    const formFields = [...form.fields];
    form = form.form.fieldsets.sort((a, b) => a.position - b.position);

    const formEl = form.map((fieldset, index) => {
        let fields = fieldset.fields.sort((a, b) => a.position - b.position);
        console.log({fields});
        fields = fields.map((element, ind) => {
            const field = formFields.find(f => f.id === element.id);
            const fieldType = field.element.type;
            
            switch(fieldType) {
                case INPUT: 
                    return <InputField key={ind} field={field} />
                case SELECT:
                    return <SelectField key={ind} field={field} />
                case TEXTAREA:
                    return <TextareaField key={ind} field={field} />
                case CHECKBOX:
                    return <CheckboxField key={ind} field={field} />
                case RADIO:
                    return <RadioField key={ind} field={field} />
            }
        });
        return (
            <div className="fieldset" key={index}>
                {fieldset.label ? <h2>{fieldset.label}</h2> : null}
                {fields}
            </div>
        )
    });

    return (
        <div className="form">
            <h1>Форма регистрации</h1>
            {formEl}
        </div>
    );
}