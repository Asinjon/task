import "./index.css";

export default function({field}) {

    return (
        <div className="textarea">
            <h2>{field.label}</h2>
            <textarea type="text" />
        </div>
    )
}