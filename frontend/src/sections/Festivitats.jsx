import Button from "../components/common/Button"

const Festivitats = ({ isActive, onToggle }) => {

    return (
        <div className={`
        border-2 rounded-lg p-4 transition-all duration-300
        ${isActive
                ? 'border-blue-500 bg-blue-50 shadow-md'
                : 'border-gray-200 bg-white hover:border-gray-300'
            }
        `}>
            <Button onClick={onToggle}>
                Festivitats
            </Button>
            {isActive && (
                <div className='mt-4 p-4 bg-white'>
                    <p className='text-gray-700'>Aquí anirà el joc</p>
                </div>
            )}
        </div>
    )
}

export default Festivitats