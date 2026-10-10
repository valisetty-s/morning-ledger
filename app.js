const DEFAULT_STOCKS = [
  ["VBL","Varun Beverages","Top30",0,0],["SHRIRAMFIN","Shriram Finance","Top30",0,0],
  ["MAXHEALTH","Max Healthcare","Top30",0,0],["CGPOWER","CG Power & Industrial","Top30",0,0],
  ["MTARTECH","MTAR Technologies","Top30",0,0],["CAMS","CAMS","Top30",0,0],
  ["BSE","BSE Ltd","Top30",0,0],["LAURUSLABS","Laurus Labs","Top30",0,0],
  ["DATAPATTNS","Data Patterns","Top30",0,0],["RAINBOW","Rainbow Children's Medicare","Top30",0,0],
  ["KFINTECH","KFin Technologies","Top30",0,0],["THYROCARE","Thyrocare Technologies","Top30",0,0],
  ["BEL","Bharat Electronics","Top30",0,0],["VINATIORGA","Vinati Organics","Top30",0,0],
  ["SRF","SRF Ltd","Top30",0,0],["PARAS","Paras Defence","Top30",0,0],
  ["YATHARTH","Yatharth Hospital","Top30",0,0],["AFFLE","Affle India","Top30",0,0],
  ["SONACOMS","Sona BLW Precision","Top30",0,0],["UNIMECH","Unimech Aerospace","Top30",0,0],
  ["KAYNES","Kaynes Technology","Top30",0,0],["IZMO","izmo Ltd","Top30",0,0],
  ["SYRMA","Syrma SGS Technology","Top30",0,0],["ZENTEC","Zen Technologies","Top30",0,0],
  ["M&M","Mahindra & Mahindra","Top30",0,0],["ZYDUSLIFE","Zydus Lifesciences","Top30",0,0],
  ["NETWEB","Netweb Technologies","Top30",0,0],["SUZLON","Suzlon Energy","Top30",0,0],
  ["CYIENTDLM","Cyient DLM","Top30",0,0],["SYNGENE","Syngene International","Top30",0,0],
  ["WAAREEENER","Waaree Energies","Top31-50",0,0],["TARIL","Transformers & Rectifiers","Top31-50",0,0],
  ["UNOMINDA","UNO Minda","Top31-50",0,0],["MARKSANS","Marksans Pharma","Top31-50",0,0],
  ["MOTHERSON","Samvardhana Motherson","Top31-50",0,0],["CCL","CCL Products","Top31-50",0,0],
  ["CPPLUS","CP Plus","Top31-50",0,0],["HBLENGINE","HBL Engineering","Top31-50",0,0],
  ["PRAJIND","Praj Industries","Top31-50",0,0],["AARTIIND","Aarti Industries","Top31-50",0,0],
  ["WABAG","VA Tech Wabag","Top31-50",0,0],["ZAGGLE","Zaggle Prepaid","Top31-50",0,0],
  ["GRAVITA","Gravita India","Top31-50",0,0],["SAREGAMA","Saregama India","Top31-50",0,0],
  ["ASTRAMICRO","Astra Microwave","Top31-50",0,0],["COFORGE","Coforge","Top31-50",0,0],
  ["PARAGMILK","Parag Milk Foods","Top31-50",0,0],["BDL","Bharat Dynamics","Top31-50",0,0],
  ["APLAPOLLO","APL Apollo Tubes","Top31-50",0,0],["STALLION","Stallion India Fluorochemicals","Top31-50",0,0],
  ["VISHNU","Vishnu Chemicals","Top31-50",0,0],["HCLTECH","HCL Technologies","Top31-50",0,0],
  ["GENUSPOWER","Genus Power","Top31-50",0,0],
  ["GRSE","Garden Reach Shipbuilders","Top51-75",0,0],["RAILTEL","RailTel","Top51-75",0,0],
  ["FIEMIND","Fiem Industries","Top51-75",0,0],["RRKABEL","RR Kabel","Top51-75",0,0],
  ["FCL","Fineotex Chemical","Top51-75",0,0],["BELRISE","Belrise Industries","Top51-75",0,0],
  ["AXISCADES","AXISCADES Technologies","Top51-75",0,0],["VIMTALABS","Vimta Labs","Top51-75",0,0],
  ["LTFOODS","LT Foods","Top51-75",0,0],["TEJASNET","Tejas Networks","Top51-75",0,0],
  ["MAZDOCK","Mazagon Dock","Top51-75",0,0],["MCX","MCX India","Top51-75",0,0],
  ["E2E","E2E Networks","Top51-75",0,0],["HONASA","Honasa Consumer","Top51-75",0,0],
  ["UNITDSPR","United Spirits","Top51-75",0,0],["APOLLO","Apollo Micro Systems","Top51-75",0,0],
  ["KAJARIACER","Kajaria Ceramics","Top51-75",0,0],["AZAD","Azad Engineering","Top51-75",0,0],
  ["POONAWALLA","Poonawalla Fincorp","Top51-75",0,0],["IKS","IKS Health","Top51-75",0,0],
  ["INOXINDIA","Inox India","Top51-75",0,0],["GROWW","Groww","Top51-75",0,0],
  ["DCXINDIA","DCX Systems","Top51-75",0,0],
  ["ATHERENERG","Ather Energy","Watch",0,0],["SHARDACROP","Sharda Cropchem","Watch",0,0],
  ["SIGMAADV","Sigma Solve","Watch",0,0],["SHAKTIPUMP","Shakti Pumps","Watch",0,0],
  ["OSWALPUMPS","Oswal Pumps","Watch",0,0],["PREMEXPLN","Premier Explosives","Watch",0,0],
  ["TRAVELFOOD","Travel Food Services","Watch",0,0],["GMDCLTD","GMDC","Watch",0,0],
  ["ETERNAL","Eternal (Zomato)","Watch",0,0],["TRIVENI","Triveni Engineering","Watch",0,0],
  ["DEEPINDS","Deep Industries","Watch",0,0],["STLTECH-BE","Sterlite Technologies","Watch",0,0],
  ["PRECWIRE","Precision Wires","Watch",0,0],["PACEDIGITK","Pace Digital","Watch",0,0],
  ["ADFFOODS","ADF Foods","Watch",0,0],["QPOWER-BE","Q Power","Watch",0,0],
  ["AEROFLEX","Aeroflex Industries","Watch",0,0],["SPICEJET","SpiceJet","Watch",0,0],
  ["IDEA","Vodafone Idea","Watch",0,0],["HFCL","HFCL Ltd","Watch",0,0],
];

const TIER_COLORS = {
  "Top30":    "#5B7553", /* Sage green */
  "Top31-50": "#B8923F", /* Gold */
  "Top51-75": "#C45A3E", /* Sunrise coral */
  "Watch":    "#A4453A", /* Clay red */
};

const SECTOR_COLORS = {
  "Aerospace & Defense": "#2E4057",
  "Capital Goods & Power Grid": "#048A81",
  "Specialty & Green Chemistry": "#5B7553",
  "AI Cooling, Data Center & IT": "#7A5C9B",
  "Healthcare & Pharma": "#B8923F",
  "Financial Tollbooths": "#C45A3E",
  "Auto Ancillary & EV": "#D9822B",
  "Clean Energy & Renewables": "#3A7D7E",
  "Commodity Converters & Distressed": "#A4453A",
  "Other": "#8E735B"
};

const PALETTE = [
  "#29577C", "#5B7553", "#C45A3E", "#B8923F", "#7A5C9B",
  "#3A7D7E", "#A4453A", "#D9822B", "#4A6FA5", "#048A81",
  "#5D576B", "#F19953", "#8E735B", "#6C5B7B", "#355C7D"
];

// Exact sectoral and economic niche taxonomy
const SECTOR_MAP = {
  "ACUTAAS": "Specialty & Green Chemistry",
  "AEQUS": "Aerospace & Defense",
  "AEROFLEX": "AI Cooling, Data Center & IT",
  "AETHER": "Specialty & Green Chemistry",
  "AFFLE": "AI Cooling, Data Center & IT",
  "APLAPOLLO": "Capital Goods & Power Grid",
  "APOLLO": "Aerospace & Defense",
  "ARROWGREEN": "Specialty & Green Chemistry",
  "ASTRAMICRO": "Aerospace & Defense",
  "ATHERENERG": "Auto Ancillary & EV",
  "AVALON": "Commodity Converters & Distressed",
  "AXISCADES": "Aerospace & Defense",
  "AZAD": "Aerospace & Defense",
  "BORORENEW": "Clean Energy & Renewables",
  "BSE": "Financial Tollbooths",
  "CAMS": "Financial Tollbooths",
  "CGPOWER": "Capital Goods & Power Grid",
  "CPPLUS": "AI Cooling, Data Center & IT",
  "CUPID": "Healthcare & Pharma",
  "CYIENTDLM": "Aerospace & Defense",
  "DATAPATTNS": "Aerospace & Defense",
  "DEEPINDS": "Capital Goods & Power Grid",
  "DHOOTTRANS": "Commodity Converters & Distressed",
  "E2E": "AI Cooling, Data Center & IT",
  "ELGIEQUIP": "Capital Goods & Power Grid",
  "FCL": "Commodity Converters & Distressed",
  "GRAVITA": "Commodity Converters & Distressed",
  "GRSE": "Aerospace & Defense",
  "HBLENGINE": "Capital Goods & Power Grid",
  "HFCL-BE": "AI Cooling, Data Center & IT",
  "IDEA": "Commodity Converters & Distressed",
  "IKS": "AI Cooling, Data Center & IT",
  "INDOMIM": "Aerospace & Defense",
  "INOXINDIA": "Capital Goods & Power Grid",
  "KANOHAR": "Capital Goods & Power Grid",
  "KAYNES": "AI Cooling, Data Center & IT",
  "KRN": "AI Cooling, Data Center & IT",
  "KSHINTL": "Commodity Converters & Distressed",
  "KUSUMGAR": "Commodity Converters & Distressed",
  "LALPATHLAB": "Healthcare & Pharma",
  "LAURUSLABS": "Healthcare & Pharma",
  "LENSKART": "Healthcare & Pharma",
  "MACPOWER": "Commodity Converters & Distressed",
  "MANINDS": "Commodity Converters & Distressed",
  "MARINE": "Commodity Converters & Distressed",
  "MARKSANS": "Healthcare & Pharma",
  "MAXHEALTH": "Healthcare & Pharma",
  "MILKYMIST-BE": "Auto Ancillary & EV",
  "MOLBIO": "Healthcare & Pharma",
  "MTARTECH-BE": "Aerospace & Defense",
  "NEOGEN": "Specialty & Green Chemistry",
  "NETWEB": "AI Cooling, Data Center & IT",
  "NITTAGELA": "Commodity Converters & Distressed",
  "NSE": "Financial Tollbooths",
  "OSWALPUMPS": "Commodity Converters & Distressed",
  "PACEDIGITK": "Commodity Converters & Distressed",
  "PARAS": "Aerospace & Defense",
  "PRICOLLTD": "Commodity Converters & Distressed",
  "QPOWER": "Capital Goods & Power Grid",
  "RAINBOW": "Healthcare & Pharma",
  "RAYMOND": "Aerospace & Defense",
  "RPEL": "Specialty & Green Chemistry",
  "RRKABEL": "Capital Goods & Power Grid",
  "SAILIFE": "Healthcare & Pharma",
  "SANSERA": "Aerospace & Defense",
  "SBCL": "Auto Ancillary & EV",
  "SEDEMAC": "Auto Ancillary & EV",
  "SETL": "Capital Goods & Power Grid",
  "SHILPAMED": "Commodity Converters & Distressed",
  "SHRIRAMFIN": "Commodity Converters & Distressed",
  "SIGMAADV-BE": "Aerospace & Defense",
  "SJS": "Auto Ancillary & EV",
  "SKYGOLD": "Commodity Converters & Distressed",
  "SONACOMS": "Auto Ancillary & EV",
  "SPICEJET": "Commodity Converters & Distressed",
  "SRF": "Specialty & Green Chemistry",
  "STALLION": "Specialty & Green Chemistry",
  "STLTECH-BE": "AI Cooling, Data Center & IT",
  "SUDEEPPHRM": "Specialty & Green Chemistry",
  "SUZLON": "Clean Energy & Renewables",
  "SYRMA": "AI Cooling, Data Center & IT",
  "TANFACIND": "Specialty & Green Chemistry",
  "TDPOWERSYS": "Capital Goods & Power Grid",
  "TEMPSENS": "Commodity Converters & Distressed",
  "TIPSMUSIC": "Financial Tollbooths",
  "UNIMECH": "Aerospace & Defense",
  "UNOMINDA": "Auto Ancillary & EV",
  "VENUSPIPES": "Capital Goods & Power Grid",
  "VIKRAMTH": "Specialty & Green Chemistry",
  "VIMTALABS": "Commodity Converters & Distressed",
  "VISHNU": "Commodity Converters & Distressed",
  "WAAREEENER": "Clean Energy & Renewables",
  "WABAG": "Capital Goods & Power Grid",
  "WELCORP": "Commodity Converters & Distressed",
  "YATHARTH": "Healthcare & Pharma",
  "ZENTEC": "Aerospace & Defense",
  "ZYDUSLIFE": "Healthcare & Pharma"
};

// Known Sub-12% growth list
const SUB_12_GROWTH_SET = new Set([
  "SPICEJET", "IDEA", "WELCORP", "MANINDS", "GRAVITA", "SKYGOLD", "AVALON", "MARINE",
  "APOLLO", "PRICOLLTD", "DHOOTTRANS", "MACPOWER", "OSWALPUMPS", "KSHINTL", "KUSUMGAR",
  "SHILPAMED", "PACEDIGITK", "NITTAGELA", "VIMTALABS", "TEMPSENS", "FCL", "VISHNU", "SHRIRAMFIN"
]);

function getCleanTicker(ticker) {
  return ticker.replace(/-(BE|SM|IL|BL|N1|N2)$/i, '');
}

const Store = {
  getApiKey: () => localStorage.getItem('ml_api_key') || '',
  setApiKey: (v) => localStorage.setItem('ml_api_key', v),
  getStocks: () => {
    const raw = localStorage.getItem('ml_stocks');
    if (!raw) return DEFAULT_STOCKS;
    try {
      const parsed = JSON.parse(raw);
      return parsed.map(s => [s[0], s[1] || s[0], s[2] || 'Watch', Number(s[3]) || 0, Number(s[4]) || 0]);
    } catch {
      return DEFAULT_STOCKS;
    }
  },
  setStocks: (arr) => localStorage.setItem('ml_stocks', JSON.stringify(arr)),
  getCache: () => {
    const raw = localStorage.getItem('ml_news_cache');
    if (!raw) return null;
    try { return JSON.parse(raw); } catch { return null; }
  },
  setCache: (obj) => localStorage.setItem('ml_news_cache', JSON.stringify(obj)),
  getKiteApiKey: () => localStorage.getItem('ml_kite_api_key') || '',
  setKiteApiKey: (v) => localStorage.setItem('ml_kite_api_key', v),
};
const KITE_BACKEND_URL_KEY = 'ml_kite_backend_url';

let currentFilter = 'all';
let currentSentiment = 'all';
let currentSort = 'default';
let newsData = null;
let currentAnalyticsMode = 'tier'; // 'tier', 'sector', 'top50', 'bottom30', 'bottom20', 'sub12'
let selectedSliceKey = null; // for drilldown
let lastFetchDiagnostics = { errorCount: 0, emptyCount: 0, totalCount: 0, lastError: null };

const $ = (sel) => document.querySelector(sel);
const contentEl = $('#content');
const refreshBtn = $('#refresh-btn');
const refreshLabel = $('#refresh-label');
const refreshStatus = $('#refresh-status');
const datelineDate = $('#dateline-date');
const datelineStatus = $('#dateline-status');
const lookupInput = $('#lookup-input');
const lookupSuggestions = $('#lookup-suggestions');
const lookupResult = $('#lookup-result');
const analyticsContainer = $('#portfolio-analytics-container');
const drilldownContainer = $('#portfolio-drilldown-container');

function todayLabel() {
  return new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' });
}

function isToday(isoString) {
  if (!isoString) return false;
  const d = new Date(isoString);
  const now = new Date();
  return d.toDateString() === now.toDateString();
}

function timeLabel(isoString) {
  return new Date(isoString).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
}

function init() {
  datelineDate.textContent = todayLabel();

  // Render initial analytics immediately
  renderPortfolioAnalytics();

  const cached = Store.getCache();
  if (cached && cached.results) {
    newsData = cached;
    renderContent();
    renderPortfolioAnalytics();
    updateStatusBar();
  }

  const cuesBtn = $('#global-cues-btn');
  if (cuesBtn) {
    cuesBtn.addEventListener('click', fetchAndRenderGlobalCues);
  }

  const analyticsChip = $('#analytics-toggle-chip');
  if (analyticsChip) {
    analyticsChip.addEventListener('click', () => {
      if (analyticsContainer.style.display === 'block') {
        analyticsContainer.style.display = 'none';
        if (drilldownContainer) drilldownContainer.style.display = 'none';
        analyticsChip.classList.remove('active');
      } else {
        analyticsContainer.style.display = 'block';
        analyticsChip.classList.add('active');
        renderPortfolioAnalytics();
      }
    });
  }

  contentEl.addEventListener('click', (e) => {
    const fundBtn = e.target.closest('.ribbon-fund-btn');
    if (fundBtn) {
      fetchAndShowInlineFundamentals(fundBtn.dataset.fundTicker, fundBtn.dataset.fundTarget, fundBtn);
      return;
    }
    const roceBtn = e.target.closest('.ribbon-roce-btn');
    if (roceBtn) {
      fetchAndShowInlineRoce(roceBtn.dataset.fundTicker, roceBtn.dataset.fundTarget, roceBtn);
      return;
    }
    const aiBtn = e.target.closest('.ribbon-ai-btn');
    if (aiBtn) {
      const ticker = aiBtn.dataset.ticker;
      const company = aiBtn.dataset.company;
      const tier = aiBtn.dataset.tier || 'Watch';
      const stockData = newsData && newsData.results ? newsData.results.find(r => r.ticker === ticker) : null;
      const articles = stockData ? stockData.articles : [];
      fetchAndShowAIBriefing(ticker, company, articles, `ai-panel-entry-${ticker}`, aiBtn, tier);
      return;
    }
  });

  document.querySelectorAll('.chip[data-filter]').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.chip[data-filter]').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentFilter = chip.dataset.filter;
      renderContent();
    });
  });

  document.querySelectorAll('.chip[data-sentiment]').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.chip[data-sentiment]').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentSentiment = chip.dataset.sentiment;
      renderContent();
    });
  });

  document.querySelectorAll('.chip[data-sort]').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.chip[data-sort]').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentSort = chip.dataset.sort;
      renderContent();
    });
  });

  refreshBtn.addEventListener('click', fetchAllNews);
  const priceBtn = $('#price-refresh-btn');
  if (priceBtn) priceBtn.addEventListener('click', fetchLatestPrices);

  let lookupDebounceTimer = null;
  lookupInput.addEventListener('input', () => {
    clearTimeout(lookupDebounceTimer);
    const val = lookupInput.value;
    lookupDebounceTimer = setTimeout(() => renderSuggestions(val), 150);
  });
  lookupInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const val = lookupInput.value.trim();
      if (!val) return;
      lookupSuggestions.classList.remove('open');
      const matches = getStockSuggestions(val);
      if (matches.length > 0) {
        runSingleStockLookup(matches[0][0], matches[0][1]);
      } else {
        runSingleStockLookup(val, val);
      }
    } else if (e.key === 'Escape') {
      lookupSuggestions.classList.remove('open');
    }
  });
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.lookup-bar')) {
      lookupSuggestions.classList.remove('open');
    }
  });

  $('#settings-fab').addEventListener('click', openSettings);
  $('#settings-close').addEventListener('click', closeSettings);
  $('#settings-cancel').addEventListener('click', closeSettings);
  $('#settings-save').addEventListener('click', saveSettings);

  $('#csv-upload-btn').addEventListener('click', () => $('#csv-file-input').click());
  $('#csv-file-input').addEventListener('change', handleSpreadsheetUpload);

  $('#kite-import-btn').addEventListener('click', importFromKite);

  let deferredPrompt = null;
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    if (!localStorage.getItem('ml_install_dismissed')) {
      $('#install-banner').classList.add('show');
    }
  });
  $('#install-btn').addEventListener('click', async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      deferredPrompt = null;
    }
    $('#install-banner').classList.remove('show');
  });
  $('#install-dismiss').addEventListener('click', () => {
    localStorage.setItem('ml_install_dismissed', '1');
    $('#install-banner').classList.remove('show');
  });

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
}

/* ==========================================================================
   PORTFOLIO PIE CHART & ADVANCED DRILLDOWN ENGINE (PURE SVG & VANILLA JS)
   ========================================================================== */
function renderPortfolioAnalytics() {
  const container = document.getElementById('portfolio-analytics-container');
  if (!container) return;

  const stocks = Store.getStocks();
  if (!stocks || stocks.length === 0) {
    container.innerHTML = `<div class="analytics-card"><div class="quiet">No holdings loaded. Import or add stocks in Settings.</div></div>`;
    return;
  }

  let totalInvested = 0;
  let totalCurrentVal = 0;

  const enriched = stocks.map(([ticker, company, tier, qty = 0, avgPrice = 0]) => {
    const q = Number(qty) || 0;
    const avg = Number(avgPrice) || 0;
    const invested = q * avg;
    totalInvested += invested;

    const cleanT = getCleanTicker(ticker);
    const cachedEntry = newsData && newsData.results ? newsData.results.find(r => r.ticker === ticker || r.ticker === cleanT) : null;
    let ltp = cachedEntry && cachedEntry.quote && cachedEntry.quote.last_price != null ? cachedEntry.quote.last_price : avg;
    const currentVal = q > 0 ? (q * ltp) : 0;
    if (q > 0) {
      totalCurrentVal += currentVal;
    }
    const sector = SECTOR_MAP[cleanT] || SECTOR_MAP[ticker] || "Other";
    const pnl = currentVal - invested;
    const pnlPct = invested > 0 ? ((pnl / invested) * 100) : 0;

    return { ticker, company, tier, qty: q, avgPrice: avg, invested, currentVal, ltp, sector, pnl, pnlPct };
  });

  const totalPnL = totalCurrentVal - totalInvested;
  const totalPnLPct = totalInvested > 0 ? ((totalPnL / totalInvested) * 100).toFixed(2) : '0.00';
  const pnlClass = totalPnL >= 0 ? 'pos' : 'neg';
  const pnlSign = totalPnL >= 0 ? '+' : '';

  // Mode Selection: 'tier', 'sector', 'top50', 'bottom30', 'bottom20', 'sub12'
  let slices = [];
  const denominator = totalCurrentVal > 0 ? totalCurrentVal : (totalInvested > 0 ? totalInvested : 1);

  if (currentAnalyticsMode === 'tier') {
    const tierMap = {
      "Top30": { name: "✅ Accumulate", val: 0, count: 0, color: TIER_COLORS["Top30"], items: [] },
      "Top31-50": { name: "🔵 Hold", val: 0, count: 0, color: TIER_COLORS["Top31-50"], items: [] },
      "Top51-75": { name: "🟡 Trim", val: 0, count: 0, color: TIER_COLORS["Top51-75"], items: [] },
      "Watch": { name: "🔴 Exit", val: 0, count: 0, color: TIER_COLORS["Watch"], items: [] },
    };

    enriched.forEach(item => {
      const t = tierMap[item.tier] ? item.tier : 'Watch';
      const weightVal = totalCurrentVal > 0 ? (item.currentVal || item.invested) : item.invested;
      tierMap[t].val += weightVal;
      tierMap[t].count += 1;
      tierMap[t].items.push(item);
    });

    slices = Object.keys(tierMap).map(k => ({
      key: k,
      name: tierMap[k].name,
      val: tierMap[k].val,
      count: tierMap[k].count,
      pct: (tierMap[k].val / denominator) * 100,
      color: tierMap[k].color,
      items: tierMap[k].items
    })).filter(s => s.val > 0 || s.count > 0);

  } else if (currentAnalyticsMode === 'sector') {
    const secMap = {};
    enriched.forEach(item => {
      const s = item.sector;
      if (!secMap[s]) {
        secMap[s] = { name: s, val: 0, count: 0, color: SECTOR_COLORS[s] || "#8E735B", items: [] };
      }
      const weightVal = totalCurrentVal > 0 ? (item.currentVal || item.invested) : item.invested;
      secMap[s].val += weightVal;
      secMap[s].count += 1;
      secMap[s].items.push(item);
    });

    slices = Object.keys(secMap).map(k => ({
      key: k,
      name: secMap[k].name,
      val: secMap[k].val,
      count: secMap[k].count,
      pct: (secMap[k].val / denominator) * 100,
      color: secMap[k].color,
      items: secMap[k].items
    })).sort((a, b) => b.val - a.val);

  } else if (currentAnalyticsMode === 'top50') {
    const sorted = [...enriched].sort((a, b) => (b.currentVal || b.invested) - (a.currentVal || a.invested));
    const top50 = sorted.slice(0, 50);
    const rest = sorted.slice(50);

    const top50Val = top50.reduce((acc, r) => acc + (r.currentVal || r.invested), 0);
    const restVal = rest.reduce((acc, r) => acc + (r.currentVal || r.invested), 0);

    slices = [
      { key: "Top50", name: "Top 50 Holdings", val: top50Val, count: top50.length, pct: (top50Val / denominator) * 100, color: "#2E4057", items: top50 },
      { key: "Rest", name: `Remaining (${rest.length})`, val: restVal, count: rest.length, pct: (restVal / denominator) * 100, color: "#C9BCA0", items: rest }
    ];

  } else if (currentAnalyticsMode === 'bottom30') {
    const sorted = [...enriched].sort((a, b) => (a.currentVal || a.invested) - (b.currentVal || b.invested));
    const bot30 = sorted.slice(0, 30);
    const rest = sorted.slice(30);

    const botVal = bot30.reduce((acc, r) => acc + (r.currentVal || r.invested), 0);
    const restVal = rest.reduce((acc, r) => acc + (r.currentVal || r.invested), 0);

    slices = [
      { key: "Bot30", name: "Bottom 30 Smallest", val: botVal, count: bot30.length, pct: (botVal / denominator) * 100, color: "#A4453A", items: bot30 },
      { key: "Upper", name: `Top ${rest.length} Holdings`, val: restVal, count: rest.length, pct: (restVal / denominator) * 100, color: "#5B7553", items: rest }
    ];

  } else if (currentAnalyticsMode === 'bottom20') {
    const sorted = [...enriched].sort((a, b) => (a.currentVal || a.invested) - (b.currentVal || b.invested));
    const bot20 = sorted.slice(0, 20);
    const rest = sorted.slice(20);

    const botVal = bot20.reduce((acc, r) => acc + (r.currentVal || r.invested), 0);
    const restVal = rest.reduce((acc, r) => acc + (r.currentVal || r.invested), 0);

    slices = [
      { key: "Bot20", name: "Bottom 20 Stubs", val: botVal, count: bot20.length, pct: (botVal / denominator) * 100, color: "#C45A3E", items: bot20 },
      { key: "Upper", name: `Top ${rest.length} Holdings`, val: restVal, count: rest.length, pct: (restVal / denominator) * 100, color: "#29577C", items: rest }
    ];

  } else if (currentAnalyticsMode === 'sub12') {
    const sub12 = enriched.filter(i => SUB_12_GROWTH_SET.has(getCleanTicker(i.ticker)) || SUB_12_GROWTH_SET.has(i.ticker));
    const above12 = enriched.filter(i => !SUB_12_GROWTH_SET.has(getCleanTicker(i.ticker)) && !SUB_12_GROWTH_SET.has(i.ticker));

    const subVal = sub12.reduce((acc, r) => acc + (r.currentVal || r.invested), 0);
    const aboveVal = above12.reduce((acc, r) => acc + (r.currentVal || r.invested), 0);

    slices = [
      { key: "Sub12", name: "Sub-12% Growth Laggards", val: subVal, count: sub12.length, pct: (subVal / denominator) * 100, color: "#A4453A", items: sub12 },
      { key: "Above12", name: ">12% Secular Compounders", val: aboveVal, count: above12.length, pct: (aboveVal / denominator) * 100, color: "#5B7553", items: above12 }
    ];
  }

  // SVG Geometry Calculation
  const svgSize = 190;
  const strokeWidth = 32;
  const radius = (svgSize - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  let accumulatedOffset = 0;

  const circlesHtml = slices.map((slice, idx) => {
    const strokeDash = (slice.pct / 100) * circumference;
    const strokeOffset = -accumulatedOffset;
    accumulatedOffset += strokeDash;

    return `<circle cx="95" cy="95" r="${radius}" fill="transparent"
      stroke="${slice.color}" stroke-width="${strokeWidth}"
      stroke-dasharray="${strokeDash} ${circumference}"
      stroke-dashoffset="${strokeOffset}"
      data-slice-key="${escapeHtml(slice.key)}"
      style="transition: stroke-dasharray 0.5s ease; cursor: pointer;">
      <title>${slice.name}: ₹${Math.round(slice.val).toLocaleString('en-IN')} (${slice.pct.toFixed(1)}%) — Tap to reveal stocks</title>
    </circle>`;
  }).join('');

  const legendHtml = slices.map(slice => `
    <div class="legend-row" data-slice-key="${escapeHtml(slice.key)}" style="cursor: pointer;">
      <div class="legend-left">
        <span class="legend-swatch" style="background: ${slice.color}"></span>
        <div>
          <span class="legend-name">${escapeHtml(slice.name)}</span>
          <span class="legend-count">${slice.count ? ` · ${slice.count} stocks (tap)` : ''}</span>
        </div>
      </div>
      <div class="legend-right">
        <span class="legend-amt">₹${Math.round(slice.val).toLocaleString('en-IN')}</span>
        <span>${slice.pct.toFixed(1)}%</span>
      </div>
    </div>
  `).join('');

  container.innerHTML = `
    <div class="analytics-card">
      <div class="analytics-head" style="flex-wrap: wrap; gap: 8px;">
        <span class="analytics-title">Portfolio Allocation Analytics</span>
        <div class="analytics-toggle-group" style="flex-wrap: wrap; gap: 4px;">
          <button class="chart-toggle-btn ${currentAnalyticsMode === 'tier' ? 'active' : ''}" id="btn-chart-tier">By Tier</button>
          <button class="chart-toggle-btn ${currentAnalyticsMode === 'sector' ? 'active' : ''}" id="btn-chart-sector">By Sector</button>
          <button class="chart-toggle-btn ${currentAnalyticsMode === 'top50' ? 'active' : ''}" id="btn-chart-top50">Top 50</button>
          <button class="chart-toggle-btn ${currentAnalyticsMode === 'bottom30' ? 'active' : ''}" id="btn-chart-bot30">Bottom 30</button>
          <button class="chart-toggle-btn ${currentAnalyticsMode === 'bottom20' ? 'active' : ''}" id="btn-chart-bot20">Bottom 20</button>
          <button class="chart-toggle-btn ${currentAnalyticsMode === 'sub12' ? 'active' : ''}" id="btn-chart-sub12">Sub-12% Growth</button>
        </div>
      </div>

      <div class="portfolio-stats-summary">
        <div class="p-stat-box">
          <div class="p-stat-lbl">Portfolio Value</div>
          <div class="p-stat-val">₹${Math.round(totalCurrentVal).toLocaleString('en-IN')}</div>
        </div>
        <div class="p-stat-box">
          <div class="p-stat-lbl">Total Invested</div>
          <div class="p-stat-val">₹${Math.round(totalInvested).toLocaleString('en-IN')}</div>
        </div>
        <div class="p-stat-box">
          <div class="p-stat-lbl">Overall P&amp;L</div>
          <div class="p-stat-val ${pnlClass}">${pnlSign}₹${Math.abs(Math.round(totalPnL)).toLocaleString('en-IN')} (${pnlSign}${totalPnLPct}%)</div>
        </div>
      </div>

      <div class="chart-flex-wrap">
        <div class="pie-svg-container">
          <svg viewBox="0 0 190 190">
            ${circlesHtml}
          </svg>
          <div class="pie-center-hole">
            <span class="pie-center-lbl">Total</span>
            <span class="pie-center-val">${stocks.length}</span>
          </div>
        </div>
        <div class="chart-legend">
          ${legendHtml}
        </div>
      </div>
    </div>
  `;

  // Attach Mode Listeners
  const bindMode = (id, mode) => {
    const btn = document.getElementById(id);
    if (btn) btn.addEventListener('click', () => {
      currentAnalyticsMode = mode;
      selectedSliceKey = null;
      renderPortfolioAnalytics();
      if (drilldownContainer) drilldownContainer.style.display = 'none';
    });
  };

  bindMode('btn-chart-tier', 'tier');
  bindMode('btn-chart-sector', 'sector');
  bindMode('btn-chart-top50', 'top50');
  bindMode('btn-chart-bot30', 'bottom30');
  bindMode('btn-chart-bot20', 'bottom20');
  bindMode('btn-chart-sub12', 'sub12');

  // Attach Drill-down click handlers to both circles & legend items
  const handleSliceClick = (key) => {
    const foundSlice = slices.find(s => s.key === key);
    if (!foundSlice) return;
    renderDrilldownTable(foundSlice);
  };

  container.querySelectorAll('circle[data-slice-key]').forEach(c => {
    c.addEventListener('click', () => handleSliceClick(c.dataset.sliceKey));
  });

  container.querySelectorAll('.legend-row[data-slice-key]').forEach(r => {
    r.addEventListener('click', () => handleSliceClick(r.dataset.sliceKey));
  });

  // Re-render open drilldown if key exists
  if (selectedSliceKey) {
    const currentSlice = slices.find(s => s.key === selectedSliceKey);
    if (currentSlice) renderDrilldownTable(currentSlice);
  }
}

function renderDrilldownTable(slice) {
  selectedSliceKey = slice.key;
  if (!drilldownContainer) return;

  const sortedItems = [...(slice.items || [])].sort((a, b) => (b.currentVal || b.invested) - (a.currentVal || a.invested));

  const rowsHtml = sortedItems.map((item, idx) => {
    const pnlSign = item.pnl >= 0 ? '+' : '';
    const pnlClass = item.pnl >= 0 ? 'price-up' : 'price-down';

    return `
      <tr style="border-bottom: 1px solid var(--rule); font-size: 12px;">
        <td style="padding: 8px 6px; font-weight: 700;">
          <span style="font-family:'SF Mono',monospace; color:var(--ink);">${escapeHtml(item.ticker)}</span>
          <div style="font-size: 11px; font-weight: 400; color:var(--ink-soft); font-family: -apple-system, sans-serif;">${escapeHtml(item.company)}</div>
        </td>
        <td style="padding: 8px 6px; color:var(--ink-soft); font-size: 11px;">${escapeHtml(item.sector)}</td>
        <td style="padding: 8px 6px; font-family:'SF Mono',monospace; text-align: center;">${item.qty}</td>
        <td style="padding: 8px 6px; font-family:'SF Mono',monospace; text-align: right;">₹${item.avgPrice ? item.avgPrice.toFixed(1) : '—'}</td>
        <td style="padding: 8px 6px; font-family:'SF Mono',monospace; text-align: right; font-weight: 700;">₹${item.ltp ? item.ltp.toFixed(1) : '—'}</td>
        <td style="padding: 8px 6px; font-family:'SF Mono',monospace; text-align: right; font-weight: 700;">₹${Math.round(item.currentVal || item.invested).toLocaleString('en-IN')}</td>
        <td style="padding: 8px 6px; font-family:'SF Mono',monospace; text-align: right;" class="${pnlClass}">
          ${pnlSign}₹${Math.abs(Math.round(item.pnl)).toLocaleString('en-IN')} (${pnlSign}${item.pnlPct.toFixed(1)}%)
        </td>
      </tr>
    `;
  }).join('');

  drilldownContainer.style.display = 'block';
  drilldownContainer.innerHTML = `
    <div style="background: var(--paper); border: 2px solid ${slice.color}; border-radius: 12px; padding: 16px; box-shadow: 0 4px 14px rgba(0,0,0,0.06);">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid var(--rule); padding-bottom: 8px;">
        <div>
          <span style="display:inline-block; width:12px; height:12px; border-radius:3px; background:${slice.color}; margin-right:6px;"></span>
          <strong style="font-size: 14px; text-transform: uppercase;">${escapeHtml(slice.name)} (${slice.count} Stocks)</strong>
          <span style="font-size: 12px; color: var(--ink-soft); margin-left: 8px;">— Total Value: ₹${Math.round(slice.val).toLocaleString('en-IN')} (${slice.pct.toFixed(1)}%)</span>
        </div>
        <button id="close-drilldown-btn" style="background:none; border:none; font-size:12px; font-weight:700; color:var(--ink-soft); cursor:pointer;">✕ Close</button>
      </div>
      <div style="overflow-x: auto; -webkit-overflow-scrolling: touch;">
        <table style="width: 100%; border-collapse: collapse; text-align: left;">
          <thead>
            <tr style="border-bottom: 2px solid var(--rule-strong); font-size: 10.5px; text-transform: uppercase; color: var(--ink-soft); letter-spacing: 0.5px;">
              <th style="padding: 6px;">Stock</th>
              <th style="padding: 6px;">Sector Niche</th>
              <th style="padding: 6px; text-align: center;">Qty</th>
              <th style="padding: 6px; text-align: right;">Avg Buy</th>
              <th style="padding: 6px; text-align: right;">LTP</th>
              <th style="padding: 6px; text-align: right;">Current Value</th>
              <th style="padding: 6px; text-align: right;">P&amp;L</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>
      </div>
    </div>
  `;

  const closeBtn = document.getElementById('close-drilldown-btn');
  if (closeBtn) closeBtn.addEventListener('click', () => {
    drilldownContainer.style.display = 'none';
    selectedSliceKey = null;
  });

  // Smooth scroll to table
  drilldownContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function updateStatusBar() {
  if (!newsData) {
    refreshStatus.textContent = 'Not yet fetched today';
    datelineStatus.textContent = "Tap refresh to fetch today's news";
    datelineStatus.classList.remove('fresh');
    updatePriceStatus();
    return;
  }
  const fresh = isToday(newsData.fetchedAt);
  const d = lastFetchDiagnostics;
  let diagSuffix = '';
  if (d && d.totalCount > 0 && d.errorCount > 0) {
    if (d.errorCount === d.totalCount) {
      diagSuffix = ` — ⚠ backend could not be reached for any stock (${escapeHtml(d.lastError || 'unknown error')}). Check your backend URL in Settings.`;
    } else if (d.errorCount > d.totalCount * 0.3) {
      diagSuffix = ` — ⚠ ${d.errorCount}/${d.totalCount} stocks failed to fetch (${escapeHtml(d.lastError || 'see details')})`;
    }
  }
  refreshStatus.textContent = `Last fetched ${timeLabel(newsData.fetchedAt)}${fresh ? ' today' : ' (older — refresh for today)'}${diagSuffix}`;
  datelineStatus.textContent = fresh ? 'Updated this morning' : 'Stale — tap refresh';
  datelineStatus.classList.toggle('fresh', fresh);

  updatePriceStatus();
  renderPortfolioAnalytics();
}

function updatePriceStatus() {
  const priceStatusEl = $('#price-status');
  if (!priceStatusEl) return;
  const hasAnyQuote = newsData && newsData.results && newsData.results.some(r => r.quote && r.quote.last_price != null);
  priceStatusEl.textContent = hasAnyQuote ? 'Prices updated' : 'Prices: tap to fetch';
}

function openSettings() {
  const stocks = Store.getStocks();
  $('#stocklist-input').value = stocks.map(s => {
    if (s[3] || s[4]) return `${s[0]},${s[1]},${s[2]},${s[3]},${s[4]}`;
    return `${s[0]},${s[1]},${s[2]}`;
  }).join('\n');

  const savedKey = Store.getKiteApiKey();
  if (savedKey) $('#kite-api-key-input').value = savedKey;
  const savedBackend = localStorage.getItem(KITE_BACKEND_URL_KEY);
  if (savedBackend) $('#kite-backend-url-input').value = savedBackend;
  $('#settings-overlay').classList.add('open');
}

function closeSettings() {
  $('#settings-overlay').classList.remove('open');
}

function saveSettings() {
  const kiteKey = $('#kite-api-key-input').value.trim();
  if (kiteKey) Store.setKiteApiKey(kiteKey);
  const backendUrl = $('#kite-backend-url-input').value.trim();
  if (backendUrl) localStorage.setItem(KITE_BACKEND_URL_KEY, backendUrl.replace(/\/$/, ''));

  const lines = $('#stocklist-input').value.split('\n').map(l => l.trim()).filter(Boolean);
  const parsed = lines.map(l => {
    const parts = l.split(',').map(p => p.trim());
    const ticker = parts[0] || '';
    const company = parts[1] || ticker;
    const tier = parts[2] || 'Watch';
    const qty = Number(parts[3]) || 0;
    const avgPrice = Number(parts[4]) || 0;
    return [ticker, company, tier, qty, avgPrice];
  }).filter(p => p[0]);

  if (parsed.length) Store.setStocks(parsed);
  closeSettings();
  renderPortfolioAnalytics();
}

const VALID_TIERS = ['Top30', 'Top31-50', 'Top51-75', 'Watch'];
let _sheetjsLoaded = false;
function ensureSheetJS() {
  return new Promise((resolve, reject) => {
    if (window.XLSX) { resolve(); return; }
    if (_sheetjsLoaded) { resolve(); return; }
    const script = document.createElement('script');
    script.src = 'https://cdn.sheetjs.com/xlsx-0.20.3/package/dist/xlsx.full.min.js';
    script.onload = () => { _sheetjsLoaded = true; resolve(); };
    script.onerror = () => reject(new Error('Could not load SheetJS'));
    document.head.appendChild(script);
  });
}

function looksLikeISIN(value) {
  return /^[A-Z]{2}[A-Z0-9]{9}\d$/.test(String(value || '').trim().toUpperCase());
}

const KNOWN_NON_TICKER_LABELS = new Set([
  'SUMMARY', 'TOTAL', 'GRAND', 'SUBTOTAL', 'NOTES', 'DISCLAIMER', 'PAGE',
  'DATE', 'NAME', 'ADDRESS', 'PAN', 'EMAIL', 'PHONE', 'STATEMENT', 'REPORT',
  'HOLDINGS', 'PORTFOLIO', 'EQUITY', 'QUANTITY', 'VALUE', 'AMOUNT', 'BALANCE',
  'OPENING', 'CLOSING', 'PERIOD', 'YEAR', 'FINANCIAL', 'ANNUAL', 'TAX',
  'GUIDE', 'FILING', 'CLIENT', 'SEGMENT', 'CATEGORY', 'TYPE', 'STATUS',
]);

function looksLikeRealTicker(value) {
  const v = String(value || '').trim();
  if (!v || v.length > 20 || /\s/.test(v)) return false;
  if (/^-?\d+(\.\d+)?$/.test(v)) return false;
  if (!/^[A-Z0-9&\-]+$/i.test(v) || !/[A-Z]/i.test(v)) return false;
  if (looksLikeISIN(v) || KNOWN_NON_TICKER_LABELS.has(v.toUpperCase())) return false;
  return true;
}

function parseRowsFromSheet(rows) {
  if (!rows || rows.length === 0) return [];
  const firstRow = rows[0].map(c => String(c || '').toLowerCase().trim());
  const hasHeader = firstRow.some(c => c.includes('ticker') || c.includes('symbol') || c.includes('instrument'));
  const startIdx = hasHeader ? 1 : 0;

  const result = [];
  for (let i = startIdx; i < rows.length; i++) {
    const row = rows[i];
    if (!row || !row[0]) continue;
    const ticker = String(row[0]).trim().toUpperCase();
    if (!looksLikeRealTicker(ticker)) continue;

    const company = String(row[1] || row[0]).trim();
    let tier = String(row[2] || '').trim();
    if (!VALID_TIERS.includes(tier)) tier = 'Watch';
    const qty = Number(row[3]) || 0;
    const avgPrice = Number(row[4]) || 0;
    result.push([ticker, company, tier, qty, avgPrice]);
  }
  return result;
}

function parseKiteHoldingsRows(rows) {
  if (!rows || rows.length === 0) return null;
  const header = rows[0].map(c => String(c || '').toLowerCase().trim());
  const instrIdx = header.findIndex(h => h === 'instrument' || h === 'tradingsymbol' || h === 'symbol');
  if (instrIdx === -1) return null;

  const qtyIdx = header.findIndex(h => h === 'quantity' || h === 'qty');
  const avgIdx = header.findIndex(h => h.includes('avg') || h.includes('average'));

  const result = [];
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    const ticker = String(row[instrIdx] || '').trim().toUpperCase();
    if (!looksLikeRealTicker(ticker)) continue;
    const qty = qtyIdx !== -1 ? (Number(row[qtyIdx]) || 0) : 0;
    const avgPrice = avgIdx !== -1 ? (Number(row[avgIdx]) || 0) : 0;
    result.push([ticker, ticker, 'Watch', qty, avgPrice]);
  }
  return result.length > 0 ? result : null;
}

async function handleSpreadsheetUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const filenameEl = $('#csv-filename');
  filenameEl.textContent = 'Reading…';
  filenameEl.style.color = 'var(--ink-soft)';

  try {
    await ensureSheetJS();
  } catch (e) {
    filenameEl.textContent = 'Could not load spreadsheet reader.';
    filenameEl.style.color = 'var(--clay)';
    return;
  }

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
      const rows = XLSX.utils.sheet_to_json(firstSheet, { header: 1, defval: '' });

      let parsed = parseKiteHoldingsRows(rows) || parseRowsFromSheet(rows);
      if (!parsed || parsed.length === 0) {
        filenameEl.textContent = 'No stock tickers found in file.';
        filenameEl.style.color = 'var(--clay)';
        return;
      }

      $('#stocklist-input').value = parsed.map(r => r.join(',')).join('\n');
      filenameEl.textContent = `✓ ${file.name} — ${parsed.length} stocks loaded`;
      filenameEl.style.color = 'var(--sage)';
      renderPortfolioAnalytics();
    } catch (err) {
      filenameEl.textContent = `Could not read "${file.name}"`;
      filenameEl.style.color = 'var(--clay)';
    }
  };
  reader.readAsArrayBuffer(file);
}

async function importFromKite() {
  return startKiteLogin('holdings');
}

async function fetchLatestPrices() {
  const backendUrl = getBackendUrl();
  if (!backendUrl) {
    openSettings();
    showKiteStatus('Enter your backend URL first (see instructions below) before fetching prices.', 'error');
    return;
  }

  const stocks = Store.getStocks();
  if (!stocks || stocks.length === 0) return;

  const priceBtn = $('#price-refresh-btn');
  if (priceBtn) priceBtn.classList.add('spinning');
  priceStatusUpdate('Fetching prices…');

  const symbols = stocks.map(([ticker]) => ticker).join(',');

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 25000);
    const resp = await fetch(`${backendUrl}/api/quotes?symbols=${encodeURIComponent(symbols)}`, { signal: controller.signal });
    clearTimeout(timer);
    const data = await resp.json();

    if (priceBtn) priceBtn.classList.remove('spinning');

    if (!resp.ok || data.status !== 'success') {
      priceStatusUpdate(`Prices unavailable: ${data.error || `HTTP ${resp.status}`}`);
      return;
    }

    applyFetchedQuotes(data.quotes || {});
    const successCount = Object.values(data.quotes || {}).filter(q => !q.error).length;
    priceStatusUpdate(`Prices updated (${successCount}/${stocks.length})`);
    renderPortfolioAnalytics();
  } catch (e) {
    if (priceBtn) priceBtn.classList.remove('spinning');
    priceStatusUpdate(`Prices unavailable: ${e.message || e}`);
  }
}

async function startKiteLogin(intent) {
  const apiKey = $('#kite-api-key-input').value.trim() || Store.getKiteApiKey();
  const backendUrl = $('#kite-backend-url-input').value.trim() || localStorage.getItem(KITE_BACKEND_URL_KEY);

  if (!apiKey) {
    openSettings();
    showKiteStatus('Enter your Kite API key first (see instructions below).', 'error');
    return;
  }
  if (!backendUrl) {
    openSettings();
    showKiteStatus('Enter your backend URL first — this is the small server that securely completes the login.', 'error');
    return;
  }
  Store.setKiteApiKey(apiKey);
  localStorage.setItem(KITE_BACKEND_URL_KEY, backendUrl.replace(/\/$/, ''));

  sessionStorage.removeItem('ml_kite_callback_handled');
  showKiteStatus('Opening Kite login… After you log in, you\'ll be redirected back here automatically.', 'info');
  localStorage.setItem('ml_kite_pending_key', apiKey);

  const loginUrl = `https://kite.zerodha.com/connect/login?api_key=${encodeURIComponent(apiKey)}&v=3`;
  window.open(loginUrl, '_self');
}

function priceStatusUpdate(text) {
  const el = $('#price-status');
  if (el) el.textContent = text;
}

function checkKiteOAuthCallback() {
  const params = new URLSearchParams(window.location.search);
  if (params.get('action') !== 'login' || params.get('status') !== 'success') return;

  if (sessionStorage.getItem('ml_kite_callback_handled') === 'true') {
    return;
  }
  sessionStorage.setItem('ml_kite_callback_handled', 'true');

  const requestToken = params.get('request_token');
  const apiKey = Store.getKiteApiKey() || localStorage.getItem('ml_kite_pending_key');
  const backendUrl = localStorage.getItem(KITE_BACKEND_URL_KEY);

  history.replaceState({}, '', window.location.pathname);

  if (!requestToken || !apiKey) {
    setTimeout(() => {
      openSettings();
      showKiteStatus('Login returned but request token or API key is missing. Try again.', 'error');
    }, 300);
    return;
  }
  if (!backendUrl) {
    setTimeout(() => {
      openSettings();
      showKiteStatus(
        `Login worked, but no backend URL is configured.\n\nRequest token: ${requestToken}\n\nEnter your backend URL below, then try again.`,
        'error'
      );
    }, 300);
    return;
  }

  setTimeout(() => {
    openSettings();
    completeKiteLogin(requestToken, apiKey, backendUrl);
  }, 300);
}

async function completeKiteLogin(requestToken, apiKey, backendUrl) {
  showKiteStatus('Completing login and fetching your holdings…', 'info');

  let resp, data;
  try {
    resp = await fetch(`${backendUrl}/api/kite/exchange`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ request_token: requestToken }),
    });
    data = await resp.json();
  } catch (e) {
    showKiteStatus(`Could not reach your backend at ${backendUrl}.\n\n${e}`, 'error');
    return;
  }

  if (!resp.ok || data.status !== 'success') {
    showKiteStatus(`Backend reported an error:\n${data.error || JSON.stringify(data)}`, 'error');
    return;
  }

  const holdings = data.holdings || [];
  if (holdings.length === 0) {
    showKiteStatus('Logged in successfully, but Kite returned zero holdings.', 'error');
    return;
  }

  const existing = Store.getStocks();
  const existingByTicker = new Map(existing.map(([t, c, tier, q, a]) => [t.toUpperCase(), [t, c, tier, q, a]]));
  const defaultsByTicker = new Map(DEFAULT_STOCKS.map(([t, c, tier]) => [t.toUpperCase(), [t, c, tier, 0, 0]]));

  const stripSeriesSuffix = (t) => t.replace(/-(BE|SM|IL|BL|N1|N2)$/i, '');
  const buildStrippedIndex = (map) => {
    const stripped = new Map();
    for (const [key, value] of map) {
      const s = stripSeriesSuffix(key);
      if (!stripped.has(s)) stripped.set(s, value);
    }
    return stripped;
  };
  const existingStripped = buildStrippedIndex(existingByTicker);
  const defaultsStripped = buildStrippedIndex(defaultsByTicker);

  const merged = holdings.map(h => {
    const ticker = (h.ticker || '').toUpperCase();
    const qty = Number(h.quantity) || 0;
    const avgPrice = Number(h.average_price) || 0;

    let company = ticker;
    let tier = 'Watch';

    if (existingByTicker.has(ticker)) {
      company = existingByTicker.get(ticker)[1];
      tier = existingByTicker.get(ticker)[2];
    } else if (defaultsByTicker.has(ticker)) {
      company = defaultsByTicker.get(ticker)[1];
      tier = defaultsByTicker.get(ticker)[2];
    } else {
      const strippedTicker = stripSeriesSuffix(ticker);
      if (existingStripped.has(strippedTicker)) {
        company = existingStripped.get(strippedTicker)[1];
        tier = existingStripped.get(strippedTicker)[2];
      } else if (defaultsStripped.has(strippedTicker)) {
        company = defaultsStripped.get(strippedTicker)[1];
        tier = defaultsStripped.get(strippedTicker)[2];
      }
    }
    return [ticker, company, tier, qty, avgPrice];
  });

  Store.setStocks(merged);
  $('#stocklist-input').value = merged.map(s => `${s[0]},${s[1]},${s[2]},${s[3]},${s[4]}`).join('\n');

  const userName = (data.user && data.user.user_name) || 'your account';
  showKiteStatus(
    `✓ Imported ${holdings.length} holdings from ${userName}'s Kite account. Closing settings and fetching today's news now…`,
    'success'
  );

  renderImportedHoldingsPreview(merged, userName);

  setTimeout(() => {
    closeSettings();
    fetchAllNews();
  }, 900);
}

function renderImportedHoldingsPreview(stocksList, userName) {
  const rows = stocksList.map(([ticker, company, tier, qty, avgPrice]) =>
    `<div class="entry"><div class="entry-head"><div><span class="entry-name">${escapeHtml(company)}</span><span class="entry-ticker">${escapeHtml(ticker)}</span>${qty ? ` <span style="font-size:11px;color:var(--ink-soft)">(Qty: ${qty})</span>` : ''}</div><span class="entry-badge fresh">${escapeHtml(tier)}</span></div></div>`
  ).join('');

  contentEl.innerHTML = `<div class="section">
    <div class="section-head"><span class="section-label">✓ Imported from ${escapeHtml(userName)}'s Kite account</span><div class="rule"></div></div>
    <div class="quiet" style="margin-bottom:8px">Fetching today's news for these now…</div>
    ${rows}
  </div>`;
}

function showKiteStatus(msg, type) {
  const el = $('#kite-status');
  if (!el) return;
  el.textContent = msg;
  el.style.display = 'block';
  el.className = 'kite-status kite-status-' + type;
}

const NEGATIVE_WORDS = [
  'fraud', 'scam', 'probe', 'investigat', 'raid', 'fir filed', 'sebi action',
  'sebi order', 'rbi restriction', 'rbi flags', 'rbi imposes', 'cbi', 'ed raid',
  'scrutiny', 'non-compliance', 'governance issue', 'accounting lapse', 'lapses',
  'show cause notice', 'irregularit', 'downgrade', 'default', 'bankrupt', 'insolven',
  'liquidat', 'debt-laden', 'debt trap', 'rating cut', 'outlook negative', 'restructuring debt',
  'cash crunch', 'going concern', 'net loss', 'posts loss', 'loss widens', 'profit declin',
  'profit falls', 'profit drops', 'profit slips', 'profit dips', 'revenue falls',
  'misses estimate', 'falls short', 'below estimate', 'disappoint', 'muted outlook',
  'margin contraction', 'margin pressure', 'margin squeeze', 'cost overrun', 'profit warning',
  'shares fall', 'shares slide', 'shares drop', 'shares tank', 'shares tumble', 'shares crash',
  'stock falls', 'stock slips', 'stock slides', 'stock drops', 'stock declines', 'stock tanks',
  '52-week low', 'underperform', 'sell rating', 'red flag', 'warns of', 'demand slowdown',
  'resign', 'steps down', 'quits', 'sacked', 'fired', 'lawsuit', 'penalty', 'fine imposed',
  'halted', 'delisted', 'strike', 'shutdown', 'layoff', 'recall', 'cyberattack', 'data leak'
];

const POSITIVE_WORDS = [
  'profit rises', 'profit jumps', 'profit surges', 'profit soars', 'profit grows', 'profit beats',
  'revenue rises', 'revenue grows', 'revenue jumps', 'revenue surges', 'beats estimate', 'beats street',
  'raises guidance', 'raises outlook', 'margin expansion', 'strong growth', 'demand surge',
  'shares jump', 'shares rise', 'shares gain', 'shares surge', 'shares rally', 'shares soar',
  'stock jumps', 'stock rises', 'stock gains', 'stock surges', 'stock rallies', 'stock climbs',
  '52-week high', 'record high', 'outperform', 'buy rating', 'target price raised', 'upgrade',
  'wins order', 'wins contract', 'wins deal', 'secures order', 'bags order', 'gets approval',
  'expansion plan', 'capacity expansion', 'buyback', 'dividend announce', 'bonus issue',
  'strategic tie-up', 'joint venture', 'debt-free', 'turns profitable'
];

function classifySentiment(title) {
  if (!title) return 'neutral';
  const lower = title.toLowerCase();
  const hasNeg = NEGATIVE_WORDS.some(w => lower.includes(w));
  const hasPos = POSITIVE_WORDS.some(w => lower.includes(w));
  if (hasNeg && !hasPos) return 'negative';
  if (hasPos && !hasNeg) return 'positive';
  if (hasNeg && hasPos) return 'negative';
  return 'neutral';
}

function findMostRecentArticle(articles) {
  if (!articles || articles.length === 0) return null;
  let latest = null;
  let latestTime = -Infinity;
  for (const a of articles) {
    const t = a.published ? new Date(a.published).getTime() : NaN;
    if (!isNaN(t) && t > latestTime) {
      latestTime = t;
      latest = a;
    }
  }
  return latest || articles[0];
}

function classifyStockOverallSentiment(articles) {
  if (!articles || articles.length === 0) return null;
  const latest = findMostRecentArticle(articles);
  if (!latest) return null;
  return classifySentiment(latest.title) === 'negative' ? 'negative' : 'positive';
}

function applySorting(stocks, sortType) {
  if (!stocks || stocks.length === 0) return stocks;
  const sorted = [...stocks];
  switch (sortType) {
    case 'change-desc':
      sorted.sort((a, b) => {
        const hasA = a.quote && a.quote.change_pct != null;
        const hasB = b.quote && b.quote.change_pct != null;
        if (hasA && !hasB) return -1;
        if (!hasA && hasB) return 1;
        if (!hasA && !hasB) return (a.company || '').localeCompare(b.company || '');
        return b.quote.change_pct - a.quote.change_pct;
      });
      break;
    case 'change-asc':
      sorted.sort((a, b) => {
        const hasA = a.quote && a.quote.change_pct != null;
        const hasB = b.quote && b.quote.change_pct != null;
        if (hasA && !hasB) return -1;
        if (!hasA && hasB) return 1;
        if (!hasA && !hasB) return (a.company || '').localeCompare(b.company || '');
        return a.quote.change_pct - b.quote.change_pct;
      });
      break;
    case 'default':
    default:
      sorted.sort((a, b) => (a.company || '').localeCompare(b.company || ''));
      break;
  }
  return sorted;
}

function getBackendUrl() {
  return localStorage.getItem(KITE_BACKEND_URL_KEY) || '';
}

function sortArticlesByDateDesc(articles) {
  return [...articles].sort((a, b) => {
    const ta = a.published ? new Date(a.published).getTime() : NaN;
    const tb = b.published ? new Date(b.published).getTime() : NaN;
    const va = isNaN(ta) ? -Infinity : ta;
    const vb = isNaN(tb) ? -Infinity : tb;
    return vb - va;
  });
}

async function fetchNewsViaBackend(company, maxArticles) {
  const backendUrl = getBackendUrl();
  if (!backendUrl) return { articles: [], error: 'no-backend-configured' };
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 12000);
    const resp = await fetch(`${backendUrl}/api/news?company=${encodeURIComponent(company)}`, { signal: controller.signal });
    clearTimeout(timer);
    const data = await resp.json();
    if (!resp.ok || data.status !== 'success') {
      return { articles: [], error: data.error || `HTTP ${resp.status}` };
    }
    const sorted = sortArticlesByDateDesc(data.articles || []);
    return { articles: sorted.slice(0, maxArticles), error: null };
  } catch (e) {
    return { articles: [], error: e.message || String(e) };
  }
}

async function fetchStockNews(ticker, company) {
  const { articles, error } = await fetchNewsViaBackend(company, 3);
  return { ticker, company, articles, error };
}

async function fetchAllNews() {
  const stocks = Store.getStocks();
  if (!stocks || stocks.length === 0) {
    openSettings();
    return;
  }
  if (!getBackendUrl()) {
    openSettings();
    showKiteStatus('News fetching needs your backend URL set below — paste it in and try again.', 'error');
    return;
  }

  refreshBtn.classList.add('spinning');
  refreshLabel.textContent = 'Fetching…';
  renderLoadingSkeleton(stocks.length);

  const results = new Array(stocks.length);
  let completed = 0;
  const diagnostics = { errorCount: 0, emptyCount: 0, totalCount: stocks.length, lastError: null };

  for (let batchStart = 0; batchStart < stocks.length; batchStart += 6) {
    const batchEnd = Math.min(batchStart + 6, stocks.length);
    const batch = stocks.slice(batchStart, batchEnd);

    const batchPromises = batch.map(async ([ticker, company, tier, qty = 0, avgPrice = 0], batchIdx) => {
      const { articles, error } = await fetchStockNews(ticker, company);
      const prevEntry = newsData && newsData.results && newsData.results.find(r => r.ticker === ticker);
      const existingQuote = prevEntry ? prevEntry.quote : null;
      results[batchStart + batchIdx] = { ticker, company, tier, qty, avgPrice, articles, quote: existingQuote || null };
      if (articles.length === 0) {
        diagnostics.emptyCount++;
        if (error) {
          diagnostics.errorCount++;
          diagnostics.lastError = error;
        }
      }
      completed++;
      refreshLabel.textContent = `Fetching… ${completed}/${stocks.length}`;
    });

    await Promise.all(batchPromises);
    if (batchEnd < stocks.length) {
      await new Promise(r => setTimeout(r, 200));
    }
  }

  lastFetchDiagnostics = diagnostics;
  newsData = { fetchedAt: new Date().toISOString(), results };
  Store.setCache(newsData);

  refreshBtn.classList.remove('spinning');
  refreshLabel.textContent = "Fetch today's news";
  updateStatusBar();
  renderContent();
  fetchLatestPrices();
}

function applyFetchedQuotes(quotes) {
  const stocks = Store.getStocks();
  if (newsData && newsData.results) {
    for (const r of newsData.results) {
      const q = quotes[r.ticker];
      if (q && !q.error) r.quote = q;
    }
    Store.setCache(newsData);
  } else {
    const results = stocks.map(([ticker, company, tier, qty, avgPrice]) => {
      const q = quotes[ticker];
      return { ticker, company, tier, qty, avgPrice, articles: [], quote: q && !q.error ? q : null };
    });
    newsData = { fetchedAt: new Date().toISOString(), results };
    Store.setCache(newsData);
  }
  updateStatusBar();
  renderContent();
  renderPortfolioAnalytics();
}

function getStockSuggestions(query) {
  const stocks = Store.getStocks();
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return stocks
    .filter(([ticker, company]) => ticker.toLowerCase().includes(q) || company.toLowerCase().includes(q))
    .slice(0, 6);
}

function renderSuggestions(query) {
  const matches = getStockSuggestions(query);
  if (!query.trim()) {
    lookupSuggestions.classList.remove('open');
    lookupSuggestions.innerHTML = '';
    return;
  }
  if (matches.length === 0) {
    lookupSuggestions.innerHTML = `<div class="suggestion-empty">No match in your stock list — press Enter to search "${escapeHtml(query)}" directly anyway.</div>`;
    lookupSuggestions.classList.add('open');
    return;
  }
  lookupSuggestions.innerHTML = matches.map(([ticker, company]) =>
    `<div class="suggestion-item" data-ticker="${escapeHtml(ticker)}" data-company="${escapeHtml(company)}">
      <span class="suggestion-name">${escapeHtml(company)}</span>
      <span class="suggestion-ticker">${escapeHtml(ticker)}</span>
    </div>`
  ).join('');
  lookupSuggestions.classList.add('open');

  lookupSuggestions.querySelectorAll('.suggestion-item').forEach(item => {
    item.addEventListener('click', () => {
      const ticker = item.dataset.ticker;
      const company = item.dataset.company;
      lookupInput.value = `${company} (${ticker})`;
      lookupSuggestions.classList.remove('open');
      runSingleStockLookup(ticker, company);
    });
  });
}

async function fetchAndRenderGlobalCues() {
  const backendUrl = getBackendUrl();
  const btn = $('#global-cues-btn');
  const container = document.getElementById('global-cues-container');

  if (!container) return;

  if (!backendUrl) {
    openSettings();
    showKiteStatus('Enter your backend URL in Settings first to fetch global cues.', 'error');
    return;
  }

  if (container.style.display === 'block' && container.innerHTML.trim() !== '') {
    container.style.display = 'none';
    if (btn) btn.textContent = '🌐 Global Cues';
    return;
  }

  if (btn) {
    btn.classList.add('spinning');
    btn.textContent = 'Fetching Cues…';
  }

  try {
    const resp = await fetch(`${backendUrl}/api/market/global-cues`);
    const data = await resp.json();

    if (btn) {
      btn.classList.remove('spinning');
      btn.textContent = '🌐 Close Global Cues';
    }

    if (resp.ok && data.status === 'success') {
      localStorage.setItem('ml_global_cues', JSON.stringify({ time: Date.now(), cues: data.cues }));
      renderGlobalCues(data.cues, container);
    } else {
      container.style.display = 'block';
      container.innerHTML = `<div class="quiet" style="color:var(--clay);padding:10px 0;">Could not load cues: ${escapeHtml(data.error || 'Server error')}</div>`;
    }
  } catch (e) {
    if (btn) {
      btn.classList.remove('spinning');
      btn.textContent = '🌐 Global Cues';
    }
    container.style.display = 'block';
    container.innerHTML = `<div class="quiet" style="color:var(--clay);padding:10px 0;">Network error: ${escapeHtml(e.message || String(e))}</div>`;
  }
}

function renderGlobalCues(cues, container) {
  container.style.display = 'block';
  container.innerHTML = `
  <div class="global-cues-card">
    <div class="gc-header">🌐 OVERNIGHT GLOBAL CUES & SECTOR SPILLOVER</div>
    <div class="gc-section">
      <div class="gc-bullet">• <span class="gc-label">Global Headlines:</span> ${escapeHtml(cues.global_headlines[0] || '')}</div>
      ${cues.global_headlines[1] ? `<div class="gc-bullet">• ${escapeHtml(cues.global_headlines[1])}</div>` : ''}
    </div>
    <div class="gc-section">
      <div class="gc-bullet">• <span class="gc-label">Expected India Impact:</span> ${escapeHtml(cues.indian_impact)}</div>
    </div>
    <div class="gc-grid">
       <div><span class="gc-label">🇺🇸 USA:</span> ${escapeHtml(cues.usa_market)}</div>
       <div><span class="gc-label">🇯🇵 Japan:</span> ${escapeHtml(cues.japan_market)}</div>
       <div><span class="gc-label">🇰🇷 S. Korea:</span> ${escapeHtml(cues.korea_market)}</div>
       <div><span class="gc-label">🇨🇳 China:</span> ${escapeHtml(cues.china_market)}</div>
    </div>
  </div>`;
}

function getCachedFundamentals(ticker) {
  const raw = localStorage.getItem(`ml_fund_${ticker}`);
  if (!raw) return null;
  try {
    const cached = JSON.parse(raw);
    if (cached.date !== new Date().toDateString()) return null;
    return cached.fundamentals;
  } catch (e) {
    return null;
  }
}

function setCachedFundamentals(ticker, fundamentals) {
  localStorage.setItem(`ml_fund_${ticker}`, JSON.stringify({
    date: new Date().toDateString(),
    fundamentals,
  }));
}

function getCachedRoce(ticker) {
  const raw = localStorage.getItem(`ml_roce_${ticker}`);
  if (!raw) return null;
  try {
    const cached = JSON.parse(raw);
    if (cached.date !== new Date().toDateString()) return null;
    return cached.roce;
  } catch (e) {
    return null;
  }
}

function setCachedRoce(ticker, roceData) {
  localStorage.setItem(`ml_roce_${ticker}`, JSON.stringify({
    date: new Date().toDateString(),
    roce: roceData,
  }));
}

function formatFundamentalsError(rawError) {
  const lower = (rawError || '').toLowerCase();
  if (lower.includes('rate limit') || lower.includes('too many requests')) {
    return "Yahoo Finance is rate-limiting this type of data right now — try again shortly.";
  }
  return rawError || 'Could not fetch fundamentals';
}

async function fetchAndShowAIBriefing(ticker, company, articles, targetPanelId, btnTarget, tier = 'Watch') {
  const backendUrl = getBackendUrl();
  const panel = typeof targetPanelId === 'string' ? document.getElementById(targetPanelId) : targetPanelId;
  const btn = typeof btnTarget === 'string' ? document.getElementById(btnTarget) : btnTarget;

  if (!panel) return;
  if (!backendUrl) {
    panel.innerHTML = `<div class="quiet" style="color:var(--clay)">Backend URL not set (Settings).</div>`;
    return;
  }

  if (btn) {
    btn.textContent = '✨ Analyzing…';
    btn.disabled = true;
  }
  panel.innerHTML = '';

  const cleanTickerForFund = getCleanTicker(ticker);
  let fundamentals = getCachedFundamentals(cleanTickerForFund);
  if (!fundamentals) {
    try {
      const resp = await fetch(`${backendUrl}/api/fundamentals?symbol=${encodeURIComponent(cleanTickerForFund)}`);
      const data = await resp.json();
      if (data.status === 'success') {
        fundamentals = data.fundamentals;
        setCachedFundamentals(cleanTickerForFund, fundamentals);
      }
    } catch (e) {}
  }

  try {
    const resp = await fetch(`${backendUrl}/api/ai/briefing`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        symbol: ticker,
        company: company,
        tier: tier,
        fundamentals: fundamentals || {},
        news: articles
      })
    });
    const data = await resp.json();
    if (data.status === 'success') {
      const b = data.briefing;
      const sentColor = b.sentiment === 'BULLISH' ? 'var(--sage)' : (b.sentiment === 'BEARISH' ? 'var(--clay)' : 'var(--ink)');
      panel.innerHTML = `
        <div class="ai-briefing-card">
          <div class="ai-b-row"><strong>Business:</strong> ${escapeHtml(b.business_summary)}</div>
          <div class="ai-b-row"><strong>Financials:</strong> ${escapeHtml(b.financial_health)}</div>
          <div class="ai-b-row"><strong>Sentiment:</strong> <span style="color:${sentColor};font-weight:700">${escapeHtml(b.sentiment)}</span></div>
          <div class="ai-b-row"><strong>Catalyst:</strong> ${escapeHtml(b.key_catalyst)}</div>
          <div class="ai-b-row"><strong>Risk:</strong> ${escapeHtml(b.key_risk)}</div>
        </div>
      `;
      if (btn) btn.style.display = 'none';
    } else {
      panel.innerHTML = `<div class="quiet" style="color:var(--clay)">AI error: ${escapeHtml(data.error)}</div>`;
      if (btn) {
        btn.textContent = '✨ AI 1-Min Briefing';
        btn.disabled = false;
      }
    }
  } catch (e) {
    panel.innerHTML = `<div class="quiet" style="color:var(--clay)">AI error: ${escapeHtml(String(e))}</div>`;
    if (btn) {
      btn.textContent = '✨ AI 1-Min Briefing';
      btn.disabled = false;
    }
  }
}

async function runSingleStockLookup(tickerTyped, companyTyped) {
  const stocks = Store.getStocks();
  const known = stocks.find(([t, c]) =>
    t.toLowerCase() === tickerTyped.toLowerCase() || c.toLowerCase() === companyTyped.toLowerCase());
  const searchTerm = known ? known[1] : companyTyped;
  const displayTicker = known ? known[0] : tickerTyped.toUpperCase();
  const stockTier = known ? known[2] : 'Watch';
  const qty = known ? known[3] : 0;
  const avgPrice = known ? known[4] : 0;

  lookupResult.innerHTML = `<div class="lookup-result-card">
    <div class="lookup-result-head">
      <span class="lookup-result-title">${escapeHtml(searchTerm)}</span>
      <button class="lookup-close" id="lookup-close-btn">✕ Close</button>
    </div>
    <div class="lookup-loading">Fetching latest news for ${escapeHtml(displayTicker)}…</div>
  </div>`;
  $('#lookup-close-btn').addEventListener('click', clearLookupResult);

  let articles = [];
  let lookupError = null;
  try {
    const result = await fetchNewsViaBackend(searchTerm, 5);
    articles = result.articles;
    lookupError = result.error;
  } catch (e) {
    lookupError = e.message || String(e);
  }

  const stockObj = { ticker: displayTicker, company: searchTerm, tier: stockTier, qty, avgPrice, articles };
  const aiBtnHtml = `<button id="ai-briefing-btn" class="ai-briefing-btn">✨ Generate AI 1-Minute Briefing</button>`;
  const errorNote = lookupError
    ? `<div class="quiet" style="color:var(--clay)">Backend error: ${escapeHtml(lookupError)}</div>`
    : '';

  lookupResult.innerHTML = `<div class="lookup-result-card">
    <div class="lookup-result-head">
      <span class="lookup-result-title">${escapeHtml(searchTerm)} <span style="font-family:'SF Mono',monospace;font-size:11px;color:var(--ink-soft)">${escapeHtml(displayTicker)}</span></span>
      <button class="lookup-close" id="lookup-close-btn">✕ Close</button>
    </div>
    ${renderEntry(stockObj)}
    ${aiBtnHtml}
    <div id="ai-briefing-panel"></div>
    <button id="fundamentals-btn" class="fundamentals-toggle-btn">📊 Show fundamentals (PE, P/B, ROE...)</button>
    <div id="fundamentals-panel"></div>
    ${errorNote}
  </div>`;

  $('#lookup-close-btn').addEventListener('click', clearLookupResult);
  const fundBtn = document.getElementById('fundamentals-btn');
  if (fundBtn) fundBtn.addEventListener('click', () => fetchAndShowFundamentals(displayTicker));
  const aiBtn = document.getElementById('ai-briefing-btn');
  if (aiBtn) aiBtn.addEventListener('click', () => fetchAndShowAIBriefing(displayTicker, searchTerm, articles, 'ai-briefing-panel', aiBtn, stockTier));
}

async function fetchAndShowInlineFundamentals(ticker, targetId, btn) {
  const backendUrl = getBackendUrl();
  const row = document.getElementById(targetId);
  if (!row || !btn) return;
  if (!backendUrl) {
    btn.outerHTML = `<span class="ribbon-fund-pill ribbon-fund-error" title="Set backend URL in Settings">⚠ backend not set</span>`;
    return;
  }

  const cached = getCachedFundamentals(ticker);
  if (cached) {
    btn.outerHTML = renderCompactFundamentalPills(cached);
    return;
  }

  btn.textContent = 'Loading…';
  btn.disabled = true;

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 25000);
    const resp = await fetch(`${backendUrl}/api/fundamentals?symbol=${encodeURIComponent(ticker)}`, { signal: controller.signal });
    clearTimeout(timer);
    const data = await resp.json();

    if (!resp.ok || data.status !== 'success') {
      const shortMsg = (data.error || '').toLowerCase().includes('rate limit') ? '⚠ rate limited' : '⚠ unavailable';
      btn.outerHTML = `<span class="ribbon-fund-pill ribbon-fund-error" title="${escapeHtml(formatFundamentalsError(data.error))}">${shortMsg}</span>`;
      return;
    }

    setCachedFundamentals(ticker, data.fundamentals);
    btn.outerHTML = renderCompactFundamentalPills(data.fundamentals);
  } catch (e) {
    btn.outerHTML = `<span class="ribbon-fund-pill ribbon-fund-error" title="${escapeHtml(formatFundamentalsError(e.message || String(e)))}">⚠ error</span>`;
  }
}

async function fetchAndShowInlineRoce(ticker, targetId, btn) {
  const backendUrl = getBackendUrl();
  const row = document.getElementById(targetId);
  if (!row || !btn) return;
  if (!backendUrl) {
    btn.outerHTML = `<span class="ribbon-fund-pill ribbon-fund-error">backend not set</span>`;
    return;
  }

  const cached = getCachedRoce(ticker);
  if (cached) {
    btn.outerHTML = renderCompactRocePills(cached);
    return;
  }

  btn.textContent = 'Loading…';
  btn.disabled = true;

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 25000);
    const resp = await fetch(`${backendUrl}/api/fundamentals/roce?symbol=${encodeURIComponent(ticker)}`, { signal: controller.signal });
    clearTimeout(timer);
    const data = await resp.json();

    if (!resp.ok || data.status !== 'success') {
      const shortMsg = (data.error || '').toLowerCase().includes('rate limit') ? 'rate limited' : 'unavailable';
      btn.outerHTML = `<span class="ribbon-fund-pill ribbon-fund-error" title="${escapeHtml(data.error || '')}">⚠ ${shortMsg}</span>`;
      return;
    }

    const roceData = { roce: data.roce, debt_ratio: data.debt_ratio };
    setCachedRoce(ticker, roceData);
    btn.outerHTML = renderCompactRocePills(roceData);
  } catch (e) {
    btn.outerHTML = `<span class="ribbon-fund-pill ribbon-fund-error">⚠ error</span>`;
  }
}

function renderCompactRocePills(r) {
  const pills = [];
  if (r.roce != null) pills.push(`<span class="ribbon-fund-pill" title="ROCE - calculated">ROCE ${(Number(r.roce) * 100).toFixed(1)}%</span>`);
  if (r.debt_ratio != null) pills.push(`<span class="ribbon-fund-pill" title="Debt Ratio - calculated">DR ${(Number(r.debt_ratio) * 100).toFixed(1)}%</span>`);
  return pills.length ? pills.join('') : `<span class="ribbon-fund-pill" style="opacity:0.75">No ROCE data</span>`;
}

async function fetchAndShowFundamentals(ticker) {
  const backendUrl = getBackendUrl();
  const panel = document.getElementById('fundamentals-panel');
  const btn = document.getElementById('fundamentals-btn');
  if (!panel) return;
  if (!backendUrl) {
    panel.innerHTML = `<div class="quiet" style="color:var(--clay)">Backend URL not set (Settings).</div>`;
    return;
  }

  const cached = getCachedFundamentals(ticker);
  if (cached) {
    panel.innerHTML = renderFundamentalsPanel(cached) +
      `<div class="fund-note">📦 Cached to avoid Yahoo rate limits.</div>`;
    if (btn) btn.style.display = 'none';
    return;
  }

  if (btn) btn.textContent = 'Loading…';
  panel.innerHTML = '';

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 25000);
    const resp = await fetch(`${backendUrl}/api/fundamentals?symbol=${encodeURIComponent(ticker)}`, { signal: controller.signal });
    clearTimeout(timer);
    const data = await resp.json();

    if (!resp.ok || data.status !== 'success') {
      panel.innerHTML = `<div class="quiet" style="color:var(--clay)">${escapeHtml(formatFundamentalsError(data.error))}</div>`;
      if (btn) btn.textContent = '📊 Show fundamentals (PE, P/B, ROE...)';
      return;
    }

    setCachedFundamentals(ticker, data.fundamentals);
    panel.innerHTML = renderFundamentalsPanel(data.fundamentals);
    if (btn) btn.style.display = 'none';
  } catch (e) {
    panel.innerHTML = `<div class="quiet" style="color:var(--clay)">${escapeHtml(formatFundamentalsError(e.message || String(e)))}</div>`;
    if (btn) btn.textContent = '📊 Show fundamentals (PE, P/B, ROE...)';
  }
}

function fmtRatio(v, suffix) {
  if (v == null) return '—';
  return `${Number(v).toFixed(2)}${suffix || ''}`;
}

function fmtPct(v) {
  if (v == null) return '—';
  return `${(Number(v) * 100).toFixed(1)}%`;
}

function renderFundamentalsPanel(f) {
  return `<div class="fundamentals-panel">
    <div class="fund-row"><span class="fund-label">P/E (trailing)</span><span class="fund-val">${fmtRatio(f.trailing_pe)}</span></div>
    <div class="fund-row"><span class="fund-label">P/E (forward)</span><span class="fund-val">${fmtRatio(f.forward_pe)}</span></div>
    <div class="fund-row"><span class="fund-label">P/B</span><span class="fund-val">${fmtRatio(f.price_to_book)}</span></div>
    <div class="fund-row"><span class="fund-label">PEG <span class="fund-caveat" title="Indicative">⚠</span></span><span class="fund-val">${fmtRatio(f.peg_ratio)}</span></div>
    <div class="fund-row"><span class="fund-label">ROE</span><span class="fund-val">${fmtPct(f.return_on_equity)}</span></div>
    <div class="fund-row"><span class="fund-label">ROCE <span class="fund-caveat" title="Calculated">calc</span></span><span class="fund-val">${fmtPct(f.roce)}</span></div>
    <div class="fund-row"><span class="fund-label">Debt/Equity</span><span class="fund-val">${fmtRatio(f.debt_to_equity)}</span></div>
    <div class="fund-row"><span class="fund-label">Debt Ratio <span class="fund-caveat" title="Calculated">calc</span></span><span class="fund-val">${fmtPct(f.debt_ratio)}</span></div>
    <div class="fund-row"><span class="fund-label">Profit margin</span><span class="fund-val">${fmtPct(f.profit_margin)}</span></div>
    <div class="fund-note">ROCE and Debt Ratio are calculated from raw balance sheet/income statement data.</div>
  </div>`;
}

function renderCompactFundamentalPills(f) {
  const pills = [];
  if (f.trailing_pe != null) pills.push(`<span class="ribbon-fund-pill" title="Trailing P/E">PE ${Number(f.trailing_pe).toFixed(1)}</span>`);
  if (f.price_to_book != null) pills.push(`<span class="ribbon-fund-pill" title="Price to Book">P/B ${Number(f.price_to_book).toFixed(1)}</span>`);
  if (f.peg_ratio != null) pills.push(`<span class="ribbon-fund-pill" title="PEG ratio">PEG ${Number(f.peg_ratio).toFixed(1)}⚠</span>`);
  if (f.return_on_equity != null) pills.push(`<span class="ribbon-fund-pill" title="Return on Equity">ROE ${(Number(f.return_on_equity) * 100).toFixed(1)}%</span>`);
  if (f.roce != null) pills.push(`<span class="ribbon-fund-pill" title="ROCE">ROCE ${(Number(f.roce) * 100).toFixed(1)}%</span>`);
  if (f.debt_to_equity != null) pills.push(`<span class="ribbon-fund-pill" title="Debt to Equity">D/E ${Number(f.debt_to_equity).toFixed(1)}</span>`);
  if (f.debt_ratio != null) pills.push(`<span class="ribbon-fund-pill" title="Debt Ratio">DR ${(Number(f.debt_ratio) * 100).toFixed(1)}%</span>`);
  if (pills.length === 0) return `<span class="ribbon-fund-pill" style="opacity:0.75">No fundamentals data</span>`;
  return pills.join('');
}

function clearLookupResult() {
  lookupResult.innerHTML = '';
  lookupInput.value = '';
  lookupSuggestions.classList.remove('open');
}

function renderLoadingSkeleton(count) {
  let html = '<div class="section">';
  for (let i = 0; i < Math.min(count, 6); i++) {
    html += `<div class="skeleton-entry">
      <div class="skel-line" style="width:45%"></div>
      <div class="skel-line" style="width:85%"></div>
      <div class="skel-line" style="width:30%"></div>
    </div>`;
  }
  html += '</div>';
  contentEl.innerHTML = html;
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str || '';
  return div.innerHTML;
}

function formatPublished(iso) {
  if (!iso) return '';
  const d = new Date(iso);
  if (isNaN(d)) return '';
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }) + ' · ' +
         d.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
}

function renderMoversSummary() {
  const el = document.getElementById('movers-summary');
  if (!el) return;

  const withQuotes = (newsData && newsData.results ? newsData.results : [])
    .filter(s => s.quote && s.quote.last_price != null && s.quote.change_pct != null);

  if (withQuotes.length === 0) {
    el.innerHTML = '';
    return;
  }

  let up = 0, down = 0, flat = 0;
  let best = null, worst = null;
  for (const s of withQuotes) {
    const chg = s.quote.change_pct;
    if (chg > 0) up++;
    else if (chg < 0) down++;
    else flat++;
    if (best === null || chg > best.quote.change_pct) best = s;
    if (worst === null || chg < worst.quote.change_pct) worst = s;
  }

  const bestHtml = best
    ? `<div class="mover-up"><span class="name">${escapeHtml(best.company)}</span> <span class="pct">+${best.quote.change_pct}%</span></div>`
    : '';
  const worstHtml = worst
    ? `<div class="mover-down"><span class="name">${escapeHtml(worst.company)}</span> <span class="pct">${worst.quote.change_pct}%</span></div>`
    : '';

  el.innerHTML = `<div class="movers-summary">
    <div class="movers-counts">
      <span class="count-up">▲ ${up} up</span>
      <span class="count-down">▼ ${down} down</span>
      <span class="count-flat">${flat} flat</span>
      <span style="margin-left:auto;color:var(--ink-soft)">of ${withQuotes.length} priced</span>
    </div>
    <div class="movers-best-worst">
      ${bestHtml}
      ${worstHtml}
    </div>
  </div>`;
}

function renderContent() {
  renderMoversSummary();
  if (!newsData) {
    contentEl.innerHTML = `<div class="empty-state">
      <div class="glyph">☀</div>
      <h3>Good morning.</h3>
      <p>Tap "Fetch today's news" above to pull the latest headlines for every stock in your portfolio before the market opens.</p>
    </div>`;
    return;
  }

  let filtered = newsData.results;
  if (currentFilter === 'fresh') {
    filtered = filtered.filter(s => s.articles && s.articles.length > 0);
  }

  if (currentSentiment !== 'all') {
    filtered = filtered.filter(s => {
      const overall = classifyStockOverallSentiment(s.articles);
      return overall === currentSentiment;
    });
  }

  if (filtered.length === 0) {
    const sentimentNote = currentSentiment !== 'all' ? ` with ${currentSentiment} news` : '';
    contentEl.innerHTML = `<div class="empty-state">
      <div class="glyph">—</div>
      <h3>Nothing here</h3>
      <p>No stocks${sentimentNote} match this filter right now.</p>
    </div>`;
    return;
  }

  const sortedFiltered = applySorting(filtered, currentSort);
  contentEl.innerHTML = `<div class="section">${sortedFiltered.map(renderEntry).join('')}</div>`;
}

function renderEntry(stock) {
  const hasNews = stock.articles && stock.articles.length > 0;
  const lead = hasNews ? stock.articles[0] : null;
  const rest = hasNews ? stock.articles.slice(1) : [];
  const overallSentiment = hasNews ? classifyStockOverallSentiment(stock.articles) : null;

  let body = '';
  if (hasNews) {
    const leadSentiment = classifySentiment(lead.title);
    body = `<div class="headline"><span class="sentiment-dot ${leadSentiment}"></span><a href="${escapeHtml(lead.url)}" target="_blank" rel="noopener">${escapeHtml(lead.title)}</a></div>
      <div class="article-meta">${escapeHtml(lead.source)} · ${formatPublished(lead.published)}</div>`;
    if (rest.length) {
      body += rest.map(a => {
        const s = classifySentiment(a.title);
        return `<div class="more-articles">
        <div class="sub-headline"><span class="sentiment-dot ${s}"></span><a href="${escapeHtml(a.url)}" target="_blank" rel="noopener" style="color:inherit;text-decoration:none;border-bottom:1px solid var(--rule-strong)">${escapeHtml(a.title)}</a></div>
        <div class="article-meta">${escapeHtml(a.source)} · ${formatPublished(a.published)}</div>
      </div>`;
      }).join('');
    }
  } else {
    body = `<div class="quiet">No recent news found</div>`;
  }

  const badgeHtml = hasNews
    ? (overallSentiment === 'negative'
        ? '<span class="entry-badge sent-badge-negative">⚠ Watch</span>'
        : overallSentiment === 'positive'
          ? '<span class="entry-badge sent-badge-positive">✓ Positive</span>'
          : '<span class="entry-badge fresh">News</span>')
    : '';

  let ribbonHtml = '';
  const hasQuote = stock.quote && stock.quote.last_price != null;
  if (hasQuote) {
    const chg = stock.quote.change_pct;
    const ribbonClass = chg == null ? 'ribbon-neu' : (chg > 0 ? 'ribbon-pos' : (chg < 0 ? 'ribbon-neg' : 'ribbon-neu'));
    const chgSign = chg != null && chg > 0 ? '+' : '';

    let flagsHtml = '';
    if (stock.quote.near_52wk_flag === 'near-high') {
      flagsHtml += `<span class="ribbon-flag" title="Within 2% of 52-week high of ₹${stock.quote.fifty_two_wk_high}">52WK HIGH</span>`;
    } else if (stock.quote.near_52wk_flag === 'near-low') {
      flagsHtml += `<span class="ribbon-flag" title="Within 2% of 52-week low of ₹${stock.quote.fifty_two_wk_low}">52WK LOW</span>`;
    }

    const cleanTickerForFund = getCleanTicker(stock.ticker);
    const cachedFund = getCachedFundamentals(cleanTickerForFund);
    const fundHtml = cachedFund
      ? renderCompactFundamentalPills(cachedFund)
      : `<button class="ribbon-fund-btn" data-fund-ticker="${escapeHtml(cleanTickerForFund)}" data-fund-target="ribbon-data-${escapeHtml(stock.ticker)}">📊 Fundamentals</button>`;
    const cachedRoce = getCachedRoce(cleanTickerForFund);
    const roceHtml = cachedRoce
      ? renderCompactRocePills(cachedRoce)
      : `<button class="ribbon-roce-btn" data-fund-ticker="${escapeHtml(cleanTickerForFund)}" data-fund-target="ribbon-data-${escapeHtml(stock.ticker)}">📈 ROCE</button>`;

    ribbonHtml = `<div class="price-ribbon ${ribbonClass}">
      <div class="ribbon-name-row">
        <span class="ribbon-name">${escapeHtml(stock.company)}</span>
        <span class="ribbon-code">${escapeHtml(cleanTickerForFund)}</span>
      </div>
      <div class="ribbon-data-row" id="ribbon-data-${escapeHtml(stock.ticker)}">
        <span class="ribbon-price${chg != null && chg < 0 ? ' price-down' : (chg != null && chg > 0 ? ' price-up' : '')}">₹${stock.quote.last_price.toFixed(2)}</span>
        <span class="ribbon-change${chg != null && chg < 0 ? ' price-down' : (chg != null && chg > 0 ? ' price-up' : '')}">  ${chg != null ? `${chgSign}${chg}%` : '—'}</span>
        ${flagsHtml}
        ${fundHtml}
        ${roceHtml}
      </div>
    </div>`;
  }

  const headHtml = hasQuote
    ? `<div class="entry-head-badge-only">${badgeHtml}</div>`
    : `<div class="entry-head">
        <div><span class="entry-name">${escapeHtml(stock.company)}</span><span class="entry-ticker">${escapeHtml(getCleanTicker(stock.ticker))}</span></div>
        ${badgeHtml}
      </div>`;

  let holdingsHtml = '';
  if (stock.qty && stock.qty > 0) {
    const invested = stock.qty * (stock.avgPrice || 0);
    let currValHtml = '';
    
    if (hasQuote && stock.quote.last_price) {
      const currentVal = stock.qty * stock.quote.last_price;
      const pnl = currentVal - invested;
      const pnlSign = pnl >= 0 ? '+' : '';
      const pnlClass = pnl >= 0 ? 'price-up' : 'price-down';
      currValHtml = ` &nbsp; Value: ₹${currentVal.toLocaleString('en-IN', { maximumFractionDigits: 0 })} (<span class="${pnlClass}">${pnlSign}₹${pnl.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>)`;
    }
    
    holdingsHtml = `
      <div style="background: #F8F9FA; border: 1px solid #E9ECEF; border-radius: 6px; padding: 6px 10px; margin-top: 6px; font-family: 'SF Mono', monospace; font-size: 11px; color: var(--ink-soft);">
        💼 Qty: ${stock.qty} &nbsp; Avg: ₹${Number(stock.avgPrice || 0).toFixed(2)} &nbsp; Inv: ₹${invested.toLocaleString('en-IN', { maximumFractionDigits: 0 })}${currValHtml}
      </div>
    `;
  }

  const aiBriefingHtml = `
    <div>
      <button class="ribbon-ai-btn" data-ticker="${escapeHtml(stock.ticker)}" data-company="${escapeHtml(stock.company)}" data-tier="${escapeHtml(stock.tier || 'Watch')}">✨ AI 1-Min Briefing</button>
      <div id="ai-panel-entry-${escapeHtml(stock.ticker)}"></div>
    </div>
  `;

  return `<div class="entry ${overallSentiment === 'negative' ? 'has-negative' : ''}">
    ${headHtml}
    ${ribbonHtml}
    ${holdingsHtml}
    ${body}
    ${aiBriefingHtml}
  </div>`;
}

checkKiteOAuthCallback();
init();