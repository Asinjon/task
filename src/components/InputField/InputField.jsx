import "./index.css";

export default function({field}) {

    return (
        <div className="input">
            <h2>{field.label}</h2>
            <input type="text" />
        </div>
    )
}