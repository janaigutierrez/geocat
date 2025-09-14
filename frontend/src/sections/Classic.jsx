import { useState, useEffect } from "react"
import Button from "../components/common/Button"
import { getMunicipiAleatori, getMunicipiPerNom } from "../data/municipis.js"

const Classic = () => {
    const [showGame, setShowGame] = useState(false)
    const [currentGuess, setCurrentGuess] = useState("")
    const [attempts, setAttempts] = useState([])
    const [gameStatus, setGameStatus] = useState("playing")
    const [municipiObjectiu, setMunicipiObjectiu] = useState(null)

    useEffect(() => {
        if (showGame && !municipiObjectiu) {
            setMunicipiObjectiu(getMunicipiAleatori())
        }
    }, [showGame, municipiObjectiu])

    const handleGuess = () => {
        if (!currentGuess.trim()) return

        const guessData = getMunicipiPerNom(currentGuess)
        if (!guessData) {
            alert("Aquest municipi no existeix!")
            return
        }

        const comparison = {
            nom: guessData.nom === municipiObjectiu.nom ? "correct" : "incorrect",
            provincia: guessData.provincia === municipiObjectiu.provincia ? "correct" : "incorrect",
            habitants: guessData.habitants === municipiObjectiu.habitants ? "correct" : "incorrect",
            comarca: guessData.comarca === municipiObjectiu.comarca ? "correct" : "incorrect",
            altitud: guessData.altitud === municipiObjectiu.altitud ? "correct" : "incorrect",
            edatHistorica: guessData.edatHistorica === municipiObjectiu.edatHistorica ? "correct" : "incorrect",
            puntsCardinals: guessData.puntsCardinals === municipiObjectiu.puntsCardinals ? "correct" : "incorrect"
        }

        setAttempts([...attempts, { ...guessData, comparison }])
        setCurrentGuess("")

        if (guessData.nom === municipiObjectiu.nom) {
            setGameStatus("won")
        } else if (attempts.length >= 20) {
            setGameStatus("lost")
        }
    }

    const getCellColor = (status) => {
        return status === "correct" ? "bg-green-500 text-white" : "bg-red-500 text-white"
    }

    const resetGame = () => {
        setAttempts([])
        setCurrentGuess("")
        setGameStatus("playing")
        setMunicipiObjectiu(getMunicipiAleatori())
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <Button onClick={() => setShowGame(!showGame)}>
                Mode Clàssic
            </Button>

            {showGame && municipiObjectiu && (
                <div className="bg-white rounded-lg shadow-lg p-6 mt-4">
                    <h3 className="text-2xl font-bold text-center mb-4">
                        Endevina el municipi
                    </h3>

                    {gameStatus === "playing" && (
                        <div className="flex gap-2 max-w-md mx-auto mb-6">
                            <input
                                type="text"
                                value={currentGuess}
                                onChange={(e) => setCurrentGuess(e.target.value)}
                                placeholder="Escriu un municipi..."
                                className="flex-1 px-4 py-2 border rounded-md"
                            />
                            <Button onClick={handleGuess}>
                                Provar
                            </Button>
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
                            <div className="bg-green-500 p-4 rounded mb-4">
                                Has guanyat! Era {municipiObjectiu.nom}!
                            </div>
                            <Button onClick={resetGame}>Jugar de nou</Button>
                        </div>
                    )}

                    {gameStatus === "lost" && (
                        <div className="text-center">
                            <div className="bg-red-500 p-4 rounded mb-4">
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