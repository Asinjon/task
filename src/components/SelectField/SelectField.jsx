import "./index.css";

export default function({select}) {
    
    const options = select.values.map((opt, index) => {
        return <option key={index} value={opt.value}>{opt.label}</option>
    })

    return (
        <div className="select">
            <h2>{select.label}</h2>
            <select name="" id="">
                {options}
            </select>
        </div>
    )
}