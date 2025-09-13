const Button = ({ children, onClick }) => {
    return (
        <button
            onClick={onClick}
            className='px-8 py-2 text-center font-medium transition-colors w-fit mx-auto block'
        >
            {children}
        </button>
    )
}

export default Button