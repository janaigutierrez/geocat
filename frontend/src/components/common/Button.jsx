const Button = ({ children, onClick, variant = 'primary', className = '', ...props }) => {
    const baseClasses = 'px-4 py-2 rounded font-medium transition-colors cursos-pointer'

    const variants = {
        primary: "bg-blue-600 hover:bg-blue-700 text-white",
        secondary: "bg-gray-600 hover:bg-gray-700 text-white",
        success: "bg-green-600 hover:bg-green-700 text-white",
        danger: "bg-red-600 hover:bg-red-700 text-white",
        outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
    }
    const buttonClasses = `${baseClasses} ${variants[variant]} ${className}`
    return (
        <button
            onClick={onClick}
            className={buttonClasses}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button