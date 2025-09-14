export const municipis = [
    {
        id: 1,
        nom: "Barcelona",
        provincia: "Barcelona",
        habitants: 1620343,
        comarca: "Barcelonès",
        altitud: 12,
        edatHistorica: "Romana",
        puntsCardinals: "Costa"
    },
    {
        id: 2,
        nom: "Girona",
        provincia: "Girona",
        habitants: 103369,
        comarca: "Gironès",
        altitud: 70,
        edatHistorica: "Medieval",
        puntsCardinals: "Interior"
    },
    {
        id: 3,
        nom: "Lleida",
        provincia: "Lleida",
        habitants: 140403,
        comarca: "Segrià",
        altitud: 150,
        edatHistorica: "Romana",
        puntsCardinals: "Interior"
    },
    {
        id: 4,
        nom: "Tarragona",
        provincia: "Tarragona",
        habitants: 134515,
        comarca: "Tarragonès",
        altitud: 68,
        edatHistorica: "Romana",
        puntsCardinals: "Costa"
    },
    {
        id: 5,
        nom: "Badalona",
        provincia: "Barcelona",
        habitants: 223506,
        comarca: "Barcelonès",
        altitud: 10,
        edatHistorica: "Romana",
        puntsCardinals: "Costa"
    },
    {
        id: 6,
        nom: "Sabadell",
        provincia: "Barcelona",
        habitants: 215760,
        comarca: "Vallès Occidental",
        altitud: 190,
        edatHistorica: "Medieval",
        puntsCardinals: "Interior"
    },
    {
        id: 7,
        nom: "L'Hospitalet de Llobregat",
        provincia: "Barcelona",
        habitants: 265444,
        comarca: "Barcelonès",
        altitud: 5,
        edatHistorica: "Medieval",
        puntsCardinals: "Interior"
    },
    {
        id: 8,
        nom: "Terrassa",
        provincia: "Barcelona",
        habitants: 224111,
        comarca: "Vallès Occidental",
        altitud: 277,
        edatHistorica: "Romana",
        puntsCardinals: "Interior"
    },
    {
        id: 9,
        nom: "Mataró",
        provincia: "Barcelona",
        habitants: 129749,
        comarca: "Maresme",
        altitud: 35,
        edatHistorica: "Romana",
        puntsCardinals: "Costa"
    },
    {
        id: 10,
        nom: "Reus",
        provincia: "Tarragona",
        habitants: 107211,
        comarca: "Baix Camp",
        altitud: 134,
        edatHistorica: "Medieval",
        puntsCardinals: "Interior"
    },
    {
        id: 11,
        nom: "Manresa",
        provincia: "Barcelona",
        habitants: 77285,
        comarca: "Bages",
        altitud: 238,
        edatHistorica: "Medieval",
        puntsCardinals: "Interior"
    },
    {
        id: 12,
        nom: "Vic",
        provincia: "Barcelona",
        habitants: 47271,
        comarca: "Osona",
        altitud: 485,
        edatHistorica: "Romana",
        puntsCardinals: "Interior"
    },
    {
        id: 13,
        nom: "Figueres",
        provincia: "Girona",
        habitants: 47762,
        comarca: "Alt Empordà",
        altitud: 39,
        edatHistorica: "Medieval",
        puntsCardinals: "Interior"
    },
    {
        id: 14,
        nom: "Blanes",
        provincia: "Girona",
        habitants: 39834,
        comarca: "Selva",
        altitud: 18,
        edatHistorica: "Medieval",
        puntsCardinals: "Costa"
    },
    {
        id: 15,
        nom: "Cambrils",
        provincia: "Tarragona",
        habitants: 33796,
        comarca: "Baix Camp",
        altitud: 23,
        edatHistorica: "Medieval",
        puntsCardinals: "Costa"
    },
    {
        id: 16,
        nom: "Sitges",
        provincia: "Barcelona",
        habitants: 29101,
        comarca: "Garraf",
        altitud: 58,
        edatHistorica: "Medieval",
        puntsCardinals: "Costa"
    },
    {
        id: 17,
        nom: "Berga",
        provincia: "Barcelona",
        habitants: 16181,
        comarca: "Berguedà",
        altitud: 715,
        edatHistorica: "Medieval",
        puntsCardinals: "Interior"
    },
    {
        id: 18,
        nom: "Cadaqués",
        provincia: "Girona",
        habitants: 2844,
        comarca: "Alt Empordà",
        altitud: 3,
        edatHistorica: "Medieval",
        puntsCardinals: "Costa"
    },
    {
        id: 19,
        nom: "La Seu d'Urgell",
        provincia: "Lleida",
        habitants: 12182,
        comarca: "Alt Urgell",
        altitud: 691,
        edatHistorica: "Medieval",
        puntsCardinals: "Interior"
    },
    {
        id: 20,
        nom: "Tortosa",
        provincia: "Tarragona",
        habitants: 33664,
        comarca: "Baix Ebre",
        altitud: 12,
        edatHistorica: "Romana",
        puntsCardinals: "Interior"
    }
]

/* Funció per obtenir un municipi aleatori */

export const getMunicipiAleatori = () => {
    const index = Math.floor(Math.random() * municipis.length)
    return municipis[index]
}

/* Funció per buscar municipis (autocompleta amb suggerencies) */

export const buscarMunicipis = (query) => {
    if (!query || query.length < 2) return []

    return municipis.filter(municipi =>
        municipi.nom.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    ).slice(0, 8)
}

/* Funció per obtenir municipi per nom */

export const getMunicipiPerNom = (nom) => {
    return municipis.find(municipi =>
        municipi.nom.toLowerCase() === nom.toLowerCase()
    )
}
