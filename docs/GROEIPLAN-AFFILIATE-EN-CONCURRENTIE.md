# Groeiplan: affiliate, concurrentie en omzetversnelling

Dit document is een praktische uitvoeringsgids voor **Thuisaccu-Gids.nl**.
Focus: zo snel mogelijk omzetkans vergroten, zonder de kwaliteit en betrouwbaarheid van de site te beschadigen.

---

## 1) Realistische verwachting voor "vandaag omzet"

Je kunt vandaag al commissie verdienen, maar alleen als deze keten klopt:

1. bezoeker komt op je site  
2. bezoeker klikt op affiliate-link  
3. bezoeker rondt aankoop af bij partner  
4. partner keurt order goed

Belangrijk:
- omzet vandaag is mogelijk, maar niet garandeerbaar;
- snelle winst komt vooral uit bestaande indexering + duidelijke koopflow;
- op korte termijn is frictie verwijderen belangrijker dan "nog meer tekst".

---

## 2) Top 5 concurrenten (NL) en wat zij goed doen

Bronnen (mei 2026):
- https://thuis-batterij-vergelijken.nl/
- https://thuisbatterij.nl/stekkerbatterij/
- https://www.smarthomegids.nl/de-beste-thuisbatterij-met-stekker/
- https://www.nextenergy.nl/artikelen/wat-is-de-beste-thuisbatterij
- https://www.stralendgroen.nl/categorie/batterij/stekkerbatterij/

### Samenvatting concurrentiestijl

| Concurrent | Sterk punt | Risico/zwakte |
|---|---|---|
| thuis-batterij-vergelijken.nl | Veel vergelijkcontent + duidelijke stappenflow | Lange pagina's met herhaling |
| thuisbatterij.nl | Zeer uitgebreide gids + specificatietabellen | Zwaar commercieel, veel tekst |
| smarthomegids.nl | Keuze per profiel + duidelijke topkeuzes + kortingscode | Minder diep op methodologie |
| nextenergy.nl | Sterke educatie rond energieprofielen en tarieven | Primair leverancier, minder onafhankelijk |
| stralendgroen.nl | Producttabel met technische koopcriteria | Meer webshop-focus dan keuzebegeleiding |

### Wat zij hebben dat jij ook nodig hebt (compact en nuttig)

1. **Snelle route voor bezoeker-intentie** (besparen, dynamisch, starter).
2. **Directe "wat nu?"-stappen** tussen orientatie en koopklik.
3. **Sterke koopcriteria in simpele taal** (kWh, W, prijs per kWh, garantie).
4. **Continu vertrouwen** (transparantie over affiliate + methodologie).
5. **Meetbaar gedrag** (klikdata per partner en pagina).

---

## 3) Wat jouw site nu al goed doet

- Keuzehulp met kWh-richting.
- Vergelijker met max 3 modellen.
- Transparante affiliate/disclaimer/methodologie.
- Kennisbank met relevante thema's.
- Winkels-pagina met beschikbaarheid en partnerstatus.

Dit is een sterk fundament; optimalisatie moet gericht zijn op conversieflow, niet op een volledige herbouw.

---

## 4) GAP-analyse: wat nog mist voor hogere affiliate-opbrengst

## Prioriteit A (direct omzetgericht)

1. **Kliktracking per partnerknop**  
   - Meet outbound clicks naar Bol/Amazon per pagina en product.  
   - Zonder dit weet je niet welke pagina's geld opleveren.

2. **Top-intentie landingspagina's uitbreiden**  
   - Voeg extra artikelen toe op intenties zoals:
     - "beste stekkerbatterij [maand/jaar]"
     - "thuisaccu voor dynamisch contract"
     - "thuisaccu onder [budget]"

3. **Productdekking verbreden binnen huidige niche**  
   - Meer modellen = meer koopkansen en long-tail zoekverkeer.

## Prioriteit B (vertrouwen + CTR)

4. **Visueel "voor wie is dit model?" op productcards**  
   - Bijvoorbeeld badges: Starter / Besparen / Dynamisch.

5. **Meer zichtbare update-signalen**  
   - Laat op kernpagina's expliciet "laatst gecontroleerd" zien.

6. **Sterkere interne links naar koopintenties**  
   - Vanuit kennisbank altijd naar relevante vergelijk- en productpagina's.

## Prioriteit C (opschalen)

7. **E-mail capture (laagfrequent, waardevol)**  
   - Niet agressief; wel voor terugkerend verkeer.

8. **Partnermix verbreden via Awin/Daisycon/TradeTracker**  
   - Minder afhankelijk van 1 of 2 programma's.

---

## 5) Partneraanmeldplan (praktisch)

## Stap 1 - Amazon Associates (actief houden)

Doel:
- zorgen dat tracking klopt op alle Amazon-links;
- voldoende gekwalificeerde sales houden.

Acties:
1. Controleer `NEXT_PUBLIC_AMAZON_ASSOCIATES_TAG` in Vercel.
2. Klik handmatig 3-5 Amazon-knoppen en check op `tag=...`.
3. Controleer ASIN's periodiek in `src/lib/amazon-urls.ts`.
4. Bewaak Partnernet-richtlijnen (geen eigen aankopen, correcte disclosure).

## Stap 2 - Bol partner heraanvraag

Doel:
- status van "pending/heraanvraag" naar actief.

Acties:
1. Gebruik `docs/BOL-HERAANVRAAG.md` als basis.
2. Benadruk onderscheidende waarde:
   - keuzehulp voor koopbeslissing;
   - methodologie en onafhankelijkheid;
   - multi-winkel vergelijking.
3. Na goedkeuring:
   - zet partner site-id in env;
   - test 3 links op correcte tracking;
   - update status op publieke partnerpagina.

## Stap 3 - Awin uitbouwen (MediaMarkt/Conrad en andere passende adverteerders)

Doel:
- extra inkomstenroutes toevoegen.

Acties:
1. In Awin: join relevante adverteerders voor jouw productgroep.
2. Maak deeplink templates met `{url}`.
3. Zet env-variabelen in Vercel.
4. Voeg concrete productaanbiedingen toe als extra offers.
5. Test click-through links op correcte redirect en landing.

## Stap 4 - Backup netwerken

Doel:
- fallback als een programma afwijst of pauzeert.

Acties:
1. Daisycon: check categorie energie/elektronica.
2. TradeTracker: check adverteerders op thuisaccu/powerstation.
3. Alleen toevoegen als aanbod echt relevant is voor jouw bezoeker.

---

## 6) Website-implementatieplan (zonder onnodige ballast)

## Fase 1 - Conversieflow strak zetten

- [x] Homepage-sectie toegevoegd met snelle 4-stappen route.
- [x] Profielroutes toegevoegd (besparen, dynamisch, plug-and-play vs vast).
- [x] Outbound click tracking toegevoegd op affiliate-knoppen (first-party endpoint).
- [ ] Rapportage-overzicht maken: clicks per retailer, per pagina, per product.

Implementatienoot:
- Endpoint: `POST /api/affiliate-click`
- Loglabel: `[affiliate-click]` in serverlogs
- Optionele forwarding: `AFFILIATE_CLICK_WEBHOOK_URL` (server env)

## Fase 2 - Content met koopintentie uitbreiden

- [ ] Nieuwe koopgerichte artikelen (2-4 stuks) met interne links naar vergelijker.
- [ ] Op productpagina's: 1 extra blok "past bij dit gebruiksprofiel".
- [ ] Op vergelijkpagina: subtiele aanbeveling "beste prijs per kWh" en "beste vermogen".

## Fase 3 - Partneruitbreiding

- [ ] Bol-status afronden.
- [ ] Awin-adverteerders toevoegen waar aanbod matcht.
- [ ] Onrendabele partners verwijderen (focus op kwaliteit).

---

## 7) KPI's om elke iteratie op te sturen

Minimaal meten:

1. organische sessies op:
   - `/`
   - `/keuzehulp`
   - `/vergelijken`
   - top 5 kennisbankartikelen
2. outbound clicks per retailer (Bol/Amazon/overig)
3. CTR van productcards naar productpagina
4. CTR van productpagina naar partnerwinkel
5. EPC/commissie per partner (waar beschikbaar)

Beslisregel:
- pagina's met hoog verkeer maar lage uitgaande CTR krijgen eerst optimalisatie;
- pagina's met hoge CTR maar lage ranking krijgen eerst SEO-versterking.

---

## 8) Uitvoerscript voor beheerder (kort en concreet)

Gebruik deze vaste volgorde per werkronde:

1. check affiliate links en tracking  
2. check best scorende pagina's en clickdata  
3. verbeter 1 pagina met lage CTR  
4. publiceer 1 nieuw koopgericht artikel  
5. update 1 productset/prijzen  
6. test mobile flow van homepage naar partnerklik  

Zo bouw je structureel door zonder dat de site volloopt met onnodige onderdelen.

---

## 9) Wat "perfect" hier betekent

Niet: de meeste tekst of de meeste widgets.  
Wel:
- heldere keuzeflow;
- transparant en betrouwbaar;
- meetbare partnerkliks;
- alleen toevoegingen die omzetkans en gebruikerswaarde verhogen.

