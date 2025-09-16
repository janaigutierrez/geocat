import { useState, useEffect } from "react"
import Button from "../components/common/Button"
import { getMunicipiAleatori, getMunicipiPerNom, buscarMunicipis } from "../data/municipis"

const Classic = ({ isActive, onToggle }) => {
    const [currentGuess, setCurrentGuess] = useState('')
    const [attempts, setAttempts] = useState([])
    const [gameStatus, setGameStatus] = useState('playing')
    const [municipiObjectiu, setMunicipiObjectiu] = useState(null)
    const [suggestions, setSuggestions] = useState([])

    useEffect(() => {
        if (isActive && !municipiObjectiu) {
            setMunicipiObjectiu(getMunicipiAleatori())
        }
    }, [isActive, municipiObjectiu])

    useEffect(() => {
        setSuggestions(buscarMunicipis(currentGuess))
    }, [currentGuess])

    const handleGuess = () => {
        if (!currentGuess.trim()) return

        const guessData = getMunicipiPerNom(currentGuess)
        if (!guessData) {
            alert('Aquest municipi no existeix!')
            return
        }

        const comparison = {
            nom: guessData.nom === municipiObjectiu.nom ? 'correct' : 'incorrect',
            provincia: guessData.provincia === municipiObjectiu.provincia ? 'correct' : 'incorrect',
            habitants: guessData.habitants === municipiObjectiu.habitants ? 'correct' : 'incorrect',
            comarca: guessData.comarca === municipiObjectiu.comarca ? 'correct' : 'incorrect',
            altitud: guessData.altitud === municipiObjectiu.altitud ? 'correct' : 'incorrect',
            edatHistorica: guessData.edatHistorica === municipiObjectiu.edatHistorica ? 'correct' : 'incorrect',
            puntsCardinals: guessData.puntsCardinals === municipiObjectiu.puntsCardinals ? 'correct' : 'incorrect',
        }

        setAttempts([...attempts, { ...guessData, comparison }])
        setCurrentGuess('')
        setSuggestions([])

        if (guessData.nom === municipiObjectiu.nom) {
            setGameStatus('won')
        } else if (attempts.length >= 5) {
            setGameStatus('lost')
        }
    }

    const resetGame = () => {
        setAttempts([])
        setCurrentGuess('')
        setGameStatus('playing')
        setMunicipiObjectiu(getMunicipiAleatori())
        setSuggestions([])
    }

    const getCellColor = (status) => {
        return status === 'correct' ? 'bg-green-700 text-white' : 'bg-red-700 text-white'
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <Button onClick={onToggle}>
                Mode Clàssic
            </Button>

            {isActive && municipiObjectiu && (
                <div className="bg-slate-800 text-white rounded-lg shadow-lg p-6 mt-4">
                    <h3 className="text-2xl font-bold text-center mb-4">
                        Endevina el municipi
                    </h3>

                    {gameStatus === "playing" && (
                        <div className="max-w-md mx-auto mb-6 relative">
                            <div className="flex gap-2">
                                <div className="flex-1 relative">
                                    <input
                                        type="text"
                                        value={currentGuess}
                                        onChange={(e) => setCurrentGuess(e.target.value)}
                                        placeholder="Escriu un municipi..."
                                        className="w-full px-4 py-2 border rounded-md text-white"
                                    />
                                    {suggestions.length > 0 && (
                                        <div className="absolute top-full left-0 right-0 bg-white border rounded-md shadow-lg z-10 mt-1">
                                            {suggestions.map((municipi) => (
                                                <div
                                                    key={municipi.id}
                                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black"
                                                    onClick={() => {
                                                        setCurrentGuess(municipi.nom)
                                                        setSuggestions([])
                                                    }}
                                                >
                                                    {municipi.nom}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <Button onClick={handleGuess}>
                                    Provar
                                </Button>
                            </div>
                        </div>
                    )}

                    {attempts.length > 0 && (
                        <table className="w-full text-sm mb-6 bg-white text-black rounded">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="p-2">Municipi</th>
                                    <th className="p-2">Província</th>
                                    <th className="p-2">Habitants</th>
                                    <th className="p-2">Comarca</th>
                                    <th className="p-2">Altitud</th>
                                    <th className="p-2">Època</th>
                                    <th className="p-2">Ubicació</th>
                                </tr>
                            </thead>
                            <tbody>
                                {attempts.map((attempt, index) => (
                                    <tr key={index}>
                                        <td className={`p-2 ${getCellColor(attempt.comparison.nom)}`}>
                                            {attempt.nom}
                                        </td>
                                        <td className={`p-2 ${getCellColor(attempt.comparison.provincia)}`}>
                                            {attempt.provincia}
                                        </td>
                                        <td className={`p-2 ${getCellColor(attempt.comparison.habitants)}`}>
                                            {attempt.habitants}
                                        </td>
                                        <td className={`p-2 ${getCellColor(attempt.comparison.comarca)}`}>
                                            {attempt.comarca}
                                        </td>
                                        <td className={`p-2 ${getCellColor(attempt.comparison.altitud)}`}>
                                            {attempt.altitud}m
                                        </td>
                                        <td className={`p-2 ${getCellColor(attempt.comparison.edatHistorica)}`}>
                                            {attempt.edatHistorica}
                                        </td>
                                        <td className={`p-2 ${getCellColor(attempt.comparison.puntsCardinals)}`}>
                                            {attempt.puntsCardinals}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}

                    {gameStatus === "won" && (
                        <div className="text-center">
                            <div className="bg-green-100 p-4 rounded mb-4">
                                Has guanyat! Era {municipiObjectiu.nom}!
                            </div>
                            <Button onClick={resetGame}>Jugar de nou</Button>
                        </div>
                    )}

                    {gameStatus === "lost" && (
                        <div className="text-center">
                            <div className="bg-red-100 p-4 rounded mb-4">
                                Has perdut! Era {municipiObjectiu.nom}
                            </div>
                            <Button onClick={resetGame}>Intentar de nou</Button>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default Classic