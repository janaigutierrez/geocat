const Button = ({ children, onClick, variant = 'primary', className = '', ...props }) => {
    const baseClasses = 'px-6 py-3 rounded-lg font-medium transition-all duration-300 cursor-pointer flex items-center justify-center'

    const variants = {
        primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transform hover:scale-105",
        secondary: "bg-gray-600 hover:bg-gray-700 text-white shadow-md hover:shadow-lg transform hover:scale-105",
        success: "bg-green-600 hover:bg-green-700 text-white shadow-md hover:shadow-lg transform hover:scale-105",
        danger: "bg-red-600 hover:bg-red-700 text-white shadow-md hover:shadow-lg transform hover:scale-105",
        outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white shadow-md hover:shadow-lg"
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