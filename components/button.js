export function PrimaryButton({ id, label, onClick, type}) {
    return (
        <button className="py-2 min-w-min w-36 mx-auto px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
            type={type} onClick={onClick}>
            {label}
        </button>
    )
}

export function SecondaryButton({ id, label, onClick, type}) {
    return (    
        <button className="mx-auto uppercase px-4 py-2 my-2 rounded-full border border-green-600 text-green-600 max-w-max shadow-sm hover:bg-green-600 hover:text-white"
            type={type} onClick={onClick}>
            {label}
        </button>
    )
}