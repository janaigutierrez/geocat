import './App.css'
import Classic from './sections/Classic'
import Escuts from './sections/Escuts'
import Festivitats from './sections/Festivitats'
import Personatges from './sections/Personatges'
import Edificis from './sections/Edificis'
import Header from './components/common/Header'

function App() {
  return (
    <>
      <Header />
      <main>
        <Classic />
        <Escuts />
        <Festivitats />
        <Personatges />
        <Edificis />
      </main>

    </>
  )
}

export default App