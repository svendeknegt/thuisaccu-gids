# Catalogus-sync (prijzen & beschikbaarheid)

Dit project houdt **prijzen en voorraadstatus** automatisch bij via `data/live-catalog.json`. Specificaties (kWh, vermogen, gewicht) blijven handmatig in `src/lib/products.ts` — die veranderen zelden.

## Hoe het werkt

```
Platformen          sync-catalog.mjs       live-catalog.json       Site
─────────────────   ──────────────────     ─────────────────       ────
EcoFlow NL (API) ─┐
Bluetti EU (API) ─┼── dagelijks ──────────► prijzen + status ───► shop-offers.ts
Amazon.nl        ─┘    GitHub Action       (JSON overlay)         toont actuele prijs
Bol.com          ─── handmatig bol-urls.ts
```

1. **`scripts/catalog-manifest.json`** — welk product bij welke bron hoort
2. **`scripts/sync-catalog.mjs`** — haalt live data op en schrijft JSON + rapport
3. **`src/lib/live-catalog.ts`** — leest JSON en past prijzen toe in de vergelijker
4. **GitHub Action** (`.github/workflows/sync-catalog.yml`) — draait dagelijks, commit + push → Vercel deployt automatisch

## Commando's

```bash
# Handmatig syncen (lokaal)
npm run sync:catalog

# Alleen bekijken, geen bestanden schrijven
npm run sync:catalog:dry

# EcoFlow/Bluetti prijzen + afbeeldingen checken (alleen console)
npm run update:shop-data
```

## Wat is automatisch vs handmatig?

| Platform | Prijs auto | Status auto | Opmerking |
|----------|------------|-------------|-----------|
| EcoFlow NL | ✅ | ✅ | Shopify JSON, betrouwbaar |
| Bluetti EU | ✅ | ✅ | Shopify JSON |
| Amazon.nl | ✅ | ✅ | Scraping, kan falen bij blokkade |
| Bol.com | ❌ | ❌ | 403 bot-blokkade → `src/lib/bol-urls.ts` |

### Bol.com handmatig bijwerken

1. Prijs controleren op bol.com
2. `price` aanpassen in `src/lib/bol-urls.ts`
3. Commit + push → live binnen ~2 min

## Nieuwe producten toevoegen

1. Product in `src/lib/products.ts` + url-bestanden
2. Entry toevoegen in `scripts/catalog-manifest.json` per winkel
3. `npm run sync:catalog` draaien
4. Commit `data/live-catalog.json`

## Specificaties automatisch?

Niet standaard. Capaciteit/vermogen staan in je eigen content (betrouwbaarder dan winkel-HTML). Wil je Amazon-specificaties later meenemen, voeg `"syncSpecs": true` toe aan een manifest-entry — dat is een vervolgstap.

## Rapport

Na elke sync: `data/sync-report.md` — overzicht van prijzen, fouten en handmatige items.

## Sneller dan dagelijks?

In GitHub: **Actions → Sync catalog prices → Run workflow** voor directe sync + deploy.

Of lokaal:

```bash
npm run sync:catalog && git add data/ && git commit -m "prijssync" && git push
```
