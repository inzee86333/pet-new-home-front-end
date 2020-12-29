export function TextInput({ id, label, placeholder, value, onChange }) {
    return (
        <div>
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor={id}>
                {label}
            </label>
            <input className="appearance-none block w-full text-grey-darker border rounded py-3 px-4 mb-3" id={id} type="text" placeholder={placeholder} value={value} onChange={onChange}></input>
        </div>
    )
}

export function PasswordInput({ id, label, placeholder, value, onChange }) {
    return (
        <div>
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor={id}>
                {label}
            </label>
            <input className="appearance-none block w-full text-grey-darker border rounded py-3 px-4 mb-3" id={id} type="password" placeholder={placeholder} value={value} onChange={onChange}></input>
        </div>
    )
}

export function PhoneNumberInput({ id, label, placeholder, value, onChange }) {
    return (
        <div>
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor={id}>
                {label}
            </label>
            <input className="appearance-none block w-full text-grey-darker border rounded py-3 px-4 mb-3" id={id} type="text" placeholder={placeholder} value={value} onChange={onChange} maxLength="10"></input>
        </div>
    )
}

export function EmailInput({ id, label, placeholder, value, onChange }) {
    return (
        <div>
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor={id}>
                {label}
            </label>
            <input className="appearance-none block w-full text-grey-darker border rounded py-3 px-4 mb-3" id={id} type="email" placeholder={placeholder} value={value} onChange={onChange}></input>
        </div>
    )
}

export function TextAreaInput({ id, label, placeholder, value, onChange }) {
    return (
        <div className="md:w-full px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor={id}>
                {label}
            </label>
            <textarea className="appearance-none block w-full text-grey-darker border rounded py-3 px-4 mb-3" id={id} placeholder={placeholder} value={value} onChange={onChange} />
        </div>
    )
}

export function ImageInput({ id, label, placeholder, value, onChange }) {
    return (
        <div className="md:w-full px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor={id}>
                {label}
            </label>
            <textarea className="appearance-none block w-full text-grey-darker border rounded py-3 px-4 mb-3" id={id} placeholder={placeholder} value={value} onChange={onChange} />
        </div>
    )
}