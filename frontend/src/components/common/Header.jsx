import { Users, Mountain, Calendar, Map, MapPin } from 'lucide-react'

/* Aqui t'he posat d'exemple els emojis, els importo de la bilbioteca lucide-react i els pots afegir tal qual on vulguis del codi com aqui */
/* Fixa't-hi com estan afegits i prova de ficar si vols algun més, si no en el Header en qualsevol altre component */
/* Hauràs d'instalar la llibreria amb: 'npm install lucide-react' i ja podras ficar-los tal qual com aqui */

const Header = () => {
    return (
        <header className='flex justify-between items-center pl-20 border w-full py-6'>
            <div>
                <h1 className="text-4xl font-bold text-blue-600 flex items-center">
                    <MapPin className="w-8 h-8 mr-2" />
                    GeoCat
                </h1>
                <h2 className="text-lg text-gray-600 mt-2">
                    El joc per conèixer Catalunya
                </h2>
            </div>
            <Mountain className="w-12 h-12 text-blue-500 mr-20" />
        </header>

    )
}

export default Header