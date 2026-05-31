import { buildAffiliateUrl } from "@/lib/affiliate";
import { AMAZON_URLS } from "@/lib/amazon-urls";
import { BLUETTI_URLS } from "@/lib/bluetti-urls";
import { BOL_URLS } from "@/lib/bol-urls";
import { ECOFLOW_URLS } from "@/lib/ecoflow-urls";
import { getLowestOffer } from "@/lib/shop-offers";
import type { Product, ProductFilters, ShopOffer } from "@/types/product";

export const products: Product[] = [
  {
    id: "ecoflow-delta-pro",
    name: "EcoFlow DELTA Pro",
    brand: "EcoFlow",
    capacity: 3.6,
    power: 3600,
    price: BOL_URLS.ecoflowDeltaPro.price,
    rating: 4.9,
    image: BOL_URLS.ecoflowDeltaPro.image,
    retailer: "bol",
    shopUrl: BOL_URLS.ecoflowDeltaPro.url,
    pros: [
      "Extreem krachtig vermogen (3600W)",
      "Uitbreidbaar tot 25 kWh",
      "LFP-batterij (3000+ laadcycli)",
    ],
    cons: ["Zwaar (45 kg)", "Hoge aanschafprijs"],
    bestFor: "savings",
    capacityCategory: "mid",
    type: "Plug & Play",
    chemistry: "LFP (LiFePO4)",
    cycles: "3000+",
    warranty: "5 jaar",
    weight: "45 kg",
    description:
      "Krachtige thuisaccu voor wie maximale reserve en zware apparaten op zonne-energie wil draaien.",
    suitableFor: [
      "Grote huishoudens met veel avondverbruik",
      "Eigenaren met 10+ panelen en regelmatig overschot",
      "Wie later wil uitbreiden zonder nieuwe accu te kopen",
    ],
    buyingGuide:
      "De DELTA Pro is een zwaargewicht in de thuisbatterij-markt: 3600 W continu betekent dat je inductie, waterkoker of zelfs een kleine warmtepomp kunt voeden zolang de accu voldoende geladen is. Op Bol.com vind je regelmatig acties; vergelijk altijd de exacte modelcode en meegeleverde kabels. De opvolger DELTA Pro 3 staat apart in onze vergelijker.",
  },
  {
    id: "ecoflow-delta-pro-3",
    name: "EcoFlow DELTA Pro 3",
    brand: "EcoFlow",
    capacity: 4.0,
    power: 4000,
    price: BOL_URLS.ecoflowDeltaPro3.price,
    rating: 4.6,
    image: BOL_URLS.ecoflowDeltaPro3.image,
    retailer: "bol",
    shopUrl: BOL_URLS.ecoflowDeltaPro3.url,
    pros: [
      "4 kWh basiscapaciteit in één behuizing",
      "4000 W output voor zware huishoudelijke lasten",
      "Fluisterstille werking volgens fabrikant",
    ],
    cons: ["Zwaar (51,5 kg)", "Premium prijsniveau"],
    bestFor: "savings",
    capacityCategory: "large",
    type: "Plug & Play",
    chemistry: "LFP (LiFePO4)",
    cycles: "4000+",
    warranty: "5 jaar",
    weight: "51,5 kg",
    description:
      "Nieuwste DELTA Pro-generatie met 4 kWh en 4000 W — bedoeld als serieuze thuisbuffer.",
    suitableFor: [
      "Grote huishoudens die één krachtige accu willen",
      "Vaste opstelling in garage of bijkeuken",
      "Wie maximale capaciteit zonder modulair systeem zoekt",
    ],
    buyingGuide:
      "De DELTA Pro 3 is de opvolger van de DELTA Pro met meer ingebouwde capaciteit en vermogen. Controleer op Bol.com of je de EU-uitvoering bestelt en welke aansluitkabels standaard meeleveren.",
    extraOffers: [
      {
        retailer: "ecoflow",
        shopUrl: ECOFLOW_URLS.deltaPro3.url,
        price: ECOFLOW_URLS.deltaPro3.price,
        variantNote: "EcoFlow NL-webshop (nl.ecoflow.com)",
      },
    ],
  },
  {
    id: "anker-solix-f3800",
    name: "Anker Solix F3800",
    brand: "Anker",
    capacity: 3.84,
    power: 6000,
    price: BOL_URLS.ankerSolixF3800.price,
    rating: 4.8,
    image: BOL_URLS.ankerSolixF3800.image,
    retailer: "bol",
    shopUrl: BOL_URLS.ankerSolixF3800.url,
    pros: [
      "Hoog continuvermogen (6000W)",
      "Geschikt voor heel-huis aansluiting",
      "Modern design op wielen",
    ],
    cons: ["Hoge prijs", "Groot formaat"],
    bestFor: "trading",
    capacityCategory: "mid",
    type: "Plug & Play",
    chemistry: "LFP (LiFePO4)",
    cycles: "3000+",
    warranty: "5 jaar",
    weight: "60 kg",
    description:
      "Geavanceerde plug-and-play accu, sterk bij dynamische tarieven door hoge laad- en ontlaadsnelheid.",
    suitableFor: [
      "Dynamisch energiecontract met uurprijzen",
      "Huishoudens met hoog piekverbruik (6 kW)",
      "Wie een premium all-in-one zoekt op Bol.com",
    ],
    buyingGuide:
      "Met 6000 W piekvermogen past de F3800 bij huishoudens die actief willen sturen op goedkope uurprijzen. Controleer levertijd en retourvoorwaarden op Bol.com vóór aankoop.",
  },
  {
    id: "bluetti-elite-300",
    name: "Bluetti Elite 300",
    brand: "Bluetti",
    capacity: 3.014,
    power: 2400,
    price: BOL_URLS.bluettiElite300.price,
    rating: 4.5,
    image: BOL_URLS.bluettiElite300.image,
    retailer: "bol",
    shopUrl: BOL_URLS.bluettiElite300.url,
    pros: [
      "3 kWh in compacte behuizing",
      "2400 W AC (4800 W piek)",
      "6000+ laadcycli (LFP)",
    ],
    cons: ["Relatief nieuw model", "26 kg — beperkt draagbaar"],
    bestFor: "savings",
    capacityCategory: "mid",
    type: "Plug & Play",
    chemistry: "LFP (LiFePO4)",
    cycles: "6000+",
    warranty: "5 jaar",
    weight: "26,3 kg",
    description:
      "Bluetti Elite 300: ~3 kWh back-up voor thuis, camping of camper — direct via Bol.com.",
    suitableFor: [
      "Huishoudens die ~3 kWh back-up zoeken",
      "Campers en vakantiehuisjes",
      "Bluetti-fans die via Bol.com willen bestellen",
    ],
    buyingGuide:
      "De Elite 300 combineert hoge capaciteit met een redelijk formaat. Vergelijk op Bol.com de exacte specificaties met EcoFlow DELTA Pro als alternatief in dezelfde prijsklasse.",
    extraOffers: [
      {
        retailer: "bluetti",
        shopUrl: BLUETTI_URLS.elite300.url,
        price: BLUETTI_URLS.elite300.price,
        variantNote: "Bluetti EU-webshop (bluettipower.eu)",
      },
    ],
  },
  {
    id: "jackery-explorer-2000-plus",
    name: "Jackery Explorer 2000 Plus",
    brand: "Jackery",
    capacity: 2.043,
    power: 3000,
    price: BOL_URLS.jackeryExplorer2000Plus.price,
    rating: 4.6,
    image: BOL_URLS.jackeryExplorer2000Plus.image,
    retailer: "bol",
    shopUrl: BOL_URLS.jackeryExplorer2000Plus.url,
    pros: [
      "2043 Wh LFP met 3000 W output",
      "Jackery-app voor monitoring",
      "Uitbreidbaar met extra batterijmodules",
    ],
    cons: ["Zwaar (27,5 kg)", "Hogere instapprijs"],
    bestFor: "savings",
    capacityCategory: "small",
    type: "Plug & Play",
    chemistry: "LFP (LiFePO4)",
    cycles: "4000+",
    warranty: "5 jaar",
    weight: "27,5 kg",
    description:
      "Jackery middenklasse powerstation — 2 kWh en 3000 W, populair op Bol.com.",
    suitableFor: [
      "Huishoudens met 2 kWh opslagbehoefte",
      "Eigenaren die Jackery via Bol.com vertrouwen",
      "Back-up voor koelkast, verlichting en media",
    ],
    buyingGuide:
      "De Explorer 2000 Plus is Jackerys antwoord op EcoFlow DELTA 2 Max. Controleer op Bol.com of je de EU-versie en juiste kabels ontvangt. Op Amazon.nl staat een andere generatie (Explorer 2000 v2) — vergelijk daarom via onze aparte productpagina's.",
  },
  {
    id: "ecoflow-delta-2-max",
    name: "EcoFlow DELTA 2 Max",
    brand: "EcoFlow",
    capacity: 2.04,
    power: 2400,
    price: BOL_URLS.ecoflowDelta2Max.price,
    rating: 4.8,
    image: BOL_URLS.ecoflowDelta2Max.image,
    retailer: "bol",
    shopUrl: BOL_URLS.ecoflowDelta2Max.url,
    pros: [
      "Compact (23 kg)",
      "Snel opladen (0–80% in 53 min)",
      "Sterke prijs-kwaliteit",
    ],
    cons: [
      "Kleinere basiscapaciteit",
      "Minder geschikt voor zware lasten",
    ],
    bestFor: "budget",
    capacityCategory: "small",
    type: "Plug & Play",
    chemistry: "LFP (LiFePO4)",
    cycles: "3000+",
    warranty: "5 jaar",
    weight: "23 kg",
    description:
      "Ideale starter: compact, maar krachtig genoeg voor koelkast, tv en verlichting op eigen stroom.",
    suitableFor: [
      "Starters met beperkt budget",
      "Appartement of klein huishouden",
      "Bol.com-klanten die EcoFlow willen vergelijken",
    ],
    buyingGuide:
      "De DELTA 2 Max is de middenmoot: 2 kWh is niet genoeg voor een hele avond grote lasten, wel voor basiscomfort. Vergelijk Bol-, Amazon- en EcoFlow NL-prijs via de knoppen.",
    amazonOffer: {
      shopUrl: AMAZON_URLS.ecoflowDelta2Max.url,
      price: AMAZON_URLS.ecoflowDelta2Max.price,
      image: AMAZON_URLS.ecoflowDelta2Max.image,
      asin: AMAZON_URLS.ecoflowDelta2Max.asin,
    },
    extraOffers: [
      {
        retailer: "ecoflow",
        shopUrl: ECOFLOW_URLS.delta2Max.url,
        price: ECOFLOW_URLS.delta2Max.price,
        variantNote: "EcoFlow NL-webshop (nl.ecoflow.com)",
      },
    ],
  },
  {
    id: "ecoflow-delta-3-max",
    name: "EcoFlow DELTA 3 Max",
    brand: "EcoFlow",
    capacity: 2.048,
    power: 2400,
    price: BOL_URLS.ecoflowDelta3Max.price,
    rating: 4.7,
    image: BOL_URLS.ecoflowDelta3Max.image,
    retailer: "bol",
    shopUrl: BOL_URLS.ecoflowDelta3Max.url,
    pros: [
      "2048 Wh in nieuwere DELTA 3-serie",
      "2400 W output",
      "Snelle X-Stream oplading",
    ],
    cons: ["20+ kg", "Duurder dan DELTA 2"],
    bestFor: "budget",
    capacityCategory: "small",
    type: "Plug & Play",
    chemistry: "LFP (LiFePO4)",
    cycles: "4000+",
    warranty: "5 jaar",
    weight: "20,3 kg",
    description:
      "EcoFlow DELTA 3 Max op Bol.com — 2 kWh met snelladen en app-bediening.",
    suitableFor: [
      "Wie de nieuwste DELTA 3-lijn wil",
      "Huishoudens met ~2 kWh behoefte",
      "Bol.com-klanten die EcoFlow vertrouwen",
    ],
    buyingGuide:
      "De DELTA 3 Max zit tussen DELTA 2 Max en grotere modellen in. Vergelijk op Bol.com specificaties en levertijd met de DELTA 2 Max als budgetalternatief.",
    extraOffers: [
      {
        retailer: "ecoflow",
        shopUrl: ECOFLOW_URLS.delta3Max.url,
        price: ECOFLOW_URLS.delta3Max.price,
        variantNote: "EcoFlow NL-webshop (nl.ecoflow.com)",
      },
    ],
  },
  {
    id: "bluetti-elite-200-v2",
    name: "Bluetti Elite 200 V2",
    brand: "Bluetti",
    capacity: 2.074,
    power: 2600,
    price: BOL_URLS.bluettiElite200V2.price,
    rating: 4.5,
    image: BOL_URLS.bluettiElite200V2.image,
    retailer: "bol",
    shopUrl: BOL_URLS.bluettiElite200V2.url,
    pros: [
      "2074 Wh LFP met 2600 W output",
      "6000+ laadcycli",
      "App-bediening via smartphone",
    ],
    cons: ["Geen wielen", "24 kg — vaste plek aanbevolen"],
    bestFor: "savings",
    capacityCategory: "small",
    type: "Plug & Play",
    chemistry: "LFP (LiFePO4)",
    cycles: "6000+",
    warranty: "5 jaar",
    weight: "24,2 kg",
    description:
      "Bluetti Elite 200 V2: 2 kWh powerstation met krachtige omvormer, direct op Bol.com.",
    suitableFor: [
      "Bluetti-klanten met ~2 kWh budget",
      "Back-up bij stroomuitval",
      "Camper en off-grid gebruik",
    ],
    buyingGuide:
      "De Elite 200 V2 concurreert met EcoFlow DELTA 2 Max op capaciteit. Let op gewicht en of je zonnepaneel-aansluiting nodig hebt — check specificaties op Bol.com.",
    extraOffers: [
      {
        retailer: "bluetti",
        shopUrl: BLUETTI_URLS.elite200V2.url,
        price: BLUETTI_URLS.elite200V2.price,
        variantNote: "Bluetti EU-webshop (bluettipower.eu)",
      },
    ],
  },
  {
    id: "ecoflow-delta-2",
    name: "EcoFlow DELTA 2",
    brand: "EcoFlow",
    capacity: 1.024,
    power: 1800,
    price: BOL_URLS.ecoflowDelta2.price,
    rating: 4.8,
    image: BOL_URLS.ecoflowDelta2.image,
    retailer: "bol",
    shopUrl: BOL_URLS.ecoflowDelta2.url,
    pros: [
      "Uitbreidbaar tot 3 kWh",
      "X-Stream snelladen (0–80% in ~50 min)",
      "Compact (12 kg)",
    ],
    cons: ["Basiscapaciteit 1 kWh", "1800 W — geen zware inductie"],
    bestFor: "budget",
    capacityCategory: "small",
    type: "Plug & Play",
    chemistry: "LFP (LiFePO4)",
    cycles: "3000+",
    warranty: "5 jaar",
    weight: "12 kg",
    description:
      "Instap EcoFlow met 1 kWh — uitbreidbaar en snel laadbaar via Bol.com.",
    suitableFor: [
      "Starters met klein budget",
      "Eerste kennismaking met thuisopslag",
      "Appartement met beperkt zonne-overschot",
    ],
    buyingGuide:
      "De DELTA 2 is goedkoper dan de DELTA 2 Max maar start met 1 kWh. EcoFlow NL en Amazon.nl liggen rond €599; Bol.com is vaak duurder (check actuele Bol-prijs). Controleer of extra batterijmodules apart verkrijgbaar zijn als je later wilt uitbreiden.",
    amazonOffer: {
      shopUrl: AMAZON_URLS.ecoflowDelta2.url,
      price: AMAZON_URLS.ecoflowDelta2.price,
      image: AMAZON_URLS.ecoflowDelta2.image,
      asin: AMAZON_URLS.ecoflowDelta2.asin,
    },
    extraOffers: [
      {
        retailer: "ecoflow",
        shopUrl: ECOFLOW_URLS.delta2.url,
        price: ECOFLOW_URLS.delta2.price,
        variantNote: "EcoFlow NL-webshop (nl.ecoflow.com)",
      },
    ],
  },
  {
    id: "ecoflow-delta-3-plus",
    name: "EcoFlow DELTA 3 Plus",
    brand: "EcoFlow",
    capacity: 1.024,
    power: 1800,
    price: AMAZON_URLS.ecoflowDelta3Plus.price,
    rating: AMAZON_URLS.ecoflowDelta3Plus.rating,
    image: AMAZON_URLS.ecoflowDelta3Plus.image,
    retailer: "amazon",
    shopUrl: AMAZON_URLS.ecoflowDelta3Plus.url,
    pros: [
      "Snel laden (0–100% in ~56 min)",
      "1800 W output (3600 W piek)",
      "Uitbreidbaar tot 5 kWh",
    ],
    cons: ["Kleinere basiscapaciteit (1 kWh)", "Niet voor zware inductie"],
    bestFor: "budget",
    capacityCategory: "small",
    type: "Plug & Play",
    chemistry: "LFP (LiFePO4)",
    cycles: "4000+",
    warranty: "5 jaar",
    weight: AMAZON_URLS.ecoflowDelta3Plus.weight,
    description:
      "Compacte EcoFlow met snelle X-Stream oplading en UPS-modus — populair instapmodel op Amazon.nl.",
    suitableFor: [
      "Starters via Amazon.nl",
      "Camping en noodstroom",
      "Dynamisch tarief met app-sturing",
    ],
    buyingGuide:
      "De DELTA 3 Plus op Amazon.nl (ASIN B0DFPW2Y2C) is een compact 1024 Wh model. Controleer of je de EU-versie bestelt en welke kabels inbegrepen zijn.",
    extraOffers: [
      {
        retailer: "ecoflow",
        shopUrl: ECOFLOW_URLS.delta3Plus.url,
        price: ECOFLOW_URLS.delta3Plus.price,
        variantNote: "EcoFlow NL-webshop (nl.ecoflow.com)",
      },
    ],
  },
  {
    id: "ecoflow-delta-3-classic",
    name: "EcoFlow DELTA 3 Classic",
    brand: "EcoFlow",
    capacity: 1.024,
    power: 1800,
    price: ECOFLOW_URLS.delta3Classic.price,
    rating: 4.6,
    image: ECOFLOW_URLS.delta3Classic.image,
    retailer: "ecoflow",
    shopUrl: ECOFLOW_URLS.delta3Classic.url,
    pros: [
      "1800 W output (3600 W piek)",
      "0–80% in 45 min via stopcontact",
      "Licht (12,1 kg) en compact",
    ],
    cons: [
      "Geen uitbreidbare accu",
      "Geen 12 V DC-uitgang",
    ],
    bestFor: "budget",
    capacityCategory: "small",
    type: "Plug & Play",
    chemistry: "LFP (LiFePO4)",
    cycles: "4000+",
    warranty: "5 jaar",
    weight: "12,1 kg",
    description:
      "Goedkoopste 1 kWh EcoFlow — snel laden, UPS in 10 ms, ideaal voor outdoor en lichte thuisback-up.",
    suitableFor: [
      "Budgetbewuste kopers via EcoFlow NL",
      "Camping en buitenwerk",
      "Eerste kennismaking met 1 kWh opslag",
    ],
    buyingGuide:
      "De DELTA 3 Classic is de instap in de DELTA 3-serie: €599 bij EcoFlow NL en Amazon.nl (mei 2026). Vergelijk met DELTA 3 en DELTA 3 Plus als je uitbreidbaarheid of extra poorten nodig hebt.",
    amazonOffer: {
      shopUrl: AMAZON_URLS.ecoflowDelta3Classic.url,
      price: AMAZON_URLS.ecoflowDelta3Classic.price,
      image: AMAZON_URLS.ecoflowDelta3Classic.image,
      asin: AMAZON_URLS.ecoflowDelta3Classic.asin,
    },
  },
  {
    id: "ecoflow-delta-3",
    name: "EcoFlow DELTA 3",
    brand: "EcoFlow",
    capacity: 1.024,
    power: 1800,
    price: ECOFLOW_URLS.delta3.price,
    rating: 4.7,
    image: ECOFLOW_URLS.delta3.image,
    retailer: "ecoflow",
    shopUrl: ECOFLOW_URLS.delta3.url,
    pros: [
      "Uitbreidbaar tot 5 kWh",
      "13 aansluitingen (AC, USB-C, auto)",
      "Stormbescherming via EcoFlow-app",
    ],
    cons: ["Duurder dan DELTA 3 Classic", "Niet voor zware inductie"],
    bestFor: "budget",
    capacityCategory: "small",
    type: "Plug & Play",
    chemistry: "LFP (LiFePO4)",
    cycles: "4000+",
    warranty: "5 jaar",
    weight: "12,5 kg",
    description:
      "Middenmodel in de DELTA 3-lijn: 1 kWh met uitbreidingsmogelijkheid en rijke aansluitopties.",
    suitableFor: [
      "Wie later wil uitbreiden zonder nieuwe accu",
      "Thuis én outdoor gebruik",
      "Dynamisch tarief met app-sturing",
    ],
    buyingGuide:
      "De DELTA 3 kost €749 bij EcoFlow NL en Amazon.nl — €150 meer dan de Classic, maar wel uitbreidbaar. Check of extra batterijmodules op voorraad zijn voordat je bestelt.",
    amazonOffer: {
      shopUrl: AMAZON_URLS.ecoflowDelta3.url,
      price: AMAZON_URLS.ecoflowDelta3.price,
      image: AMAZON_URLS.ecoflowDelta3.image,
      asin: AMAZON_URLS.ecoflowDelta3.asin,
    },
  },
  {
    id: "anker-solix-c1000",
    name: "Anker Solix C1000",
    brand: "Anker",
    capacity: 1.056,
    power: 1800,
    price: BOL_URLS.ankerSolixC1000.price,
    rating: 4.5,
    image: BOL_URLS.ankerSolixC1000.image,
    retailer: "bol",
    shopUrl: BOL_URLS.ankerSolixC1000.url,
    pros: [
      "Voordelig instapmodel",
      "Ultracompact (13 kg)",
      "Snel vol via stopcontact",
    ],
    cons: ["Beperkte capaciteit", "Niet voor zware apparaten"],
    bestFor: "budget",
    capacityCategory: "small",
    type: "Plug & Play",
    chemistry: "LFP (LiFePO4)",
    cycles: "3000+",
    warranty: "5 jaar",
    weight: "13 kg",
    description:
      "Perfect om kennis te maken met opslag: overtollige zonnestroom overdag, eigen verbruik 's avonds.",
    suitableFor: [
      "Eerste kennismaking met thuisopslag",
      "Kleine huishoudens of tweepersoonshuishouden",
      "Bol.com-klanten met beperkt budget",
    ],
    buyingGuide:
      "De C1000 is bewust klein: ideaal om te testen of je gedrag past bij opslag. Op Bol.com is de C1000X-variant; op Amazon.nl het SOLIX C1000-model.",
    amazonOffer: {
      shopUrl: AMAZON_URLS.ankerSolixC1000.url,
      price: AMAZON_URLS.ankerSolixC1000.price,
      image: AMAZON_URLS.ankerSolixC1000.image,
      asin: AMAZON_URLS.ankerSolixC1000.asin,
      variantNote: "Amazon: Anker SOLIX C1000 (Bol: C1000X)",
      excludeFromPriceCompare: true,
    },
  },
  {
    id: "jackery-explorer-1000-v2",
    name: "Jackery Explorer 1000 V2",
    brand: "Jackery",
    capacity: 1.07,
    power: 1500,
    price: BOL_URLS.jackeryExplorer1000V2.price,
    rating: 4.5,
    image: BOL_URLS.jackeryExplorer1000V2.image,
    retailer: "bol",
    shopUrl: BOL_URLS.jackeryExplorer1000V2.url,
    pros: [
      "1070 Wh LFP — snel vol in ~1 uur",
      "1500 W output",
      "Jackery merkvertrouwen",
    ],
    cons: ["10,8 kg voor 1 kWh", "Geen zware keukenapparaten"],
    bestFor: "budget",
    capacityCategory: "small",
    type: "Plug & Play",
    chemistry: "LFP (LiFePO4)",
    cycles: "4000+",
    warranty: "5 jaar",
    weight: "10,8 kg",
    description:
      "Jackery instapmodel met 1 kWh — direct te bestellen via Bol.com.",
    suitableFor: [
      "Budgetbewuste kopers op Bol.com",
      "Camping en weekendhuis",
      "Back-up voor router, verlichting en koelkast",
    ],
    buyingGuide:
      "De Explorer 1000 V2 concurreert met Anker C1000 en EcoFlow DELTA 2. Vergelijk prijs per kWh en gewicht op Bol.com voordat je bestelt.",
    amazonOffer: {
      shopUrl: AMAZON_URLS.jackeryExplorer1000V2.url,
      price: AMAZON_URLS.jackeryExplorer1000V2.price,
      image: AMAZON_URLS.jackeryExplorer1000V2.image,
      asin: AMAZON_URLS.jackeryExplorer1000V2.asin,
    },
  },
  {
    id: "anker-solix-c800x",
    name: "Anker Solix C800X",
    brand: "Anker",
    capacity: 0.768,
    power: 1200,
    price: BOL_URLS.ankerSolixC800x.price,
    rating: 4.5,
    image: BOL_URLS.ankerSolixC800x.image,
    retailer: "bol",
    shopUrl: BOL_URLS.ankerSolixC800x.url,
    pros: [
      "1200 W in compact 768 Wh formaat",
      "HyperFlash — vol in ~58 min",
      "Betaalbaar instapmodel",
    ],
    cons: ["Beperkte 768 Wh", "Niet voor inductie"],
    bestFor: "budget",
    capacityCategory: "small",
    type: "Plug & Play",
    chemistry: "LFP (LiFePO4)",
    cycles: "3000+",
    warranty: "5 jaar",
    weight: "13 kg",
    description:
      "Compacte Anker powerstation — 768 Wh voor lichte back-up via Bol.com.",
    suitableFor: [
      "Kleine huishoudens of tweepersoonshuishouden",
      "Noodstroom voor modem en verlichting",
      "Wie Anker via Bol.com wil kopen",
    ],
    buyingGuide:
      "De C800X is kleiner dan de C1000X maar goedkoper. Geschikt als eerste test met opslag, niet als volwaardige thuisaccu voor saldering.",
  },
  {
    id: "ecoflow-river-2-pro",
    name: "EcoFlow RIVER 2 Pro",
    brand: "EcoFlow",
    capacity: 0.768,
    power: 800,
    price: AMAZON_URLS.ecoflowRiver2Pro.price,
    rating: AMAZON_URLS.ecoflowRiver2Pro.rating,
    image: AMAZON_URLS.ecoflowRiver2Pro.image,
    retailer: "amazon",
    shopUrl: AMAZON_URLS.ecoflowRiver2Pro.url,
    pros: [
      "Licht (7,8 kg) instapmodel",
      "768 Wh LFP",
      "Volledig opgeladen in ~70 min",
    ],
    cons: ["800 W output", "Te klein als echte thuisaccu"],
    bestFor: "budget",
    capacityCategory: "small",
    type: "Plug & Play",
    chemistry: "LFP (LiFePO4)",
    cycles: "3000+",
    warranty: "5 jaar",
    weight: AMAZON_URLS.ecoflowRiver2Pro.weight,
    description:
      "Compacte EcoFlow RIVER 2 Pro op Amazon.nl — licht model voor camping en noodstroom.",
    suitableFor: [
      "Camping en onderweg",
      "Amazon-klanten met klein budget",
      "Lichte back-up voor laptop en verlichting",
    ],
    buyingGuide:
      "De RIVER 2 Pro (ASIN B0BFQD5RMJ) is geen vervanger voor een 2 kWh thuisaccu, wel een goedkoop instapmodel. Controleer EU-voltage en meegeleverde kabels op Amazon.",
    extraOffers: [
      {
        retailer: "ecoflow",
        shopUrl: ECOFLOW_URLS.river2Pro.url,
        price: ECOFLOW_URLS.river2Pro.price,
        variantNote: "EcoFlow NL-webshop (nl.ecoflow.com)",
      },
    ],
  },
  {
    id: "ecoflow-river-3-plus",
    name: "EcoFlow RIVER 3 Plus",
    brand: "EcoFlow",
    capacity: 0.286,
    power: 600,
    price: ECOFLOW_URLS.river3Plus.price,
    rating: 4.5,
    image: ECOFLOW_URLS.river3Plus.image,
    retailer: "ecoflow",
    shopUrl: ECOFLOW_URLS.river3Plus.url,
    pros: [
      "Zeer compact (4,7 kg)",
      "600 W output (1200 W X-Boost)",
      "Uitbreidbaar tot 858 Wh",
    ],
    cons: [
      "286 Wh basiscapaciteit",
      "Te klein als echte thuisaccu",
    ],
    bestFor: "budget",
    capacityCategory: "small",
    type: "Plug & Play",
    chemistry: "LFP (LiFePO4)",
    cycles: "3000+",
    warranty: "5 jaar",
    weight: "4,7 kg",
    description:
      "Goedkoopste model in onze vergelijker — compact noodstroomstation voor router, laptop en verlichting.",
    suitableFor: [
      "Minimaal budget via EcoFlow NL",
      "Noodstroom voor modem en thuiskantoor",
      "Camping en onderweg",
    ],
    buyingGuide:
      "De RIVER 3 Plus start bij €299 bij EcoFlow NL. Ideaal als instap of tweede accu, niet als enige thuisbuffer bij saldering.",
  },
  {
    id: "anker-solix-c300",
    name: "Anker Solix C300",
    brand: "Anker",
    capacity: 0.288,
    power: 300,
    price: AMAZON_URLS.ankerSolixC300.price,
    rating: AMAZON_URLS.ankerSolixC300.rating,
    image: AMAZON_URLS.ankerSolixC300.image,
    retailer: "amazon",
    shopUrl: AMAZON_URLS.ankerSolixC300.url,
    pros: [
      "Zeer compact (4,1 kg)",
      "Betaalbaar instapmodel",
      "288 Wh LFP",
    ],
    cons: ["Slechts 300 W output", "Te klein voor echte thuisopslag"],
    bestFor: "budget",
    capacityCategory: "small",
    type: "Plug & Play",
    chemistry: "LFP (LiFePO4)",
    cycles: "3000+",
    warranty: "5 jaar",
    weight: AMAZON_URLS.ankerSolixC300.weight,
    description:
      "Mini powerstation op Amazon.nl — goedkoopste instap om opslag te proberen.",
    suitableFor: [
      "Absolute starters met minimaal budget",
      "Noodstroom voor telefoon en router",
      "Camping en festivals",
    ],
    buyingGuide:
      "De C300 (ASIN B0D62GMQ3F) is bewust mini. Gebruik het om gedrag te testen, niet als enige thuisaccu bij saldering-afbouw.",
  },
];

/** Tracking-link voor knoppen (affiliate als ID's zijn ingevuld, anders winkel-URL + UTM) */
export function getAffiliateUrl(product: Product): string {
  return buildAffiliateUrl(product.shopUrl, product.retailer, product.id);
}

export function getShopOfferAffiliateUrl(
  productId: string,
  offer: ShopOffer,
): string {
  const suffix = offer.retailer === "amazon" ? "-amazon" : `-${offer.retailer}`;
  return buildAffiliateUrl(offer.shopUrl, offer.retailer, `${productId}${suffix}`);
}

export function getAmazonOfferUrl(product: Product): string | undefined {
  if (!product.amazonOffer) return undefined;
  return getShopOfferAffiliateUrl(product.id, {
    retailer: "amazon",
    shopUrl: product.amazonOffer.shopUrl,
    price: product.amazonOffer.price,
  });
}

/** Laagste prijs over alle gekoppelde winkels */
export function getDisplayPrice(product: Product): number {
  return getLowestOffer(product).price;
}

/** Min/max vanaf-prijs over het volledige catalogus */
export function getCatalogPriceRange(): { min: number; max: number } {
  const prices = products.map(getDisplayPrice);
  return {
    min: Math.min(...prices),
    max: Math.max(...prices),
  };
}

/** Producten gesorteerd op laagste winkelprijs */
export function getProductsByPrice(): Product[] {
  return [...products].sort((a, b) => getDisplayPrice(a) - getDisplayPrice(b));
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getBrands(): string[] {
  return [...new Set(products.map((p) => p.brand))].sort();
}

export function filterProducts(filters: ProductFilters = {}): Product[] {
  let result = [...products];

  if (filters.brand && filters.brand !== "all") {
    result = result.filter(
      (p) => p.brand.toLowerCase() === filters.brand!.toLowerCase(),
    );
  }

  if (filters.capacity && filters.capacity !== "all") {
    result = result.filter((p) => p.capacityCategory === filters.capacity);
  }

  if (filters.search?.trim()) {
    const q = filters.search.trim().toLowerCase();
    result = result.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.type.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q),
    );
  }

  switch (filters.sortBy) {
    case "price_asc":
      result.sort((a, b) => getDisplayPrice(a) - getDisplayPrice(b));
      break;
    case "price_desc":
      result.sort((a, b) => getDisplayPrice(b) - getDisplayPrice(a));
      break;
    case "price_per_kwh_asc":
      result.sort(
        (a, b) =>
          getDisplayPrice(a) / a.capacity - getDisplayPrice(b) / b.capacity,
      );
      break;
    case "capacity_desc":
      result.sort((a, b) => b.capacity - a.capacity);
      break;
    default:
      result.sort((a, b) => b.rating - a.rating);
  }

  return result;
}
