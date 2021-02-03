export function PrimaryButton({label, onClick, type, className}) {
    return (
        <button className={ `py-2 min-w-max w-36 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 ${className}` }
            type={type} onClick={onClick}>
            {label}
        </button>
    )
}

export function SecondaryButton({label, onClick, type, className}) {
    return (    
        <button className={ `uppercase px-4 py-2 my-2 rounded-full border border-green-600 text-green-600 max-w-max shadow-sm hover:bg-green-600 hover:text-white ${className}` }
            type={type} onClick={onClick}>
            {label}
        </button>
    )
}

export function TextButton({label, href, type}) {
    return (
        <a className="text-green-500 font-bold hover:text-green-800" href={href} type={type}>{label}</a>
    );
}