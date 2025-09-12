import { useState } from "react"
import Button from "../components/common/Button"

const Classic = () => {
    const [showGame, setShowGame] = useState(false)

    return (
        <div>
            <Button onClick={() => setShowGame(!showGame)}>
                Clàssic
            </Button>

            {showGame && (
                <div>
                    <p>Aquí anirà el joc</p>
                </div>
            )}
        </div>
    )
}

export default Classic