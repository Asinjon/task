export default function({field}) {
    
    const checkboxes = field.values.map((checkbox, index) => {
        return (
            <div className="checkbox" key={index}>
                <input type="checkbox" name={checkbox.value} id={checkbox.label} value={checkbox.label} />
                <label htmlFor={checkbox.label}>{checkbox.label}</label>
            </div>
        )
    })

    return (
        <div className="checkboxes">
            <h2>{field.label}</h2>
            {checkboxes}
        </div>
    )
}