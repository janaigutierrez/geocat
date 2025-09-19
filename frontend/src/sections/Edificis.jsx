import { Building, ArrowLeft } from "lucide-react"
import Button from "../components/common/Button"

const Edificis = ({ isActive, onToggle, showBackButton }) => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <Button onClick={onToggle}>
                {showBackButton ? (
                    <>
                        <ArrowLeft className="w-4 h-4 inline mr-2" />
                        Tornar enrere
                    </>
                ) : (
                    <>
                        <Building className="w-4 h-4 inline mr-2" />
                        Edificis emblemàtics
                    </>
                )}
            </Button>

            {isActive && (
                <div className="bg-slate-800 text-white rounded-lg shadow-lg p-6 mt-4">
                    <h3 className="text-2xl font-bold text-center mb-4">
                        Joc d'Edificis
                    </h3>
                    <p className='text-gray-300 text-center'>Aquí anirà el joc d'edificis</p>
                </div>
            )}
        </div>
    )
}

export default Edificis