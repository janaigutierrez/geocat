# 🗺️ GeoCat

**El joc diari de geografia catalana**

Un repte geogràfic on cada dia has d'endevinar un municipi diferent de Catalunya i podràs realitzar també 4 mini-jocs diferents.

[![Demo](https://img.shields.io/badge/Demo-Live-brightgreen)](https://geocat.netlify.app)
[![Version](https://img.shields.io/badge/Version-1.0.0-blue)](https://github.com/username/geocat)

##  Què és GeoCat?

GeoCat és un joc educatiu que combina geografia, cultura i història catalana en format diari. Cada 24 hores apareix un nou municipi per endevinar a través de 5 mini-jocs complementaris:

- **Mode Clàssic**: Taula comparativa amb 7 categories on has d'anar provant fins endevinar el municipi.
- **Mode Escuts**: Endevina per l'escut heràldic (imatge pixelada progressiva)
- **Mode Festivitats**: Vídeos de 5 segons de festes majors i tradicions
- **Mode Personatges**: Cites famoses de figures catalanes
- **Mode Edificis**: Monuments i arquitectura emblemàtica

## Com es juga?

### Mode Clàssic (Principal)
Taula comparativa amb 7 categories del municipi:
- **Nom del municipi** (a endevinar)
- **Província** (Barcelona, Girona, Lleida, Tarragona)
- **Habitants** (±1K exacte, ±2.5K aproximat)
- **Comarca**
- **Altitud** (±25m exacte, ±100m aproximat)
- **Edat històrica** (Romana, Medieval, Moderna, Contemporània)
- **Punts cardinals** (Nord, Sud, Est, Oest, Costa, Interior, etc.)

**Codi de colors:**
- 🟢 **Verd**: Correcte
- 🟡 **Groc**: Aproximat (només habitants i altitud)
- 🔴 **Vermell**: Incorrecte

###  Mode Escuts
1. Veus l'escut municipal molt pixelat
2. Cada intent fallit millora la resolució
3. Reps pistes del municipi progressivament:
   - Intent 2: Província
   - Intent 3: Rang de població
   - Intent 4: Comarca
   - Intent 5: Característica destacada

###  Mode Festivitats
1. Vídeo de 5 segons d'una festa o tradició local
2. Pistes culturals per cada error:
   - Intent 2: Ubicació (Costa/Interior/Muntanya)
   - Intent 3: Tipus de festa (Religiosa/Cultural/Popular)
   - Intent 4: Elements (Música/Pirotècnia/Balls/Construccions)
   - Intent 5: Època de l'any
   - Intent 6: Comarca o pista decisiva

###  Mode Personatges
1. Cita famosa d'un personatge català
2. Pistes biogràfiques cada 3 intents:
   - Intent 3: Època/Segle de vida
   - Intent 4: Professió o camp d'activitat
   - Intent 5: Lloc d'origen o residència
   - Intent 6: Obra principal o llegat

###  Mode Edificis
1. Imatge pixelada d'un monument o edifici emblemàtic
2. Progressió visual similar als escuts
3. Pistes arquitectòniques i històriques

## Stack Tecnològic

### Frontend
- **React 18** amb hooks
- **Vite** per build ràpid
- **CSS3** per styling
- Estructura modular amb sections

### Backend (Planificat)
- **Node.js** amb Express
- **PostgreSQL** per base de dades
- **APIs externes**: ICGC, Idescat, OpenStreetMap

##  Instal·lació i Desenvolupament

### Setup local
```bash
# Clonar el repositori
git clone https://github.com/username/geocat.git
cd geocat

# Instal·lar dependencies
npm install

# Executar en mode desenvolupament
npm run dev
```

### Scripts disponibles
```bash
npm run dev          # Servidor de desenvolupament
npm run build        # Build per producció
npm run preview      # Preview del build
```

##  Estructura del Projecte

```
geocat/
├── src/
│   ├── sections/           # Components de cada mini-joc
│   │   ├── Classic.jsx     # Mode clàssic
│   │   ├── Escuts.jsx      # Escuts heràldics
│   │   ├── Festivitats.jsx # Festes majors
│   │   ├── Personatges.jsx # Personatges catalans
│   │   └── Edificis.jsx    # Edificis emblemàtics
│   ├── App.jsx             # Component principal
│   ├── App.css             # Estils globals
│   └── main.jsx            # Entry point
├── public/
├── package.json
└── README.md
```

##  Exemples de Contingut

###  Escuts Recognoscibles
- **Barcelona**: Creu de Sant Jordi + barres catalanes
- **Girona**: Lleó + torre + pont
- **Sitges**: Tres clavells vermells
- **Vic**: Claus de Sant Pere
- **Berga**: Ós + muntanyes

###  Festes Emblemàtiques
- **Patum de Berga**: Gegants, foc, música
- **Castells de Valls**: Construccions humanes
- **Correfocs**: Diables amb pirotècnia
- **Havaneres**: Cantaires a la costa + rom cremat
- **Sardanes**: Balls en cercle

###  Personatges i Cites
- **Salvador Dalí**: *"La diferència entre un boig i jo és que jo no estic boig"*
- **Antoni Gaudí**: *"L'originalitat consisteix en tornar a l'origen"*
- **Jacint Verdaguer**: *"Canigó, Canigó, nostre Canigó!"*
- **Josep Pla**: *"El millor que es pot fer amb les paraules és respectar-les"*

###  Edificis Icònics
- **Sagrada Família** (Barcelona)
- **Pont Vell** (Besalú)
- **Monestir de Poblet**
- **Casa Batlló** (Barcelona)
- **Castell de Cardona**

## Contribució

Contribucions benvingudes! Especialment necessàries:

### Contingut Cultural
- **Descripcions** de festes locals
- **Cites** de personatges catalans
- **Fotos** d'escuts municipals
- **Vídeos** de tradicions (Creative Commons)

### Desenvolupament
1. Fork el projecte
2. Crea branch (`git checkout -b feature/nova-funcionalitat`)
3. Commit (`git commit -m 'Afegir nova funcionalitat'`)
4. Push (`git push origin feature/nova-funcionalitat`)
5. Pull Request

##  Equip

- **[@janai-dev](https://github.com/janai-dev)** - Frontend, Game Logic, UX/UI
- **[@aleix-dev](https://github.com/aleix-dev)** - Backend, Database, Data Collection

## Estat Actual del Projecte

- **Components creats**: 1/5 mini-jocs
- **Funcionalitat**: Estructura base + console logs
- **Dades**: Hardcoded per testing
- **UI**: Mínima, funcional
- **Backend**: Pendent


## Agraïments

- **Institut Cartogràfic i Geològic de Catalunya (ICGC)**
- **Institut d'Estadística de Catalunya (Idescat)**
- **Wordle** per la inspiració del format

---

**GeoCat** - Descobreix Catalunya jugant

[Demo](https://geocat.netlify.app) • [Repositori](https://github.com/janaigutierrez/geocat)