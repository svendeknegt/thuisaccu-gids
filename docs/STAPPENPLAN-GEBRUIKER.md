# Stappenplan — Thuisaccu-Gids.nl verdienen & perfectioneren

**Voor:** Sven (beheerder)  
**Site:** https://www.thuisaccu-gids.nl  
**Laatst bijgewerkt:** mei 2026

Dit document is jouw **praktische handleiding**: wat je vannacht en deze week kunt doen, welke partners zinvol zijn, wat concurrenten hebben dat wij (bewust) wel/niet kopiëren, en welke gegevens je aan mij doorgeeft zodat de site technisch kan worden bijgewerkt.

---

## Deel 0 — Eerlijk over “geld op je rekening vanavond”

| Verwachting | Realiteit |
|-------------|-----------|
| Eerste euro’s **vanavond** | Alleen als iemand **vandaag** via jouw Amazon-link koopt **en** Amazon die verkoop toerekent. Uitbetaling duurt weken (min. €10 saldo). |
| Bol-commissie | Pas na **goedkeuring** Bol Partner (heraanvraag). |
| Structureel inkomen | **Verkeer** (Google, social, forums) + **vertrouwen** + **goede links**. Dat bouw je weken/maanden op. |

**Wél zinvol vanavond (2–4 uur):**

1. Amazon-links testen (tag `thuisaccugids-21` in URL).
2. Site delen waar jouw doelgroep zit (Facebook-groep zonnepanelen, Reddit r/thenetherlands energie, eigen netwerk).
3. Bol-heraanvraag **voorbereiden** (mail pas over 4–6 weken — zie Deel 4).
4. Search Console controleren of `/keuzehulp` en `/vergelijken` geïndexeerd zijn.

---

## Deel 1 — Jouw niche vs concurrenten (top 5)

| Site | Focus | Verdienmodel | Wat zij hebben dat wij misten |
|------|--------|--------------|-------------------------------|
| [Thuisaccuwijzer.nl](https://www.thuisaccuwijzer.nl/) | Vaste thuisbatterijen + **leadformulier** | Offertes installateurs | Lange wizard, contactgegevens, “wat kost”-blok |
| [Thuis-batterij-vergelijken.nl](https://thuis-batterij-vergelijken.nl/) | Vaste systemen (Tesla, Huawei) | Waarschijnlijk affiliate/leads | Grote vergelijkingstabel vaste merken |
| [Slimster.nl](https://slimster.nl/thuisbatterij/) | Installateur-route | Lead naar installateurs | 10-merken tabel, 1-fase/3-fase |
| [HuisAssist.nl](https://huisassist.nl/thuisbatterij/) | Installateurs offertes | Lead generation | Prijs incl. installatie, “gratis offertes” |
| [NextEnergy.nl](https://www.nextenergy.nl/) | Energieleverancier content | Eigen klanten | Profiel-gebaseerd advies |

**Jouw positie (sterk en uniek):**

- **Plug-and-play** powerstations (EcoFlow, Anker, Jackery, Bluetti) via Bol + Amazon.
- **Geen leadformulier** — privacyvriendelijk, past bij Bol’s “toegevoegde waarde vóór aankoop”.
- Keuzehulp + side-by-side vergelijker (max. 3) + methodologie + kennisbank.

**Bewust níet kopiëren:**

- Grote contactformulieren / telefoonplicht (concurrenten verdienen aan leads; jij aan affiliate).
- Vaste Tesla/Huawei-vergelijking als hoofdassortiment (ander product, andere partner).
- “Beste thuisbatterij 2026”-clickbait zonder nuance.

**Wel nuttig toegevoegd op de site:**

- Kostenband plug-and-play op homepage.
- Duidelijke route: plug-and-play **of** installateur (link naar kennisbank + Coolblue Energie info).

---

## Deel 2 — Affiliate-partners: prioriteit en nut

### Tier 1 — Nu het belangrijkst

| Partner | Status bij jou | Commissie-potentie | Actie |
|---------|----------------|-------------------|--------|
| **Amazon Associates NL** | ✅ Actief (`thuisaccugids-21`) | Medium — powerstations €300–€3000 | Verkeer sturen, prijzen maandelijks checken |
| **Bol Partner** | ⏳ Heraanvraag | **Hoog** voor NL — meeste modellen | Mail over 4–6 weken (template in `BOL-HERAANVRAAG.md`) |

### Tier 2 — Via Awin (één account)

| Partner | Status | Nut voor jouw site |
|---------|--------|-------------------|
| **Awin publisher** | Account actief | Hub voor meerdere winkels |
| **MediaMarkt NL** | Nog joinen | Alleen zinvol als je concrete product-URL’s hebt die zij verkopen |
| **Coolblue NL** | ❌ Afgewezen voor jullie assortiment | Geen heraanvraag; wel info-link Coolblue Energie |
| **Conrad / BCC** | Optioneel | Laag — weinig overlap met huidige catalogus |

### Tier 3 — Backup / later

- **Daisycon**, **TradeTracker** — als Bol/Amazon/Awin niet volstaan.
- **EcoFlow / Anker direct** — vaak lage acceptatie voor kleine sites; pas na traffic.

### Partners die **niet** passen bij jouw catalogus

- Installateur-netwerken (HuisAssist-model) — andere business, andere content.
- Coolblue webshop-affiliate — geen plug-and-play thuisaccu’s in programma.

---

## Deel 3 — Stappenplan: aanmelden (jij handmatig)

### Stap 1 — Amazon (15 min) — ✅ al gedaan, controleer

1. Inloggen: https://affiliate-program.amazon.nl  
2. **Partnernet → Rapporten** — zijn er clicks?  
3. **Instellingen → Uitbetaling** — IBAN ingevuld?  
4. Testlink kopiëren van productpagina Bluetti op site → moet `tag=thuisaccugids-21` bevatten.  
5. **Niet** zelf kopen via eigen links (verboden).

**Doorgeven aan developer (alleen bij wijziging):**

```env
NEXT_PUBLIC_AMAZON_ASSOCIATES_TAG=jouw-nieuwe-tag-21
```

---

### Stap 2 — Bol Partner (30 min voorbereiding + mail later)

1. Inloggen: https://partner.bol.com  
2. **Account → Websitegegevens** — noteer **Site-ID** (nu o.a. `1522053`).  
3. Wacht tot checklist in `docs/BOL-HERAANVRAAG.md` af is (grotendeels ✅ op site).  
4. **4–6 weken** na laatste grote site-update: mail naar **Affiliate@bol.com** (template in dat bestand).  
5. Bij goedkeuring: Site-ID bevestigen.

**Doorgeven bij goedkeuring:**

```env
NEXT_PUBLIC_BOL_PARTNER_ID=1522053
```

(Alleen aanpassen als Bol een **nieuw** ID geeft.)

---

### Stap 3 — Awin + MediaMarkt (45 min)

1. https://www.awin.com → Publisher → inloggen.  
2. **Advertisers → Join programmes** → zoek **MediaMarkt Netherlands**.  
3. Profiel consistent houden:
   - Type: Content / Comparison  
   - URL: `https://www.thuisaccu-gids.nl`  
   - Beschrijving: onafhankelijke vergelijking plug-and-play thuisaccu’s  
4. Na goedkeuring: **Toolbox → Link builder** → deeplink-template met `{url}`.  
5. Zoek op MediaMarkt of zij dezelfde EcoFlow/Anker SKU’s hebben als jij. Geen link zonder echt product.

**Doorgeven:**

```env
NEXT_PUBLIC_MEDIAMARKT_AFFILIATE_URL=https://www.awin1.com/cread.php?awinmid=XXXX&awinaffid=YYYY&ued={url}
```

Vervang `XXXX` / `YYYY` door jouw echte waarden uit Awin.

---

### Stap 4 — Coolblue (geen actie nu)

- Webshop-affiliate: **afgewezen** — past niet bij assortiment.  
- Houd **informatielink** naar Coolblue Energie voor bezoekers die vaste batterij zoeken.  
- Heraanvraag pas als Coolblue powerstations weer affiliate heeft.

---

### Stap 5 — Juridisch & vertrouwen (20 min)

Controleer live:

- [ ] `/privacy` — cookie/consent werkt  
- [ ] `/affiliate-partners` — actuele status  
- [ ] `/methodologie` — bereikbaar vanaf footer  
- [ ] Footer: Amazon Associates-vermelding zichtbaar  

---

### Stap 6 — Verkeer (dagelijks eerste week)

| Kanaal | Actie | Verwachting |
|--------|--------|-------------|
| **Google Search Console** | Sitemap, URL-inspectie `/keuzehulp`, `/kennisbank/thuisaccu-kopen` | Indexering dagen–weken |
| **Social** | 1 post: “Gratis keuzehulp thuisaccu” + link keuzehulp | Directe clicks mogelijk |
| **Fora / groepen** | Alleen waar regels het toestaan; geen spam | Gericht verkeer |
| **Eigen netwerk** | Delen met vrienden/familie die orienteren | Eerste test-clicks |

**Geen betaalde ads** tot Bol goedkeurt en je conversie snapt — anders geld weg.

---

## Deel 4 — Wat jij doorgeeft voor technische implementatie

Stuur (bijv. via chat of issue) per regel:

```
BOL_PARTNER_ID=...
AMAZON_TAG=...          (alleen als gewijzigd)
MEDIAMARKT_AWIN_URL=...
PRODUCT_NAAM=ecoflow-delta-2-max
MEDIAMARKT_URL=https://www.mediamarkt.nl/nl/product/...
```

Dan kan op de site:

- `extraOffers` in `src/lib/products.ts`  
- Env-vars in Vercel  
- Status op `/affiliate-partners` en `/winkels` bijwerken  

---

## Deel 5 — Site-onderhoud (wekelijks, 30 min)

1. **Prijzen** — spotcheck 3 bestsellers op Bol + Amazon vs. `bol-urls.ts` / `amazon-urls.ts`.  
2. **Broken links** — één productpagina openen, beide winkelknoppen testen.  
3. **Search Console** — welke zoektermen impressies geven?  
4. **Content** — 1 kleine update (nieuw FAQ, prijs in artikel) elke 2–3 weken helpt SEO.

---

## Deel 6 — Tijdlijn (realistisch)

| Periode | Doel |
|---------|------|
| **Vannacht / dag 1** | Amazon testen, site delen, GSC check |
| **Week 1** | MediaMarkt Awin join, 2–3 social posts, prijzen controleren |
| **Week 4–6** | Bol heraanvraag mailen |
| **Maand 2–3** | Eerste organische clicks Amazon; Bol hopelijk goedgekeurd |
| **Maand 3+** | Schalen content + eventueel MediaMarkt-producten toevoegen |

---

## Deel 7 — Checklist “site is partner-klaar”

- [x] Keuzehulp met capaciteit + besparing  
- [x] Methodologie + disclaimer + affiliate-pagina  
- [x] 14+ producten, Bol + Amazon knoppen  
- [x] Kennisbank 8+ artikelen  
- [x] Plug-and-play vs installateur-artikel  
- [x] Geen misleidende “beste”-claims  
- [ ] Organisch verkeer (jouw taak)  
- [ ] Bol heraanvraag verstuurd (jouw taak, week 4–6)  
- [ ] MediaMarkt env in Vercel (na Awin-goedkeuring)  

---

## Snelle links intern

| Document | Inhoud |
|----------|--------|
| `docs/BOL-HERAANVRAAG.md` | Mailtemplate Bol |
| `docs/AFFILIATE-AANMELDEN.md` | Technische partnerlijst |
| `docs/VERDIENEN.md` | Korte verdien-checklist |
| `docs/SEO-SETUP.md` | Google / sitemap |

---

*Vragen of nieuwe partner-URL’s? Geef door met product-slug — dan wordt de site bijgewerkt.*
