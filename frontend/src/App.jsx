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

  return (
    <div className='min-h-screen bg-gray-50'>
      <Header />
      <main className='max-w-4xl mx-auto p-6 space-y-4'>
        <Classic
          isActive={activeGame === 'classic'}
          onToggle={() => setActiveGame(activeGame === 'classic' ? null : 'classic')} />
        <Escuts isActive={activeGame === 'escuts'}
          onToggle={() => setActiveGame(activeGame === 'escuts' ? null : 'escuts')} />
        <Festivitats isActive={activeGame === 'festivitats'}
          onToggle={() => setActiveGame(activeGame === 'festivitats' ? null : 'festivitats')} />
        <Personatges isActive={activeGame === 'personatges'}
          onToggle={() => setActiveGame(activeGame === 'personatges' ? null : 'personatges')} />
        <Edificis isActive={activeGame === 'edificis'}
          onToggle={() => setActiveGame(activeGame === 'edificis' ? null : 'edificis')} />
      </main>

    </div>
  )
}

export default App