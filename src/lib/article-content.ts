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
  "thuisaccu-kopen": [
    {
      type: "p",
      text: "Een thuisaccu (thuisbatterij) is een flinke investering. In 2026 kijken steeds meer huiseigenaren ernaar vanwege het einde van salderen en stijgende nettarieven. In dit stappenplan lees je hoe je van oriëntatie naar aankoop gaat — zonder verkooppraat, met links naar onze vergelijker en winkels zoals Bol.com, Coolblue en Amazon.",
    },
    {
      type: "h2",
      text: "Stap 1: Bepaal je doel",
    },
    {
      type: "p",
      text: "Wil je vooral eigen zonnestroom 's avonds gebruiken (besparen)? Of wil je actief profiteren van goedkope uurprijzen met een dynamisch contract (handelen)? Dat bepaalt hoeveel kWh en Watt je nodig hebt. Gebruik onze keuzehulp op de homepage voor een eerste indicatie.",
    },
    {
      type: "h2",
      text: "Stap 2: Capaciteit en vermogen",
    },
    {
      type: "p",
      text: "Capaciteit (kWh) is hoeveel energie je kunt opslaan. Vermogen (W) is hoeveel je tegelijk kunt leveren aan apparaten. Een accu van 2 kWh met 2400 W is prima voor basislast; voor inductie of een warmtepomp heb je vaak 3000 W+ en 4–5 kWh nodig. Lees ook ons artikel over kWh berekenen in de kennisbank.",
    },
    {
      type: "h2",
      text: "Stap 3: Plug-and-play of installateur",
    },
    {
      type: "p",
      text: "Onze vergelijking richt zich op plug-and-play en modulaire systemen die je via stopcontact of een aparte groep kunt gebruiken. Vaste thuisbatterijen achter de meterkast vereisen vaak een installateur en andere regels — die vallen buiten onze selectie.",
    },
    {
      type: "h2",
      text: "Stap 4: Budget en prijs per kWh",
    },
    {
      type: "p",
      text: "Vergelijk niet alleen de catalogusprijs. Deel de prijs door het aantal kWh: dat geeft prijs per kWh capaciteit. Een goedkope kleine accu kan per opgeslagen kWh duurder zijn dan een grotere. Tel accessoires (kabels, zonnepaneeladapter) en eventuele uitbreidingsmodules mee.",
    },
    {
      type: "h2",
      text: "Stap 5: Waar koop je?",
    },
    {
      type: "ul",
      items: [
        "Bol.com — breed assortiment EcoFlow en Anker (controleer productpagina, geen zoekresultaat).",
        "Coolblue — vaak Anker en Bluetti met snelle levering.",
        "Amazon.nl — modulaire Bluetti en andere merken.",
      ],
    },
    {
      type: "p",
      text: "Via onze productpagina's ga je naar de winkel met tracking; wij zijn geen webshop. Prijzen op Thuisaccu-Gids.nl zijn indicatief.",
    },
    {
      type: "h2",
      text: "Veelgemaakte fouten",
    },
    {
      type: "ul",
      items: [
        "Te kleine accu kopen — avondverbruik blijft uit het net komen.",
        "Alleen naar kWh kijken en vermogen (W) vergeten.",
        "Retourvoorwaarden en garantie niet checken vóór aankoop.",
        "Verwachten dat salderen blijft — reken op lagere waarde teruglevering.",
      ],
    },
    {
      type: "callout",
      title: "Tip",
      text: "Vergelijk maximaal drie modellen naast elkaar op onze vergelijkpagina voordat je bestelt.",
    },
    {
      type: "h2",
      text: "Samenvatting",
    },
    {
      type: "ul",
      items: [
        "Start met doel: besparen of dynamisch handelen.",
        "Match kWh en W aan je verbruik.",
        "Vergelijk prijs per kWh en lees voor-/nadelen.",
        "Koop bij een erkende winkel via onze links.",
      ],
    },
  ],
  "kwh-berekenen": [
    {
      type: "p",
      text: "Hoeveel kilowattuur (kWh) capaciteit heb je nodig in een thuisaccu? Er is geen enkel magic number — het hangt af van je zonnepanelen, jaarverbruik, verbruiksmomenten en budget. Met onderstaande vuistregels en onze keuzehulp kom je in de buurt van een realistische maat.",
    },
    {
      type: "h2",
      text: "Wat betekent kWh bij een thuisaccu?",
    },
    {
      type: "p",
      text: "1 kWh is genoeg om bijvoorbeeld een koelkast een paar uur te laten draaien, of een tv meerdere uren. Een accu van 3 kWh kan in the praktijk niet altijd 3 kWh 's avonds leveren: je verliest wat energie bij omzetting (efficiency ~85–92%) en je laadt zelden tot 100% elke dag.",
    },
    {
      type: "h2",
      text: "Vuistregel op basis van zonnepanelen",
    },
    {
      type: "p",
      text: "Heb je een gemiddeld overschot op zonnige dagen? Kijk in je omvormer-app naar teruglevering. Veel huishoudens met 10–16 panelen hebben 3–8 kWh overschot op goede dagen. Een accu van 2–5 kWh vangt een deel daarvan op voor de avond.",
    },
    {
      type: "ul",
      items: [
        "Klein overschot (< 2 kWh/dag gemiddeld): 1–2 kWh accu.",
        "Middel (2–5 kWh/dag): 2–4 kWh accu.",
        "Groot (> 5 kWh/dag): 4–10 kWh (eventueel uitbreidbaar).",
      ],
    },
    {
      type: "h2",
      text: "Vuistregel op basis van avondverbruik",
    },
    {
      type: "p",
      text: "Tel je verbruik tussen 18:00 en 23:00 op een gemiddelde dag (kWh). Wil je dat deels uit de accu komen? Dan is je minimale nuttige capaciteit ongeveer dat avondverbruik × 0,7 (rekening houdend met efficiency). Voorbeeld: 4 kWh avondverbruik → richt op minstens 3 kWh bruikbare accucapaciteit.",
    },
    {
      type: "h2",
      text: "Vermogen (W) niet vergeten",
    },
    {
      type: "p",
      text: "Capaciteit zonder vermogen helpt niet als je inductie en oven tegelijk aanzet. Check het continu vermogen (W) van de accu. Onder 2000 W: lichte lasten. 2400–3600 W: normaal huishouden. 5000 W+: zware pieken of dynamisch snel laden/ontladen.",
    },
    {
      type: "h2",
      text: "Gebruik onze keuzehulp",
    },
    {
      type: "p",
      text: "Op de homepage vul je aantal panelen, geschat jaarverbruik en je doel in. Je krijgt een aanbevolen capaciteit in kWh en passende modellen. Combineer dat met de vergelijker voor prijs per kWh en reviews in de vorm van voor- en nadelen per product.",
    },
    {
      type: "p",
      text: "Of gebruik direct onze volledige keuzehulp op /keuzehulp — daar zie je ook een indicatie van jaarbesparing en terugverdientijd.",
    },
    {
      type: "h2",
      text: "Samenvatting",
    },
    {
      type: "ul",
      items: [
        "kWh = hoeveel je kunt opslaan; W = hoeveel je tegelijk kunt voeden.",
        "Kijk naar zonne-overschot én avondverbruik.",
        "Reken met ~85–92% round-trip efficiency.",
        "Vergelijk concrete modellen op /vergelijken.",
      ],
    },
  ],
  "lfp-vs-nmc": [
    {
      type: "p",
      text: "Bij thuisaccu's zie je vooral LFP (LiFePO4) en soms NMC (lithium-ion met nikkel-mangaan-kobalt). De chemie bepaalt levensduur, gewicht, prijs en veiligheid. In dit artikel leg je het verschil uit zodat je niet alleen naar kWh en euro's kijkt.",
    },
    {
      type: "h2",
      text: "Wat is LFP (LiFePO4)?",
    },
    {
      type: "p",
      text: "LFP is de gangbare keuze voor moderne thuisaccu's en powerstations. Voordelen: lange levensduur (vaak 3000+ cycli), stabiele werking en minder brandgevaar dan oudere chemieën. Nadelen: iets zwaarder per kWh en soms iets duurder per opgeslagen kilowattuur.",
    },
    {
      type: "h2",
      text: "Wat is NMC?",
    },
    {
      type: "p",
      text: "NMC packs meer energie in minder gewicht — handig voor draagbare accu's. Bij dagelijks thuisgebruik slijt NMC vaak sneller dan LFP. Voor een vaste thuisaccu die jarenlang elke dag laadt en ontlaadt, kiezen de meeste fabrikanten in 2026 voor LFP.",
    },
    {
      type: "h2",
      text: "Waar let je op in de specificaties?",
    },
    {
      type: "ul",
      items: [
        "Aantal laadcycli bij 80% restcapaciteit (fabrieksgarantie).",
        "Garantie in jaren — vaak 5 jaar bij LFP-thuisaccu's.",
        "Continu ontlaadvermogen (W) naast capaciteit (kWh).",
        "Temperatuurbereik als je de accu in een onverwarmde schuur zet.",
      ],
    },
    {
      type: "callout",
      title: "Praktisch",
      text: "Kies LFP tenzij je expliciet een compact, licht model nodig hebt en je de kortere levensduur accepteert.",
    },
    {
      type: "h2",
      text: "Samenvatting",
    },
    {
      type: "ul",
      items: [
        "LFP: langer mee, gangbaar voor thuisaccu's.",
        "NMC: compacter, minder ideaal voor dagelijks cyclen thuis.",
        "Vergelijk cycli en garantie op onze productpagina's.",
      ],
    },
  ],
  "eigen-verbruik": [
    {
      type: "p",
      text: "Eigen verbruik betekent: stroom die je zelf opwekt (zon) of goedkoop inslaat, direct of later in huis gebruiken — in plaats van terugleveren tegen lage vergoeding en 's avonds dure netstroom kopen. Een thuisaccu helpt, maar je kunt al veel winnen zonder extra hardware.",
    },
    {
      type: "h2",
      text: "Zonder accu: verbruik verschuiven",
    },
    {
      type: "ul",
      items: [
        "Wasmachine en vaatwasser overdag draaien bij zon.",
        "EV laden wanneer je panelen overschot hebben (via app of timer).",
        "Boiler of warmtepomp op zonnige uren plannen als je EMS dat ondersteunt.",
        "Inzicht: omvormer-app of P1-meter om teruglevering te zien.",
      ],
    },
    {
      type: "h2",
      text: "Met accu: overschot bufferen",
    },
    {
      type: "p",
      text: "Als je overdag structureel meer opwekt dan verbruikt, vangt een accu van 2–5 kWh een deel van dat overschot op voor de avond. Hoe groter het verschil tussen middag-opwek en avond-verbruik, hoe meer een accu kan bijdragen. Gebruik onze keuzehulp om te schatten welke capaciteit past.",
    },
    {
      type: "h2",
      text: "Salderen en terugleververgoeding",
    },
    {
      type: "p",
      text: "Naarmate salderen verdwijnt, daalt de financiële waarde van terugleveren. Eigen verbruik wordt relatief waardevoller. Dat maakt zowel gedrag (verschuiven) als opslag (accu) interessanter — maar alleen als je werkelijk overschot hebt.",
    },
    {
      type: "h2",
      text: "Samenvatting",
    },
    {
      type: "ul",
      items: [
        "Begin met inzicht in opwek en verbruik per uur.",
        "Verschuif verbruik naar zonnige uren waar mogelijk.",
        "Accu loont vooral bij structureel overschot en avondpiek.",
      ],
    },
  ],
  terugverdientijd: [
    {
      type: "p",
      text: "Fabrikanten en winkels roepen soms korte terugverdientijden. Realistisch rekenen vraagt om je eigen verbruik, tarief, accuprijs en hoe lang je in hetzelfde huis woont. Dit artikel legt de formule uit — en waarom onze keuzehulp slechts een indicatie geeft.",
    },
    {
      type: "h2",
      text: "Basisformule",
    },
    {
      type: "p",
      text: "Terugverdientijd (jaren) ≈ totale aanschafkosten ÷ jaarlijkse besparing (€). Totale kosten = accu + kabels + eventuele modules. Jaarbesparing = extra eigen verbruik × verschil tussen nettarief en terugleververgoeding, plus eventueel voordeel uit dynamische tarieven.",
    },
    {
      type: "h2",
      text: "Wat vaak wordt vergeten",
    },
    {
      type: "ul",
      items: [
        "Round-trip efficiency (~85–92%): je verliest energie bij laden/ontladen.",
        "Winter: minder zon, accu vult niet elke dag.",
        "Accuslijtage: na 8–10 jaar minder bruikbare kWh.",
        "Vaste kosten energiecontract en netbeheer blijven.",
      ],
    },
    {
      type: "h2",
      text: "Rekenvoorbeeld",
    },
    {
      type: "p",
      text: "Stel: accu €2.500 all-in, 3,6 kWh. Je bespaart €200 per jaar door minder netafname en betere benutting van zon. Terugverdientijd ≈ 12,5 jaar. Koop je vooral comfort en blackout-back-up, dan is 'break-even' minder relevant — dat mag, zolang je het eerlijk benoemt.",
    },
    {
      type: "h2",
      text: "Gebruik onze keuzehulp",
    },
    {
      type: "p",
      text: "Op /keuzehulp vul je panelen, verbruik en doel in. Je ziet een indicatie van jaarbesparing en terugverdientijd op basis van gemiddelde aannames. Lees /methodologie voor de exacte criteria en beperkingen.",
    },
    {
      type: "callout",
      title: "Geen garantie",
      text: "Wij garanderen geen terugverdientijd. Vergelijk altijd meerdere modellen op prijs per kWh en lees voor- en nadelen.",
    },
    {
      type: "h2",
      text: "Samenvatting",
    },
    {
      type: "ul",
      items: [
        "Deel totale kosten door realistische jaarbesparing.",
        "Tel efficiency, seizoen en slijtage mee.",
        "Gebruik keuzehulp + vergelijker vóór aankoop.",
      ],
    },
  ],
  "plug-and-play-vs-installateur": [
    {
      type: "p",
      text: "Niet elke thuisaccu koop je als powerstation op Bol.com of Amazon.nl. Sommige huishoudens hebben een vaste thuisbatterij achter de meterkast nodig — vaak via een installateur en energieleverancier. In dit artikel leg je het verschil uit, zodat je de juiste route kiest vóór je bestelt.",
    },
    {
      type: "h2",
      text: "Plug-and-play (onze vergelijking)",
    },
    {
      type: "p",
      text: "Powerstations zoals EcoFlow, Anker Solix, Jackery en Bluetti koop je als los apparaat: stopcontact of aparte groep, verplaatsbaar, geen meterkast-ingreep. Wij vergelijken deze modellen op capaciteit, vermogen en prijs per kWh. Primair via Bol.com en Amazon.nl — met keuzehulp en side-by-side vergelijking op onze site.",
    },
    {
      type: "ul",
      items: [
        "Sneller leverbaar, zelf te plaatsen",
        "Ideaal om te testen of opslag bij jouw verbruik past",
        "Beperkt vermogen vs. vaste systemen (vaak 1,5–4 kW)",
        "Geen officiële saldering-koppeling aan meterkast",
      ],
    },
    {
      type: "h2",
      text: "Vaste thuisbatterij (installateur)",
    },
    {
      type: "p",
      text: "Een vaste thuisbatterij wordt geïnstalleerd achter je meterkast, gekoppeld aan zonnepanelen en soms aan een dynamisch energiecontract. Dit pad loopt vaak via een installateur en energieleverancier — niet als los product in een webshop.",
    },
    {
      type: "h2",
      text: "Coolblue Energie",
    },
    {
      type: "p",
      text: "Coolblue verkoopt via Coolblue Energie vooral zonnepanelen en advies over vaste thuisbatterijen (Enphase, Growatt). Dat is een andere klantreis dan onze plug-and-play vergelijking. Coolblue's webshop-affiliate-programma richt zich niet op de powerstations die wij vergelijken — vandaar linken wij voor Coolblue naar informatie, niet naar nep-productpagina's.",
    },
    {
      type: "callout",
      title: "Extern advies",
      text: "Meer over vaste thuisbatterijen via installateur: coolblue.nl/zonnepanelen/advies (Coolblue Energie). Wij ontvangen daar geen commissie; het is puur extra context voor je keuze.",
    },
    {
      type: "h2",
      text: "Welke route past bij jou?",
    },
    {
      type: "ul",
      items: [
        "Plug-and-play: budget, flexibiliteit, geen installateur — gebruik onze keuzehulp.",
        "Vaste batterij: grote capaciteit, meterkast, langetermijn woning — zoek installateur/Energie-partner.",
        "Twijfel: begin met onze vergelijker; schakel installateur in als 2 kWh niet genoeg is.",
      ],
    },
    {
      type: "h2",
      text: "Samenvatting",
    },
    {
      type: "ul",
      items: [
        "Wij vergelijken plug-and-play via Bol en Amazon.",
        "Coolblue Energie = installateur-route, geen webshop-affiliate voor onze modellen.",
        "Zie /winkels voor beschikbaarheid per winkel.",
      ],
    },
  ],
};
