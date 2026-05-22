# SEO & Google Search Console

## 1. Search Console koppelen

1. Ga naar [Google Search Console](https://search.google.com/search-console).
2. Property toevoegen: **URL-prefix** → `https://thuisaccu-gids.nl`.
3. Verificatie via DNS (aanbevolen bij Vercel) of HTML-tag.

### HTML-tag (optioneel)

In Vercel → Environment Variables:

```
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=jouw-code-zonder-prefix
```

Redeploy. De layout leest deze variabele voor de meta-tag.

## 2. Sitemap indienen

De site levert automatisch:

- `https://thuisaccu-gids.nl/sitemap.xml`
- `https://thuisaccu-gids.nl/robots.txt`

In Search Console: **Sitemaps** → voeg toe: `sitemap.xml`.

### Indexering versnellen (optioneel)

Menu **URL-inspectie** → plak URL → **Indexering aanvragen** voor:

- `https://thuisaccu-gids.nl/vergelijken`
- `https://thuisaccu-gids.nl/kennisbank/thuisaccu-kopen`
- `https://thuisaccu-gids.nl/product/ecoflow-delta-pro`

## 2b. Verdienen & partners

Zie `docs/VERDIENEN.md`, `docs/COOLBLUE-AWIN.md` en `/affiliate-partners` op de site.

## 3. Zoekwoorden monitoren (wekelijks)

| Query | Pagina die je optimaliseert |
|-------|------------------------------|
| thuisaccu vergelijken | `/vergelijken` |
| thuisaccu kopen | `/kennisbank/thuisaccu-kopen` |
| thuisbatterij kwh | `/kennisbank/kwh-berekenen` |
| salderen thuisaccu | `/kennisbank/salderen` |
| ecoflow delta pro | `/product/ecoflow-delta-pro` |

Pas titel + eerste alinea aan als je impressies ziet zonder clicks.

## 4. Interne links

- Kennisbankartikelen → `/vergelijken` en relevante `/product/...`
- Productpagina's → gerelateerd artikel in kennisbank
- Homepage → nieuwste artikelen

## 5. Structured data

De site stuurt JSON-LD mee voor:

- Organisatie + website (layout)
- FAQ-pagina
- Kennisbankartikelen
- Productpagina's

Test met [Rich Results Test](https://search.google.com/test/rich-results).
