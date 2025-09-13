const Button = ({ children, onClick }) => {
    return (
        <button
            onClick={onClick}
            className='px-4 py-2  font-medium transition-colors'
        >
            {children}
        </button>
    )
}

export default Button