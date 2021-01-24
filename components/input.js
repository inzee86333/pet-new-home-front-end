import Select from 'react-select';

export function TextInput({ id, label, placeholder, value, onChange, type, maxLength, required }) {
    let alert = '';
    if (required) {
        alert = (value === '') ? '*ต้องการ' : '';
    }
    return (
        <div>
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor={id}>
                {label} <a className="text-red-500">{alert}</a>
            </label>
            <input className="appearance-none block w-full text-grey-darker border rounded py-3 px-4 mb-3" id={id} type="text"
                placeholder={placeholder} value={value} onChange={onChange} type={type} maxLength={maxLength}></input>
        </div>
    )
}

export function TextSelectInput({ id, label, placeholder, value, onChange, options, required, className }) {
    let alert = '';
    if (required) {
        alert = (value === null) ? '*ต้องการ' : '';
    }
    return (
        <div>
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor={id}>
                {label} <a className="text-red-500">{alert}</a>
            </label>
            <Select
                className={className}
                instanceId={id}
                options={options}
                onChange={onChange}
                value={value}
                placeholder={placeholder}
            ></Select>
        </div>
    )
}

export function TextAreaInput({ id, label, placeholder, value, onChange, required }) {
    let alert = '';
    if (required) {
        alert = (value === '') ? '*ต้องการ' : '';
    }
    return (
        <div className="md:w-full px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor={id}>
                {label} <a className="text-red-500">{alert}</a>
            </label>
            <textarea className="appearance-none block w-full text-grey-darker border rounded py-3 px-4 mb-3" id={id}
                placeholder={placeholder} value={value} onChange={onChange} />
        </div>
    )
}
