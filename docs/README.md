# 🗺️ GeoCat

**El joc diari de geografia catalana**

Un Wordle geogràfic on cada dia has d'endevinar un municipi de Catalunya a través de diferents pistes i mini-jocs.

[![Demo](https://img.shields.io/badge/Demo-Live-brightgreen)](https://geocat.vercel.app)
[![Version](https://img.shields.io/badge/Version-1.0.0-blue)](https://github.com/username/geocat)
[![License](https://img.shields.io/badge/License-MIT-yellow)](./LICENSE)

## 🎯 Què és GeoCat?

GeoCat és un joc educatiu que combina geografia, cultura i història catalana en format diari. Cada 24 hores apareix un nou municipi per endevinar a través de múltiples mini-jocs:

- **🏛️ Mode Clàssic**: Taula comparativa estil Wordle
- **🗺️ Mode Silueta**: Endevina per la forma geogràfica
- **🔍 Mode Zoom**: Imatge pixelada d'un monument
- **📜 Mode Descripció**: Text cultural i històric
- **🔊 Mode Àudio**: Sons de festes i tradicions

## 🎮 Com es juga?

### Mode Clàssic (Principal)
1. Escriu el nom d'un municipi català
2. Revisa les pistes en 7 categories:
   - **Nom del municipi**
   - **Província** (Barcelona, Girona, Lleida, Tarragona)
   - **Nombre d'habitants** (±1K exacte, ±2.5K aproximat)
   - **Comarca**
   - **Altitud** (±25m exacte, ±100m aproximat)
   - **Edat històrica** (Romana, Medieval, Moderna, Contemporània)
   - **Punts cardinals** (Nord, Sud, Est, Oest, Centre, etc.)

3. Usa el codi de colors per afinar:
   - 🟢 **Verd**: Correcte
   - 🟡 **Groc**: Aproximat (només per habitants i altitud)
   - 🔴 **Vermell**: Incorrecte

4. Tens 6 intents per endevinar el municipi!

## 🛠️ Stack Tecnològic

### Frontend
- **React 18** amb hooks
- **Vite** per build ràpid
- **TailwindCSS** per styling
- **React Router** per navegació
- **Framer Motion** per animacions

### Backend
- **Node.js** amb Express
- **PostgreSQL** per base de dades
- **APIs externes**: ICGC, Idescat, OpenStreetMap

### Deploy
- **Frontend**: Vercel/Netlify
- **Backend**: Railway/Supabase
- **Database**: PlanetScale/Supabase

## 🚀 Instal·lació i Desenvolupament

### Prerequesits
- Node.js 18+
- npm o yarn

### Setup local
```bash
# Clonar el repositori
git clone https://github.com/username/geocat.git
cd geocat

# Instal·lar dependencies del frontend
cd frontend
npm install

# Instal·lar dependencies del backend
cd ../backend
npm install

# Configurar variables d'entorn
cp .env.example .env
# Editar .env amb les teves claus d'API

# Executar en mode desenvolupament
npm run dev
```

### Scripts disponibles
```bash
# Frontend
npm run dev          # Servidor de desenvolupament
npm run build        # Build per producció
npm run preview      # Preview del build

# Backend
npm run dev          # Servidor amb nodemon
npm run start        # Servidor de producció
npm run migrate      # Executar migracions BD
```

## 📁 Estructura del Projecte

```
geocat/
├── frontend/                 # React + Vite app
│   ├── src/
│   │   ├── components/
│   │   │   ├── game/        # Components del joc
│   │   │   │   ├── ClassicMode.jsx
│   │   │   │   ├── GameBoard.jsx
│   │   │   │   └── GuessRow.jsx
│   │   │   ├── ui/          # Components UI generals
│   │   │   │   ├── Header.jsx
│   │   │   │   └── CountdownTimer.jsx
│   │   ├── hooks/           # Custom hooks
│   │   │   ├── useGameState.js
│   │   │   └── useDailyMunicipality.js
│   │   ├── services/        # API calls
│   │   │   └── api.js
│   │   ├── utils/           # Utilitats
│   │   │   ├── gameLogic.js
│   │   │   └── dateUtils.js
│   │   └── App.jsx
│   ├── public/
│   └── package.json
├── backend/                  # API i base de dades
│   ├── src/
│   │   ├── controllers/     # Controladors API
│   │   ├── models/          # Models de dades
│   │   ├── routes/          # Rutes API
│   │   ├── services/        # Lògica de negoci
│   │   └── utils/           # Scripts utilitats
│   ├── database/
│   │   ├── migrations/      # Migracions BD
│   │   ├── seeds/           # Dades inicials
│   │   └── scripts/         # Scripts població dades
│   └── package.json
├── docs/                     # Documentació
└── README.md
```

## 🗄️ Base de Dades

### Taula principal: `municipis`
```sql
CREATE TABLE municipis (
  id SERIAL PRIMARY KEY,
  nom_oficial VARCHAR(100) NOT NULL,
  nom_popular VARCHAR(100),
  comarca VARCHAR(50) NOT NULL,
  provincia VARCHAR(20) NOT NULL,
  poblacio INTEGER NOT NULL,
  altitud INTEGER,
  superficie_km2 DECIMAL(8,2),
  coordenades_lat DECIMAL(10,7),
  coordenades_lng DECIMAL(10,7),
  edat_historica VARCHAR(20),
  punts_cardinals VARCHAR(20),
  data_festa_major DATE,
  actiu BOOLEAN DEFAULT true,
  data_creacio TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Fonts de dades
- **ICGC**: Límits municipals i coordenades
- **Idescat**: Població i estadístiques
- **OpenStreetMap**: Dades geogràfiques complementàries
- **Wikipedia**: Informació cultural i històrica

## 🎯 Roadmap

### ✅ Fase 1: Fonaments (Completada)
- [x] Setup del projecte React + Vite
- [x] Base de dades amb municipis catalans
- [x] Mode Clàssic funcional
- [x] Sistema de rotació diària
- [x] Deploy bàsic

### 🚧 Fase 2: Contingut i Expansió (En desenvolupament)
- [ ] Mode Silueta geogràfica
- [ ] Mode Zoom amb monuments
- [ ] Mode Descripció cultural
- [ ] Admin panel per gestió de contingut
- [ ] PWA i notificacions

### 🔮 Fase 3: Premium i Gamificació (Planificat)
- [ ] Mode Àudio amb tradicions
- [ ] Sistema de puntuacions i estadístiques
- [ ] Funcionalitats socials (compartir resultats)
- [ ] Modes de dificultat personalitzables
- [ ] Expansió a altres comunitats autònomes

## 🤝 Contribució

Les contribucions són benvingudes! Si vols ajudar a millorar GeoCat:

1. Fork el projecte
2. Crea una branch (`git checkout -b feature/nova-funcionalitat`)
3. Commit els canvis (`git commit -m 'Afegir nova funcionalitat'`)
4. Push a la branch (`git push origin feature/nova-funcionalitat`)
5. Obre un Pull Request

### Contribucions especialment necessàries:
- **Contingut cultural**: Descripcions, curiositats, tradicions locals
- **Àudios**: Gravacions de festes majors, sardanes, pregons
- **Imatges**: Fotos de monuments i paisatges catalans
- **Traduccions**: Català, castellà, anglès

## 📊 Estat del Projecte

- **Municipis en BD**: 947 (tots els de Catalunya)
- **Municipis amb contingut complet**: 50
- **Mini-jocs desenvolupats**: 1/5
- **Coverage de tests**: 0% (pendent)
- **Performance Score**: 95/100

## 👥 Equip

- **[@janai-dev](https://github.com/janai-dev)** - Frontend, UX/UI, Game Logic
- **[@aleix-dev](https://github.com/aleix-dev)** - Backend, Database, Data Scraping

## 📄 Llicència

Aquest projecte està sota la llicència MIT. Veure [LICENSE](./LICENSE) per més detalls.

## 🙏 Agraïments

- **Institut Cartogràfic i Geològic de Catalunya (ICGC)** per les dades geogràfiques
- **Institut d'Estadística de Catalunya (Idescat)** per les dades demogràfiques
- **OpenStreetMap contributors** per les dades cartogràfiques
- **Wordle** per la inspiració del format de joc

---

**GeoCat** - Descobreix Catalunya jugant 🗺️

[Web](https://geocat.cat) • [Demo](https://geocat.vercel.app) • [Documentació](./docs/) • [Contribuir](./CONTRIBUTING.md)