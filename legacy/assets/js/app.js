// ThuisaccuGids.nl - Core Application Script
// Beheert de interactieve calculator, dynamische filters, mobiele menu en rendering

document.addEventListener("DOMContentLoaded", () => {
  // Global comparison state variable
  let selectedCompareIds = [];
  // ==========================================================================
  // MOBILE MENU TOGGLE
  // ==========================================================================
  const menuToggle = document.getElementById("mobile-menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      menuToggle.classList.toggle("open");
    });
  }

  // Voeg CSS class toe voor het tonen van het menu op mobiel als 'active' is getoggled
  const style = document.createElement('style');
  style.innerHTML = `
    @media (max-width: 768px) {
      .nav-menu.active {
        display: flex !important;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: #ffffff;
        border-bottom: 1px solid var(--border-color);
        padding: 2rem;
        gap: 1.5rem;
        box-shadow: 0 8px 16px rgba(0,0,0,0.08);
        z-index: 99;
      }
      .menu-toggle.open span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
      }
      .menu-toggle.open span:nth-child(2) {
        opacity: 0;
      }
      .menu-toggle.open span:nth-child(3) {
        transform: rotate(-45deg) translate(6px, -6px);
      }
      .menu-toggle span {
        transition: var(--transition);
      }
    }
  `;
  document.head.appendChild(style);

  // ==========================================================================
  // HOMEPAGE: INTERACTIVE CALCULATOR (KEUZEHULP)
  // ==========================================================================
  const panelsInput = document.getElementById("solar-panels");
  const usageInput = document.getElementById("power-usage");
  const rateInput = document.getElementById("electricity-rate");
  const penaltyInput = document.getElementById("feed-in-penalty");

  const panelsVal = document.getElementById("val-solar-panels");
  const usageVal = document.getElementById("val-power-usage");
  const rateVal = document.getElementById("val-electricity-rate");
  const penaltyVal = document.getElementById("val-feed-in-penalty");
  
  const goalSavings = document.getElementById("goal-btn-savings");
  const goalTrading = document.getElementById("goal-btn-trading");
  const radioSavings = document.getElementById("goal-savings");
  const radioTrading = document.getElementById("goal-trading");

  const recCapacity = document.getElementById("recommended-capacity");
  const resultText = document.getElementById("result-text");
  const recProductsList = document.getElementById("recommended-products-list");

  // ROI Dashboard
  const estSavings = document.getElementById("est-savings");
  const estPayback = document.getElementById("est-payback");
  const estRoi = document.getElementById("est-roi");

  let selectedGoal = "savings"; // Standaardwaarde

  if (panelsInput && usageInput) {
    // Event listeners voor sliders
    panelsInput.addEventListener("input", () => {
      panelsVal.textContent = `${panelsInput.value} panelen`;
      
      // Verberg/toon terugleverboete input gebaseerd op panelen
      const feedInGroup = document.getElementById("group-feed-in-penalty");
      if (feedInGroup) {
        if (parseInt(panelsInput.value) === 0) {
          feedInGroup.style.display = "none";
        } else {
          feedInGroup.style.display = "flex";
        }
      }
      calculateCapacity();
    });

    usageInput.addEventListener("input", () => {
      usageVal.textContent = `${usageInput.value} kWh`;
      calculateCapacity();
    });

    if (rateInput) {
      rateInput.addEventListener("input", () => {
        if (rateVal) rateVal.textContent = `€${parseFloat(rateInput.value).toFixed(2).replace('.', ',')} / kWh`;
        calculateCapacity();
      });
    }

    if (penaltyInput) {
      penaltyInput.addEventListener("input", () => {
        if (penaltyVal) penaltyVal.textContent = `€${parseFloat(penaltyInput.value).toFixed(2).replace('.', ',')} / kWh`;
        calculateCapacity();
      });
    }

    // Event listeners voor doelen
    if (goalSavings && goalTrading) {
      goalSavings.addEventListener("click", () => {
        goalSavings.classList.add("active");
        goalTrading.classList.remove("active");
        if (radioSavings) radioSavings.checked = true;
        selectedGoal = "savings";
        calculateCapacity();
      });

      goalTrading.addEventListener("click", () => {
        goalTrading.classList.add("active");
        goalSavings.classList.remove("active");
        if (radioTrading) radioTrading.checked = true;
        selectedGoal = "trading";
        calculateCapacity();
      });
    }

    // Eerste berekening uitvoeren
    calculateCapacity();
  }

  function calculateCapacity() {
    const panels = parseInt(panelsInput.value);
    const usage = parseInt(usageInput.value);
    const rate = rateInput ? parseFloat(rateInput.value) : 0.30;
    const penalty = (penaltyInput && panels > 0) ? parseFloat(penaltyInput.value) : 0.00;
    
    // Algoritme voor capaciteitsberekening
    // Eigen verbruik optimalisatie: ~0.5 kWh per paneel + 0.0008 kWh per jaarlijks verbruik
    let capacity = 0;
    
    if (panels === 0) {
      // Huishouden zonder zonnepanelen (bijvoorbeeld alleen laden op goedkope uren)
      capacity = usage * 0.0005; // kleiner buffer voor noodgevallen/handelen
    } else {
      capacity = (panels * 0.45) + (usage * 0.0002);
    }

    // Aanpassing op basis van het gekozen doel
    if (selectedGoal === "trading") {
      // Handelen vereist meer capaciteit om optimaal te laden en ontladen
      capacity = capacity * 1.35;
    }

    // Afronden en binnen logische grenzen houden (min 1 kWh, max 20 kWh voor consumenten)
    capacity = Math.max(1.0, Math.min(20.0, capacity));
    const finalCapacity = Math.round(capacity * 10) / 10; // 1 decimaal

    // Update UI
    if (recCapacity) {
      recCapacity.textContent = `${finalCapacity} kWh`;
    }

    // Bereken ROI & Besparing
    let annualSavings = 0;
    let priceSpread = rate * 0.6; // dynamic trading spreads approx 60% of avg rate

    if (panels === 0) {
      // Alleen handelen op dynamische tarieven (laden wanneer goedkoop, ontladen wanneer duur)
      // We gaan uit van 280 bruikbare cycli per jaar
      annualSavings = finalCapacity * 280 * priceSpread;
    } else {
      const annualGeneration = panels * 360; // 360 kWh per paneel in NL per jaar
      const directConsumption = annualGeneration * 0.3; // 30% eigen verbruik zonder accu

      // Hoeveel overtollige zonnestroom is er gemiddeld per dag?
      // (70% van de dagproductie wordt teruggeleverd zonder accu)
      const dailyExcessKwh = (annualGeneration / 365) * 0.7;

      // Hoeveel van dat dagelijkse overschot kan de accu opvangen?
      // Een grotere accu vangt meer op, tot een maximum van 90%
      const captureEfficiency = Math.min(0.9, finalCapacity / Math.max(dailyExcessKwh, 0.1));

      // Nieuw eigen verbruikspercentage: direct verbruik + wat de accu extra opvangt
      // Maximaal 72% (praktijkgrens voor plug-and-play accu's)
      const newEigenVerbruikPct = Math.min(0.72, 0.3 + captureEfficiency * 0.55);

      let shiftedEnergy = annualGeneration * (newEigenVerbruikPct - 0.3);
      
      // Niet meer verplaatsen dan fysieke batterij limieten (max 300 cycli per jaar)
      shiftedEnergy = Math.min(shiftedEnergy, finalCapacity * 300);
      // Niet meer verplaatsen dan wat we voorheen moesten inkopen
      shiftedEnergy = Math.min(shiftedEnergy, usage - directConsumption);
      shiftedEnergy = Math.max(0, shiftedEnergy);

      // Solar savings: we vermijden stroominkoop (rate) + vermijden terugleverboete (penalty)
      // We corrigeren met 90% batterij-efficiëntie
      let solarSavings = shiftedEnergy * (rate + penalty) * 0.9;
      
      if (selectedGoal === "trading") {
        // Combinatie van solar opslag en actief handelen op overschotten
        const tradingSavings = finalCapacity * 200 * priceSpread * 0.9;
        annualSavings = solarSavings + tradingSavings;
      } else {
        annualSavings = solarSavings;
      }
    }

    // Geschatte batterijprijs: gem. €720 per kWh capaciteit
    const estimatedCost = finalCapacity * 720;
    let paybackPeriod = estimatedCost / (annualSavings || 1);
    let roi = (annualSavings / (estimatedCost || 1)) * 100;

    // Beperk paybackPeriod tot reële getallen
    if (annualSavings <= 0) {
      paybackPeriod = 0;
      roi = 0;
    }

    // Update ROI Dashboard
    if (estSavings) estSavings.textContent = `€ ${Math.round(annualSavings)},-`;
    if (estPayback) {
      estPayback.textContent = annualSavings > 0 
        ? `${paybackPeriod.toFixed(1).replace('.', ',')} jr` 
        : '-';
    }
    if (estRoi) estRoi.textContent = annualSavings > 0 ? `${roi.toFixed(1).replace('.', ',')}%` : '0%';

    // Dynamische verklarende tekst injecteren
    if (resultText) {
      let explanation = "";
      if (panels === 0) {
        explanation = `Zonder zonnepanelen raden we een accu van ca. <strong>${finalCapacity} kWh</strong> aan. Hiermee kun je slim laden op dynamische uren met negatieve stroomtarieven en stroom gebruiken als de tarieven het hoogst zijn.`;
      } else if (selectedGoal === "savings") {
        explanation = `Met <strong>${panels} zonnepanelen</strong> en een verbruik van <strong>${usage} kWh</strong> adviseren we <strong>${finalCapacity} kWh</strong> opslag. Hiermee verhoog je je eigen zonne-energieverbruik van 30% naar ca. <strong>70-75%</strong>, wat je maximaal beschermt tegen terugleverkosten en boetes.`;
      } else {
        explanation = `Voor handelen op dynamische tarieven met <strong>${panels} panelen</strong> is een grotere capaciteit van <strong>${finalCapacity} kWh</strong> optimaal. Hiermee sla je goedkope zonnestroom én goedkope netstroom op om op piekuren met winst terug te leveren.`;
      }
      resultText.innerHTML = explanation;
    }

    // Aanbevelen van de beste 3 accu's gebaseerd op een geschiktheidsscore
    recommendProducts(finalCapacity, selectedGoal);
  }

  function recommendProducts(targetCapacity, goal) {
    if (!recProductsList || typeof PRODUCTS === "undefined") return;

    // Bereken score per product
    const scored = PRODUCTS.map(p => {
      let score = 100;
      
      // Strafpunt voor capaciteitsverschil (hoe groter het verschil, hoe lager de score)
      const diff = Math.abs(p.capacity - targetCapacity);
      score -= diff * 15;

      // Bonus als het product perfect aansluit bij de doelstelling
      if (p.bestFor === goal) {
        score += 25;
      }
      
      // Kleine bonus voor hoge waardering
      score += (p.rating - 4.0) * 10;

      return { product: p, score: score };
    });

    // Sorteren op hoogste score
    scored.sort((a, b) => b.score - a.score);

    // Top 3 selecteren
    const top3 = scored.slice(0, 3).map(item => item.product);

    // Renderen in HTML
    recProductsList.innerHTML = top3.map(p => `
      <div class="rec-product-card">
        <div>
          <div class="rec-prod-name">${p.name}</div>
          <div class="rec-prod-spec">${p.capacity} kWh | ${p.power}W | ${p.type}</div>
        </div>
        <div style="display: flex; align-items: center; gap: 1rem;">
          <div class="rec-prod-price">€${p.price}</div>
          <a href="${p.affiliateUrl}" target="_blank" class="rec-prod-btn">Bekijk Deal</a>
        </div>
      </div>
    `).join('');
  }

  // ==========================================================================
  // HOMEPAGE: FEATURED PRODUCTS GRID
  // ==========================================================================
  const featuredGrid = document.getElementById("featured-products-grid");
  if (featuredGrid && typeof PRODUCTS !== "undefined") {
    // Sorteer op rating (hoogste eerst) en pak de top 3
    const featured = [...PRODUCTS]
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 3);

    renderProductGrid(featured, featuredGrid);
  }

  // Helper om een grid met productkaarten te renderen
  function renderProductGrid(productsList, containerElement) {
    if (!containerElement) return;

    if (productsList.length === 0) {
      containerElement.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-secondary);">
          <p>Geen thuisaccu's gevonden die voldoen aan deze filters. Probeer een andere combinatie.</p>
        </div>
      `;
      return;
    }

    containerElement.innerHTML = productsList.map(p => `
      <article class="product-card" id="card-${p.id}">
        <div class="product-badge">${p.type}</div>
        <div class="product-img-wrapper">
          <img class="product-img" src="${p.img}" alt="${p.name}">
        </div>
        <div class="product-content">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.5rem; margin-bottom: 0.5rem;">
            <div class="product-brand" style="margin-bottom: 0;">${p.brand}</div>
            ${containerElement.id === 'compare-products-grid' ? `
              <label class="compare-checkbox-label" style="margin-top: 0;">
                <input type="checkbox" class="compare-checkbox" data-id="${p.id}" ${selectedCompareIds.includes(p.id) ? 'checked' : ''}>
                Vergelijk
              </label>
            ` : ''}
          </div>
          <h3 class="product-name">${p.name}</h3>
          <div class="product-rating">
            <span class="star-icon">★</span>
            <span class="rating-num">${p.rating} / 5.0</span>
          </div>
          <div class="product-specs">
            <div class="spec-item">
              <div class="spec-val">${p.capacity} kWh</div>
              <div class="spec-lbl">Capaciteit</div>
            </div>
            <div class="spec-item">
              <div class="spec-val">${p.power} W</div>
              <div class="spec-lbl">Vermogen</div>
            </div>
          </div>
          <div class="pros-cons-box">
            <h4 style="font-size: 0.85rem; text-transform: uppercase; color: var(--text-secondary); margin-bottom: 0.5rem; letter-spacing: 0.05em;">Voordelen:</h4>
            ${p.pros.slice(0, 2).map(pro => `
              <div class="pro-con-item pro">${pro}</div>
            `).join('')}
          </div>
          <div class="product-footer">
            <div class="product-price-box">
              <span class="price-lbl">Vanaf</span>
              <span class="price-val">€${p.price}</span>
            </div>
            <a href="${p.affiliateUrl}" target="_blank" class="btn-affiliate">
              Bekijk Deal <span>→</span>
            </a>
          </div>
        </div>
      </article>
    `).join('');
  }

  // ==========================================================================
  // COMPARISON PAGE: FILTERS & DYNAMIC RENDER
  // ==========================================================================
  const compareGrid = document.getElementById("compare-products-grid");
  const filterBrand = document.getElementById("filter-brand");
  const filterCapacity = document.getElementById("filter-capacity");
  const sortBy = document.getElementById("sort-by");

  if (compareGrid && typeof PRODUCTS !== "undefined") {
    // Eerste render van alle producten op de vergelijkingspagina
    updateComparisonResults();

    // Event listeners toevoegen aan filters en sortering
    if (filterBrand) filterBrand.addEventListener("change", updateComparisonResults);
    if (filterCapacity) filterCapacity.addEventListener("change", updateComparisonResults);
    if (sortBy) sortBy.addEventListener("change", updateComparisonResults);
  }

  function updateComparisonResults() {
    if (!compareGrid) return;

    const brandVal = filterBrand ? filterBrand.value : "all";
    const capacityVal = filterCapacity ? filterCapacity.value : "all";
    const sortVal = sortBy ? sortBy.value : "rating_desc";

    // Haal de gefilterde en gesorteerde producten op via de helper in data.js
    const filtered = getFilteredProducts({
      brand: brandVal,
      capacity: capacityVal,
      sortBy: sortVal
    });

    renderProductGrid(filtered, compareGrid);
  }

  // ==========================================================================
  // COMPARISON PAGE: SELECTION, FLOATING BAR & MATRIX
  // ==========================================================================
  const btnClearCompare = document.getElementById("btn-clear-compare");
  const btnCloseCompare = document.getElementById("btn-close-comparison");
  const btnTriggerCompare = document.getElementById("btn-trigger-compare");
  const compSection = document.getElementById("comparison-section");
  const compTableContent = document.getElementById("comparison-table-content");

  if (compareGrid) {
    // Event delegation for checkbox changes
    compareGrid.addEventListener("change", (e) => {
      if (e.target.classList.contains("compare-checkbox")) {
        const productId = e.target.getAttribute("data-id");
        const isChecked = e.target.checked;

        if (isChecked) {
          if (!selectedCompareIds.includes(productId)) {
            selectedCompareIds.push(productId);
          }
        } else {
          selectedCompareIds = selectedCompareIds.filter(id => id !== productId);
        }

        updateCompareBar();

        // If the comparison matrix is already open, update it in real-time
        if (compSection && compSection.style.display !== "none") {
          if (selectedCompareIds.length > 0) {
            renderComparisonMatrix();
          } else {
            compSection.style.display = "none";
          }
        }
      }
    });
  }

  if (btnClearCompare) {
    btnClearCompare.addEventListener("click", () => {
      selectedCompareIds = [];
      // Uncheck all visible checkboxes
      document.querySelectorAll(".compare-checkbox").forEach(cb => cb.checked = false);
      updateCompareBar();
      if (compSection) compSection.style.display = "none";
    });
  }

  if (btnCloseCompare) {
    btnCloseCompare.addEventListener("click", () => {
      if (compSection) compSection.style.display = "none";
    });
  }

  if (btnTriggerCompare) {
    btnTriggerCompare.addEventListener("click", (e) => {
      if (selectedCompareIds.length === 0) {
        e.preventDefault();
        alert("Selecteer eerst ten minste één thuisaccu om te vergelijken.");
        return;
      }
      if (compSection) {
        compSection.style.display = "block";
        renderComparisonMatrix();
        compSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  function updateCompareBar() {
    const compareBar = document.getElementById("floating-compare-bar");
    const compareCountBadge = document.getElementById("compare-count-badge");
    const compareBarText = document.getElementById("compare-bar-text");

    if (!compareBar) return;

    const count = selectedCompareIds.length;
    if (count > 0) {
      compareBar.classList.add("visible");
      if (compareCountBadge) compareCountBadge.textContent = count;
      if (compareBarText) {
        compareBarText.textContent = count === 1
          ? "1 accu geselecteerd"
          : `${count} accu's geselecteerd`;
      }
    } else {
      compareBar.classList.remove("visible");
    }
  }

  function renderComparisonMatrix() {
    if (!compTableContent || typeof PRODUCTS === "undefined") return;

    const compared = PRODUCTS.filter(p => selectedCompareIds.includes(p.id));

    if (compared.length === 0) {
      compTableContent.innerHTML = `
        <div style="padding: 2rem; text-align: center; color: var(--text-secondary);">
          Geen producten geselecteerd om te vergelijken.
        </div>
      `;
      return;
    }

    compTableContent.innerHTML = `
      <table class="comparison-table">
        <thead>
          <tr>
            <th class="spec-name">Accu</th>
            ${compared.map(p => `
              <th class="product-header">
                <div class="comp-prod-brand">${p.brand}</div>
                <div class="comp-prod-title">${p.name}</div>
                <div style="margin: 0.5rem 0;">
                  <img class="comp-prod-img" src="${p.img}" alt="${p.name}">
                </div>
              </th>
            `).join('')}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="spec-name">Prijs</td>
            ${compared.map(p => `<td style="font-weight: 700; color: var(--text-primary); font-size: 1.1rem;">€ ${p.price}</td>`).join('')}
          </tr>
          <tr>
            <td class="spec-name">Capaciteit</td>
            ${compared.map(p => `<td>${p.capacity} kWh</td>`).join('')}
          </tr>
          <tr>
            <td class="spec-name">Vermogen</td>
            ${compared.map(p => `<td>${p.power} W</td>`).join('')}
          </tr>
          <tr>
            <td class="spec-name">Chemie</td>
            ${compared.map(p => `<td>${p.chemistry || "LFP (LiFePO4)"}</td>`).join('')}
          </tr>
          <tr>
            <td class="spec-name">Cycli</td>
            ${compared.map(p => `<td>${p.cycles || "3000+"}</td>`).join('')}
          </tr>
          <tr>
            <td class="spec-name">Garantie</td>
            ${compared.map(p => `<td>${p.warranty || "5 jaar"}</td>`).join('')}
          </tr>
          <tr>
            <td class="spec-name">Gewicht</td>
            ${compared.map(p => `<td>${p.weight || "N/A"}</td>`).join('')}
          </tr>
          <tr>
            <td class="spec-name">Voordelen</td>
            ${compared.map(p => `
              <td>
                <ul class="comp-pro-list">
                  ${p.pros.map(pro => `<li>${pro}</li>`).join('')}
                </ul>
              </td>
            `).join('')}
          </tr>
          <tr>
            <td class="spec-name">Nadelen</td>
            ${compared.map(p => `
              <td>
                <ul class="comp-con-list">
                  ${p.cons.map(con => `<li>${con}</li>`).join('')}
                </ul>
              </td>
            `).join('')}
          </tr>
          <tr>
            <td class="spec-name">Deal</td>
            ${compared.map(p => `
              <td>
                <a href="${p.affiliateUrl}" target="_blank" class="btn btn-primary" style="padding: 0.5rem 1rem; font-size: 0.85rem; border-radius: 4px; display: inline-block; text-align: center;">
                  Bekijk Deal <span>→</span>
                </a>
              </td>
            `).join('')}
          </tr>
        </tbody>
      </table>
    `;
  }

  // ==========================================================================
  // KENNISBANK SEARCH & FILTERS
  // ==========================================================================
  const kbSearch = document.getElementById("kb-search");
  const kbTabs = document.querySelectorAll(".kb-filter-tab");
  const kbArticles = document.querySelectorAll(".article-card");
  const kbNoResults = document.getElementById("kb-no-results");

  if (kbSearch || kbTabs.length > 0) {
    let currentCategory = "all";
    let searchQuery = "";

    function filterKB() {
      let visibleCount = 0;

      kbArticles.forEach(article => {
        const category = article.getAttribute("data-category");
        const titleText = article.querySelector(".article-title")?.textContent.toLowerCase() || "";
        const bodyText = article.querySelector(".article-body")?.textContent.toLowerCase() || "";
        const metaText = article.querySelector(".article-meta")?.textContent.toLowerCase() || "";
        const fullText = `${titleText} ${bodyText} ${metaText}`;

        const matchesCategory = (currentCategory === "all" || category === currentCategory);
        const matchesSearch = (!searchQuery || fullText.includes(searchQuery));

        if (matchesCategory && matchesSearch) {
          article.classList.remove("hidden");
          visibleCount++;
        } else {
          article.classList.add("hidden");
        }
      });

      if (kbNoResults) {
        if (visibleCount === 0) {
          kbNoResults.style.display = "block";
        } else {
          kbNoResults.style.display = "none";
        }
      }
    }

    if (kbSearch) {
      kbSearch.addEventListener("input", (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        filterKB();
      });
    }

    kbTabs.forEach(tab => {
      tab.addEventListener("click", () => {
        kbTabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        currentCategory = tab.getAttribute("data-category");
        filterKB();
      });
    });
  }
});
