# Affiliate — site compleet voor Bol, Amazon & Coolblue

Interne checklist. Publieke info: `/affiliate-partners`, `/winkels`, `/methodologie`.

## Realistische verwachtingen

| Programma | Acceptatie via site? | Opmerking |
|-----------|----------------------|-----------|
| **Amazon** | ✓ Al actief | Disclosure in footer + productpagina's |
| **Bol** | Heraanvraag verzonden — wachten op beoordeling | Toegevoegde waarde: keuzehulp, kennisbank, vergelijker |
| **Coolblue** | **Niet via plug-and-play links** | Afgewezen: verkopen deze producten niet in affiliate-shop. Wel: installateur-route (Coolblue Energie) op site |

Coolblue affiliate accepteert waarschijnlijk **pas** als Coolblue weer powerstations in de webshop heeft, of als je site primair gaat over producten die zij wél verkopen (nu: powerbanks — past niet bij niche).

---

## Wat de site nu biedt (voor partner-review)

- `/keuzehulp` — capaciteit, besparing, modellen
- `/methodologie` — criteria, onafhankelijkheid, rekenmethode
- `/winkels` — transparante beschikbaarheid Bol / Amazon / Coolblue
- `/vergelijken` — max. 3 modellen, filters, geen betaalde ranking
- Kennisbank — 9+ artikelen incl. plug-and-play vs installateur
- Productpagina's — koopgids, voor-/nadelen, multi-winkel knoppen (Bol + Amazon)
- `/affiliate-partners` — disclosure per partner
- Amazon Associates notice — footer + pagina's met Amazon-links

---

## Bol — heraanvraag

Zie `docs/BOL-HERAANVRAAG.md`. De mail naar **Affiliate@bol.com** is verzonden op 26 mei 2026; vervolgactie is mailbox controleren op reactie.

Benadruk:

1. Keuzehulp vóór aankoop  
2. Methodologie + onafhankelijkheid  
3. Multi-winkel vergelijking (Bol + Amazon)  
4. Geen nep-links  

---

## Amazon — onderhoud

- Tag in Vercel: `NEXT_PUBLIC_AMAZON_ASSOCIATES_TAG=thuisaccugids-21`
- Periodiek prijzen/ASINs in `src/lib/amazon-urls.ts`
- Disclosure blijft zichtbaar (footer)

---

## Coolblue — strategie

**Nu:** geen heraanvraag voor webshop-affiliate op thuisaccu-vergelijking.

**Wel op site:**

- Artikel `/kennisbank/plug-and-play-vs-installateur`
- Link Coolblue Energie (informatie, geen affiliate)
- `/winkels` legt uit waarom geen Coolblue productknoppen

**Later heraanvragen** alleen als:

- Coolblue powerstations/thuisaccu's weer in webshop + affiliate, **of**
- Je site uitbreidt naar categorieën die Coolblue wél affiliate heeft

Mail bij heraanvraag (Engels):

```
We compare plug-and-play home batteries (Bol/Amazon) and also guide visitors 
who need a fixed home battery via installer routes (Coolblue Energie advice). 
We do not link to Coolblue product pages for items you do not sell.
```

---

## Deploy-checklist

- [ ] Push + Vercel deploy
- [ ] Search Console: sitemap `https://www.thuisaccu-gids.nl/sitemap.xml`
- [ ] Handmatig testen: Bol-link, Amazon-link (tag in URL), keuzehulp
- [x] Bol-mail na wachttijd
- [ ] Coolblue: geen actie tot assortiment wijzigt
