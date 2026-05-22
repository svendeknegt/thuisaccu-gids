# Coolblue affiliate (Awin / Daisycon)

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
