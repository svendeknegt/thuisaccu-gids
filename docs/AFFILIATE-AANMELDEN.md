# Affiliate aanmelden (beheerder)

Interne gids — **niet** bedoeld voor bezoekers van de site. Publieke disclosure staat op `/affiliate-partners`.

## Huidige status

| Programma | Status | Actie |
|-----------|--------|--------|
| Amazon Associates NL | Actief | Tag in Vercel |
| Bol Partner | Afgewezen — heraanvraag na site-verbetering | Zie `docs/BOL-HERAANVRAAG.md` |
| Awin (account) | Actief | Alleen winkels die op Awin staan (geen MediaMarkt NL) |
| Coolblue NL | **Afgewezen** — verkopen (nog) niet deze producten via affiliate | Geen heraanvraag; zie `docs/COOLBLUE-AWIN.md` |
| MediaMarkt NL | Nog joinen | **Tradedoubler** — zie `docs/MEDIAMARKT-TRADEDOUBLER.md` |
| Conrad NL | Optioneel | Awin → Join |

## Netwerken

### Direct

- **Bol** — [partner.bol.com](https://partner.bol.com)
- **Amazon NL** — [affiliate-program.amazon.nl](https://affiliate-program.amazon.nl)

### Via Awin (één account)

- [awin.com](https://www.awin.com) — publisher account
- Per winkel: Advertisers → zoeken → Join
- Prioriteit: **Coolblue NL**, daarna Conrad/BCC (MediaMarkt NL = **Tradedoubler**, niet Awin)

### Backup

- [Daisycon](https://www.daisycon.com)
- [TradeTracker](https://www.tradetracker.com)

## Awin publisher-profiel

- Type: Content → Comparison Engine + Editorial Content
- Website: `https://www.thuisaccu-gids.nl`
- Bedrijfsnaam: Thuisaccu-Gids
- Sectoren: Home & Garden, Green, Electronic Superstore

## Na goedkeuring per winkel

1. Awin → Toolbox → Link Builder
2. Template met `{url}`:
   ```env
   NEXT_PUBLIC_COOLBLUE_AFFILIATE_URL=https://www.awin1.com/cread.php?awinmid=XXX&awinaffid=YYY&ued={url}
   NEXT_PUBLIC_MEDIAMARKT_AFFILIATE_URL=...
   NEXT_PUBLIC_CONRAD_AFFILIATE_URL=...
   ```
3. Vercel → Environment Variables → redeploy
4. Product-URL's toevoegen in `src/lib/products.ts` als `extraOffers`

Zie ook `docs/AFFILIATE-LINKS.md` en `docs/COOLBLUE-AWIN.md`.
