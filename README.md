# ThuisaccuGids.nl (Next.js)

Onafhankelijke vergelijkingssite voor thuisaccu's — overzichtelijk, vertrouwd, klaar voor hosting op **Vercel** of elke Node-host.

## Starten lokaal

1. Installeer [Node.js](https://nodejs.org/) (LTS, incl. npm).
2. In deze map:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy op Vercel

1. Push het project naar GitHub.
2. Ga naar [vercel.com](https://vercel.com) → **Add New Project** → importeer de repo.
3. Framework: **Next.js** (automatisch herkend).
4. Deploy — klaar.

Of via CLI:

```bash
npm i -g vercel
vercel
```

## Structuur

| Pad | Doel |
|-----|------|
| `src/app/` | Pagina's (home, vergelijken, product, kennisbank) |
| `src/components/` | UI, keuzehulp, vergelijk-balk |
| `src/lib/products.ts` | Producten + affiliate-URL's (hier aanpassen) |
| `legacy/` | Oude statische HTML-site (optioneel) |

## Features (bewust rustig)

- **Keuzehulp**: 3 stappen (panelen, verbruik, doel) — geen overload aan sliders
- **Vergelijken**: filters + max. 3 producten naast elkaar
- **Productpagina**: specificaties, voor/nadelen, duidelijke winkel-link
- **Vertrouwen**: strip bovenaan, affiliate-disclaimer, geen pop-ups

## Affiliate-links

Vervang placeholders in `src/lib/products.ts` (`affiliateUrl`) door je echte partnerlinks (Bol, Coolblue, Amazon Associates, etc.).

## Oude site

De vorige HTML-versie kun je naar `legacy/` verplaatsen of verwijderen zodra je volledig op Next.js zit.
