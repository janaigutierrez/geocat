// src/sections/Classic.jsx
import Button from "../components/common/Button.jsx"
import { useState, useEffect } from "react"

const Classic = ({ isActive, onToggle }) => {
  const [municipis, setMunicipis] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    if (!isActive) return
    let alive = true
    setLoading(true); setError("")
    ;(async () => {
      try {
        const res = await fetch("/municipis.json")
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = await res.json()
        if (alive) setMunicipis(Array.isArray(data) ? data : [])
      } catch (e) {
        if (alive) setError(e.message || "Error desconegut")
      } finally {
        if (alive) setLoading(false)
      }
    })()
    return () => { alive = false }
  }, [isActive])

  return (
    <div
      className={`
        border-2 rounded-lg p-4 transition-all duration-300
        ${isActive ? "border-blue-500 bg-blue-50 shadow-md" : "border-gray-200 bg-white hover:border-gray-300"}
      `}
    >
      <Button onClick={onToggle}>Clàssic</Button>

      {isActive && (
        <div className="mt-4 p-4 bg-white rounded">
          {loading && <p className="text-gray-500">Carregant dades…</p>}
          {error && <p className="text-red-600">S’ha produït un error: {error}</p>}

          {!loading && !error && (
            <ul className="space-y-3">
              {municipis.map((m) => (
                <li key={m.id} className="border p-3 rounded-lg shadow-sm bg-gray-50">
                  <h3 className="font-bold text-lg text-gray-900">{m.nom}</h3>
                  <p className="text-gray-600">
                    Comarca: {m.comarca} | Població: {Number(m.poblacio).toLocaleString("ca-ES")}
                  </p>
                  {m.escut && (
                    
                <img
                    src={m.escut}
                    alt={`Escut de ${m.nom}`}
                    width={64}
                    height={64}
                    className="w-16 h-16 mt-2 object-contain"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    crossOrigin="anonymous"
                    onError={(e) => {
                        // si el JSON porta un SVG de Wikimedia, prova automàticament la versió PNG thumb
                     const src = e.currentTarget.src
                        if (/wikipedia\.org\/wikipedia\/commons\/(?!thumb).*\.svg$/i.test(src)) {
                        const png = src.replace(
                        /wikipedia\.org\/wikipedia\/commons\//,
                        "wikipedia.org/wikipedia/commons/thumb/"
                    ).replace(/\.svg$/i, "/120px-Escut.png") // darrer segment és el nom; si no casa, fem servir fallback
                    e.currentTarget.src = png
                } else {
                    // fallback final a un logo local
                e.currentTarget.src = "/logo.png"
                }
            }}
        />
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}

export default Classic
