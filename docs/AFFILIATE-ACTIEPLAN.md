# Affiliate actieplan voor Thuisaccu-Gids.nl

Doel: zo snel mogelijk kans maken op inkomsten, zonder bezoekers te misleiden
en zonder partnerregels te overtreden. Inkomsten kunnen dezelfde avond alleen
ontstaan als er echt bezoekers klikken en kopen/aanvragen doen. Uitbetaling door
partners volgt meestal later en heeft drempels of keuring.

## 1. Vanavond doen: snelste route naar eerste commissie

### Stap 1 - Controleer wat al live geld kan opleveren

1. Open Amazon Associates / PartnerNet.
2. Controleer dat betaalgegevens en belastinggegevens volledig zijn ingevuld.
3. Controleer op de live site een Amazon-knop:
   - URL bevat `tag=thuisaccugids-21`.
   - Link opent het juiste product of een zeer vergelijkbaar model.
4. Controleer in Amazon Associates bij rapportage of clicks binnenkomen.

Waarom eerst Amazon: Amazon is al actief in de code en kan dus direct clicks
registreren. Verwacht niet dat geld direct op je bankrekening staat; verkoop,
keuring en uitbetaling komen later.

### Stap 2 - Zet direct verkeer op pagina's met koopintentie

De beste pagina's voor snelle affiliate-clicks:

1. `/keuzehulp` - bezoekers krijgen direct passende modellen.
2. `/vergelijken` - alle productkaarten met winkelknoppen.
3. Productpagina's van modellen met Amazon-aanbod, zoals EcoFlow/Bluetti/Anker.
4. `/kennisbank/thuisaccu-kopen` - bezoekers met koopintentie.

Promoot niet algemeen "de website", maar een concrete vraag:

- "Welke thuisaccu past bij 10 zonnepanelen?"
- "Plug-and-play thuisaccu vergelijken op prijs per kWh"
- "EcoFlow vs Bluetti: welke past bij jouw verbruik?"

Gebruik kanalen waar je vandaag al bereik hebt: WhatsApp-status, Facebook,
LinkedIn, Reddit/fora waar toegestaan, bestaande mailinglijst, eigen netwerk.
Plaats geen spam en geen beloftes als "gegarandeerd verdienen/besparen".

### Stap 3 - Google Search Console

1. Inspecteer en vraag indexering aan voor:
   - `https://www.thuisaccu-gids.nl/`
   - `/keuzehulp`
   - `/vergelijken`
   - `/kennisbank/thuisaccu-kopen`
   - `/kennisbank/plug-and-play-vs-installateur`
2. Dien `/sitemap.xml` opnieuw in als dat nog niet is gedaan.
3. Noteer over enkele dagen zoektermen met impressies; maak content rond termen
   waar al tractie zit.

### Stap 4 - Meet clicks

Zonder meetdata weet je niet welke link geld kan opleveren.

1. Amazon: rapportage in PartnerNet.
2. Bol: pas beoordelen na goedkeuring.
3. Awin/Partnerize/Daisycon/TradeTracker: clickrapportage per campagne.
4. Zet in de partnerdashboards sub-ID's of campaign names aan waar mogelijk:
   - `home`
   - `keuzehulp`
   - `vergelijken`
   - product-id, bijvoorbeeld `ecoflow-delta-2-max`

## 2. Partnerprogramma's: prioriteit

| Prioriteit | Partner/netwerk | Waarom | Actie |
| --- | --- | --- | --- |
| 1 | Amazon Associates NL | Staat al in de site en kan direct clicks registreren | Betaalgegevens checken, producten met Amazon-aanbod promoten |
| 2 | Bol Partner | Veel productlinks lopen naar Bol; hoge bezoekersvertrouwen | Heraanvraag doen met uitleg over keuzehulp, methodologie, kennisbank en affiliate-disclosure |
| 3 | Awin / Partnerize - Coolblue Energie | Leadvergoeding voor energieproducten kan beter passen bij installateur-route | Aanmelden of opnieuw controleren welke energiecampagnes openstaan |
| 4 | e-WNDR | Noemt thuisbatterijen en vergoedingen per lead/klant | Aanmelden, voorwaarden opvragen, trackingmethode vragen |
| 5 | Daisycon / TradeTracker | Backup-netwerken voor energie, wonen en leadcampagnes | Zoeken op thuisbatterij, zonnepanelen, energiecontract, laadpaal |
| 6 | MediaMarkt / Conrad via Awin | Extra shopkeuze voor powerstations/accessoires | Join aanvragen en deeplink-template bewaren |
| 7 | Directe installateurs | Hoge waarde per lead, maar meer handwerk | Mail met voorstel: onafhankelijke gids + leadformulier of affiliate-link |

Let op: koop nooit via je eigen affiliate-links. Dat kan accounts sluiten.

## 3. Informatie die nodig is om partners in de site te implementeren

Stuur na goedkeuring per partner deze gegevens door:

1. Partnernaam en netwerk, bijvoorbeeld `Awin - MediaMarkt NL`.
2. Tracking/deeplink-template met placeholder, bijvoorbeeld:
   `https://www.awin1.com/cread.php?awinmid=XXX&awinaffid=YYY&ued={url}`.
3. Regels uit het partnerprogramma:
   - Mag je prijzen tonen?
   - Mag je productafbeeldingen gebruiken?
   - Mag je merknaam in knoppen/SEO gebruiken?
   - Zijn couponcodes of paid ads toegestaan?
4. Product- of landingspagina's die gepromoot mogen worden.
5. Vergoedingstype:
   - sale-commissie
   - vaste leadvergoeding
   - offerteaanvraag
6. Cookieperiode en uitbetalingsdrempel.
7. Eventuele verplichte disclosure-tekst.

Daarna kunnen de juiste waarden in Vercel gezet worden:

```env
NEXT_PUBLIC_BOL_PARTNER_ID=
NEXT_PUBLIC_AMAZON_ASSOCIATES_TAG=thuisaccugids-21
NEXT_PUBLIC_COOLBLUE_AFFILIATE_URL=
NEXT_PUBLIC_MEDIAMARKT_AFFILIATE_URL=
NEXT_PUBLIC_CONRAD_AFFILIATE_URL=
```

Voor nieuwe directe leadpartners is waarschijnlijk extra code nodig: een nieuwe
retailer in `src/lib/affiliate.ts`, extra kaarten op `/winkels` en eventueel een
nieuwe CTA bij installateur-gerelateerde artikelen.

## 4. Concurrentievergelijking: top 5 en wat wij missen

Gebaseerd op Nederlandse zoekresultaten rond "thuisaccu vergelijken",
"thuisbatterij kopen" en "beste thuisbatterij".

| Concurrent | Sterk punt | Wat zij vaak doen | Kans voor Thuisaccu-Gids.nl |
| --- | --- | --- | --- |
| Thuis-batterij-vergelijken.nl | Brede vergelijking van vaste systemen | Tesla, Huawei, Sonnen, BYD, offerte-achtige orientatie | Duidelijker onderscheid maken tussen plug-and-play en vaste installatie |
| Slimster | Sterke SEO en offerteflow | Toplijsten, installateurs vergelijken, veel merken | Niet alleen "beste" roepen, maar keuzehulp + prijs per kWh tonen |
| HuisAssist | Kosten en installateur-leads | Prijsranges, terugverdientijd, offertes | Een installateur-route toevoegen zonder de productvergelijker te vervuilen |
| Consumentenbond | Hoog vertrouwen en waarschuwingen | Kritische uitleg, rendabiliteit en risico's | Nog sterker waarschuwen voor impulsaankopen en te mooie beloftes |
| Thuisbatterij.nl / Coolblue Energie | Concrete koop- of adviesroute | Configurator, adviesgesprek, plug-in of installatie | Snelle route op homepage: direct vergelijken, keuzehulp, of installateur-uitleg |

Conclusie: de site is al goed in rustige vergelijking en transparantie. Het
grootste gat is monetisatie buiten directe productverkoop: leadpartners voor
vaste thuisbatterijen, zonnepanelen/energiecontracten en installateuradvies.
Voeg dit pas toe na partnergoedkeuring; anders blijft de site betrouwbaarder met
de huidige Bol/Amazon-route.

## 5. Website-aanpassingen die nu zijn gedaan

De homepage heeft een nieuwe "Snelle route":

1. Vandaag direct vergelijken.
2. Eerst zeker zijn van de maat via keuzehulp.
3. Vaste thuisbatterij? Lees plug-and-play vs installateur.

Dit sluit aan op wat concurrenten goed doen (duidelijke kooproute), maar houdt
de site rustig en onafhankelijk.

## 6. Volgende implementatieronde na partnergoedkeuring

Zodra partnergegevens binnen zijn:

1. Voeg tracking-template toe aan Vercel environment variables.
2. Voeg extra offers toe aan relevante producten in `src/lib/products.ts`.
3. Voeg partnerstatus toe op `/winkels` en `/affiliate-partners`.
4. Maak voor leadpartners een aparte CTA:
   - "Vaste thuisbatterij laten installeren?"
   - "Vraag installateuradvies aan"
5. Plaats die CTA alleen op pagina's waar het logisch is:
   - `/kennisbank/plug-and-play-vs-installateur`
   - `/kennisbank/thuisaccu-kopen`
   - productpagina's zonder goede plug-and-play match
6. Controleer build en affiliate-disclosures.

## 7. Berichten om vanavond te plaatsen

Gebruik korte, eerlijke posts:

### WhatsApp/Facebook

Ik heb een onafhankelijke keuzehulp gemaakt voor thuisaccu's. Je vult je
zonnepanelen en verbruik in en ziet welke capaciteit logisch is, plus modellen
om te vergelijken: https://www.thuisaccu-gids.nl/keuzehulp

### LinkedIn

Salderen stopt en veel mensen zoeken nu naar thuisbatterijen. Ik heb een rustige
vergelijkingssite gebouwd met keuzehulp, prijs per kWh en uitleg wanneer
plug-and-play wel/niet logisch is: https://www.thuisaccu-gids.nl/

### Forum/reactie

Als je twijfelt tussen een losse plug-and-play accu en een vaste thuisbatterij:
begin met capaciteit en verbruik. Deze gids legt het verschil uit zonder direct
naar een offerteformulier te sturen:
https://www.thuisaccu-gids.nl/kennisbank/plug-and-play-vs-installateur

