import { Users, Mountain, Calendar, Map, MapPin } from 'lucide-react'

const Header = () => {
    return (
        <header className='flex justify-between items-center px-20 py-6 w-full backdrop-blur-md bg-white/30 border-b border-white/20 shadow-lg'>
            <div>
                <h1 className="text-4xl font-bold text-white drop-shadow-lg flex items-center">
                    <MapPin className="w-8 h-8 mr-2" />
                    GeoCat
                </h1>
                <h2 className="text-lg text-white/90 mt-2 drop-shadow-md">
                    El joc per conèixer Catalunya
                </h2>
            </div>
            <Mountain className="w-12 h-12 text-white/80 drop-shadow-lg mr-0" />
        </header>
    )
}

export default Header