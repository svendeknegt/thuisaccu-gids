# Coolblue affiliate (Awin / Daisycon)

## Status (mei 2026)

**Awin-aanvraag afgewezen** — programma Coolblue NL (aid: 85161), publisher thuisaccu-gids (pid: 2906375).

Reden van Coolblue: *"We currently do not yet offer these products"*.

Dit is **geen afkeuring van je site**, maar van het **productassortiment**: Coolblue verkoopt via de webshop-affiliate geen (of nauwelijks) plug-and-play thuisaccu's / grote powerstations meer. Thuisbatterijen lopen via **Coolblue Energie** (installatie + energiecontract) — dat valt buiten het standaard Awin-programma.

**Actie:** geen heraanvraag voor thuisaccu-vergelijking. Awin-account behouden voor andere adverteerders (Conrad, BCC, …).

---

Coolblue heeft geen eigen open affiliate-programma zoals Bol. Meestal via een **affiliate-netwerk**:

| Netwerk | URL |
|---------|-----|
| Awin | https://www.awin.com |
| Daisycon | https://www.daisycon.com |

## Stappen

1. Account aanmaken bij Awin of Daisycon.
2. Zoek **Coolblue** in het advertiser-overzicht en vraag toegang aan.
3. Voeg website **thuisaccu-gids.nl** toe aan je publisher-profiel.
4. Genereer een **deeplink-template** voor product-URL's.
5. Zet in Vercel:

```
NEXT_PUBLIC_COOLBLUE_AFFILIATE_URL=https://...jouw-awin-link...&ued={url}
```

6. Redeploy.

Producten op de site met `retailer: "coolblue"`:

_(momenteel geen — alle modellen staan op Bol.com of Amazon.nl)_

Als je later Coolblue-producten toevoegt, zet `retailer: "coolblue"` in `src/lib/products.ts`.

## Test

Open een Coolblue-product op de site → knop **Bekijk op Coolblue** → URL moet via Awin/Daisycon lopen.

Zie ook `docs/AFFILIATE-LINKS.md`.
