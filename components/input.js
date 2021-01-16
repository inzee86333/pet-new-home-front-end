export function TextInput({ id, label, placeholder, value, onChange, type, maxLength, alertError }) {
    return (
        <div>
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor={id}>
                {label} <a className="text-red-500">{alertError}</a>
            </label>
            <input className="appearance-none block w-full text-grey-darker border rounded py-3 px-4 mb-3" id={id} type="text" 
            placeholder={placeholder} value={value} onChange={onChange} type={type} maxLength={maxLength}></input>
        </div>
    )
}

export function TextAreaInput({ id, label, placeholder, value, onChange, alertError }) {
    return (
        <div className="md:w-full px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor={id}>
                {label} <a className="text-red-500">{alertError}</a>
            </label>
            <textarea className="appearance-none block w-full text-grey-darker border rounded py-3 px-4 mb-3" id={id} 
            placeholder={placeholder} value={value} onChange={onChange} />
        </div>
    )
}
