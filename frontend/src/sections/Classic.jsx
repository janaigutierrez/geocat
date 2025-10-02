import { useState, useEffect } from "react"
import { Building2, Trophy, RotateCcw, ArrowLeft } from "lucide-react"
import Button from "../components/common/Button"
import { getMunicipiAleatori, getMunicipiPerNom, buscarMunicipis } from "../data/municipis"

const Classic = ({ isActive, onToggle, showBackButton }) => {
    const [currentGuess, setCurrentGuess] = useState('')
    const [attempts, setAttempts] = useState([])
    const [gameStatus, setGameStatus] = useState('playing')
    const [municipiObjectiu, setMunicipiObjectiu] = useState(null)
    const [suggestions, setSuggestions] = useState([])
    const [selectedIndex, setSelectedIndex] = useState(-1)

    useEffect(() => {
        if (isActive && !municipiObjectiu) {
            setMunicipiObjectiu(getMunicipiAleatori())
        }
    }, [isActive, municipiObjectiu])

    useEffect(() => {
        if (currentGuess.length >= 2) {
            const filtered = buscarMunicipis(currentGuess).filter(municipi =>
                municipi.nom.toLowerCase().startsWith(currentGuess.toLowerCase())
            )
            setSuggestions(filtered)
        } else {
            setSuggestions([])
        }
        setSelectedIndex(-1)
    }, [currentGuess])

    const handleGuess = () => {
        let municipiToGuess = currentGuess

        if (selectedIndex >= 0 && suggestions[selectedIndex]) {
            municipiToGuess = suggestions[selectedIndex].nom
        }

        if (!municipiToGuess.trim()) return

        const guessData = getMunicipiPerNom(municipiToGuess)
        if (!guessData) {
            alert('Aquest municipi no existeix!')
            return
        }

        const comparison = {
            nom: guessData.nom === municipiObjectiu.nom ? 'correct' : 'incorrect',
            provincia: guessData.provincia === municipiObjectiu.provincia ? 'correct' : 'incorrect',
            habitants: getNumericComparison(guessData.habitants, municipiObjectiu.habitants),
            comarca: guessData.comarca === municipiObjectiu.comarca ? 'correct' : 'incorrect',
            altitud: getNumericComparison(guessData.altitud, municipiObjectiu.altitud),
            edatHistorica: guessData.edatHistorica === municipiObjectiu.edatHistorica ? 'correct' : 'incorrect',
            puntsCardinals: guessData.puntsCardinals === municipiObjectiu.puntsCardinals ? 'correct' : 'incorrect',
        }

        setAttempts([...attempts, { ...guessData, comparison }])
        setCurrentGuess('')
        setSuggestions([])
        setSelectedIndex(-1)

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
        setSelectedIndex(-1)
    }

    const handleKeyDown = (e) => {
        if (suggestions.length === 0) return

        if (e.key === 'ArrowDown') {
            e.preventDefault()
            setSelectedIndex(prev =>
                prev < suggestions.length - 1 ? prev + 1 : 0
            )
        } else if (e.key === 'ArrowUp') {
            e.preventDefault()
            setSelectedIndex(prev =>
                prev > 0 ? prev - 1 : suggestions.length - 1
            )
        } else if (e.key === 'Enter') {
            e.preventDefault()
            handleGuess()
        } else if (e.key === 'Escape') {
            setSuggestions([])
            setSelectedIndex(-1)
        }
    }

    const getCellColor = (status) => {
        return status === 'correct' ? 'bg-green-500' : 'bg-red-500'
    }

    const getNumericComparison = (guess, target) => {
        if (guess === target) return { status: 'correct', arrow: '' }
        return guess < target
            ? { status: 'incorrect', arrow: '↑' }
            : { status: 'incorrect', arrow: '↓' }
    }

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
                        <Building2 className="w-4 h-4 inline mr-2" />
                        Mode Clàssic
                    </>
                )}
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
                                        onKeyDown={handleKeyDown}
                                        placeholder="Escriu un municipi..."
                                        className="w-full px-4 py-2 border rounded-md !text-black !bg-white"
                                    />
                                    {suggestions.length > 0 && (
                                        <div className="absolute top-full left-0 right-0 bg-white border rounded-md shadow-lg z-10 mt-1">
                                            {suggestions.map((municipi, index) => (
                                                <div
                                                    key={municipi.id}
                                                    className={`px-4 py-2 cursor-pointer text-black border-b last:border-b-0 ${index === selectedIndex
                                                        ? 'bg-blue-100'
                                                        : 'hover:bg-gray-100'
                                                        }`}
                                                    onClick={() => {
                                                        setCurrentGuess(municipi.nom)
                                                        setSuggestions([])
                                                        setSelectedIndex(-1)
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
                        <div className="overflow-x-auto mb-6">
                            <div className="min-w-[800px]">
                                <div className="grid grid-cols-7 gap-2 text-sm text-gray-300 text-center font-medium mb-4">
                                    <div>Municipi</div>
                                    <div>Província</div>
                                    <div>Habitants</div>
                                    <div>Comarca</div>
                                    <div>Altitud</div>
                                    <div>Època</div>
                                    <div>Ubicació</div>
                                </div>

                                {attempts.map((attempt, index) => (
                                    <div key={index} className="grid grid-cols-7 gap-2 mb-2">
                                        <div className={`${getCellColor(attempt.comparison.nom)} text-white p-3 rounded-lg text-center font-bold text-sm`}>
                                            {attempt.nom}
                                        </div>
                                        <div className={`${getCellColor(attempt.comparison.provincia)} text-white p-3 rounded-lg text-center font-bold text-sm`}>
                                            {attempt.provincia}
                                        </div>
                                        <div className={`${getCellColor(attempt.comparison.habitants.status)} text-white p-3 rounded-lg text-center font-bold text-sm relative`}>
                                            <div>{attempt.habitants.toLocaleString()}</div>
                                            {attempt.comparison.habitants.arrow && (
                                                <div className="text-lg">{attempt.comparison.habitants.arrow}</div>
                                            )}
                                        </div>
                                        <div className={`${getCellColor(attempt.comparison.comarca)} text-white p-3 rounded-lg text-center font-bold text-sm`}>
                                            {attempt.comarca}
                                        </div>
                                        <div className={`${getCellColor(attempt.comparison.altitud.status)} text-white p-3 rounded-lg text-center font-bold text-sm relative`}>
                                            <div>{attempt.altitud}m</div>
                                            {attempt.comparison.altitud.arrow && (
                                                <div className="text-lg">{attempt.comparison.altitud.arrow}</div>
                                            )}
                                        </div>
                                        <div className={`${getCellColor(attempt.comparison.edatHistorica)} text-white p-3 rounded-lg text-center font-bold text-sm`}>
                                            {attempt.edatHistorica}
                                        </div>
                                        <div className={`${getCellColor(attempt.comparison.puntsCardinals)} text-white p-3 rounded-lg text-center font-bold text-sm`}>
                                            {attempt.puntsCardinals}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {gameStatus === "won" && (
                        <div className="text-center">
                            <div className="bg-green-100 p-4 rounded mb-4 flex items-center justify-center gap-2">
                                <Trophy className="w-5 h-5 text-green-600" />
                                <span className="text-green-800">Has guanyat! Era <strong>{municipiObjectiu.nom}</strong>!</span>
                            </div>
                            <Button onClick={resetGame}>
                                <RotateCcw className="w-4 h-4 inline mr-2" />
                                Jugar de nou
                            </Button>
                        </div>
                    )}

                    {gameStatus === "lost" && (
                        <div className="text-center">
                            <div className="bg-red-100 p-4 rounded mb-4 text-red-800">
                                Has perdut! Era <strong>{municipiObjectiu.nom}</strong>
                            </div>
                            <Button onClick={resetGame}>
                                <RotateCcw className="w-4 h-4 inline mr-2" />
                                Intentar de nou
                            </Button>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default Classic