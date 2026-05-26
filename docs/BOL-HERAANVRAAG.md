# Bol Partner — heraanvraag

Interne gids na afwijzing wegens onvoldoende toegevoegde waarde.

## Status

| | |
|---|---|
| **Eerste aanvraag** | Afgewezen — te weinig toegevoegde waarde klantreis |
| **Heraanvraag** | Verzonden op 26 mei 2026 — wachten op beoordeling |
| **Mail** | Affiliate@bol.com |
| **Volgende actie** | Mailbox controleren op reactie van Bol Partner |
| **Site** | https://www.thuisaccu-gids.nl |

## Wanneer opnieuw aanvragen?

Wacht **minimaal 4–6 weken** na deploy van de site-verbeteringen. Bol wil zien dat de site **levend** is en echte hulp biedt vóór aankoop.

Checklist vóór mail:

- [x] `/keuzehulp` live — capaciteit + besparing + modellen
- [x] `/methodologie` live — transparante criteria
- [x] Kennisbank uitgebreid (8+ artikelen) — 10 artikelen live
- [x] `/over-ons` met duidelijke missie en contact
- [ ] Sitemap opnieuw ingediend in Search Console (www-variant)
- [ ] Organisch verkeer opbouwen (optioneel maar sterk)

## Wat Bol wil horen

Niet: “wij linken naar jullie producten.”  
Wel: “wij helpen bezoekers **kiezen** vóór ze kopen.”

Concrete punten om te noemen:

1. **Interactieve keuzehulp** — kWh-advies, besparingsindicatie, terugverdientijd
2. **Onafhankelijke vergelijker** — max. 3 modellen, objectieve criteria, geen betaalde ranking
3. **Redactionele kennisbank** — salderen, kWh, LFP, terugverdientijd, stappenplan kopen
4. **Productkoopgidsen** — voor wie wel/niet, voor- en nadelen per model
5. **Transparantie** — methodologie, disclaimer, affiliate-disclosure

## Na verzending

1. Mailbox controleren op reactie van Bol Partner.
2. Bij aanvullende vragen verwijzen naar `/keuzehulp`, `/vergelijken`, `/kennisbank`, `/methodologie` en `/affiliate-partners`.
3. Status pas publiek/operationeel wijzigen na officiële goedkeuring.

## Herbeoordelingsmail

Status: **verzonden op 26 mei 2026**. Onderstaande tekst blijft bewaard als referentie voor eventuele opvolging.

**Naar:** Affiliate@bol.com  
**Onderwerp:** Herbeoordeling affiliate-aanvraag — thuisaccu-gids.nl

```
Beste Bol Affiliate Team,

Bedankt voor jullie eerdere reactie. Ik begrijp dat jullie op dat moment 
onvoldoende toegevoegde waarde zagen in de klantreis.

Sindsdien heb ik thuisaccu-gids.nl substantieel uitgebreid:

1. Interactieve keuzehulp (/keuzehulp)
   — capaciteitsadvies op basis van zonnepanelen, jaarverbruik en doel
   — indicatie van jaarbesparing en terugverdientijd
   — passende modelaanbevelingen vóór aankoop

2. Onafhankelijke productvergelijker (/vergelijken)
   — objectieve criteria (kWh, W, prijs per kWh, garantie)
   — max. 3 modellen naast elkaar, geen betaalde top-posities

3. Redactionele kennisbank (/kennisbank)
   — gidsen over salderen, kWh berekenen, LFP vs NMC, terugverdientijd, 
     dynamische tarieven en aankoopstappenplan

4. Transparante methodologie (/methodologie)
   — uitleg rekenmethode keuzehulp, onafhankelijkheid, affiliate-disclosure

De site helpt bezoekers bewust oriënteren en vergelijken — niet alleen 
doorlinken naar productpagina's.

Website: https://www.thuisaccu-gids.nl
Contact: info@thuisaccu-gids.nl

Graag verzoek ik jullie mijn aanvraag opnieuw te beoordelen.

Met vriendelijke groet,
Sven Deknegt
Thuisaccu-Gids
```

## Na goedkeuring

1. Officieel Bol site-ID in Vercel: `NEXT_PUBLIC_BOL_PARTNER_ID`
2. Product-URL's controleren in `src/lib/bol-urls.ts`
3. `docs/AFFILIATE-AANMELDEN.md` status bijwerken

## Ondertussen

- **Amazon** — actief
- **Coolblue** — via Awin (pending)
- Bol-links mogen op site blijven; commissie pas na goedkeuring
