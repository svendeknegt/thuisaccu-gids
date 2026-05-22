# Affiliate-links instellen

## Hoe het werkt

1. Elk product heeft een **`shopUrl`** (pagina bij Bol/Coolblue/Amazon).
2. In **`.env.local`** vul je je partner-ID's in.
3. De site bouwt automatisch de juiste tracking-link via `getAffiliateUrl()`.

Zonder ID's gaan bezoekers naar de `shopUrl` met UTM-parameters (voor eigen statistiek).

## Stap 1 — Partnerprogramma's

| Winkel | Programma |
|--------|-----------|
| Bol | [partner.bol.com](https://partner.bol.com) |
| Amazon NL | [affiliate-program.amazon.nl](https://affiliate-program.amazon.nl) |
| Coolblue | Vaak via [Awin](https://www.awin.com) of [Daisycon](https://www.daisycon.com) |

## Stap 2 — `.env.local` aanmaken

```bash
cp .env.example .env.local
```

Vul in:

```env
NEXT_PUBLIC_BOL_PARTNER_ID=JOUW_BOL_SITE_ID
NEXT_PUBLIC_AMAZON_ASSOCIATES_TAG=thuisaccugids-21
NEXT_PUBLIC_COOLBLUE_AFFILIATE_URL=https://...awin...?clickref=...&ued={url}
```

Herstart daarna `npm run dev`. Op Vercel: **Settings → Environment Variables** → dezelfde namen toevoegen → Redeploy.

## Stap 3 — Echte product-URL's

Open `src/lib/products.ts` en vervang zoek-URL's door **directe productpagina's**:

```typescript
shopUrl: "https://www.bol.com/nl/nl/p/ecoflow-delta-pro/...",
```

Hoe vind je die URL?

1. Zoek product op Bol/Coolblue/Amazon.
2. Open productpagina.
3. Kopieer adres uit adresbalk.
4. Plak in `shopUrl`.

## Stap 4 — Testen

1. Klik op de site op **Bekijk bij winkel**.
2. Controleer of je op het juiste product uitkomt.
3. In Bol/Amazon dashboard: kliks verschijnen soms met vertraging.

## Product → winkel

| Product | retailer in code |
|---------|-----------------|
| Meeste EcoFlow, Anker, Jackery, Bluetti | `bol` |
| EcoFlow DELTA 3 Plus, RIVER 2 Pro, Anker C300 | `amazon` |
| Modellen met dubbele listing | `bol` + `amazonOffer` |

Pas `retailer` aan als jij andere winkels gebruikt.
