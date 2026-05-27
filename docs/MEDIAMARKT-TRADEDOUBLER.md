# MediaMarkt NL — Tradedoubler (niet Awin)

MediaMarkt Nederland zit **niet** op Awin. Het officiële programma loopt via **Tradedoubler**.

Bron: [mediamarkt.nl affiliate](https://www.mediamarkt.nl/nl/specials/affiliate) · programma [262336](https://directory.tradedoubler.com/nl/programs/262336-MediaMarkt)

## Aanmelden (stappen)

1. Ga naar [publisher.tradedoubler.com](https://publisher.tradedoubler.com) (of via [tradedoubler.com](https://www.tradedoubler.com)).
2. Maak een **publisher**-account aan (gratis).
3. Voeg je website toe: `https://www.thuisaccu-gids.nl`
4. Zoek programma **MediaMarkt** (ID **262336**, Nederland).
5. Klik **Apply** / aanvragen — goedkeuring kan enkele dagen duren.
6. Na goedkeuring: **Tools → Link generator** (of vergelijkbaar) → deeplink naar een product-URL.
7. Kopieer de tracking-URL en zoek het **vaste deel** zonder product-URL, of een template met plek voor de doel-URL.

## Doorgeven voor de site

Stuur de deeplink-template (mag `{url}` bevatten als Tradedoubler dat ondersteunt, anders het volledige voorbeeld + uitleg):

```env
NEXT_PUBLIC_MEDIAMARKT_AFFILIATE_URL=...jouw-tradedoubler-deeplink-met-{url}...
```

Per product ook:

```
PRODUCT=ecoflow-delta-2-max
MEDIAMARKT_URL=https://www.mediamarkt.nl/nl/product/...
```

## Let op — assortiment

- Controleer of MediaMarkt **dezelfde** powerstations verkoopt (EcoFlow, Anker, …).
- Geen commissie op o.a. cadeaukaarten, abonnementen, outlet — zie programmavoorwaarden.
- Alleen linken als er een **echte productpagina** is.

## Commissie (indicatief)

- Tot ca. **4%** op verkopen (volgens MediaMarkt-pagina).
- Cookie vaak **30 dagen**.

## Awin vs Tradedoubler

| Netwerk | MediaMarkt NL |
|---------|----------------|
| Awin | ❌ Niet (wel in sommige andere landen) |
| Tradedoubler | ✅ Ja |

Coolblue blijft (indien ooit) via **Awin** — dat is een ander programma.
