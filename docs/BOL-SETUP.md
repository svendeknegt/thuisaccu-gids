# Bol.com affiliate — jouw setup

| Gegeven | Waarde |
|---------|--------|
| Website code / Site-ID | **1522053** |
| Domein | thuisaccu-gids.nl |
| Dashboard | https://partner.bol.com |

## Producten via Bol

| Product ID | Bol-link in site |
|------------|------------------|
| `ecoflow-delta-pro` | EcoFlow-overzicht op Bol |
| `ecoflow-delta-2-max` | Zoekresultaat DELTA 2 Max |
| `anker-solix-c1000` | Zoekresultaat Anker Solix C1000 |

Vervang `shopUrl` in `src/lib/products.ts` door een **directe productpagina** zodra je die op bol.com hebt gevonden.

## Linkvorm

```
https://partner.bol.com/click/click?p=2&t=url&s=1522053&f=TXL&url=...&name=ecoflow-delta-pro
```

`name=` = product-id voor rapportage in Bol.

## Vercel (live site)

Settings → Environment Variables:

```
NEXT_PUBLIC_BOL_PARTNER_ID=1522053
```

→ Redeploy.

## Test

1. Klik **Bekijk op Bol.com** op de site.
2. URL moet `partner.bol.com` en `s=1522053` bevatten.
3. Bol-dashboard → rapportage → clicks.

**Niet** zelf kopen via eigen links.
