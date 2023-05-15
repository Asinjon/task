import { useState } from "react";
import SelectField from "../SelectField/SelectField";

export default function({fields}) {

    const [selects, setSelects] = useState(fields.filter(field => field.element.type === "select"));

    return (
        <div className="form">
            {selects.map((field, index) => {
                return <SelectField key={index} select={field} />
            })}
        </div>
    );
}