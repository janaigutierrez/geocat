import './App.css'
import { useState } from 'react'
import Classic from './sections/Classic'
import Escuts from './sections/Escuts'
import Festivitats from './sections/Festivitats'
import Personatges from './sections/Personatges'
import Edificis from './sections/Edificis'
import Header from './components/common/Header'

function App() {
  const [activeGame, setActiveGame] = useState(null)

  // He mapejat un array dels jocs per poder mostrar només el seleccionat

  const games = [
    { id: 'classic', component: Classic, name: 'Classic' },
    { id: 'escuts', component: Escuts, name: 'Escuts' },
    { id: 'festivitats', component: Festivitats, name: 'Festivitats' },
    { id: 'personatges', component: Personatges, name: 'Personatges' },
    { id: 'edificis', component: Edificis, name: 'Edificis' }
  ]

  const handleGameToggle = (gameId) => {
    if (activeGame === gameId) {
      setActiveGame(null)
    } else {
      setActiveGame(gameId)
    }
  }

  return (
    <div className='w-full bg-gray-50'>
      {/* Capçalera */}
      <Header />

      {/* Part principal */}
      <main className='max-w-4xl mx-auto p-6 space-y-4'>
        {games.map(({ id, component: Component }) => {
          // Si hi ha un joc actiu, només mostrem aquest joc
          if (activeGame && activeGame !== id) {
            return null
          }

          return (
            <Component
              key={id}
              isActive={activeGame === id}
              onToggle={() => handleGameToggle(id)}
              showBackButton={activeGame === id}
            />
          )
        })}
      </main>
    </div>
  )
}

export default App