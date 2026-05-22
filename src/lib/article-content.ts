export type ArticleBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "callout"; title: string; text: string };

export const articleBodies: Record<string, ArticleBlock[]> = {
  salderen: [
    {
      type: "p",
      text: "Jarenlang mochten huishoudens in Nederland opgewekte zonnestroom wegstrepen tegen verbruik: de salderingsregeling. Die regeling verdwijnt stap voor stap. Voor wie zonnepanelen heeft, verandert daarmee de rekensom van een thuisaccu. In dit artikel leggen we uit wat er gebeurt, wanneer het ingaat en hoe je je verbruik beter kunt timen.",
    },
    {
      type: "h2",
      text: "Wat was salderen?",
    },
    {
      type: "p",
      text: "Bij salderen telde je opgewekte kilowatturen (kWh) af tegen verbruikte kWh op je jaarafrekening. Leverde je op een zonnige middag 4 kWh terug aan het net en verbruikte je 's avonds 4 kWh, dan leek dat financieel alsof je niets uit het net had gehaald. In de praktijk betaalde je daardoor veel minder energiebelasting en netkosten over je eigen opwek.",
    },
    {
      type: "p",
      text: "Salderen was nooit een 'gratis batterij'. Het was een administratieve verrekening. Toch voelde het voor miljoenen panelenbezitters alsof eigen stroom en netstroom evenveel waard waren — zolang opwek en verbruik in dezelfde periode vielen.",
    },
    {
      type: "h2",
      text: "Wat verandert er concreet?",
    },
    {
      type: "p",
      text: "De overheid heeft besloten de salderingsregeling af te bouwen. Vanaf 2025 wordt salderen al beperkt; richting 2027 verdwijnt het volledig voor nieuwe situaties en bestaande contracten volgen de aangekondigde stappen. Je krijgt voor teruggeleverde stroom een vergoeding (vaak lager dan wat je betaalt bij afname), terwijl je voor verbruik uit het net gewoon het volle leveringstarief betaalt.",
    },
    {
      type: "ul",
      items: [
        "Overdag: veel opwek, vaak weinig verbruik → overschot gaat het net op.",
        "'s Avonds: weinig opwek, veel verbruik → je koopt dure netstroom.",
        "Zonder opslag daalt de financiële waarde van elke extra kWh opwek.",
      ],
    },
    {
      type: "callout",
      title: "Kernpunt",
      text: "Het gaat niet om minder zon — het gaat om verschuiven van verbruik naar het moment dat je opwekt, of opslaan voor later.",
    },
    {
      type: "h2",
      text: "Waarom een thuisaccu dan interessant wordt",
    },
    {
      type: "p",
      text: "Een thuisaccu (home battery) slaat overtollige zonnestroom op en geeft die later weer af aan je huishouden. Je vermindert daarmee teruglevering tegen lage vergoeding en afname tegen hoge kosten. Of dat rendabel is, hangt af van je verbruiksprofiel, accugrootte, prijs en hoe lang je in hetzelfde huis woont.",
    },
    {
      type: "h3",
      text: "Wanneer past opslag goed?",
    },
    {
      type: "ul",
      items: [
        "Je verbruikt overdag weinig en 's avonds veel (koken, TV, EV laden).",
        "Je hebt 10+ zonnepanelen en regelmatig overschot in de middag.",
        "Je dynamisch contract hebt of overweegt (laden bij lage prijs).",
        "Je wilt minder afhankelijk zijn van netpieken en tariefwijzigingen.",
      ],
    },
    {
      type: "h3",
      text: "Wanneer is het minder logisch?",
    },
    {
      type: "ul",
      items: [
        "Je verbruikt al bijna al je opwek direct (bijv. thuiswerken + warmtepomp overdag).",
        "Je hebt weinig panelen en nauwelijks overschot.",
        "Je verhuist binnen enkele jaren (terugverdientijd kan langer zijn).",
      ],
    },
    {
      type: "h2",
      text: "Salderen vs. opslag: een rekenvoorbeeld",
    },
    {
      type: "p",
      text: "Stel: je wekt op een goede dag 20 kWh op en verbruikt direct 8 kWh. Er blijven 12 kWh over. Zonder saldering krijg je voor teruglevering misschien €0,08–0,12 per kWh, terwijl je 's avonds 12 kWh uit het net haalt voor €0,25–0,40 per kWh. Het verschil per dag kan al snel enkele euro's zijn in piekseizoen — op jaarbasis tientallen tot honderden euro's, afhankelijk van je contract.",
    },
    {
      type: "p",
      text: "Met een accu van 3–5 kWh gebruik je een deel van dat overschot zelf. Je lost niet alles op (winter, bewolkte dagen), maar je verhoogt wel het aandeel eigen verbruik. Gebruik onze keuzehulp op de homepage om een indicatie van benodigde capaciteit te krijgen.",
    },
    {
      type: "h2",
      text: "Moet je nu meteen kopen?",
    },
    {
      type: "p",
      text: "Niet per se. Wel loont het om je jaarverbruik en teruglevering te bekijken (app van je omvormer of energieleverancier). Vergelijk plug-and-play accu's op vermogen, kWh en prijs per kWh — niet alleen op aanschafprijs. Let op LFP-chemie (lange levensduur), laad- en ontlaadvermogen (W) en of je later kunt uitbreiden.",
    },
    {
      type: "h2",
      text: "Samenvatting",
    },
    {
      type: "ul",
      items: [
        "Salderen verdwijnt; terugleveren wordt minder aantrekkelijk dan eigen verbruik.",
        "Een thuisaccu helpt opwek en verbruik in de tijd te verschuiven.",
        "Rendement hangt af van overschot, accugrootte en je tarief.",
        "Vergelijk modellen onafhankelijk — wij verkopen zelf niets.",
      ],
    },
  ],
  dynamisch: [
    {
      type: "p",
      text: "Steeds meer huishoudens kiezen een dynamisch energiecontract: de prijs per kWh wisselt per uur op basis van de groothandelsmarkt. Combineer je dat met een thuisaccu, dan kun je laden als stroom goedkoop is en ontladen (of minder uit het net halen) als de prijs hoog is. In dit artikel lees je wanneer dat werkt, welke risico's er zijn en waar je op moet letten bij de keuze van een accu.",
    },
    {
      type: "h2",
      text: "Hoe werkt een dynamisch contract?",
    },
    {
      type: "p",
      text: "Bij een dynamisch contract betaal je variabele inkoopprijzen, meestal per uur vastgelegd. Soms zijn nachturen negatief of bijna gratis; op koude winteravonden kan de prijs flink stijgen. Je leverancier rekent daar opslag en belasting overheen. Je hebt vaak een app of dashboard om prijzen vooruit te zien.",
    },
    {
      type: "callout",
      title: "Let op",
      text: "Dynamisch handelen vraagt inzicht in je verbruik. Zonder monitoring laad je alsnog op verkeerde momenten.",
    },
    {
      type: "h2",
      text: "De rol van een thuisaccu",
    },
    {
      type: "p",
      text: "Zonder accu kun je alleen verbruik verschuiven (wasmachine later, EV slim laden). Met accu sla je goedkope stroom op — van het net of van je panelen — en gebruik je die bij dure uren. Niet elke accu kan snel genoeg laden en ontladen; kijk naar continu vermogen (W) en omvormercapaciteit.",
    },
    {
      type: "h3",
      text: "Strategieën die je ziet",
    },
    {
      type: "ul",
      items: [
        "Zonnestroom opslaan voor avondverbruik (minder netafname).",
        "Net laden bij lage uurprijs, ontladen bij hoge prijs (arbitrage).",
        "Combinatie: eerst eigen opwek, daarna net bij goedkoop uur.",
      ],
    },
    {
      type: "h2",
      text: "Wanneer levert het geld op?",
    },
    {
      type: "p",
      text: "Arbitrage werkt alleen als het prijsverschil tussen laden en ontladen groter is dan je verliezen: omvormerrendement (vaak 85–92% round-trip), accuslijtage en eventueel vaste kosten. Bij kleine prijsverschillen wint saldering van eigen zon vaak al. Bij grote uurprijzen (bijv. windrijke nacht goedkoop, bewolkte avond duur) kan een grote accu meer voordeel halen.",
    },
    {
      type: "ul",
      items: [
        "Je volgt uurprijzen actief of automatiseert via app/EMS.",
        "Je accu heeft voldoende vermogen om gewenste lasten te voeden.",
        "Je hebt ruimte voor een grotere investering (vaak €2.000+).",
      ],
    },
    {
      type: "h2",
      text: "Welk vermogen en welke capaciteit?",
    },
    {
      type: "p",
      text: "Voor arbitrage alleen is snelheid belangrijk: hoeveel W je in een goedkoop uur het net kunt laden, bepaalt hoeveel energie je kunt verschuiven. Voor comfort (koelkast, verlichting, modem) volstaat vaak 1.500–2.400 W. Voor inductie of een kleine warmtepomp wil je 3.000 W of meer. Capaciteit: 2 kWh dekt een avond; 5 kWh geeft meer marge op bewolkte dagen.",
    },
    {
      type: "h2",
      text: "Risico's en valkuilen",
    },
    {
      type: "ul",
      items: [
        "Prijzen kunnen onverwacht laag blijven — terugverdientijd wordt langer.",
        "Niet alle leveranciers ondersteunen dezelfde apps of automatisering.",
        "Batterijcycli slijten; goedkope accu's met weinig cycli zijn duurder op termijn.",
        "Regels en belastingen kunnen wijzigen; reken niet op gegarandeerde winst.",
      ],
    },
    {
      type: "h2",
      text: "Praktische tips",
    },
    {
      type: "p",
      text: "Begin met inzicht: een jaar lang je uurverbruik en zonne-opwek loggen. Kies een accu met LFP-cellen en duidelijke garantie (vaak 5 jaar). Vergelijk op onze site op prijs per kWh en bestemming (besparen vs. dynamisch handelen). Bij Bol en andere winkels kun je via onze links het actuele aanbod bekijken — wij zijn geen webshop en prijzen kunnen afwijken.",
    },
    {
      type: "h2",
      text: "Samenvatting",
    },
    {
      type: "ul",
      items: [
        "Dynamische tarieven maken timing van verbruik belangrijker.",
        "Een thuisaccu kan goedkope uren koppelen aan dure uren.",
        "Rendement hangt af van prijsverschil, rendement en gebruiksgedrag.",
        "Vergelijk vermogen (W) en capaciteit (kWh) vóór je koopt.",
      ],
    },
  ],
  bestekoop: [
    {
      type: "p",
      text: "De 'beste' thuisaccu bestaat niet — wel de beste keuze voor jouw situatie. In deze koopgids vergelijken we EcoFlow, Bluetti en Anker op prijs per kWh, gebruiksgemak, vermogen en voor wie welk model logisch is. We verkopen zelf niets; je koopt via externe winkels zoals Bol.com, Coolblue of Amazon.",
    },
    {
      type: "h2",
      text: "Waar let je op bij elke accu?",
    },
    {
      type: "ul",
      items: [
        "Capaciteit (kWh): hoeveel uren verbruik je kunt dekken.",
        "Vermogen (W): welke apparaten je tegelijk kunt voeden.",
        "Chemie: LFP (LiFePO4) is gangbaar voor lange levensduur.",
        "Laadsnelheid: hoe snel vol na zon of stopcontact.",
        "Uitbreidbaarheid: modules of extra batterijen later.",
        "Gewicht en wielen: verplaatsen in huis of schuur.",
        "Prijs per kWh capaciteit: betere vergelijking dan alleen catalogusprijs.",
      ],
    },
    {
      type: "h2",
      text: "EcoFlow — snel en uitbreidbaar",
    },
    {
      type: "p",
      text: "EcoFlow (onder meer DELTA Pro en DELTA 2 Max) staat bekend om hoge laadsnelheden en een strakke app. De DELTA Pro richt zich op grotere huishoudens met zware lasten (tot 3600 W continu) en uitbreiding tot tientallen kWh. De DELTA 2 Max is compacter en een sterke middenkeuze voor starters met beperkt budget maar moderne features.",
    },
    {
      type: "p",
      text: "Op Bol.com zijn EcoFlow-modellen populair; controleer altijd of je op de juiste productpagina uitkomt en vergelijk specificaties met onze productpagina's.",
    },
    {
      type: "h2",
      text: "Bluetti — modulair en grote capaciteit",
    },
    {
      type: "p",
      text: "Bluetti biedt modulaire setups (AC500 + B300S) en all-in-one kasten (EP500 Pro). Modulair is handig als je later wilt groeien. All-in-one past bij vaste plek in garage of bijkeuken met veel capaciteit. Let op totaalgewicht en of je wielen nodig hebt.",
    },
    {
      type: "h2",
      text: "Anker Solix — instap en premium",
    },
    {
      type: "p",
      text: "Anker Solix C1000 is een lichte instapper: weinig kWh, laag gewicht, ideaal om te testen of opslag bij jouw verbruik past. De F3800-serie (vaak via Coolblue) richt zich op hoger vermogen en dynamisch gebruik. Vergelijk prijs per kWh: een goedkope kleine accu is niet automatisch de beste deal op lange termijn.",
    },
    {
      type: "h2",
      text: "Vergelijking op gebruik",
    },
    {
      type: "h3",
      text: "Budget / eerste kennismaking",
    },
    {
      type: "p",
      text: "Kies 1–2 kWh en minstens 1.500 W als je koelkast, modem en verlichting wilt overbruggen. Anker Solix C1000 en EcoFlow DELTA 2 Max vallen hier vaak in.",
    },
    {
      type: "h3",
      text: "Maximaal eigen verbruik (saldering afgebouwd)",
    },
    {
      type: "p",
      text: "Richt op 3–5 kWh en 2.400 W of meer. EcoFlow DELTA Pro, Bluetti EP500 Pro of modulaire Bluetti-systemen zijn hier gangbare keuzes.",
    },
    {
      type: "h3",
      text: "Dynamische tarieven",
    },
    {
      type: "p",
      text: "Hoog laad- en ontlaadvermogen helpt. Anker F3800 en EcoFlow DELTA Pro scoren hier vaak goed; controleer of je leverancier en app automatisering ondersteunen.",
    },
    {
      type: "h2",
      text: "Zo gebruik je onze vergelijker",
    },
    {
      type: "p",
      text: "Op de pagina Vergelijken filter je op merk, capaciteit en sortering (prijs, prijs per kWh, rating). Open een product voor specificaties, voor- en nadelen en een link naar de winkel. Prijzen op onze site zijn indicatief — de verkoper is leidend.",
    },
    {
      type: "callout",
      title: "Onafhankelijkheid",
      text: "Wij ontvangen soms commissie via affiliate-links (o.a. Bol). Dat verandert onze volgorde niet. Bol is niet verantwoordelijk voor deze site en wij zijn geen Bol-webshop.",
    },
    {
      type: "h2",
      text: "Samenvatting",
    },
    {
      type: "ul",
      items: [
        "Vergelijk op kWh, W, prijs per kWh en gebruiksscenario.",
        "EcoFlow: snelheid en app; Bluetti: modulair/groot; Anker: instap tot premium.",
        "Gebruik onze vergelijker en productpagina's vóór je bestelt.",
        "Controleer prijs en levertijd altijd bij de verkoper.",
      ],
    },
  ],
};
