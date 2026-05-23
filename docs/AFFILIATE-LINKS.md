# Affiliate-links instellen

## Hoe het werkt

1. Elk product heeft een **`shopUrl`** (primaire winkel) en optioneel **`amazonOffer`** / **`extraOffers`**.
2. In **`.env.local`** vul je partner-ID's en Awin-templates in.
3. Bezoekers zien **meerdere winkelknoppen** als er meer offers zijn — gesorteerd op prijs.

Zonder ID's gaan bezoekers naar de `shopUrl` met UTM-parameters.

## Stap 1 — Netwerken aanmelden (prioriteit)

| Prioriteit | Netwerk | Winkels voor powerstations |
|------------|---------|---------------------------|
| 1 | [Bol Partner](https://partner.bol.com) | Bol.com |
| 1 | [Amazon Associates NL](https://affiliate-program.amazon.nl) | Amazon.nl |
| 1 | [Awin](https://www.awin.com) | Coolblue NL, MediaMarkt NL |
| 2 | Awin | Conrad NL, BCC NL |
| 3 | [Daisycon](https://www.daisycon.com) | Backup-netwerk |
| 3 | [TradeTracker](https://www.tradetracker.com) | Backup-netwerk |

Volledig overzicht op de site: `/affiliate-partners`.

## Stap 2 — `.env.local`

```bash
cp .env.example .env.local
```

```env
NEXT_PUBLIC_BOL_PARTNER_ID=JOUW_BOL_SITE_ID
NEXT_PUBLIC_AMAZON_ASSOCIATES_TAG=thuisaccugids-21
NEXT_PUBLIC_COOLBLUE_AFFILIATE_URL=https://www.awin1.com/cread.php?awinmid=XXX&awinaffid=YYY&ued={url}
NEXT_PUBLIC_MEDIAMARKT_AFFILIATE_URL=https://www.awin1.com/cread.php?awinmid=XXX&awinaffid=YYY&ued={url}
NEXT_PUBLIC_CONRAD_AFFILIATE_URL=https://www.awin1.com/cread.php?awinmid=XXX&awinaffid=YYY&ued={url}
```

Op Vercel: dezelfde namen → Redeploy.

## Stap 3 — Extra winkel per product

In `src/lib/products.ts`:

```typescript
extraOffers: [
  {
    retailer: "coolblue",
    shopUrl: "https://www.coolblue.nl/product/...",
    price: 1649,
  },
  {
    retailer: "mediamarkt",
    shopUrl: "https://www.mediamarkt.nl/nl/product/...",
    price: 1699,
  },
],
```

## Stap 4 — Testen

1. Productpagina → meerdere knoppen (Bol, Amazon, Coolblue, …)
2. Klik → tracking-URL klopt
3. `/affiliate-partners` → status per winkel
