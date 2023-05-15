import "./index.css";

export default function({field}) {
    
    const options = field.values.map((opt, index) => {
        return <option key={index} value={opt.value}>{opt.label}</option>
    })

    return (
        <div className="select">
            <h2>{field.label}</h2>
            <select name="" id="">
                {options}
            </select>
        </div>
    )
}