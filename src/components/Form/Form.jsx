/* eslint-disable default-case */
import {SelectField} from "../SelectField/SelectField";
import {InputField} from "../InputField/InputField";
import {TextareaField} from "../TextareaField/TextareaField";
import {CheckboxField} from "../CheckboxField/CheckboxField";
import {RadioField} from "../RadioField/RadioField";

import {INPUT, SELECT, TEXTAREA, CHECKBOX, RADIO} from "../../constants/field_types";
import {INTEGER, ARRAY, STRING} from "../../constants/data_types";
import { useRef } from "react";
import { useForm } from 'react-hook-form';


// eslint-disable-next-line import/no-anonymous-default-export
export default function({form}) {

    const onSubmit = (data) => {
        console.log("datas:", data);
        save();
        reset();
    }

    const methods = useForm();
    const { handleSubmit, reset, formState: { errors } } = methods;

    const formFields = [...form.fields];
    form = form.form.fieldsets.sort((a, b) => a.position - b.position);

    const fieldsRefs = useRef((function() {
        let arr = [];

        form.forEach(fieldset => {
            let subarr = [];
            fieldset.fields.forEach(field => {
                const fi = formFields.find(f => f.id === field.id);

                if (fi.data_type === "array") {
                    subarr.push({
                        id: field.id,
                        reference: Array.from(fi.values).fill(null),
                        data_type: formFields.find(f => f.id === field.id).data_type
                    });
                } else {
                    subarr.push({
                        id: field.id,
                        reference: null,
                        data_type: formFields.find(f => f.id === field.id).data_type
                    });
                }
            });
            arr.push(subarr);
        });

        return arr;
    })());


    const formEl = form.map((fieldset, index) => {
        let fields = fieldset.fields.sort((a, b) => a.position - b.position);

        fields = fields.map((element, ind) => {
            const field = formFields.find(f => f.id === element.id);
            const fieldType = field.element.type;
            
            switch(fieldType) {
                case INPUT:
                    return (
                        <InputField 
                            errors={errors} 
                            register={methods.register} 
                            ref={
                                (ref) => {
                                    fieldsRefs.current[index][ind].reference = ref;
                                }
                            } 
                            key={ind} 
                            field={field}
                        />
                    )
                case SELECT:
                    return (
                        <SelectField 
                            errors={errors}
                            register={methods.register} 
                            placeholder="Выберите опцию"
                            ref={
                                (ref) => {
                                    fieldsRefs.current[index][ind].reference = ref;
                                }
                            } 
                            key={ind} 
                            field={field} 
                        />
                    )
                case TEXTAREA:
                    return (
                        <TextareaField 
                            errors={errors}
                            register={methods.register} 
                            ref={
                                (ref) => {
                                    fieldsRefs.current[index][ind].reference = ref;
                                }
                            } 
                            key={ind} 
                            field={field} 
                        />
                    )
                case CHECKBOX:
                    return (
                        <div className="checkbox" key={ind}>
                            <h2>{field.label}</h2>
                            {
                                field.values.map((checkbox, key) => {
                                    return (
                                        <CheckboxField
                                            errors={errors} 
                                            ref={
                                                (ref) => {
                                                    fieldsRefs.current[index][ind].reference[key] = ref;
                                                }
                                            } 
                                            key={checkbox.label} 
                                            field={{
                                                label: checkbox.label,
                                                value: checkbox.value,
                                            }} 
                                        />
                                    )
                                })
                            }
                        </div>
                    )
                case RADIO:
                    return (
                        <RadioField 
                            errors={errors} 
                            register={methods.register}
                            ref={
                                (ref) => {
                                    fieldsRefs.current[index][ind].reference = ref;
                                }
                            } 
                            key={ind} 
                            field={field} 
                        />
                    )
            }
        });
        return (
            <div className="fieldset" key={index}>
                {fieldset.label ? <h2>{fieldset.label}</h2> : null}
                {fields}
            </div>
        )
    });

    const save = (e) => {
        let form = {
            fields: []
        };
        fieldsRefs.current.forEach((arr, index) => {
            arr.forEach((el, ind) => {
                switch(el.data_type) {
                    case INTEGER:
                        if (el.id === 5) {
                            console.log("Value:", el.reference.value);
                            console.log("type:", typeof el.reference.value);
                        }
                        form.fields.push({
                            id: el.id,
                            value: parseInt(el.reference.value)
                        });
                        break;
                    case STRING:
                        form.fields.push({
                            id: el.id,
                            value: el.reference.value
                        });
                        break;
                    case ARRAY:
                        form.fields.push({
                            id: el.id,
                            value: [...el.reference.map(e => e.value)]
                        });
                        break;
                }
            })
        });
        console.log({form});
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form">
            <h1>Форма регистрации</h1>
            {formEl}
            <button type="submit" style={{marginTop: 50, marginBottom: 20}}>Сохранить</button>
        </form>
    );
}