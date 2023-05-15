import "./index.css";

export default function({field}) {
    
    const radios = field.values.map((radio, index) => {
        return (
            <div className="radio" key={index}>
                <input type="radio" key={index} name={field.label} id={radio.value} value={radio.label} />
                <label htmlFor={radio.value}>{radio.label}</label>
            </div>
        )
    })

    return (
        <div className="radios">
            <h2>{field.label}</h2>
            {radios}
        </div>
    )
}