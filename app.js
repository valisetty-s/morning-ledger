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
  ["CPPLUS","CP Plus (Aditya Infotech)","Top31-50",0,0],["HBLENGINE","HBL Engineering","Top31-50",0,0],
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
  ["SIGMAADV","Sigma Advanced Systems","Watch",0,0],["SHAKTIPUMP","Shakti Pumps","Watch",0,0],
  ["OSWALPUMPS","Oswal Pumps","Watch",0,0],["PREMEXPLN","Premier Explosives","Watch",0,0],
  ["TRAVELFOOD","Travel Food Services","Watch",0,0],["GMDCLTD","GMDC","Watch",0,0],
  ["ETERNAL","Eternal (Zomato)","Watch",0,0],["TRIVENI","Triveni Engineering","Watch",0,0],
  ["DEEPINDS","Deep Industries","Watch",0,0],["STLTECH-BE","Sterlite Technologies","Watch",0,0],
  ["PRECWIRE","Precision Wires","Watch",0,0],["PACEDIGITK","Pace Digitek","Watch",0,0],
  ["ADFFOODS","ADF Foods","Watch",0,0],["QPOWER-BE","Quality Power Electrical","Watch",0,0],
  ["AEROFLEX","Aeroflex Industries","Watch",0,0],["SPICEJET","SpiceJet","Watch",0,0],
  ["IDEA","Vodafone Idea","Watch",0,0],["HFCL","HFCL Ltd","Watch",0,0],
  // --- Added from Latest Holdings ---
  ["ACUTAAS","Acutaas Chemicals","Top31-50",0,0],["AEQUS","Aequs Ltd","Top31-50",0,0],
  ["AETHER","Aether Industries","Top31-50",0,0],["AIAENG","AIA Engineering","Top31-50",0,0],
  ["ARROWGREEN","Arrow Greentech","Top51-75",0,0],["AVALON","Avalon Technologies","Top30",0,0],
  ["EBGNG","GNG Electronics","Top51-75",0,0],["ESDS","ESDS Software Solution","Top31-50",0,0],
  ["HEGAM","HEG Advanced Materials","Top51-75",0,0],["HSCL","Himadri Speciality Chemical","Top31-50",0,0],
  ["IGIL","International Gemological Institute","Top31-50",0,0],["INDOMIM","Indo-MIM Ltd","Top31-50",0,0],
  ["JYOTICNC","Jyoti CNC Automation","Top31-50",0,0],["KANOHAR","Kanohar Electricals","Top51-75",0,0],
  ["KRN","KRN Heat Exchanger","Top31-50",0,0],["LALPATHLAB","Dr. Lal PathLabs","Top31-50",0,0],
  ["LENSKART","Lenskart Solutions","Top51-75",0,0],["MACPOWER","Macpower CNC Machines","Top51-75",0,0],
  ["MARINE","Marine Electricals (India)","Top51-75",0,0],["MILKYMIST-BE","Milky Mist Dairy Food","Top51-75",0,0],
  ["MOLBIO","Molbio Diagnostics","Top31-50",0,0],["NAM-INDIA","Nippon Life India AMC","Top31-50",0,0],
  ["NEOGEN","Neogen Chemicals","Top31-50",0,0],["NSE","National Stock Exchange (NSE)","Top30",0,0],
  ["PGIL","Pearl Global Industries","Top51-75",0,0],["RAYMOND","Raymond Ltd (Engineering)","Top51-75",0,0],
  ["ROSSTECH","Rossell Techsys","Top31-50",0,0],["RPEL","Raghav Productivity Enhancers","Top51-75",0,0],
  ["SAILIFE","Sai Life Sciences","Top31-50",0,0],["SANSERA","Sansera Engineering","Top31-50",0,0],
  ["SBCL","Shivalik Bimetal Controls","Top31-50",0,0],["SEDEMAC","SEDEMAC Mechatronics","Top31-50",0,0],
  ["SETL","Standard Glass Lining Technology","Top31-50",0,0],["SJS","SJS Enterprises","Top31-50",0,0],
  ["SKYGOLD","Sky Gold Ltd","Top51-75",0,0],["STEELCAS","Steelcast Ltd","Top51-75",0,0],
  ["SUDEEPPHRM","Sudeep Pharma","Top31-50",0,0],["SUPRIYA","Supriya Lifescience","Top31-50",0,0],
  ["TANFACIND","Tanfac Industries","Top51-75",0,0],["TDPOWERSYS","TD Power Systems","Top31-50",0,0],
  ["TEMPSENS","Tempsens Instruments","Top51-75",0,0],["TIPSMUSIC","Tips Music Ltd","Top31-50",0,0],
  ["TRIVENIPT","Triveni Power Transmission","Top51-75",0,0],["VENUSPIPES","Venus Pipes & Tubes","Top31-50",0,0],
  ["VIKRAMTH","Vikram Thermo (India)","Top51-75",0,0],["WELCORP","Welspun Corp","Top51-75",0,0]
];
const CORE_COMPOUNDERS_SET = new Set([
  'APLAPOLLO', 'BSE', 'CAMS', 'COFORGE', 'INDHOTEL', 'KALYANKJIL',
  'LALPATHLAB', 'MAXHEALTH', 'MCX', 'NAM-INDIA', 'RAINBOW', 'SCHAEFFLER',
  'SHAILY', 'SONACOMS', 'SRF', 'SUPRIYA', 'THYROCARE', 'TIPSMUSIC',
  'UNOMINDA', 'YATHARTH', 'ZYDUSLIFE', 'COALINDIA'
]);
const TIER_COLORS = {
  "Compounders": "#0F766E",
  "Top30":       "#059669",
  "Top31-50": "#4F46E5",
  "Top51-75": "#D97706",
  "Watch":    "#E11D48",
};

const SECTOR_COLORS = {
  "Aerospace & Defense": "#2E4057",
  "Capital Goods & Power Grid": "#048A81",
  "Specialty & Green Chemistry": "#5B7553",
  "AI Cooling, Data Center & IT": "#7A5C9B",
  "EMS": "#3B6E8C",
  "Healthcare & Pharma": "#B8923F",
  "Financial Tollbooths": "#C45A3E",
  "Financials & NBFC": "#9E4770",
  "Auto Ancillary & EV": "#D9822B",
  "Clean Energy & Renewables": "#3A7D7E",
  "FMCG, Dairy & Consumer": "#6B8E23",
  "Digital IP, Media & Consumer": "#8B5FBF",
  "Telecom & Fibre Optic": "#4A6FA5",
  "Textiles & Apparel": "#C07A56",
  "Jewellery & Certification": "#D4AF37",
  "Commodity Recycle": "#5F7A61",
  "Commodity Converters & Distressed": "#A4453A",
  "Other": "#8E735B"
};

const SECTOR_MAP = {
  "ACUTAAS": "Specialty & Green Chemistry", "AEQUS": "Aerospace & Defense", "AEROFLEX": "AI Cooling, Data Center & IT",
  "AETHER": "Specialty & Green Chemistry", "AFFLE": "AI Cooling, Data Center & IT", "AIAENG": "Capital Goods & Power Grid",
  "APLAPOLLO": "Capital Goods & Power Grid", "APOLLO": "Aerospace & Defense", "ARROWGREEN": "Specialty & Green Chemistry",
  "ASTRAMICRO": "Aerospace & Defense", "ATHERENERG": "Auto Ancillary & EV", "AVALON": "EMS",
  "AXISCADES": "Aerospace & Defense", "AZAD": "Aerospace & Defense", "BELRISE": "Auto Ancillary & EV",
  "BORORENEW": "Clean Energy & Renewables", "BSE": "Financial Tollbooths", "CAMS": "Financial Tollbooths",
  "CCL": "FMCG, Dairy & Consumer", "CGPOWER": "Capital Goods & Power Grid", "CPPLUS": "AI Cooling, Data Center & IT",
  "CUPID": "Healthcare & Pharma", "CYIENTDLM": "EMS", "DATAPATTNS": "Aerospace & Defense",
  "DEEPINDS": "Capital Goods & Power Grid", "DHOOTTRANS": "Auto Ancillary & EV", "E2E": "AI Cooling, Data Center & IT",
  "EBGNG": "AI Cooling, Data Center & IT", "ELGIEQUIP": "Capital Goods & Power Grid", "ESDS": "AI Cooling, Data Center & IT",
  "FCL": "Specialty & Green Chemistry", "FIEMIND": "Auto Ancillary & EV", "GENUSPOWER": "Capital Goods & Power Grid",
  "GRAVITA": "Commodity Recycle", "GROWW": "Financial Tollbooths", "GRSE": "Aerospace & Defense",
  "HBLENGINE": "Capital Goods & Power Grid", "HEGAM": "Specialty & Green Chemistry", "HFCL": "Telecom & Fibre Optic",
  "HSCL": "Specialty & Green Chemistry", "IDEA": "Telecom & Fibre Optic", "IGIL": "Jewellery & Certification",
  "IKS": "AI Cooling, Data Center & IT", "INDOMIM": "Aerospace & Defense", "INOXINDIA": "Capital Goods & Power Grid",
  "IZMO": "AI Cooling, Data Center & IT", "JYOTICNC": "Capital Goods & Power Grid", "KANOHAR": "Capital Goods & Power Grid",
  "KAYNES": "EMS", "KRN": "AI Cooling, Data Center & IT", "KSHINTL": "Capital Goods & Power Grid",
  "KUSUMGAR": "Textiles & Apparel", "LALPATHLAB": "Healthcare & Pharma", "LAURUSLABS": "Healthcare & Pharma",
  "LENSKART": "FMCG, Dairy & Consumer", "MACPOWER": "Capital Goods & Power Grid", "MANINDS": "Capital Goods & Power Grid",
  "MARINE": "Capital Goods & Power Grid", "MARKSANS": "Healthcare & Pharma", "MAXHEALTH": "Healthcare & Pharma",
  "MCX": "Financial Tollbooths", "MILKYMIST": "FMCG, Dairy & Consumer", "MOLBIO": "Healthcare & Pharma",
  "MTARTECH": "Aerospace & Defense", "NAM-INDIA": "Financial Tollbooths", "NEOGEN": "Specialty & Green Chemistry",
  "NETWEB": "AI Cooling, Data Center & IT", "NITTAGELA": "Specialty & Green Chemistry", "NSE": "Financial Tollbooths",
  "OSWALPUMPS": "Capital Goods & Power Grid", "PACEDIGITK": "Telecom & Fibre Optic", "PARAGMILK": "FMCG, Dairy & Consumer",
  "PARAS": "Aerospace & Defense", "PGIL": "Textiles & Apparel", "PRICOLLTD": "Auto Ancillary & EV",
  "QPOWER": "Capital Goods & Power Grid", "RAINBOW": "Healthcare & Pharma", "RAYMOND": "Aerospace & Defense",
  "ROSSTECH": "Aerospace & Defense", "RPEL": "Capital Goods & Power Grid", "RRKABEL": "Capital Goods & Power Grid",
  "SAILIFE": "Healthcare & Pharma", "SANSERA": "Aerospace & Defense", "SBCL": "Auto Ancillary & EV",
  "SEDEMAC": "Auto Ancillary & EV", "SETL": "Capital Goods & Power Grid", "SHILPAMED": "Healthcare & Pharma",
  "SHRIRAMFIN": "Financials & NBFC", "SIGMAADV": "Aerospace & Defense", "SJS": "Auto Ancillary & EV",
  "SKYGOLD": "Jewellery & Certification", "SONACOMS": "Auto Ancillary & EV", "SPICEJET": "Commodity Converters & Distressed",
  "SRF": "Specialty & Green Chemistry", "STALLION": "Specialty & Green Chemistry", "STEELCAS": "Capital Goods & Power Grid",
  "STLTECH": "Telecom & Fibre Optic", "SUDEEPPHRM": "Healthcare & Pharma", "SUPRIYA": "Healthcare & Pharma",
  "SUZLON": "Clean Energy & Renewables", "SYRMA": "EMS", "TANFACIND": "Specialty & Green Chemistry",
  "TARIL": "Capital Goods & Power Grid", "TDPOWERSYS": "Capital Goods & Power Grid", "TEMPSENS": "Capital Goods & Power Grid",
  "THYROCARE": "Healthcare & Pharma", "TIPSMUSIC": "Digital IP, Media & Consumer", "TRIVENIPT": "Capital Goods & Power Grid",
  "UNIMECH": "Aerospace & Defense", "UNOMINDA": "Auto Ancillary & EV", "VENUSPIPES": "Capital Goods & Power Grid",
  "VIKRAMTH": "Specialty & Green Chemistry", "VIMTALABS": "Healthcare & Pharma", "VISHNU": "Specialty & Green Chemistry",
  "WAAREEENER": "Clean Energy & Renewables", "WABAG": "Capital Goods & Power Grid", "WELCORP": "Capital Goods & Power Grid",
  "YATHARTH": "Healthcare & Pharma", "ZENTEC": "Aerospace & Defense", "ZYDUSLIFE": "Healthcare & Pharma"
};

function getCleanTicker(ticker) {
  return ticker.replace(/-(BE|SM|IL|BL|N1|N2)$/i, '');
}

function getActiveProfile() {
  return localStorage.getItem('ml_active_profile') || 'self';
}
function setActiveProfile(p) {
  localStorage.setItem('ml_active_profile', p || 'self');
}
function getActiveBroker() {
  return localStorage.getItem(`ml_broker_${getActiveProfile()}`) || localStorage.getItem('ml_active_broker') || 'kite';
}
function setActiveBroker(b) {
  const prof = getActiveProfile();
  localStorage.setItem(`ml_broker_${prof}`, b || 'kite');
  localStorage.setItem('ml_active_broker', b || 'kite');
}
function getCustomProfileLabel() {
  return localStorage.getItem('ml_custom_profile_label') || 'Other Profile';
}
function setCustomProfileLabel(lbl) {
  localStorage.setItem('ml_custom_profile_label', (lbl || '').trim() || 'Other Profile');
}
function scopedKey(baseKey, profile = null) {
  const p = profile || getActiveProfile();
  return `${baseKey}_${p}`;
}
function getSavedGarpScores() {
  const k = scopedKey('ml_garp_scores');
  const raw = localStorage.getItem(k);
  if (raw) {
    try { return JSON.parse(raw); } catch { return {}; }
  }
  const legacy = localStorage.getItem('ml_garp_scores');
  if (legacy) {
    try { return JSON.parse(legacy); } catch { return {}; }
  }
  return {};
}
function setSavedGarpScores(obj) {
  const k = scopedKey('ml_garp_scores');
  localStorage.setItem(k, JSON.stringify(obj));
}

const Store = {
  getApiKey: () => localStorage.getItem('ml_api_key') || '',
  setApiKey: (v) => localStorage.setItem('ml_api_key', v),
  getStocks: () => {
    const k = scopedKey('ml_stocks');
    const raw = localStorage.getItem(k) || (getActiveProfile() === 'self' ? localStorage.getItem('ml_stocks') : null);
    if (!raw) return getActiveProfile() === 'self' ? DEFAULT_STOCKS : [];
    try {
      const parsed = JSON.parse(raw);
      return parsed.map(s => [s[0], s[1] || s[0], s[2] || 'Watch', Number(s[3]) || 0, Number(s[4]) || 0]);
    } catch {
      return getActiveProfile() === 'self' ? DEFAULT_STOCKS : [];
    }
  },
  setStocks: (arr) => localStorage.setItem(scopedKey('ml_stocks'), JSON.stringify(arr)),
  getCache: () => {
    const k = scopedKey('ml_news_cache');
    const raw = localStorage.getItem(k) || (getActiveProfile() === 'self' ? localStorage.getItem('ml_news_cache') : null);
    if (!raw) return null;
    try { return JSON.parse(raw); } catch { return null; }
  },
  setCache: (obj) => localStorage.setItem(scopedKey('ml_news_cache'), JSON.stringify(obj)),
  getKiteApiKey: () => localStorage.getItem(scopedKey('ml_kite_api_key')) || localStorage.getItem('ml_kite_api_key') || '',
  setKiteApiKey: (v) => localStorage.setItem(scopedKey('ml_kite_api_key'), v),
};
const KITE_BACKEND_URL_KEY = 'ml_kite_backend_url';

let currentFilter = 'all';
let currentSentiment = 'all';
let currentSort = 'garp-desc'; 
let currentTrend = 'all';
let currentListQuery = '';
let isPrivacyMasked = localStorage.getItem('ml_privacy_mask') === 'true';
let newsData = null;
let currentAnalyticsMode = 'tier';
let currentChartStyle = localStorage.getItem('ml_chart_style') || 'bar';
let selectedSliceKey = null;
let lastFetchDiagnostics = { errorCount: 0, emptyCount: 0, totalCount: 0, lastError: null };
let activeGarpTicker = null;
let activeLookupState = null; 

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
  renderActiveProfileBadge();
  updateGarpAuditStatus();

  const cached = Store.getCache();
  if (cached && cached.results) {
    newsData = cached;
    renderContent();
    updateStatusBar();
  } else {
    renderPortfolioAnalytics();
  }

  const cuesBtn = $('#global-cues-btn');
  if (cuesBtn) cuesBtn.addEventListener('click', fetchAndRenderGlobalCues);

  const analyticsChip = $('#analytics-toggle-chip');
  if (analyticsChip) {
    analyticsChip.classList.remove('active');
    analyticsChip.addEventListener('click', () => {
      const isHidden = analyticsContainer.style.display === 'none';
      if (!isHidden) {
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

  const handleCardActionClick = (e) => {
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
      const fromLookup = activeLookupState && activeLookupState.displayTicker === ticker;
      const stockData = fromLookup
        ? activeLookupState
        : (newsData && newsData.results ? newsData.results.find(r => r.ticker === ticker) : null);
      const articles = stockData ? stockData.articles : [];
      fetchAndShowAIBriefing(ticker, company, articles, `ai-panel-entry-${ticker}`, aiBtn, tier);
      return;
    }
  };
  contentEl.addEventListener('click', handleCardActionClick);
  if (lookupResult) lookupResult.addEventListener('click', handleCardActionClick);

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

  const sortSelect = $('#sort-select');
  if (sortSelect) {
    sortSelect.value = currentSort;
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderContent();
    });
  }

  const FILTER_HINTS = {
    'strong-cash': '3-Yr Cumulative CFO / EBITDA ≥ 70% — High-quality earnings: most of the reported operating profit is converting into real cash in the bank.',
    'weak-cash': '3-Yr Cumulative CFO / EBITDA < 50% — Caution: profits may be stuck in unpaid receivables or inventory. Check if the company is also flagged 🏗️ Capex (temporary expansion) before judging.',
    'capex-heavy': 'Fixed Assets + CWIP ≥ 40% of Total Assets OR CWIP ≥ 15% of Fixed Assets — Capital-intensive or actively expanding plants. Trailing ROCE/cash may look temporarily depressed until new capacity ramps up.',
    'active-cwip': 'Capital Work in Progress (CWIP) ≥ 15% of Fixed Assets — New factories or lines are actively under construction right now. High future revenue trigger once commissioned, but watch debt and execution timelines.',
    'pledged-shares': 'Promoter Pledged / Mortgaged Shares ≥ 15% — Higher pledged promoter stake can create margin-call / forced-sale overhang during sharp market sell-offs.',
    'fresh': 'Showing only stocks with recent news headlines fetched from Google News.'
  };

  const filterSelect = $('#filter-select');
  if (filterSelect) {
    filterSelect.value = currentFilter;
    filterSelect.addEventListener('change', (e) => {
      currentFilter = e.target.value;
      const fHintEl = document.getElementById('filterHint');
      if (fHintEl) {
        if (FILTER_HINTS[currentFilter]) {
          fHintEl.textContent = FILTER_HINTS[currentFilter];
          fHintEl.style.display = 'block';
        } else {
          fHintEl.textContent = '';
          fHintEl.style.display = 'none';
        }
      }
      renderContent();
    });
  }

  const sentimentSelect = $('#sentiment-select');
  if (sentimentSelect) {
    sentimentSelect.value = currentSentiment;
    sentimentSelect.addEventListener('change', (e) => {
      currentSentiment = e.target.value;
      renderContent();
    });
  }

  const TREND_HINTS = {
    'actionable-buys': 'High-conviction GARP (≥ 75) & reasonable PEG (≤ 1.8) in a healthy pullback (< 50-DMA or near 200-DMA) without heavy institutional selling — Ready for Tranche 1 / Tranche 2 accumulation.',
    'actionable-exits': 'Weak fundamentals (GARP < 65) combined with a broken long-term trend (Below 200-DMA) — Review thesis and consider trimming or exiting on relief rallies.',
    'uptrend': 'Price is above 20D, 50D, and 200D — Institutional momentum is intact. Hold your position and let winners compound; avoid chasing if PEG is stretched.',
    'dip-buy': 'Price is below 50D but above 200D — Long-term trend is still healthy, but the stock is pulling back. If GARP ≥ 75, this is your sweet spot to accumulate on dips.',
    'below-200': 'Price is below 200D — Structural downtrend or prolonged weakness. Do not blindly average down; wait for it to reclaim the 200D or review if the fundamental thesis broke.'
  };

  document.querySelectorAll('.chip[data-trend]').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.chip[data-trend]').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentTrend = chip.dataset.trend;

      const hintEl = document.getElementById('trendHint');
      if (hintEl) {
        if (TREND_HINTS[currentTrend]) {
          hintEl.textContent = TREND_HINTS[currentTrend];
          hintEl.style.display = 'block';
        } else {
          hintEl.textContent = '';
          hintEl.style.display = 'none';
        }
      }

      renderContent();
    });
  });

  refreshBtn.addEventListener('click', fetchAllNews);
  const priceBtn = $('#price-refresh-btn');
  if (priceBtn) priceBtn.addEventListener('click', fetchLatestPrices);

  const listSearchInput = $('#holdings-list-search');
  const listSearchClear = $('#holdings-list-search-clear');
  if (listSearchInput) {
    listSearchInput.addEventListener('input', () => {
      currentListQuery = listSearchInput.value.trim();
      if (listSearchClear) {
        listSearchClear.classList.toggle('visible', currentListQuery.length > 0);
      }
      renderContent();
    });
    listSearchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        listSearchInput.value = '';
        currentListQuery = '';
        if (listSearchClear) listSearchClear.classList.remove('visible');
        renderContent();
      }
    });
  }
  if (listSearchClear) {
    listSearchClear.addEventListener('click', () => {
      if (listSearchInput) listSearchInput.value = '';
      currentListQuery = '';
      listSearchClear.classList.remove('visible');
      renderContent();
      if (listSearchInput) listSearchInput.focus();
    });
  }

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

  // Deep Slate-Teal Dark Mode locked permanently
  document.documentElement.setAttribute('data-theme', 'dark');
  localStorage.setItem('ml_theme', 'dark');
  const meta = document.getElementById('meta-theme-color');
  if (meta) meta.setAttribute('content', '#0B1615');

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

  const resetFiltersBtn = $('#reset-filters-btn');
  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener('click', () => {
      currentFilter = 'all';
      currentSentiment = 'all';
      currentTrend = 'all';
      currentListQuery = '';

      const fSel = $('#filter-select');
      if (fSel) fSel.value = 'all';
      const sSel = $('#sentiment-select');
      if (sSel) sSel.value = 'all';
      const lSearch = $('#holdings-list-search');
      if (lSearch) lSearch.value = '';
      const lClear = $('#holdings-list-search-clear');
      if (lClear) lClear.classList.remove('visible');

      document.querySelectorAll('.chip[data-trend]').forEach(c => {
        c.classList.toggle('active', c.dataset.trend === 'all');
      });
      document.querySelectorAll('.chip[data-filter]').forEach(c => {
        c.classList.toggle('active', c.dataset.filter === 'all');
      });
      document.querySelectorAll('.chip[data-sentiment]').forEach(c => {
        c.classList.toggle('active', c.dataset.sentiment === 'all');
      });

      const fHint = document.getElementById('filterHint');
      if (fHint) { fHint.textContent = ''; fHint.style.display = 'none'; }
      const tHint = document.getElementById('trendHint');
      if (tHint) { tHint.textContent = ''; tHint.style.display = 'none'; }

      renderContent();
      if (typeof renderPortfolioAnalytics === 'function') renderPortfolioAnalytics();
    });
  }

  const bulkGarpBtn = $('#bulk-garp-btn');
  if (bulkGarpBtn) bulkGarpBtn.addEventListener('click', runBulkGarpAudit);

  const profSelEl = $('#profile-select');
  if (profSelEl) {
    profSelEl.addEventListener('change', () => {
      const nextProf = profSelEl.value;
      setActiveProfile(nextProf);
      const customWrap = $('#custom-profile-name-wrap');
      if (customWrap) customWrap.style.display = nextProf === 'custom' ? 'block' : 'none';
      if ($('#broker-select')) $('#broker-select').value = getActiveBroker();
      syncBrokerButtonLabel();
      const pStocks = Store.getStocks();
      if ($('#stocklist-input')) {
        $('#stocklist-input').value = pStocks.map(s => (s[3] || s[4]) ? `${s[0]},${s[1]},${s[2]},${s[3]},${s[4]}` : `${s[0]},${s[1]},${s[2]}`).join('\n');
      }
      const pKey = Store.getKiteApiKey();
      if ($('#kite-api-key-input') && pKey) $('#kite-api-key-input').value = pKey;
      const pCache = Store.getCache();
      newsData = pCache && pCache.results ? pCache : null;
      renderContent();
      renderPortfolioAnalytics();
    });
  }
  const brokSelEl = $('#broker-select');
  if (brokSelEl) {
    brokSelEl.addEventListener('change', () => {
      setActiveBroker(brokSelEl.value);
      syncBrokerButtonLabel();
    });
  }
  const keyPresetEl = $('#api-key-preset-select');
  if (keyPresetEl) {
    keyPresetEl.addEventListener('change', () => {
      if (keyPresetEl.value !== 'custom' && $('#kite-api-key-input')) {
        $('#kite-api-key-input').value = keyPresetEl.value;
      }
    });
  }
  const keyInputEl = $('#kite-api-key-input');
  if (keyInputEl) {
    keyInputEl.addEventListener('input', () => {
      if (keyPresetEl) {
        const list = getSavedApiKeysList();
        const v = keyInputEl.value.trim();
        keyPresetEl.value = list.includes(v) ? v : 'custom';
      }
    });
  }

  pullDailyGlobalCuesOnce();

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
}

/* ==========================================================================
   PORTFOLIO PIE CHART, SEGREGATED P&L STATS & DRILLDOWN ENGINE
   ========================================================================== */
let isActionRadarMinimized = localStorage.getItem('ml_radar_minimized') === 'true';

function renderPortfolioAnalytics() {
  const analyticsEl = document.getElementById('portfolio-analytics-container');
  const radarEl = document.getElementById('action-radar-container');

  const stocks = Store.getStocks();
  if (!stocks || stocks.length === 0) {
    if (radarEl) radarEl.innerHTML = '';
    if (analyticsEl) {
      analyticsEl.innerHTML = `<div class="bento-card analytics-charts-card"><div class="quiet">No holdings loaded. Import or add stocks in Settings.</div></div>`;
    }
    return;
  }

  const savedScores = JSON.parse(localStorage.getItem('ml_garp_scores') || '{}');

  let totalInvested = 0;
  let totalCurrentVal = 0;

  const enriched = stocks.map(([ticker, company, originalTier, qty = 0, avgPrice = 0]) => {
    const cleanT = getCleanTicker(ticker);
    let tier = originalTier;

    if (CORE_COMPOUNDERS_SET.has(cleanT) || CORE_COMPOUNDERS_SET.has(ticker)) {
      tier = 'Compounders';
    } else if (savedScores[ticker] && savedScores[ticker].status) {
      const status = savedScores[ticker].status;
      if (status === 'ACCUMULATE_CORE') tier = 'Top30';
      else if (status === 'HOLD_SATELLITE') tier = 'Top31-50';
      else if (status === 'MONITOR_WATCHLIST') tier = 'Top51-75';
      else if (status === 'PRUNE_GTT_EXIT') tier = 'Watch';
    }

    const q = Number(qty) || 0;
    const avg = Number(avgPrice) || 0;
    const invested = q * avg;
    totalInvested += invested;
    const cachedEntry = newsData && newsData.results ? newsData.results.find(r => r.ticker === ticker || r.ticker === cleanT) : null;
    let ltp = cachedEntry && cachedEntry.quote && cachedEntry.quote.last_price != null ? cachedEntry.quote.last_price : avg;
    const currentVal = q > 0 ? (q * ltp) : 0;
    if (q > 0) totalCurrentVal += currentVal;

    const sector = SECTOR_MAP[cleanT] || SECTOR_MAP[ticker] || "Other";
    const pnl = currentVal - invested;
    const pnlPct = invested > 0 ? ((pnl / invested) * 100) : 0;

    return { ticker, company, tier, qty: q, avgPrice: avg, invested, currentVal, ltp, sector, pnl, pnlPct };
  });

  // Compute live Action Radar counts
  const radarSource = (newsData && newsData.results && newsData.results.length)
    ? newsData.results
    : stocks.map(([ticker, company, tier]) => ({ ticker, company, tier, quote: null }));

  let buysCount = 0;
  let exitsCount = 0;
  let weakCashCount = 0;
  let activeCwipCount = 0;
  let cachedFundCount = 0;

  radarSource.forEach(s => {
    const sig = getActionSignal(s, savedScores);
    if (sig && sig.type === 'buy') buysCount++;
    if (sig && sig.type === 'exit') exitsCount++;
    const f = getCachedFundamentals(getCleanTicker(s.ticker));
    if (f) {
      cachedFundCount++;
      if (f.cfo_to_ebitda != null && f.cfo_to_ebitda < 0.50) weakCashCount++;
      if (f.cwip_ratio != null && f.cwip_ratio >= 0.15) activeCwipCount++;
    }
  });

  // 1. Render Action Radar for Today (Open by default, minimizable)
  if (radarEl) {
    const urgentSellItems = [];
    const urgentBuyItems = [];
    radarSource.forEach(s => {
      const u = getNewsUrgentAction(s, savedScores);
      if (!u) return;
      if (u.action === 'sell') urgentSellItems.push(u);
      else if (u.action === 'buy') urgentBuyItems.push(u);
    });

    function renderUrgentChips(items, emptyMsg, expandId) {
      if (!items.length) {
        return `<span class="urgent-empty-note">${emptyMsg}</span>`;
      }
      const visibleCount = 8;
      const primary = items.slice(0, visibleCount);
      const remaining = items.slice(visibleCount);

      const primaryHtml = primary.map(item =>
        `<button type="button" class="urgent-stock-chip" data-urgent-ticker="${escapeHtml(item.ticker || '')}" title="${escapeHtml(item.reason)}">${escapeHtml(item.label)}</button>`
      ).join('');

      if (!remaining.length) return primaryHtml;

      const remainingHtml = remaining.map(item =>
        `<button type="button" class="urgent-stock-chip" data-urgent-ticker="${escapeHtml(item.ticker || '')}" title="${escapeHtml(item.reason)}">${escapeHtml(item.label)}</button>`
      ).join('');

      return `
        ${primaryHtml}
        <span id="${expandId}-extra" class="urgent-extra-chips" style="display:none;">${remainingHtml}</span>
        <button type="button" class="urgent-toggle-btn" data-expand-target="${expandId}-extra" data-count="${remaining.length}">+${remaining.length} more</button>
      `;
    }

    const sellChipsHtml = renderUrgentChips(urgentSellItems, 'No negative news shocks detected', 'urgent-sell');
    const buyChipsHtml = renderUrgentChips(urgentBuyItems, 'No fresh positive catalysts detected', 'urgent-buy');

    radarEl.innerHTML = `
      <div class="radar-section-card">
        <div class="radar-section-head">
          <span class="bento-eyebrow">Action Radar for Today</span>
          <div class="radar-section-right">
            <span style="font-size:11px; color:var(--ink-muted); font-weight:600;" title="Stocks with cached Screener fundamentals on this device">${cachedFundCount}/${radarSource.length} audited</span>
            <button type="button" class="radar-min-btn" id="btn-toggle-radar-min" aria-expanded="${!isActionRadarMinimized}">${isActionRadarMinimized ? '▾ Expand' : '▴ Minimize'}</button>
          </div>
        </div>
        <div class="radar-body" id="action-radar-body" style="display:${isActionRadarMinimized ? 'none' : 'block'};">
          <div id="movers-summary"></div>
          <div class="radar-grid">
            <div class="radar-tile radar-mint ${currentTrend === 'actionable-buys' ? 'active' : ''}" id="radar-buys" title="GARP ≥ 75, PEG ≤ 1.8 in healthy pullback or near 200-DMA">
              <div class="radar-num">${buysCount}</div>
              <div class="radar-lbl">💎 Buys</div>
            </div>
            <div class="radar-tile radar-rose ${currentTrend === 'actionable-exits' ? 'active' : ''}" id="radar-exits" title="GARP < 65 and trading below 200-DMA">
              <div class="radar-num">${exitsCount}</div>
              <div class="radar-lbl">✂️ Trim/Exits</div>
            </div>
            <div class="radar-tile radar-amber ${currentFilter === 'weak-cash' ? 'active' : ''}" id="radar-weak-cash" title="3-Yr Cumulative CFO / EBITDA < 50%">
              <div class="radar-num">${weakCashCount}</div>
              <div class="radar-lbl">⚠️ Weak Cash</div>
            </div>
            <div class="radar-tile radar-violet ${currentFilter === 'active-cwip' ? 'active' : ''}" id="radar-cwip" title="Capital Work in Progress (CWIP) ≥ 15% of Fixed Assets">
              <div class="radar-num">${activeCwipCount}</div>
              <div class="radar-lbl">🏭 Active CWIP</div>
            </div>
          </div>
          <div class="urgent-radar-stack">
            <div class="urgent-box urgent-sell">
              <div class="urgent-box-head">
                <span>🚨 Urgent Action - Sell/Trim</span>
                <span>${urgentSellItems.length}</span>
              </div>
              <div class="urgent-pill-list">${sellChipsHtml}</div>
            </div>
            <div class="urgent-box urgent-buy">
              <div class="urgent-box-head">
                <span>🟢 Urgent Action - Buy</span>
                <span>${urgentBuyItems.length}</span>
              </div>
              <div class="urgent-pill-list">${buyChipsHtml}</div>
            </div>
          </div>
        </div>
      </div>
    `;

    renderMoversSummary();
    const minBtn = document.getElementById('btn-toggle-radar-min');
    if (minBtn) {
      minBtn.addEventListener('click', () => {
        isActionRadarMinimized = !isActionRadarMinimized;
        localStorage.setItem('ml_radar_minimized', isActionRadarMinimized ? 'true' : 'false');
        renderPortfolioAnalytics();
      });
    }

    const triggerTrend = (trendKey) => {
      const next = currentTrend === trendKey ? 'all' : trendKey;
      const chip = document.querySelector(`.chip[data-trend="${next}"]`);
      if (chip) chip.click();
      renderPortfolioAnalytics();
    };
    const triggerHoldingFilter = (filterKey) => {
      const next = currentFilter === filterKey ? 'all' : filterKey;
      const sel = document.getElementById('filter-select');
      if (sel) {
        sel.value = next;
        sel.dispatchEvent(new Event('change'));
      }
      renderPortfolioAnalytics();
    };

    const rBuys = document.getElementById('radar-buys');
    if (rBuys) rBuys.addEventListener('click', () => triggerTrend('actionable-buys'));
    const rExits = document.getElementById('radar-exits');
    if (rExits) rExits.addEventListener('click', () => triggerTrend('actionable-exits'));
    const rWeak = document.getElementById('radar-weak-cash');
    if (rWeak) rWeak.addEventListener('click', () => triggerHoldingFilter('weak-cash'));
    const rCwip = document.getElementById('radar-cwip');
    if (rCwip) rCwip.addEventListener('click', () => triggerHoldingFilter('active-cwip'));

    radarEl.querySelectorAll('[data-expand-target]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const targetId = btn.dataset.expandTarget;
        const count = btn.dataset.count;
        const extraEl = document.getElementById(targetId);
        if (!extraEl) return;
        const isHidden = extraEl.style.display === 'none';
        extraEl.style.display = isHidden ? 'contents' : 'none';
        btn.textContent = isHidden ? 'Show less' : `+${count} more`;
        btn.classList.toggle('expanded', isHidden);
      });
    });

    radarEl.querySelectorAll('[data-urgent-ticker]').forEach(btn => {
      btn.addEventListener('click', () => {
        const t = (btn.dataset.urgentTicker || '').trim();
        if (!t) return;
        const match = stocks.find(([sym]) => sym.toUpperCase() === t.toUpperCase());
        runSingleStockLookup(t, match ? match[1] : t, true);
        if (lookupResult) lookupResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });
    });
  }

  // 2. Render Portfolio Analysis Charts (Closed by default, opens when toggled)
  if (!analyticsEl || analyticsEl.style.display === 'none') return;

  const totalPnL = totalCurrentVal - totalInvested;
  const totalPnLPct = totalInvested > 0 ? ((totalPnL / totalInvested) * 100).toFixed(2) : '0.00';
  const pnlClass = totalPnL >= 0 ? 'pos' : 'neg';
  const pnlSign = totalPnL >= 0 ? '+' : '';

  let slices = [];
  const denominator = totalCurrentVal > 0 ? totalCurrentVal : (totalInvested > 0 ? totalInvested : 1);

  if (currentAnalyticsMode === 'tier') {
    const tierMap = {
      "Compounders": { name: "Compounders", val: 0, inv: 0, count: 0, color: TIER_COLORS["Compounders"], items: [] },
      "Top30":       { name: "Accumulate",  val: 0, inv: 0, count: 0, color: TIER_COLORS["Top30"], items: [] },
      "Top31-50":    { name: "Hold",        val: 0, inv: 0, count: 0, color: TIER_COLORS["Top31-50"], items: [] },
      "Top51-75":    { name: "Trim",        val: 0, inv: 0, count: 0, color: TIER_COLORS["Top51-75"], items: [] },
      "Watch":       { name: "Exit",        val: 0, inv: 0, count: 0, color: TIER_COLORS["Watch"], items: [] },
    };

    enriched.forEach(item => {
      const t = tierMap[item.tier] ? item.tier : 'Watch';
      const weightVal = totalCurrentVal > 0 ? (item.currentVal || item.invested) : item.invested;
      tierMap[t].val += weightVal;
      tierMap[t].inv += item.invested;
      tierMap[t].count += 1;
      tierMap[t].items.push(item);
    });

    slices = Object.keys(tierMap).map(k => {
      const pnl = tierMap[k].val - tierMap[k].inv;
      const pnlPct = tierMap[k].inv > 0 ? (pnl / tierMap[k].inv) * 100 : 0;
      const pnlContribution = totalPnL !== 0 ? (pnl / totalPnL) * 100 : 0;
      return {
        key: k, name: tierMap[k].name, val: tierMap[k].val, inv: tierMap[k].inv,
        pnl, pnlPct, pnlContribution, count: tierMap[k].count,
        pct: (tierMap[k].val / denominator) * 100, color: tierMap[k].color, items: tierMap[k].items
      };
    }).filter(s => s.val > 0 || s.count > 0);

  } else if (currentAnalyticsMode === 'sector') {
    const secMap = {};
    enriched.forEach(item => {
      const s = item.sector;
      if (!secMap[s]) {
        secMap[s] = { name: s, val: 0, inv: 0, count: 0, color: SECTOR_COLORS[s] || "#64748B", items: [] };
      }
      const weightVal = totalCurrentVal > 0 ? (item.currentVal || item.invested) : item.invested;
      secMap[s].val += weightVal;
      secMap[s].inv += item.invested;
      secMap[s].count += 1;
      secMap[s].items.push(item);
    });

    slices = Object.keys(secMap).map(k => {
      const pnl = secMap[k].val - secMap[k].inv;
      const pnlPct = secMap[k].inv > 0 ? (pnl / secMap[k].inv) * 100 : 0;
      const pnlContribution = totalPnL !== 0 ? (pnl / totalPnL) * 100 : 0;
      return {
        key: k, name: secMap[k].name, val: secMap[k].val, inv: secMap[k].inv,
        pnl, pnlPct, pnlContribution, count: secMap[k].count,
        pct: (secMap[k].val / denominator) * 100, color: secMap[k].color, items: secMap[k].items
      };
    }).sort((a, b) => b.val - a.val);

  } else if (currentAnalyticsMode === 'top50') {
    const sorted = [...enriched].sort((a, b) => (b.currentVal || b.invested) - (a.currentVal || a.invested));
    const top50 = sorted.slice(0, 50);
    const rest = sorted.slice(50);

    const top50Val = top50.reduce((acc, r) => acc + (r.currentVal || r.invested), 0);
    const top50Inv = top50.reduce((acc, r) => acc + r.invested, 0);
    const top50Pnl = top50Val - top50Inv;
    const top50PnlPct = top50Inv > 0 ? (top50Pnl / top50Inv) * 100 : 0;

    const restVal = rest.reduce((acc, r) => acc + (r.currentVal || r.invested), 0);
    const restInv = rest.reduce((acc, r) => acc + r.invested, 0);
    const restPnl = restVal - restInv;
    const restPnlPct = restInv > 0 ? (restPnl / restInv) * 100 : 0;

    slices = [
      {
        key: "Top50", name: "Top 50 Holdings", val: top50Val, inv: top50Inv,
        pnl: top50Pnl, pnlPct: top50PnlPct, pnlContribution: totalPnL !== 0 ? (top50Pnl / totalPnL) * 100 : 0,
        count: top50.length, pct: (top50Val / denominator) * 100, color: "#0F766E", items: top50
      },
      {
        key: "Rest", name: `Remaining (${rest.length})`, val: restVal, inv: restInv,
        pnl: restPnl, pnlPct: restPnlPct, pnlContribution: totalPnL !== 0 ? (restPnl / totalPnL) * 100 : 0,
        count: rest.length, pct: (restVal / denominator) * 100, color: "#CBD5E1", items: rest
      }
    ];

  } else if (currentAnalyticsMode === 'top20gainers') {
    const sorted = [...enriched].sort((a, b) => b.pnlPct - a.pnlPct);
    const top20 = sorted.slice(0, 20);
    const rest = sorted.slice(20);

    const topVal = top20.reduce((acc, r) => acc + (r.currentVal || r.invested), 0);
    const topInv = top20.reduce((acc, r) => acc + r.invested, 0);
    const topPnl = topVal - topInv;
    const topPnlPct = topInv > 0 ? (topPnl / topInv) * 100 : 0;

    const restVal = rest.reduce((acc, r) => acc + (r.currentVal || r.invested), 0);
    const restInv = rest.reduce((acc, r) => acc + r.invested, 0);
    const restPnl = restVal - restInv;
    const restPnlPct = restInv > 0 ? (restPnl / restInv) * 100 : 0;

    slices = [
      {
        key: "Top20Gainers", name: "Top 20 Gainers", val: topVal, inv: topInv,
        pnl: topPnl, pnlPct: topPnlPct, pnlContribution: totalPnL !== 0 ? (topPnl / totalPnL) * 100 : 0,
        count: top20.length, pct: (topVal / denominator) * 100, color: "#059669", items: top20
      },
      {
        key: "Rest", name: `Remaining (${rest.length})`, val: restVal, inv: restInv,
        pnl: restPnl, pnlPct: restPnlPct, pnlContribution: totalPnL !== 0 ? (restPnl / totalPnL) * 100 : 0,
        count: rest.length, pct: (restVal / denominator) * 100, color: "#CBD5E1", items: rest
      }
    ];

  } else if (currentAnalyticsMode === 'top20losers') {
    const sorted = [...enriched].sort((a, b) => a.pnlPct - b.pnlPct);
    const bot20 = sorted.slice(0, 20);
    const rest = sorted.slice(20);

    const botVal = bot20.reduce((acc, r) => acc + (r.currentVal || r.invested), 0);
    const botInv = bot20.reduce((acc, r) => acc + r.invested, 0);
    const botPnl = botVal - botInv;
    const botPnlPct = botInv > 0 ? (botPnl / botInv) * 100 : 0;

    const restVal = rest.reduce((acc, r) => acc + (r.currentVal || r.invested), 0);
    const restInv = rest.reduce((acc, r) => acc + r.invested, 0);
    const restPnl = restVal - restInv;
    const restPnlPct = restInv > 0 ? (restPnl / restInv) * 100 : 0;

    slices = [
      {
        key: "Top20Losers", name: "Top 20 Losers", val: botVal, inv: botInv,
        pnl: botPnl, pnlPct: botPnlPct, pnlContribution: totalPnL !== 0 ? (botPnl / totalPnL) * 100 : 0,
        count: bot20.length, pct: (botVal / denominator) * 100, color: "#E11D48", items: bot20
      },
      {
        key: "Rest", name: `Remaining (${rest.length})`, val: restVal, inv: restInv,
        pnl: restPnl, pnlPct: restPnlPct, pnlContribution: totalPnL !== 0 ? (restPnl / totalPnL) * 100 : 0,
        count: rest.length, pct: (restVal / denominator) * 100, color: "#CBD5E1", items: rest
      }
    ];

  } else if (currentAnalyticsMode === 'sub12') {
    const sub12 = enriched.filter(i => savedScores[i.ticker] && savedScores[i.ticker].isSub12 === true);
    const above12 = enriched.filter(i => !savedScores[i.ticker] || savedScores[i.ticker].isSub12 !== true);

    const subVal = sub12.reduce((acc, r) => acc + (r.currentVal || r.invested), 0);
    const subInv = sub12.reduce((acc, r) => acc + r.invested, 0);
    const subPnl = subVal - subInv;
    const subPnlPct = subInv > 0 ? (subPnl / subInv) * 100 : 0;

    const aboveVal = above12.reduce((acc, r) => acc + (r.currentVal || r.invested), 0);
    const aboveInv = above12.reduce((acc, r) => acc + r.invested, 0);
    const abovePnl = aboveVal - aboveInv;
    const abovePnlPct = aboveInv > 0 ? (abovePnl / aboveInv) * 100 : 0;

    slices = [
      {
        key: "Sub12", name: "Sub-12% Laggards", val: subVal, inv: subInv,
        pnl: subPnl, pnlPct: subPnlPct, pnlContribution: totalPnL !== 0 ? (subPnl / totalPnL) * 100 : 0,
        count: sub12.length, pct: (subVal / denominator) * 100, color: "#E11D48", items: sub12
      },
      {
        key: "Above12", name: "Normal/High Growth", val: aboveVal, inv: aboveInv,
        pnl: abovePnl, pnlPct: abovePnlPct, pnlContribution: totalPnL !== 0 ? (abovePnl / totalPnL) * 100 : 0,
        count: above12.length, pct: (aboveVal / denominator) * 100, color: "#0F766E", items: above12
      }
    ];

  } else if (currentAnalyticsMode === 'super18') {
    const super18 = enriched.filter(i => savedScores[i.ticker] && savedScores[i.ticker].isSuper18 === true);
    const rest = enriched.filter(i => !savedScores[i.ticker] || savedScores[i.ticker].isSuper18 !== true);

    const supVal = super18.reduce((acc, r) => acc + (r.currentVal || r.invested), 0);
    const supInv = super18.reduce((acc, r) => acc + r.invested, 0);
    const supPnl = supVal - supInv;
    const supPnlPct = supInv > 0 ? (supPnl / supInv) * 100 : 0;

    const restVal = rest.reduce((acc, r) => acc + (r.currentVal || r.invested), 0);
    const restInv = rest.reduce((acc, r) => acc + r.invested, 0);
    const restPnl = restVal - restInv;
    const restPnlPct = restInv > 0 ? (restPnl / restInv) * 100 : 0;

    slices = [
      {
        key: "Super18", name: "Super Growth (>18%)", val: supVal, inv: supInv,
        pnl: supPnl, pnlPct: supPnlPct, pnlContribution: totalPnL !== 0 ? (supPnl / totalPnL) * 100 : 0,
        count: super18.length, pct: (supVal / denominator) * 100, color: "#059669", items: super18
      },
      {
        key: "Rest", name: `Other Holdings (${rest.length})`, val: restVal, inv: restInv,
        pnl: restPnl, pnlPct: restPnlPct, pnlContribution: totalPnL !== 0 ? (restPnl / totalPnL) * 100 : 0,
        count: rest.length, pct: (restVal / denominator) * 100, color: "#CBD5E1", items: rest
      }
    ];
  }

  let allocationVisualHtml = '';
  if (currentChartStyle === 'bar') {
    const segsHtml = slices
      .filter(s => s.pct > 0)
      .map(s => `<div class="stacked-seg" data-slice-key="${escapeHtml(s.key)}" style="width:${Math.max(s.pct, 1.5).toFixed(2)}%; background:${s.color};" title="${escapeHtml(s.name)}: ₹${Math.round(s.val).toLocaleString('en-IN')} (${s.pct.toFixed(1)}%) — Tap to drill down"></div>`)
      .join('');

    const pillsHtml = slices.map(s => `
      <div class="bar-legend-pill" data-slice-key="${escapeHtml(s.key)}">
        <span class="legend-swatch" style="background:${s.color}"></span>
        <strong style="color:var(--ink);">${escapeHtml(s.name)}</strong>
        <span style="font-family:'SF Mono',monospace; font-weight:700; color:var(--teal);">${s.pct.toFixed(1)}%</span>
        <span style="color:var(--ink-muted); font-size:10.5px;">(${s.count})</span>
      </div>
    `).join('');

    allocationVisualHtml = `
      <div class="stacked-bar-track">${segsHtml}</div>
      <div class="bar-legend-pills">${pillsHtml}</div>
    `;
  } else {
    const svgSize = 176;
    const strokeWidth = 28;
    const radius = (svgSize - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    let accumulatedOffset = 0;

    const circlesHtml = slices.map((slice) => {
      const strokeDash = (slice.pct / 100) * circumference;
      const strokeOffset = -accumulatedOffset;
      accumulatedOffset += strokeDash;

      return `<circle cx="88" cy="88" r="${radius}" fill="transparent"
        stroke="${slice.color}" stroke-width="${strokeWidth}"
        stroke-dasharray="${strokeDash} ${circumference}"
        stroke-dashoffset="${strokeOffset}"
        data-slice-key="${escapeHtml(slice.key)}"
        style="transition: stroke-dasharray 0.45s ease; cursor: pointer;">
        <title>${escapeHtml(slice.name)}: ₹${Math.round(slice.val).toLocaleString('en-IN')} (${slice.pct.toFixed(1)}%) — Tap to reveal stocks</title>
      </circle>`;
    }).join('');

    const legendHtml = slices.map(slice => `
      <div class="legend-row" data-slice-key="${escapeHtml(slice.key)}">
        <div class="legend-left">
          <span class="legend-swatch" style="background: ${slice.color}"></span>
          <div>
            <span class="legend-name">${escapeHtml(slice.name)}</span>
            <span class="legend-count">${slice.count ? ` · ${slice.count}` : ''}</span>
          </div>
        </div>
        <div class="legend-right">
          <span class="legend-amt">₹${Math.round(slice.val).toLocaleString('en-IN')}</span>
          <span>${slice.pct.toFixed(1)}%</span>
        </div>
      </div>
    `).join('');

    allocationVisualHtml = `
      <div class="chart-flex-wrap">
        <div class="pie-svg-container">
          <svg viewBox="0 0 176 176">${circlesHtml}</svg>
          <div class="pie-center-hole">
            <span class="pie-center-lbl">Stocks</span>
            <span class="pie-center-val">${stocks.length}</span>
          </div>
        </div>
        <div class="chart-legend">${legendHtml}</div>
      </div>
    `;
  }

  const pnlCardsHtml = slices.map(slice => {
    const isPos = slice.pnl >= 0;
    const sign = isPos ? '+' : '';
    const colorClass = isPos ? 'price-up' : 'price-down';

    return `
      <div class="pnl-stat-card" data-slice-key="${escapeHtml(slice.key)}">
        <div class="pnl-card-title">
          <span class="legend-swatch" style="background: ${slice.color}"></span>
          <span>${escapeHtml(slice.name)} <span style="font-weight:600; color:var(--ink-muted); font-size:11px;">(${slice.count || 0})</span></span>
        </div>
        <div class="pnl-card-metrics">
          <div class="pnl-card-val ${colorClass}">
            ${isPrivacyMasked ? '±₹00,000' : `${sign}₹${Math.abs(Math.round(slice.pnl)).toLocaleString('en-IN')}`}
          </div>
          <div class="pnl-card-sub ${colorClass}">
            ${isPrivacyMasked ? '0.0%' : `${sign}${slice.pnlPct.toFixed(1)}%`}
          </div>
        </div>
        <div style="display:flex; justify-content:space-between; font-size:10px; color:var(--ink-muted); margin-top:4px; border-top:1px dotted var(--border); padding-top:4px;">
          <span>P&amp;L: <strong>${slice.pnlContribution ? slice.pnlContribution.toFixed(1) : '0.0'}%</strong></span>
          <span>Wt: <strong>${slice.pct.toFixed(1)}%</strong></span>
        </div>
      </div>
    `;
  }).join('');

  analyticsEl.innerHTML = `
    <div class="bento-card hero-card analytics-charts-card">
      <div class="bento-card-head">
        <span class="bento-eyebrow">Portfolio Allocation &amp; P&amp;L</span>
        <div style="display:flex; align-items:center; gap:6px;">
          <button class="style-switch-btn ${isPrivacyMasked ? 'active' : ''}" id="btn-privacy-toggle" title="${isPrivacyMasked ? 'Show portfolio amounts' : 'Hide amounts (mask in zeroes)'}">
            ${isPrivacyMasked ? '🔒 Masked' : '👁️ Hide ₹'}
          </button>
          <div class="chart-style-switch" role="group" aria-label="Chart display style">
            <button class="style-switch-btn ${currentChartStyle === 'bar' ? 'active' : ''}" id="btn-style-bar">▬ Bar</button>
            <button class="style-switch-btn ${currentChartStyle === 'pie' ? 'active' : ''}" id="btn-style-pie">◔ Pie</button>
          </div>
          <button type="button" class="radar-min-btn" id="btn-close-analytics-charts">✕ Hide</button>
        </div>
      </div>

      <div class="hero-kpi-row">
        <div>
          <div class="hero-val-lbl">Portfolio Value</div>
          <div class="hero-val-main">${maskAmt(totalCurrentVal)}</div>
        </div>
        <div class="hero-sub-metrics">
          <div>
            <div class="hero-val-lbl">Total Invested</div>
            <div class="hero-sub-val">${maskAmt(totalInvested)}</div>
          </div>
          <div>
            <div class="hero-val-lbl">Overall P&amp;L</div>
            <div class="pnl-hero-pill ${pnlClass}">${isPrivacyMasked ? '±₹0,00,000 (0.00%)' : `${pnlSign}₹${Math.abs(Math.round(totalPnL)).toLocaleString('en-IN')} (${pnlSign}${totalPnLPct}%)`}</div>
          </div>
        </div>
      </div>

      <div class="analytics-toggle-group">
        <button class="chart-toggle-btn ${currentAnalyticsMode === 'tier' ? 'active' : ''}" id="btn-chart-tier">By Tier</button>
        <button class="chart-toggle-btn ${currentAnalyticsMode === 'sector' ? 'active' : ''}" id="btn-chart-sector">By Sector</button>
        <button class="chart-toggle-btn ${currentAnalyticsMode === 'top50' ? 'active' : ''}" id="btn-chart-top50">Top 50</button>
        <button class="chart-toggle-btn ${currentAnalyticsMode === 'top20gainers' ? 'active' : ''}" id="btn-chart-top20gainers">Top 20 Gainers</button>
        <button class="chart-toggle-btn ${currentAnalyticsMode === 'top20losers' ? 'active' : ''}" id="btn-chart-top20losers">Top 20 Losers</button>
        <button class="chart-toggle-btn ${currentAnalyticsMode === 'sub12' ? 'active' : ''}" id="btn-chart-sub12">Sub-12% Growth</button>
        <button class="chart-toggle-btn ${currentAnalyticsMode === 'super18' ? 'active' : ''}" id="btn-chart-super18">Super &gt;18%</button>
      </div>

      ${allocationVisualHtml}

      <details class="pnl-breakdown-details" open>
        <summary>📊 Segregated P&amp;L Contribution (tap any slice to inspect stocks)</summary>
        <div class="pnl-stats-grid">${pnlCardsHtml}</div>
      </details>
    </div>
  `;

  const closeChartsBtn = document.getElementById('btn-close-analytics-charts');
  if (closeChartsBtn) {
    closeChartsBtn.addEventListener('click', () => {
      analyticsEl.style.display = 'none';
      if (drilldownContainer) drilldownContainer.style.display = 'none';
      const chip = document.getElementById('analytics-toggle-chip');
      if (chip) chip.classList.remove('active');
    });
  }

  const btnBar = document.getElementById('btn-style-bar');
  const btnPie = document.getElementById('btn-style-pie');
  if (btnBar) btnBar.addEventListener('click', () => {
    currentChartStyle = 'bar';
    localStorage.setItem('ml_chart_style', 'bar');
    renderPortfolioAnalytics();
  });
  if (btnPie) btnPie.addEventListener('click', () => {
    currentChartStyle = 'pie';
    localStorage.setItem('ml_chart_style', 'pie');
    renderPortfolioAnalytics();
  });

  const btnPrivacy = document.getElementById('btn-privacy-toggle');
  if (btnPrivacy) btnPrivacy.addEventListener('click', () => {
    isPrivacyMasked = !isPrivacyMasked;
    localStorage.setItem('ml_privacy_mask', isPrivacyMasked ? 'true' : 'false');
    renderPortfolioAnalytics();
  });

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
  bindMode('btn-chart-top20gainers', 'top20gainers');
  bindMode('btn-chart-top20losers', 'top20losers');
  bindMode('btn-chart-sub12', 'sub12');
  bindMode('btn-chart-super18', 'super18');

  const handleSliceClick = (key) => {
    const foundSlice = slices.find(s => s.key === key);
    if (!foundSlice) return;
    renderDrilldownTable(foundSlice);
  };
  analyticsEl.querySelectorAll('[data-slice-key]').forEach(el => {
    el.addEventListener('click', () => handleSliceClick(el.dataset.sliceKey));
  });

  if (selectedSliceKey) {
    const currentSlice = slices.find(s => s.key === selectedSliceKey);
    if (currentSlice) renderDrilldownTable(currentSlice);
  }
}

function renderDrilldownTable(slice) {
  selectedSliceKey = slice.key;
  if (!drilldownContainer) return;

  const sortedItems = [...(slice.items || [])].sort((a, b) => (b.currentVal || b.invested) - (a.currentVal || a.invested));
  const savedScores = JSON.parse(localStorage.getItem('ml_garp_scores') || '{}');

  const rowsHtml = sortedItems.map((item) => {
    const pnlSign = item.pnl >= 0 ? '+' : '';
    const pnlClass = item.pnl >= 0 ? 'price-up' : 'price-down';

    const cleanT = getCleanTicker(item.ticker);
    const scoreData = savedScores[item.ticker] || savedScores[cleanT];
    const scoreVal = scoreData ? scoreData.score : null;

    let scoreColor = 'var(--ink-muted)';
    let scoreBg = 'var(--surface-soft)';
    let scoreBorder = 'var(--border)';
    if (scoreVal != null) {
      if (scoreVal >= 75) { scoreColor = 'var(--emerald)'; scoreBg = 'var(--emerald-bg)'; scoreBorder = 'var(--emerald-border)'; }
      else if (scoreVal >= 60) { scoreColor = 'var(--amber)'; scoreBg = 'var(--amber-bg)'; scoreBorder = 'var(--amber-border)'; }
      else { scoreColor = 'var(--rose)'; scoreBg = 'var(--rose-bg)'; scoreBorder = 'var(--rose-border)'; }
    }

    const garpBadge = scoreVal != null
      ? `<span style="font-family:'SF Mono',monospace; font-weight:800; font-size:11px; padding:2px 7px; border-radius:6px; background:${scoreBg}; color:${scoreColor}; border:1px solid ${scoreBorder};">${scoreVal}</span>`
      : `<span style="color:var(--ink-muted); font-size:11px;">—</span>`;

    return `
      <tr style="border-bottom: 1px solid var(--rule); font-size: 12px;">
        <td style="padding: 8px 6px; font-weight: 700;">
          <span style="font-family:'SF Mono',monospace; color:var(--ink);">${escapeHtml(item.ticker)}</span>
          <div style="font-size: 11px; font-weight: 400; color:var(--ink-soft); font-family: -apple-system, sans-serif;">${escapeHtml(item.company)}</div>
        </td>
        <td style="padding: 8px 6px; font-family:'SF Mono',monospace; text-align: center;">${item.qty}</td>
        <td style="padding: 8px 6px; text-align: center;">${garpBadge}</td>
        <td style="padding: 8px 6px; font-family:'SF Mono',monospace; text-align: right;">${isPrivacyMasked ? '₹00.0' : (item.avgPrice ? `₹${item.avgPrice.toFixed(1)}` : '—')}</td>
        <td style="padding: 8px 6px; font-family:'SF Mono',monospace; text-align: right; font-weight: 700;">${isPrivacyMasked ? '₹00,000' : `₹${Math.round(item.currentVal || item.invested).toLocaleString('en-IN')}`}</td>
        <td style="padding: 8px 6px; font-family:'SF Mono',monospace; text-align: right;" class="${pnlClass}">
          ${isPrivacyMasked ? '±₹00,000 (0.00%)' : `${pnlSign}₹${Math.abs(Math.round(item.pnl)).toLocaleString('en-IN')} (${pnlSign}${item.pnlPct.toFixed(1)}%)`}
        </td>
        <td style="padding: 8px 6px; font-family:'SF Mono',monospace; text-align: right; font-weight: 700;">₹${item.ltp ? item.ltp.toFixed(1) : '—'}</td>
        <td style="padding: 8px 6px; color:var(--ink-soft); font-size: 11px;">${escapeHtml(item.sector)}</td>
      </tr>
    `;
  }).join('');

  const isPos = slice.pnl >= 0;
  const pnlSign = isPos ? '+' : '';
  const pnlClass = isPos ? 'price-up' : 'price-down';

  drilldownContainer.style.display = 'block';
  drilldownContainer.innerHTML = `
    <div style="background: var(--paper); border: 2px solid ${slice.color}; border-radius: 12px; padding: 16px; box-shadow: 0 4px 14px rgba(0,0,0,0.06);">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; border-bottom: 1px solid var(--rule); padding-bottom: 8px;">
        <div>
          <span style="display:inline-block; width:12px; height:12px; border-radius:3px; background:${slice.color}; margin-right:6px;"></span>
          <strong style="font-size: 14px; text-transform: uppercase;">${escapeHtml(slice.name)} (${slice.count} Stocks)</strong>
          <span style="font-size: 12px; margin-left: 8px;" class="${pnlClass}">
            ${pnlSign}₹${Math.abs(Math.round(slice.pnl)).toLocaleString('en-IN')} (${pnlSign}${slice.pnlPct.toFixed(1)}%)
          </span>
        </div>
        <button id="close-drilldown-btn" style="background:none; border:none; font-size:12px; font-weight:700; color:var(--ink-soft); cursor:pointer;">✕ Close</button>
      </div>
      <div style="overflow-x: auto; -webkit-overflow-scrolling: touch;">
        <table style="width: 100%; border-collapse: collapse; text-align: left;">
          <thead>
            <tr style="border-bottom: 2px solid var(--rule-strong); font-size: 10.5px; text-transform: uppercase; color: var(--ink-soft); letter-spacing: 0.5px;">
              <th style="padding: 6px;">Stock</th>
              <th style="padding: 6px; text-align: center;">Qty</th>
              <th style="padding: 6px; text-align: center;">GARP</th>
              <th style="padding: 6px; text-align: right;">Avg Buy</th>
              <th style="padding: 6px; text-align: right;">Current Value</th>
              <th style="padding: 6px; text-align: right;">P&amp;L</th>
              <th style="padding: 6px; text-align: right;">LTP</th>
              <th style="padding: 6px;">Sector Niche</th>
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

  drilldownContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/* ==========================================================================
   PART 2: DATA FETCHING, QUOTES, SETTINGS & DOM RENDERING PIPELINE
   ========================================================================== */

function maskAmt(num, isSigned = false) {
  if (isPrivacyMasked) {
    return isSigned ? '±₹0,00,000' : '₹0,00,000';
  }
  const rounded = Math.round(Number(num) || 0);
  const formatted = Math.abs(rounded).toLocaleString('en-IN');
  if (isSigned) {
    const s = rounded >= 0 ? '+' : '-';
    return `${s}₹${formatted}`;
  }
  return `₹${formatted}`;
}

function fmtRatio(v, suffix) {
  if (v == null) return '—';
  return `${Number(v).toFixed(2)}${suffix || ''}`;
}

function fmtPct(v) {
  if (v == null) return '—';
  return `${(Number(v) * 100).toFixed(1)}%`;
}

function getPromoterPledgePct(f) {
  if (!f || typeof f !== 'object') return null;
  const candidates = [
    f.promoter_pledge_pct,
    f.promoterPledgePct,
    f.pledged_pct,
    f.pledgedPct,
    f.pledge_percentage,
    f.pledged_shares_pct,
    f.pledgedSharesPct,
    f.promoter_pledge,
    f.pledged_shares
  ];
  for (const val of candidates) {
    if (val == null || val === '') continue;
    const cleaned = String(val).replace(/%/g, '').trim();
    const num = Number(cleaned);
    if (!Number.isNaN(num) && Number.isFinite(num) && num >= 0) {
      // Normalize decimal ratios like 0.15 into percentage 15.0 if clearly a fraction (< 1 and not a raw share count)
      if (num > 0 && num < 1 && (val === f.promoter_pledge_pct || val === f.pledged_pct || val === f.pledge_percentage || val === f.pledged_shares_pct)) {
        return num * 100;
      }
      return num;
    }
  }
  return null;
}

function renderFundamentalsPanel(f) {
  const peg = f.pegRatio != null ? f.pegRatio : f.peg_ratio;
  const debtMetric = f.debt_ratio != null ? f.debt_ratio : (f.debt_to_equity != null ? (f.debt_to_equity / 100) : null);

  let cfoValHtml = '—';
  if (f.cfo_to_ebitda != null) {
    const pct = Math.round(Number(f.cfo_to_ebitda) * 100);
    const cColor = pct >= 70 ? 'var(--emerald)' : (pct >= 50 ? 'var(--amber)' : 'var(--rose)');
    const warn = pct < 50 ? ' ⚠️' : '';
    cfoValHtml = `<span style="color:${cColor}; font-weight:700;">${pct}%${warn}</span>`;
  }

  let capexValHtml = '—';
  if (f.fixed_asset_ratio != null) {
    const faPct = Math.round(Number(f.fixed_asset_ratio) * 100);
    const cwipTxt = f.cwip_ratio != null ? ` · CWIP ${Math.round(Number(f.cwip_ratio) * 100)}%` : '';
    const tag = f.is_capex_heavy ? ' 🏗️' : '';
    capexValHtml = `FA ${faPct}%${cwipTxt}${tag}`;
  }

  return `<div class="fundamentals-panel">
    <div class="fund-row"><span class="fund-label">P/E (trailing)</span><span class="fund-val">${fmtRatio(f.trailing_pe)}</span></div>
    <div class="fund-row"><span class="fund-label">PEG <span class="fund-caveat" title="P/E ÷ 3Y Growth">calc</span></span><span class="fund-val">${fmtRatio(peg)}</span></div>
    <div class="fund-row"><span class="fund-label">Price / Book</span><span class="fund-val">${fmtRatio(f.price_to_book)}</span></div>
    <div class="fund-row"><span class="fund-label">ROCE</span><span class="fund-val">${fmtPct(f.roce)}</span></div>
    <div class="fund-row"><span class="fund-label">ROE</span><span class="fund-val">${fmtPct(f.return_on_equity)}</span></div>
    <div class="fund-row"><span class="fund-label">OPM %</span><span class="fund-val">${fmtPct(f.operating_margin)}</span></div>
    <div class="fund-row"><span class="fund-label">Debt / Equity</span><span class="fund-val">${fmtRatio(debtMetric, 'x')}</span></div>
    <div class="fund-row"><span class="fund-label">Sales Growth (2Q YoY)</span><span class="fund-val">${fmtPct(f.revenue_growth)}</span></div>
    <div class="fund-row"><span class="fund-label">Profit Growth (2Q YoY)</span><span class="fund-val">${fmtPct(f.earnings_growth)}</span></div>
    <div class="fund-row"><span class="fund-label">3-Yr CFO / EBITDA</span><span class="fund-val">${cfoValHtml}</span></div>
    <div class="fund-row"><span class="fund-label">Capex Profile</span><span class="fund-val">${capexValHtml}</span></div>
    <div class="fund-row"><span class="fund-label">Promoter Pledge %</span><span class="fund-val">${(() => {
      const pPct = getPromoterPledgePct(f);
      if (pPct == null) return '—';
      const pColor = pPct >= 25 ? 'var(--rose)' : (pPct >= 15 ? 'var(--amber)' : 'var(--emerald)');
      return `<span style="color:${pColor}; font-weight:700;">${pPct.toFixed(1)}%${pPct >= 15 ? ' 🔒' : ''}</span>`;
    })()}</span></div>
  </div>`;
}

function renderCompactFundamentalPills(f) {
  const pills = [];
  const peg = f.pegRatio != null ? f.pegRatio : f.peg_ratio;

  if (f.trailing_pe != null) {
    const indText = f.industry_pe != null ? ` (Ind ${Number(f.industry_pe).toFixed(0)})` : '';
    pills.push(`<span class="ribbon-fund-pill" title="Trailing P/E vs Industry P/E">PE ${Number(f.trailing_pe).toFixed(1)}${indText}</span>`);
  }
  if (peg != null) pills.push(`<span class="ribbon-fund-pill" title="PEG ratio">PEG ${Number(peg).toFixed(2)}</span>`);

  const roceMetric = f.roce != null ? f.roce : f.return_on_equity;
  if (roceMetric != null) pills.push(`<span class="ribbon-fund-pill" title="ROCE / ROE">ROCE ${(Number(roceMetric) * 100).toFixed(1)}%</span>`);

  // Decimal Debt Ratio (e.g., 0.14 instead of 13.8%)
  const debtMetric = f.debt_ratio != null ? f.debt_ratio : (f.debt_to_equity != null ? (f.debt_to_equity / 100) : null);
  if (debtMetric != null) pills.push(`<span class="ribbon-fund-pill" title="Debt Ratio (Decimal)">DR ${Number(debtMetric).toFixed(2)}</span>`);

  // Revenue & PAT Growth directly on the ribbon
  if (f.revenue_growth != null) {
    const sign = f.revenue_growth >= 0 ? '+' : '';
    pills.push(`<span class="ribbon-fund-pill" title="Revenue Growth (YoY)">Rev ${sign}${(Number(f.revenue_growth) * 100).toFixed(1)}%</span>`);
  }
  if (f.earnings_growth != null) {
    const sign = f.earnings_growth >= 0 ? '+' : '';
    pills.push(`<span class="ribbon-fund-pill" title="PAT / Earnings Growth (YoY)">PAT ${sign}${(Number(f.earnings_growth) * 100).toFixed(1)}%</span>`);
  }

  if (pills.length === 0) return `<span class="ribbon-fund-pill" style="opacity:0.75">No fundamentals data</span>`;
  return pills.join('');
}

function renderCompactRocePills(r) {
  const pills = [];
  if (r.roce != null) pills.push(`<span class="ribbon-fund-pill" title="ROCE - calculated">ROCE ${(Number(r.roce) * 100).toFixed(1)}%</span>`);
  if (r.debt_ratio != null) pills.push(`<span class="ribbon-fund-pill" title="Debt Ratio - calculated">DR ${(Number(r.debt_ratio) * 100).toFixed(1)}%</span>`);
  return pills.length ? pills.join('') : `<span class="ribbon-fund-pill" style="opacity:0.75">No ROCE data</span>`;
}

function getBackendUrl() {
  return localStorage.getItem(KITE_BACKEND_URL_KEY) || '';
}

function getActiveProfileDisplayLabel() {
  const p = getActiveProfile();
  if (p === 'wife') return 'She';
  if (p === 'custom') return getCustomProfileLabel();
  return 'Satish';
}

function renderActiveProfileBadge() {
  const el = document.getElementById('active-profile-badge');
  if (!el) return;
  const profLabel = getActiveProfileDisplayLabel();
  const brokerLabel = getActiveBroker() === 'groww' ? 'Groww' : 'Kite';
  el.textContent = `${profLabel} · ${brokerLabel}`;
}

function updateStatusBar() {
  renderActiveProfileBadge();
  if (!newsData || !newsData.fetchedAt) {
    if (refreshStatus) refreshStatus.textContent = '';
    if (datelineStatus) {
      datelineStatus.textContent = '';
      datelineStatus.classList.remove('fresh');
    }
    updatePriceStatus();
    return;
  }
  const fresh = isToday(newsData.fetchedAt);
  if (refreshStatus) {
    refreshStatus.textContent = `${timeLabel(newsData.fetchedAt)}`;
  }
  if (datelineStatus) {
    datelineStatus.textContent = fresh ? 'Updated this morning' : 'Stale — tap refresh';
    datelineStatus.classList.toggle('fresh', fresh);
  }

  updatePriceStatus();
  renderPortfolioAnalytics();
}

function updatePriceStatus() {
  const priceStatusEl = $('#price-status');
  if (priceStatusEl) priceStatusEl.textContent = '';
}

function updateGarpAuditStatus() {
  const el = $('#garp-audit-status');
  if (!el) return;
  const iso = localStorage.getItem('ml_last_garp_audit');
  if (!iso) {
    el.textContent = '';
    return;
  }
  const d = new Date(iso);
  if (isNaN(d)) {
    el.textContent = '';
    return;
  }
  const timePart = d.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
  el.textContent = isToday(iso)
    ? `${timePart}`
    : `${d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}, ${timePart}`;
}

function getSavedApiKeysList() {
  const keys = new Set(['av7jcofmfblpij52']);
  ['self', 'wife', 'custom'].forEach(p => {
    const k = localStorage.getItem(`ml_kite_api_key_${p}`);
    if (k && k.trim()) keys.add(k.trim());
  });
  const legacy = localStorage.getItem('ml_kite_api_key');
  if (legacy && legacy.trim()) keys.add(legacy.trim());
  return Array.from(keys);
}

function refreshApiKeyPresetDropdown(currentVal = '') {
  const sel = $('#api-key-preset-select');
  if (!sel) return;
  const list = getSavedApiKeysList();
  const opts = ['<option value="custom">Custom / Manual Entry</option>'];
  for (const k of list) {
    const label = k === 'av7jcofmfblpij52' ? `Default Key (${k})` : `Saved Key (${k})`;
    opts.push(`<option value="${escapeHtml(k)}">${escapeHtml(label)}</option>`);
  }
  sel.innerHTML = opts.join('');
  const trimmed = (currentVal || '').trim();
  if (trimmed && list.includes(trimmed)) {
    sel.value = trimmed;
  } else {
    sel.value = 'custom';
  }
}

function syncBrokerButtonLabel() {
  const broker = $('#broker-select') ? $('#broker-select').value : getActiveBroker();
  const lbl = $('#broker-import-label');
  if (lbl) {
    lbl.textContent = broker === 'groww'
      ? 'Connect to Groww & import holdings'
      : 'Log in to Kite & import holdings';
  }
}

function openSettings() {
  const activeProf = getActiveProfile();
  const activeBrok = getActiveBroker();
  const profSel = $('#profile-select');
  const brokSel = $('#broker-select');
  const customWrap = $('#custom-profile-name-wrap');
  const customInp = $('#custom-profile-label-input');

  if (profSel) profSel.value = activeProf;
  if (brokSel) brokSel.value = activeBrok;
  if (customInp) customInp.value = getCustomProfileLabel();
  if (customWrap) customWrap.style.display = activeProf === 'custom' ? 'block' : 'none';
  syncBrokerButtonLabel();

  const stocks = Store.getStocks();
  $('#stocklist-input').value = stocks.map(s => {
    if (s[3] || s[4]) return `${s[0]},${s[1]},${s[2]},${s[3]},${s[4]}`;
    return `${s[0]},${s[1]},${s[2]}`;
  }).join('\n');

  const savedKey = Store.getKiteApiKey() || 'av7jcofmfblpij52';
  $('#kite-api-key-input').value = savedKey;
  refreshApiKeyPresetDropdown(savedKey);
  const savedBackend = localStorage.getItem(KITE_BACKEND_URL_KEY);
  if (savedBackend) $('#kite-backend-url-input').value = savedBackend;
  $('#settings-overlay').classList.add('open');
}

function closeSettings() {
  $('#settings-overlay').classList.remove('open');
}

function saveSettings() {
  const profSel = $('#profile-select');
  const brokSel = $('#broker-select');
  const customInp = $('#custom-profile-label-input');
  if (profSel) setActiveProfile(profSel.value);
  if (brokSel) setActiveBroker(brokSel.value);
  if (customInp) setCustomProfileLabel(customInp.value);

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

  Store.setStocks(parsed);
  const cached = Store.getCache();
  newsData = cached && cached.results ? cached : null;
  renderActiveProfileBadge();
  closeSettings();
  renderContent();
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
      
      return;
    }

    applyFetchedQuotes(data.quotes || {});
    const successCount = Object.values(data.quotes || {}).filter(q => !q.error).length;
    
    renderPortfolioAnalytics();

    // Auto-trigger GARP Audit immediately after prices finish loading
    runBulkGarpAudit();
  } catch (e) {
    if (priceBtn) priceBtn.classList.remove('spinning');
    
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

  const profile = ($('#profile-select') && $('#profile-select').value) || getActiveProfile();
  const broker = ($('#broker-select') && $('#broker-select').value) || getActiveBroker();
  setActiveProfile(profile);
  setActiveBroker(broker);
  localStorage.setItem('ml_kite_pending_profile', profile);
  localStorage.setItem('ml_kite_pending_broker', broker);

  if (broker === 'groww') {
    try {
      const gResp = await fetch(`${backendUrl}/api/groww/holdings?profile=${encodeURIComponent(profile)}&broker=groww`);
      const gData = await gResp.json();
      if (gResp.ok && gData.status === 'success' && Array.isArray(gData.holdings)) {
        const mergedG = gData.holdings.map(h => [
          (h.ticker || '').toUpperCase(),
          h.company || (h.ticker || '').toUpperCase(),
          'Watch',
          Number(h.quantity) || 0,
          Number(h.average_price) || 0
        ]).filter(r => r[0]);
        Store.setStocks(mergedG);
        if ($('#stocklist-input')) $('#stocklist-input').value = mergedG.map(s => s.join(',')).join('\n');
        showKiteStatus(`✓ Loaded ${mergedG.length} holdings via Groww (${profile})`, 'success');
        renderPortfolioAnalytics();
        return;
      }
      showKiteStatus(`Groww endpoint responded: ${gData.error || 'Ensure /api/groww/holdings is configured on your Render backend.'}`, 'error');
      return;
    } catch (e) {
      showKiteStatus(`Could not reach Groww backend route (${e.message || e}). Check your Render backend configuration.`, 'error');
      return;
    }
  }

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
    const pendingProfile = localStorage.getItem('ml_kite_pending_profile') || getActiveProfile();
    const pendingBroker = localStorage.getItem('ml_kite_pending_broker') || getActiveBroker();
    resp = await fetch(`${backendUrl}/api/kite/exchange`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ request_token: requestToken, profile: pendingProfile, broker: pendingBroker }),
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
  const stocklistEl = $('#stocklist-input');
  if (stocklistEl) {
    stocklistEl.value = merged.map(s => `${s[0]},${s[1]},${s[2]},${s[3]},${s[4]}`).join('\n');
  }
  if (newsData && Array.isArray(newsData.results)) {
    const mergedBySym = new Map(merged.map(([t, c, tier, q, a]) => [t.toUpperCase(), { company: c, tier, qty: q, avgPrice: a }]));
    newsData.results = newsData.results.map(r => {
      const m = mergedBySym.get((r.ticker || '').toUpperCase());
      return m ? { ...r, company: m.company, tier: m.tier, qty: m.qty, avgPrice: m.avgPrice } : r;
    });
    Store.setCache(newsData);
  }

  const userName = (data.user && data.user.user_name) || 'your account';
  showKiteStatus(
    `✓ Imported ${holdings.length} holdings from ${userName} account`,
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
  'shares plunge', 'shares slump', 'stock falls', 'stock slips', 'stock slides', 'stock drops',
  'stock declines', 'stock tanks', 'stock plunges', 'stock slumps', 'plunge', 'bloodbath',
  'lower circuit', 'sell-off', 'selloff', 'dilution', 'equity dilution', 'leverage',
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
  'upper circuit', '52-week high', 'record high', 'outperform', 'buy rating', 'target price raised', 'upgrade',
  'wins order', 'wins contract', 'wins deal', 'secures order', 'bags order', 'order win', 'gets approval',
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

function getNewsUrgentAction(stock, savedScoresMap) {
  const articles = (stock && stock.articles) || [];
  const q = stock && stock.quote ? stock.quote : null;
  const chg = q && q.change_pct != null ? Number(q.change_pct) : null;

  let negHits = 0;
  let posHits = 0;
  let reasons = [];

  for (const a of articles.slice(0, 3)) {
    const title = (a && a.title) || '';
    if (!title) continue;
    const s = classifySentiment(title);
    if (s === 'negative') {
      negHits++;
      reasons.push(title);
    } else if (s === 'positive') {
      posHits++;
      reasons.push(title);
    }
  }

  // Sharp negative price shock (>= 5% drop) with headline context also flags Urgent Sell/Trim review
  const hasSharpDrop = chg != null && chg <= -5.0;
  if (negHits > 0 && (negHits >= posHits || hasSharpDrop)) {
    return {
      action: 'sell',
      ticker: stock.ticker,
      label: `🚨 ${stock.ticker}${chg != null ? ` (${chg > 0 ? '+' : ''}${chg}%)` : ''}`,
      reason: reasons[0] || `Negative news with ${chg}% move`
    };
  }
  if (hasSharpDrop && articles.length > 0) {
    return {
      action: 'sell',
      ticker: stock.ticker,
      label: `🚨 ${stock.ticker} (${chg}%)`,
      reason: articles[0].title || `Sharp drop of ${chg}%`
    };
  }

  const scores = savedScoresMap || JSON.parse(localStorage.getItem('ml_garp_scores') || '{}');
  const garp = scores[stock.ticker] ? scores[stock.ticker].score : null;
  const isStrongFundamental = garp == null || garp >= 70;

  if (posHits > negHits && isStrongFundamental && (chg == null || chg > -3.0)) {
    return {
      action: 'buy',
      ticker: stock.ticker,
      label: `🟢 ${stock.ticker}${chg != null ? ` (${chg > 0 ? '+' : ''}${chg}%)` : ''}`,
      reason: reasons[0] || 'Positive news catalyst'
    };
  }

  return null;
}

function applySorting(stocks, sortType) {
  if (!stocks || stocks.length === 0) return stocks;
  const sorted = [...stocks];
  const savedScores = JSON.parse(localStorage.getItem('ml_garp_scores') || '{}');

  // Helper to extract cached PEG ratio securely from either API casing
  const getPeg = (t) => {
    const clean = getCleanTicker(t);
    const raw = localStorage.getItem(`ml_fund_${clean}`);
    if (!raw) return null;
    try { 
      const parsed = JSON.parse(raw).fundamentals; 
      const peg = parsed.pegRatio != null ? parsed.pegRatio : parsed.peg_ratio;
      return peg != null ? Number(peg) : null;
    } catch { return null; }
  };

  // Helper to extract cached PAT / Earnings Growth (3Y)
  const getPat = (t) => {
    const clean = getCleanTicker(t);
    const raw = localStorage.getItem(`ml_fund_${clean}`);
    if (!raw) return null;
    try {
      const parsed = JSON.parse(raw).fundamentals;
      const pat = parsed.earnings_growth != null ? parsed.earnings_growth : parsed.earningsGrowth;
      return pat != null ? Number(pat) : null;
    } catch { return null; }
  };

  switch (sortType) {
    case 'garp-desc':
      sorted.sort((a, b) => {
        const scoreA = savedScores[a.ticker] ? savedScores[a.ticker].score : -1;
        const scoreB = savedScores[b.ticker] ? savedScores[b.ticker].score : -1;
        if (scoreB !== scoreA) return scoreB - scoreA;
        return (a.company || '').localeCompare(b.company || '');
      });
      break;
    case 'garp-asc':
      sorted.sort((a, b) => {
        const scoreA = savedScores[a.ticker] ? savedScores[a.ticker].score : 999;
        const scoreB = savedScores[b.ticker] ? savedScores[b.ticker].score : 999;
        if (scoreA !== scoreB) return scoreA - scoreB;
        return (a.company || '').localeCompare(b.company || '');
      });
      break;
    case 'peg-asc':
      sorted.sort((a, b) => {
        const valA = getPeg(a.ticker) != null ? getPeg(a.ticker) : 9999;
        const valB = getPeg(b.ticker) != null ? getPeg(b.ticker) : 9999;
        if (valA !== valB) return valA - valB;
        return (a.company || '').localeCompare(b.company || '');
      });
      break;
    case 'peg-desc':
      sorted.sort((a, b) => {
        const valA = getPeg(a.ticker) != null ? getPeg(a.ticker) : -9999;
        const valB = getPeg(b.ticker) != null ? getPeg(b.ticker) : -9999;
        if (valA !== valB) return valB - valA;
        return (a.company || '').localeCompare(b.company || '');
      });
      break;
    case 'pat-desc':
      sorted.sort((a, b) => {
        const valA = getPat(a.ticker) != null ? getPat(a.ticker) : -9999;
        const valB = getPat(b.ticker) != null ? getPat(b.ticker) : -9999;
        if (valA !== valB) return valB - valA;
        return (a.company || '').localeCompare(b.company || '');
      });
      break;
    case 'pat-asc':
      sorted.sort((a, b) => {
        const valA = getPat(a.ticker) != null ? getPat(a.ticker) : 9999;
        const valB = getPat(b.ticker) != null ? getPat(b.ticker) : 9999;
        if (valA !== valB) return valA - valB;
        return (a.company || '').localeCompare(b.company || '');
      });
      break;
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
      const prevEntry = newsData && newsData.results ? newsData.results.find(r => r.ticker === ticker) : null;
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
  refreshLabel.textContent = "Stocks' news";
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


const MC_DAILY_OPEN_KEY = 'ml_mc_open_brief_v2';

function todayDateKey() {
  try {
    return new Intl.DateTimeFormat('en-CA', {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).format(new Date());
  } catch (e) {
    const istOffsetMs = 5.5 * 60 * 60 * 1000;
    return new Date(Date.now() + istOffsetMs).toISOString().slice(0, 10);
  }
}

function deriveMoneycontrolReactionLines(cues, stocksList) {
  const headlines = Array.isArray(cues && cues.global_headlines) ? cues.global_headlines : [];
  const headlineText = [
    ...headlines,
    cues && cues.indian_impact ? cues.indian_impact : '',
    cues && cues.usa_market ? cues.usa_market : '',
    cues && cues.china_market ? cues.china_market : ''
  ].join(' ').toLowerCase();

  const sectorRules = [
    { label: 'IT, AI & Data Center', re: /\b(ai|chip|chips|nasdaq|semiconductor|gpu|cloud|data center|it stocks|software)\b/ },
    { label: 'Oil/Gas & Chemicals', re: /\b(oil|crude|brent|wti|opec|gas|lng|chemical|chemicals|petchem)\b/ },
    { label: 'Metals & Mining', re: /\b(gold|silver|bullion|metal|metals|steel|copper|aluminum|aluminium|zinc|mining)\b/ },
    { label: 'Defense & Power Grid', re: /\b(defense|defence|missile|aerospace|power|grid|transmission|transformer|renewable|solar|bess)\b/ },
    { label: 'Banks & Financials', re: /\b(fii|dii|fed|rate|rates|yield|treasury|bank|banks|nbfc|nifty|sensex|rupee)\b/ }
  ];

  const sectorWatch = sectorRules
    .filter(r => r.re.test(headlineText))
    .map(r => r.label);

  const genericFirstWords = new Set([
    'the', 'a', 'an', 'and', 'or', 'of', 'for', 'in', 'on', 'to', 'ltd', 'limited',
    'india', 'indian', 'national', 'bank', 'finance', 'financial', 'services',
    'technologies', 'technology', 'industries', 'industry', 'solutions', 'systems',
    'enterprises', 'products', 'chemicals', 'chemical', 'engineering', 'power',
    'energy', 'health', 'healthcare', 'hospital', 'hospitals', 'motors', 'auto'
  ]);

  const scoredMatches = [];
  const watchlist = Array.isArray(stocksList) ? stocksList : Store.getStocks();
  const seenSyms = new Set();

  for (const row of watchlist) {
    const sym = String(row[0] || '').trim().toUpperCase();
    if (!sym || seenSyms.has(sym)) continue;
    const comp = String(row[1] || '').toLowerCase();
    const cleanSym = getCleanTicker(sym).toLowerCase();
    const sec = String(SECTOR_MAP[getCleanTicker(sym)] || SECTOR_MAP[sym] || '').toLowerCase();

    let relevance = 0;

    // Direct ticker or distinct company name match in headlines
    if (cleanSym.length >= 3 && new RegExp(`\b${cleanSym.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\b`).test(headlineText)) {
      relevance += 4;
    }
    const compTokens = comp
      .replace(/[^a-z0-9&\s]/g, ' ')
      .split(/\s+/)
      .filter(tok => tok.length >= 4 && !genericFirstWords.has(tok));
    if (compTokens.some(tok => new RegExp(`\b${tok.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\b`).test(headlineText))) {
      relevance += 3;
    }

    // Specific thematic / sector overlap with today's cues
    if (/\b(ai|chip|chips|nasdaq|semiconductor|gpu|data center)\b/.test(headlineText) && (sec.includes('ai') || sec.includes('ems'))) {
      relevance += 2;
    }
    if (/\b(oil|crude|brent|opec|gas|chemical|chemicals)\b/.test(headlineText) && (sec.includes('chemical') || sec.includes('energy'))) {
      relevance += 2;
    }
    if (/\b(gold|silver|bullion|metal|metals|steel|copper)\b/.test(headlineText) && (sec.includes('capital') || sec.includes('jewellery') || sec.includes('commodity'))) {
      relevance += 2;
    }
    if (/\b(defense|defence|aerospace|power|grid|transmission|bess)\b/.test(headlineText) && (sec.includes('defense') || sec.includes('capital') || sec.includes('clean energy'))) {
      relevance += 2;
    }
    if (/\b(fii|dii|fed|rate|rates|bank|banks|nbfc)\b/.test(headlineText) && sec.includes('financial')) {
      relevance += 2;
    }

    if (relevance > 0) {
      seenSyms.add(sym);
      scoredMatches.push({ sym, relevance });
    }
  }

  // Sort by strongest cue relevance, with a deterministic daily rotation tie-breaker
  const daySeed = todayDateKey().split('-').reduce((acc, n) => acc + Number(n || 0), 0);
  scoredMatches.sort((a, b) => {
    if (b.relevance !== a.relevance) return b.relevance - a.relevance;
    const ha = (a.sym.charCodeAt(0) + daySeed) % 17;
    const hb = (b.sym.charCodeAt(0) + daySeed) % 17;
    return ha - hb;
  });

  const matchedTickers = scoredMatches.slice(0, 6).map(m => m.sym);

  const line1 = cues && cues.indian_impact
    ? cues.indian_impact
    : 'Moneycontrol cues point to selective opening moves across global and domestic triggers.';

  const sectorsText = sectorWatch.length ? sectorWatch.slice(0, 3).join(', ') : 'Broad Market & Cyclicals';
  const stocksText = matchedTickers.length ? matchedTickers.join(', ') : 'Select Sector Movers';
  const line2 = `Likely early reaction on open: Sectors — ${sectorsText}; Stocks to watch — ${stocksText}.`;

  return { line1, line2 };
}

function renderMaintainedMarketOpenStrip(linesObj) {
  const el = document.getElementById('mc-market-open-summary');
  if (!el || !linesObj || (!linesObj.line1 && !linesObj.line2)) return;
  el.style.display = 'block';
  el.innerHTML = `<span class="mc-open-tag">Moneycontrol Open Watch</span><div>${escapeHtml(linesObj.line1)}</div><div style="margin-top:3px;"><strong>${escapeHtml(linesObj.line2)}</strong></div>`;
}

async function pullDailyGlobalCuesOnce() {
  const todayKey = todayDateKey();
  const savedDaily = JSON.parse(localStorage.getItem(MC_DAILY_OPEN_KEY) || 'null');
  const backendUrl = getBackendUrl();

  if (savedDaily && savedDaily.dateKey === todayKey && savedDaily.lines) {
    // Re-derive lines against current watchlist/cues so updates take effect immediately
    const freshLines = savedDaily.cues ? deriveMoneycontrolReactionLines(savedDaily.cues, Store.getStocks()) : savedDaily.lines;
    renderMaintainedMarketOpenStrip(freshLines);
    if (savedDaily.cues) {
      const cuesContainer = document.getElementById('global-cues-container');
      if (cuesContainer && cuesContainer.innerHTML.trim() === '') {
        renderGlobalCues(savedDaily.cues, cuesContainer);
        cuesContainer.style.display = 'none';
      }
    }
    // If the earlier pull today had no global headlines yet, try once more in background
    const hadHeadlines = savedDaily.cues && Array.isArray(savedDaily.cues.global_headlines) && savedDaily.cues.global_headlines.length > 0;
    if (hadHeadlines || !backendUrl) return;
  }

  if (!backendUrl) return;

  try {
    const resp = await fetch(`${backendUrl}/api/market/global-cues`);
    const data = await resp.json();
    if (resp.ok && data.status === 'success' && data.cues) {
      const lines = deriveMoneycontrolReactionLines(data.cues, Store.getStocks());
      localStorage.setItem(MC_DAILY_OPEN_KEY, JSON.stringify({
        dateKey: todayKey,
        savedAt: new Date().toISOString(),
        cues: data.cues,
        lines
      }));
      renderMaintainedMarketOpenStrip(lines);
    }
  } catch (e) {
    // Keep silent on background auto-pull failure so user workflow isn't interrupted
  }
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
      const lines = deriveMoneycontrolReactionLines(data.cues, Store.getStocks());
      localStorage.setItem(MC_DAILY_OPEN_KEY, JSON.stringify({
        dateKey: todayDateKey(),
        savedAt: new Date().toISOString(),
        cues: data.cues,
        lines
      }));
      renderMaintainedMarketOpenStrip(lines);
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

const FUND_CACHE_VERSION = 2; // Bump to auto-invalidate old caches across desktop & mobile

function getCachedFundamentals(ticker) {
  const raw = localStorage.getItem(`ml_fund_${ticker}`);
  if (!raw) return null;
  try {
    const cached = JSON.parse(raw);
    const SEVEN_DAYS = 7 * 24 * 60 * 60 * 1000;
    if (!cached.ts || (Date.now() - cached.ts > SEVEN_DAYS)) return null;
    if (cached.v !== FUND_CACHE_VERSION) return null;
    return cached.fundamentals;
  } catch (e) {
    return null;
  }
}

function setCachedFundamentals(ticker, fundamentals) {
  localStorage.setItem(`ml_fund_${ticker}`, JSON.stringify({
    v: FUND_CACHE_VERSION,
    ts: Date.now(),
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

  const savedScores = JSON.parse(localStorage.getItem('ml_garp_scores') || '{}');
  const garpScore = savedScores[ticker] ? savedScores[ticker].score : null;
  const cachedStock = newsData && newsData.results
    ? newsData.results.find(r => r.ticker === ticker || getCleanTicker(r.ticker) === cleanTickerForFund)
    : null;
  const trend = cachedStock && cachedStock.quote ? classifyTrend(cachedStock.quote) : 'unknown';
  const sigObj = cachedStock ? getActionSignal(cachedStock, savedScores) : null;
  const actionSignal = sigObj ? sigObj.label : null;

  try {
    const resp = await fetch(`${backendUrl}/api/ai/briefing`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        symbol: ticker,
        company: company,
        tier: tier,
        garp_score: garpScore,
        trend: trend,
        action_signal: actionSignal,
        fundamentals: fundamentals || {},
        news: articles
      })
    });
    const data = await resp.json();
    if (data.status === 'success') {
      const b = data.briefing;
      const isHigh = (b.news_materiality || '').toUpperCase() === 'HIGH';
      const matBg = isHigh ? 'var(--rose-bg)' : 'var(--surface-soft)';
      const matColor = isHigh ? 'var(--rose)' : 'var(--ink-soft)';
      const matText = isHigh ? '🔴 HIGH (Thesis Impact)' : '⚪ LOW (Routine Chatter)';
      panel.innerHTML = `
        <div class="ai-briefing-card">
          <div class="ai-b-row"><strong>News Materiality:</strong> <span style="background:${matBg}; color:${matColor}; padding:2px 7px; border-radius:4px; font-weight:700; font-size:11px;">${matText}</span></div>
          <div class="ai-b-row"><strong>What Changed:</strong> ${escapeHtml(b.what_changed || b.key_catalyst || '')}</div>
          <div class="ai-b-row"><strong>Business:</strong> ${escapeHtml(b.business_summary || '')}</div>
          <div class="ai-b-row"><strong>Key Watchpoint:</strong> ${escapeHtml(b.key_watchpoint || b.key_risk || '')}</div>
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

function evaluateLookupVerdict(ticker, company, isExistingHolding, fundamentals, garpScore, articles) {
  const cleanT = getCleanTicker(ticker);
  const f = fundamentals || getCachedFundamentals(cleanT) || {};
  const savedScores = JSON.parse(localStorage.getItem('ml_garp_scores') || '{}');
  const garp = garpScore != null ? Number(garpScore) : (savedScores[ticker] ? Number(savedScores[ticker].score) : null);

  const roceVal = f.roce != null ? Number(f.roce) * 100 : (f.return_on_equity != null ? Number(f.return_on_equity) * 100 : null);
  const opmVal = f.operating_margin != null ? Number(f.operating_margin) * 100 : (f.profit_margin != null ? Number(f.profit_margin) * 100 : null);
  const deRaw = f.debt_to_equity != null ? Number(f.debt_to_equity) / 100 : (f.debt_ratio != null ? Number(f.debt_ratio) : null);
  const pegRaw = f.pegRatio != null ? Number(f.pegRatio) : (f.peg_ratio != null ? Number(f.peg_ratio) : null);
  const patGrowth = f.earnings_growth != null ? Number(f.earnings_growth) * 100 : (f.earningsGrowth != null ? Number(f.earningsGrowth) * 100 : null);
  const revGrowth = f.revenue_growth != null ? Number(f.revenue_growth) * 100 : (f.revenueGrowth != null ? Number(f.revenueGrowth) * 100 : null);
  const cfoPct = f.cfo_to_ebitda != null ? Math.round(Number(f.cfo_to_ebitda) * 100) : null;

  let negCount = 0;
  let posCount = 0;
  (articles || []).slice(0, 4).forEach(a => {
    const s = classifySentiment(a.title || '');
    if (s === 'negative') negCount++;
    else if (s === 'positive') posCount++;
  });

  const isKnownCoreCompounder = CORE_COMPOUNDERS_SET.has(cleanT) || CORE_COMPOUNDERS_SET.has(ticker);
  const highQualityFundamentals = (roceVal == null || roceVal >= 18) && (deRaw == null || deRaw <= 0.6) && (cfoPct == null || cfoPct >= 50);
  const weakFundamentals = (roceVal != null && roceVal < 12) || (deRaw != null && deRaw > 1.2) || (cfoPct != null && cfoPct < 35) || (garp != null && garp < 55);

  let verdict = 'Worth considering';
  let badgeStyle = 'background:var(--amber-bg); color:var(--amber); border:1px solid var(--amber-border);';
  let thesisSummary = '';
  let actionPoints = [];

  if ((isKnownCoreCompounder || (garp != null && garp >= 82)) && highQualityFundamentals && negCount === 0) {
    verdict = 'Core-Compounder';
    badgeStyle = 'background:var(--emerald-bg); color:var(--emerald); border:1px solid var(--emerald-border);';
    thesisSummary = `${company} (${cleanT}) fits a **Core-Compounder** profile: durable return ratios, manageable leverage, and clean cash/news signals.`;
    actionPoints.push(`**Positioning:** Treat as a long-term core anchor rather than a short-term flip${isExistingHolding ? ' (already in your holdings)' : ''}.`);
    actionPoints.push(`**Entry & Sizing:** Accumulate in tranches on market pullbacks or near key moving averages rather than chasing sharp single-day spikes.`);
    if (pegRaw != null && pegRaw > 2.2) {
      actionPoints.push(`**Valuation Check:** PEG is elevated (${pegRaw.toFixed(2)}), so size conservatively on initial entry and add on better valuations.`);
    }
  } else if (weakFundamentals || (negCount >= 2 && posCount === 0)) {
    verdict = 'Not worth it';
    badgeStyle = 'background:var(--rose-bg); color:var(--rose); border:1px solid var(--rose-border);';
    thesisSummary = `${company} (${cleanT}) screens as **Not worth it** right now due to stretched/weak return or cash metrics, leverage, or negative headline risk.`;
    actionPoints.push(`**Risk Warning:** Avoid deploying fresh capital until return ratios, cash conversion, or negative news flow visibly improve.`);
    if (isExistingHolding) {
      actionPoints.push(`**Existing Holding Check:** Review position size and avoid averaging down blindly if trend/fundamentals are slipping.`);
    }
    if (cfoPct != null && cfoPct < 50) {
      actionPoints.push(`**Cash Conversion:** 3-Yr CFO/EBITDA is ${cfoPct}% (<50%), meaning reported profits are converting slowly into cash.`);
    }
  } else {
    verdict = 'Worth considering';
    badgeStyle = 'background:var(--amber-bg); color:var(--amber); border:1px solid var(--amber-border);';
    thesisSummary = `${company} (${cleanT}) is **Worth considering** for tactical or selective allocation—promising in spots, but needs closer verification before full conviction.`;
    actionPoints.push(`**Selective Approach:** Keep initial sizing measured until fundamentals, growth durability, and headline catalysts align.`);
    if (revGrowth != null || patGrowth != null) {
      const rTxt = revGrowth != null ? `Sales ${revGrowth >= 0 ? '+' : ''}${revGrowth.toFixed(1)}%` : null;
      const pTxt = patGrowth != null ? `PAT ${patGrowth >= 0 ? '+' : ''}${patGrowth.toFixed(1)}%` : null;
      actionPoints.push(`**Growth & Margin Check:** Recent growth read (${[rTxt, pTxt].filter(Boolean).join(', ')}) alongside OPM ${opmVal != null ? opmVal.toFixed(1) + '%' : '—'}—confirm sustainability.`);
    }
    if (!fundamentals || Object.keys(fundamentals).length === 0) {
      actionPoints.push(`**Data Tip:** Click *"Load Fundamentals"* or *"Show fundamentals"* to pull live Screener metrics and refine this assessment.`);
    }
  }

  const metricChips = [
    roceVal != null ? `ROCE ${roceVal.toFixed(1)}%` : null,
    opmVal != null ? `OPM ${opmVal.toFixed(1)}%` : null,
    pegRaw != null ? `PEG ${pegRaw.toFixed(2)}` : null,
    deRaw != null ? `D/E ${deRaw.toFixed(2)}x` : null,
    cfoPct != null ? `CFO/EBITDA ${cfoPct}%` : null,
    garp != null ? `GARP ${garp}` : null
  ].filter(Boolean);

  const badgeHtml = `<span style="font-size:11px; font-weight:800; padding:2px 9px; border-radius:999px; ${badgeStyle}">${escapeHtml(verdict)}</span>`;

  const html = `
    <div id="lookup-verdict-box" style="margin:10px 0 12px; padding:12px 14px; border-radius:12px; background:var(--surface-soft); border:1px solid var(--border-strong);">
      <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; flex-wrap:wrap; margin-bottom:6px;">
        <span style="font-size:11px; font-weight:800; text-transform:uppercase; letter-spacing:0.5px; color:var(--ink-soft);">Stock Fit Verdict</span>
        ${badgeHtml}
      </div>
      <div style="font-size:12.5px; line-height:1.45; color:var(--ink); margin-bottom:8px;">${escapeHtml(thesisSummary).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</div>
      ${metricChips.length ? `<div style="display:flex; flex-wrap:wrap; gap:6px; margin-bottom:8px;">${metricChips.map(m => `<span class="ribbon-fund-pill">${escapeHtml(m)}</span>`).join('')}</div>` : ''}
      <ul style="margin-left:16px; display:flex; flex-direction:column; gap:4px; font-size:12px; color:var(--ink-soft); line-height:1.4;">
        ${actionPoints.map(pt => `<li>${escapeHtml(pt).replace(/\*\*(.*?)\*\*/g, '<strong style="color:var(--ink);">$1</strong>')}</li>`).join('')}
      </ul>
    </div>
  `;

  return { verdict, badgeStyle, badgeHtml, html };
}

function renderSingleStockLookupCard() {
  if (!activeLookupState) return;
  const { displayTicker, searchTerm, stockTier, qty, avgPrice, articles, quote, isExistingHolding, lookupError } = activeLookupState;
  const cachedFundLookup = getCachedFundamentals(getCleanTicker(displayTicker));
  const verdictObj = evaluateLookupVerdict(displayTicker, searchTerm, isExistingHolding, cachedFundLookup, null, articles);
  const stockObj = { ticker: displayTicker, company: searchTerm, tier: stockTier, qty, avgPrice, articles, quote: quote || null };
  const aiBtnHtml = `<button id="ai-briefing-btn" class="ai-briefing-btn">✨ Generate AI 1-Minute Briefing</button>`;
  const errorNote = lookupError
    ? `<div class="quiet" style="color:var(--clay)">Backend error: ${escapeHtml(lookupError)}</div>`
    : '';

  lookupResult.innerHTML = `<div class="lookup-result-card">
    <div class="lookup-result-head">
      <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
        <span class="lookup-result-title">${escapeHtml(searchTerm)} <span style="font-family:'SF Mono',monospace;font-size:11px;color:var(--ink-soft)">${escapeHtml(displayTicker)}</span></span>
        ${verdictObj.badgeHtml}
      </div>
      <button class="lookup-close" id="lookup-close-btn">✕ Close</button>
    </div>
    ${renderEntry(stockObj)}
    ${verdictObj.html}
    ${aiBtnHtml}
    <div id="ai-briefing-panel"></div>
    <button id="fundamentals-btn" class="fundamentals-toggle-btn">📊 Show fundamentals (Screener: PE, ROCE, CFO...)</button>
    <div id="fundamentals-panel"></div>
    ${errorNote}
  </div>`;

  $('#lookup-close-btn').addEventListener('click', clearLookupResult);
  const fundBtn = document.getElementById('fundamentals-btn');
  if (fundBtn) fundBtn.addEventListener('click', () => fetchAndShowFundamentals(displayTicker));
  const aiBtn = document.getElementById('ai-briefing-btn');
  if (aiBtn) {
    aiBtn.addEventListener('click', () => fetchAndShowAIBriefing(displayTicker, searchTerm, articles, 'ai-briefing-panel', aiBtn, stockTier));
  }
}

async function runSingleStockLookup(tickerTyped, companyTyped, autoAiBriefing = false) {
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
    <div class="lookup-loading">Fetching latest news &amp; price for ${escapeHtml(displayTicker)}…</div>
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

  // Pull quote from cache if available, or fetch live quote from backend for this ticker
  const cleanT = getCleanTicker(displayTicker);
  const cachedEntry = newsData && newsData.results
    ? newsData.results.find(r => r.ticker.toUpperCase() === displayTicker.toUpperCase() || getCleanTicker(r.ticker).toUpperCase() === cleanT.toUpperCase())
    : null;
  let quote = cachedEntry && cachedEntry.quote && cachedEntry.quote.last_price != null ? cachedEntry.quote : null;

  const backendUrl = getBackendUrl();
  if (!quote && backendUrl) {
    try {
      const symParam = displayTicker === cleanT ? displayTicker : `${displayTicker},${cleanT}`;
      const qResp = await fetch(`${backendUrl}/api/quotes?symbols=${encodeURIComponent(symParam)}`);
      const qData = await qResp.json();
      if (qResp.ok && qData.status === 'success' && qData.quotes) {
        quote = qData.quotes[displayTicker] || qData.quotes[cleanT] || null;
        if (quote && quote.error) quote = null;
      }
    } catch (e) {}
  }

  activeLookupState = {
    ticker: displayTicker,
    displayTicker,
    searchTerm,
    stockTier,
    qty,
    avgPrice,
    articles,
    quote,
    isExistingHolding: Boolean(known),
    lookupError
  };

  renderSingleStockLookupCard();

  if (autoAiBriefing) {
    const aiBtn = document.getElementById('ai-briefing-btn');
    if (aiBtn) {
      fetchAndShowAIBriefing(displayTicker, searchTerm, articles, 'ai-briefing-panel', aiBtn, stockTier);
    }
  }
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
    renderContent();
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
    renderContent();
    if (activeLookupState && getCleanTicker(activeLookupState.displayTicker) === getCleanTicker(ticker)) {
      renderSingleStockLookupCard();
    }
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

async function fetchAndShowFundamentals(ticker) {
  const backendUrl = getBackendUrl();
  const panel = document.getElementById('fundamentals-panel');
  const btn = document.getElementById('fundamentals-btn');
  if (!panel) return;
  if (!backendUrl) {
    panel.innerHTML = `<div class="quiet" style="color:var(--clay)">Backend URL not set (Settings).</div>`;
    return;
  }

  const cleanTicker = getCleanTicker(ticker);
  const cached = getCachedFundamentals(cleanTicker);
  if (cached) {
    panel.innerHTML = renderFundamentalsPanel(cached) +
      `<div class="fund-note">📦 Cached from Screener.in (7-day cache).</div>`;
    if (btn) btn.style.display = 'none';
    return;
  }

  if (btn) btn.textContent = 'Loading…';
  panel.innerHTML = '';

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 25000);
    const resp = await fetch(`${backendUrl}/api/fundamentals?symbol=${encodeURIComponent(cleanTicker)}`, { signal: controller.signal });
    clearTimeout(timer);
    const data = await resp.json();

    if (!resp.ok || data.status !== 'success') {
      panel.innerHTML = `<div class="quiet" style="color:var(--clay)">${escapeHtml(formatFundamentalsError(data.error))}</div>`;
      if (btn) btn.textContent = '📊 Show fundamentals (Screener: PE, ROCE, CFO...)';
      return;
    }

    setCachedFundamentals(cleanTicker, data.fundamentals);
    panel.innerHTML = renderFundamentalsPanel(data.fundamentals);
    const verdictEl = document.getElementById('lookup-verdict-box');
    if (verdictEl) {
      const stocksNow = Store.getStocks();
      const isHeldNow = stocksNow.some(([t]) => t.toUpperCase() === ticker.toUpperCase());
      const curArticles = (newsData && newsData.results)
        ? ((newsData.results.find(r => r.ticker.toUpperCase() === ticker.toUpperCase()) || {}).articles || [])
        : [];
      verdictEl.outerHTML = evaluateLookupVerdict(ticker, ticker, isHeldNow, data.fundamentals, null, curArticles);
    }
    if (btn) btn.style.display = 'none';
  } catch (e) {
    panel.innerHTML = `<div class="quiet" style="color:var(--clay)">${escapeHtml(formatFundamentalsError(e.message || String(e)))}</div>`;
    if (btn) btn.textContent = '📊 Show fundamentals (Screener: PE, ROCE, CFO...)';
  }
}

function clearLookupResult() {
  activeLookupState = null;
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
function classifyTrend(quote) {
  if (!quote || quote.last_price == null) return 'unknown';
  const p = quote.last_price;
  const { dma_20, dma_50, dma_200 } = quote;

  if (dma_200 != null && p < dma_200) return 'below-200';
  if (dma_50 != null && p < dma_50 && (dma_200 == null || p >= dma_200)) return 'dip-buy';
  if (dma_20 != null && dma_50 != null && p >= dma_20 && p >= dma_50 && (dma_200 == null || p >= dma_200)) {
    return 'uptrend';
  }
  return 'neutral';
}

function getActionSignal(stock, savedScoresMap) {
  const q = stock.quote;
  if (!q || q.last_price == null) return null;

  const scores = savedScoresMap || JSON.parse(localStorage.getItem('ml_garp_scores') || '{}');
  const garp = scores[stock.ticker] ? scores[stock.ticker].score : null;
  if (garp == null) return null;

  const cleanTicker = getCleanTicker(stock.ticker);
  const f = getCachedFundamentals(cleanTicker);
  const rawPeg = f ? (f.pegRatio != null ? f.pegRatio : f.peg_ratio) : null;
  const peg = rawPeg != null ? Number(rawPeg) : null;

  const p = q.last_price;
  const trend = classifyTrend(q);
  const isHeavySelling = (q.change_pct != null && q.change_pct <= -1.0) &&
                         (q.volume_vs_avg_pct != null && q.volume_vs_avg_pct >= 150);
  const near200D = q.dma_200 != null && Math.abs(p - q.dma_200) / q.dma_200 <= 0.03;

  // 1. High-Quality GARP Setups (Actionable Buys)
  if (garp >= 75 && (peg == null || (peg > 0 && peg <= 1.8))) {
    if (near200D && !isHeavySelling) {
      return { type: 'buy', label: '💎 Tranche 2 (200D)', color: 'var(--emerald)', bg: 'var(--emerald-bg)', border: 'var(--emerald-border)' };
    }
    if (trend === 'dip-buy') {
      if (isHeavySelling) {
        return { type: 'wait', label: '⏳ Wait (High-Vol Drop)', color: 'var(--amber)', bg: 'var(--amber-bg)', border: 'var(--amber-border)' };
      }
      return { type: 'buy', label: '🎯 Tranche 1 (Pullback)', color: 'var(--emerald)', bg: 'var(--emerald-bg)', border: 'var(--emerald-border)' };
    }
  }

  // 2. Momentum / Compounders
  if (garp >= 70 && trend === 'uptrend') {
    return { type: 'hold', label: '🚀 Hold / Ride', color: 'var(--teal-dark)', bg: 'var(--teal-soft)', border: 'var(--emerald-border)' };
  }

  // 3. Valuation Compression
  if (garp >= 70 && peg != null && peg > 2.5 && trend === 'below-200') {
    return { type: 'compression', label: '🧊 Compression (Pause)', color: 'var(--indigo)', bg: 'var(--indigo-bg)', border: 'var(--indigo-border)' };
  }

  // 4. Deteriorating / Broken Trend (Actionable Trim/Exits)
  if (garp < 65 && trend === 'below-200') {
    return { type: 'exit', label: '⚠️ Review / Trim', color: 'var(--rose)', bg: 'var(--rose-bg)', border: 'var(--rose-border)' };
  }

  // 5. Fallback Status Badges (so no audited stock with a price is left blank)
  if (garp >= 75 && (trend === 'dip-buy' || near200D) && peg != null && peg > 1.8) {
    return { type: 'hold-expensive', label: '⏸️ Hold (Expensive Dip)', color: 'var(--amber)', bg: 'var(--amber-bg)', border: 'var(--amber-border)' };
  }

  if (trend === 'below-200') {
    return { type: 'watch', label: '👀 Watch (<200D)', color: 'var(--violet)', bg: 'var(--violet-bg)', border: 'var(--violet-border)' };
  }

  return { type: 'hold-neutral', label: '🟢 Hold', color: 'var(--ink-soft)', bg: 'var(--surface-soft)', border: 'var(--border-strong)' };
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
  } else if (currentFilter === 'strong-cash') {
    filtered = filtered.filter(s => {
      const f = getCachedFundamentals(getCleanTicker(s.ticker));
      return f && f.cfo_to_ebitda != null && f.cfo_to_ebitda >= 0.70;
    });
  } else if (currentFilter === 'weak-cash') {
    filtered = filtered.filter(s => {
      const f = getCachedFundamentals(getCleanTicker(s.ticker));
      return f && f.cfo_to_ebitda != null && f.cfo_to_ebitda < 0.50;
    });
  } else if (currentFilter === 'capex-heavy') {
    filtered = filtered.filter(s => {
      const f = getCachedFundamentals(getCleanTicker(s.ticker));
      return f && f.is_capex_heavy === true;
    });
  } else if (currentFilter === 'active-cwip') {
    filtered = filtered.filter(s => {
      const f = getCachedFundamentals(getCleanTicker(s.ticker));
      return f && f.cwip_ratio != null && f.cwip_ratio >= 0.15;
    });
  } else if (currentFilter === 'pledged-shares') {
    filtered = filtered.filter(s => {
      const f = getCachedFundamentals(getCleanTicker(s.ticker));
      const pPct = getPromoterPledgePct(f);
      return pPct != null && pPct >= 15;
    });
  }

  if (currentSentiment !== 'all') {
    filtered = filtered.filter(s => {
      const overall = classifyStockOverallSentiment(s.articles);
      return overall === currentSentiment;
    });
  }
  
  if (currentTrend !== 'all') {
    if (currentTrend === 'actionable-buys') {
      const savedScoresMap = JSON.parse(localStorage.getItem('ml_garp_scores') || '{}');
      filtered = filtered.filter(s => {
        const sig = getActionSignal(s, savedScoresMap);
        return sig && sig.type === 'buy';
      });
    } else if (currentTrend === 'actionable-exits') {
      const savedScoresMap = JSON.parse(localStorage.getItem('ml_garp_scores') || '{}');
      filtered = filtered.filter(s => {
        const sig = getActionSignal(s, savedScoresMap);
        return sig && sig.type === 'exit';
      });
    } else {
      filtered = filtered.filter(s => classifyTrend(s.quote) === currentTrend);
    }
  }

  if (currentListQuery) {
    const qLower = currentListQuery.toLowerCase();
    filtered = filtered.filter(s => {
      const sym = String(s.ticker || '').toLowerCase();
      const cleanSym = getCleanTicker(s.ticker || '').toLowerCase();
      const comp = String(s.company || '').toLowerCase();
      return sym.includes(qLower) || cleanSym.includes(qLower) || comp.includes(qLower);
    });
  }

  const isFiltered = currentFilter !== 'all' || currentSentiment !== 'all' || currentTrend !== 'all' || Boolean(currentListQuery);
  const resetBtnEl = document.getElementById('reset-filters-btn');
  if (resetBtnEl) resetBtnEl.style.display = isFiltered ? 'inline-flex' : 'none';

  const countBar = document.getElementById('filterCountBar');
  if (countBar) {
    if (isFiltered) {
      const labels = {
        'strong-cash': '💰 Strong Cash (≥70%)',
        'weak-cash': '⚠️ Weak Cash (<50%)',
        'capex-heavy': '🏗️ Capex Heavy',
        'active-cwip': '🏭 Active Expansion (CWIP ≥15%)',
        'pledged-shares': '🔒 Pledge ≥15%',
        'fresh': 'Fresh News',
        'actionable-buys': '💎 Buys',
        'actionable-exits': '✂️ Trim/Exits',
        'uptrend': '🚀 Uptrend',
        'dip-buy': '🎯 Dip-Buy',
        'below-200': '⚠️ <200D'
      };
      const activeTags = [
        labels[currentFilter],
        currentSentiment !== 'all' ? `Tone: ${currentSentiment}` : null,
        labels[currentTrend],
        currentListQuery ? `Search: "${currentListQuery}"` : null
      ].filter(Boolean).join(' + ');

      countBar.textContent = `Showing ${filtered.length} of ${newsData.results.length} stocks (${activeTags})`;
      countBar.style.display = 'block';
    } else {
      countBar.style.display = 'none';
    }
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
  if (analyticsContainer && analyticsContainer.style.display !== 'none') {
    const rBuys = document.getElementById('radar-buys');
    const rExits = document.getElementById('radar-exits');
    const rWeak = document.getElementById('radar-weak-cash');
    const rCwip = document.getElementById('radar-cwip');
    if (rBuys) rBuys.classList.toggle('active', currentTrend === 'actionable-buys');
    if (rExits) rExits.classList.toggle('active', currentTrend === 'actionable-exits');
    if (rWeak) rWeak.classList.toggle('active', currentFilter === 'weak-cash');
    if (rCwip) rCwip.classList.toggle('active', currentFilter === 'active-cwip');
  }
}

function renderGarpArcSvg(score, ticker, missingFields = []) {
  const hasScore = score != null && !isNaN(score);
  const clamped = hasScore ? Math.max(0, Math.min(100, Number(score))) : 0;
  const arcLen = 87.96;
  const fillLen = (clamped / 100) * arcLen;
  const gradId = `garpGrad_${String(ticker).replace(/[^A-Za-z0-9]/g, '')}`;
  let c1 = '#64748B', c2 = '#94A3B8', textColor = 'var(--ink-muted)';
  if (hasScore) {
    if (clamped >= 80) { c1 = '#0D9488'; c2 = '#34D399'; textColor = 'var(--emerald)'; }
    else if (clamped >= 68) { c1 = '#D97706'; c2 = '#FBBF24'; textColor = 'var(--amber)'; }
    else { c1 = '#E11D48'; c2 = '#FB7185'; textColor = 'var(--rose)'; }
  }

  let missingBadgeHtml = '';
  if (Array.isArray(missingFields) && missingFields.length > 0) {
    const listTxt = missingFields.join(', ');
    const displayTxt = missingFields.length === 1 ? `Missing ${missingFields[0]}` : `Missing ${missingFields[0]} +${missingFields.length - 1}`;
    missingBadgeHtml = `<span class="garp-missing-pill" title="Missing crucial data: ${escapeHtml(listTxt)} — Tap to audit manually">⚠ ${escapeHtml(displayTxt)}</span>`;
  }

  return `
    <div class="garp-gauge-wrap garp-trigger-btn" data-ticker="${escapeHtml(ticker)}" title="GARP Score: ${hasScore ? clamped + '/100' : 'Not audited'} — Tap to audit">
      <svg viewBox="0 0 72 44">
        <defs>
          <linearGradient id="${gradId}" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="${c1}"/>
            <stop offset="100%" stop-color="${c2}"/>
          </linearGradient>
        </defs>
        <path d="M 8 36 A 28 28 0 0 1 64 36" fill="none" stroke="var(--border)" stroke-width="6.5" stroke-linecap="round"/>
        <path d="M 8 36 A 28 28 0 0 1 64 36" fill="none" stroke="url(#${gradId})" stroke-width="6.5" stroke-linecap="round"
          stroke-dasharray="${fillLen.toFixed(1)} ${arcLen.toFixed(1)}"/>
      </svg>
      <div class="garp-gauge-val" style="color:${textColor};">${hasScore ? clamped : '—'}</div>
      <div class="garp-gauge-lbl">GARP</div>
      ${missingBadgeHtml}
    </div>
  `;
}

function renderEntry(stock) {
  const hasNews = stock.articles && stock.articles.length > 0;
  const lead = hasNews ? stock.articles[0] : null;
  const rest = hasNews ? stock.articles.slice(1) : [];
  const overallSentiment = hasNews ? classifyStockOverallSentiment(stock.articles) : null;

  const savedScores = JSON.parse(localStorage.getItem('ml_garp_scores') || '{}');
  const scoreData = savedScores[stock.ticker];
  const garpScore = scoreData ? scoreData.score : null;

  const cleanTickerForFund = getCleanTicker(stock.ticker);
  const cachedFund = getCachedFundamentals(cleanTickerForFund);

  const hasQuote = stock.quote && stock.quote.last_price != null;
  const chg = hasQuote ? stock.quote.change_pct : null;
  const cardBorderClass = !hasQuote || chg == null
    ? 'ribbon-neu-card'
    : (chg > 0 ? 'ribbon-pos-card' : (chg < 0 ? 'ribbon-neg-card' : 'ribbon-neu-card'));
  const chgSign = chg != null && chg > 0 ? '+' : '';
  const chgPillClass = chg != null && chg > 0 ? 'pos' : (chg != null && chg < 0 ? 'neg' : 'neu');

  const signal = hasQuote ? getActionSignal(stock, savedScores) : null;
  const signalBadge = signal
    ? `<span class="signal-pill" style="border:1px solid ${signal.border || 'var(--border-strong)'}; color:${signal.color}; background:${signal.bg};">${signal.label}</span>`
    : '';

  const weakCashBadge = (cachedFund && cachedFund.cfo_to_ebitda != null && cachedFund.cfo_to_ebitda < 0.50)
    ? `<span class="ribbon-fund-pill" style="border:1px solid var(--rose-border); color:var(--rose); background:var(--rose-bg);" title="3-Yr Cumulative CFO/EBITDA is ${Math.round(cachedFund.cfo_to_ebitda * 100)}% (< 50%)">⚠️ Weak Cash</span>`
    : '';

  const capexBadge = (cachedFund && cachedFund.is_capex_heavy)
    ? `<span class="ribbon-fund-pill" style="border:1px solid var(--violet-border); color:var(--violet); background:var(--violet-bg);" title="Capex-Heavy: FA ${cachedFund.fixed_asset_ratio != null ? Math.round(cachedFund.fixed_asset_ratio * 100) + '%' : '—'}, CWIP ${cachedFund.cwip_ratio != null ? Math.round(cachedFund.cwip_ratio * 100) + '%' : '0%'}">🏗️ Capex</span>`
    : '';

  const pledgePct = getPromoterPledgePct(cachedFund);
  const pledgeBadge = (pledgePct != null && pledgePct >= 15)
    ? `<span class="ribbon-fund-pill" style="border:1px solid var(--rose-border); color:var(--rose); background:var(--rose-bg);" title="Promoter Pledged / Mortgaged Shares: ${pledgePct.toFixed(1)}%">🔒 Pledge ${pledgePct.toFixed(1)}%</span>`
    : '';

  const badgeHtml = hasNews
    ? (overallSentiment === 'negative'
        ? '<span class="entry-badge sent-badge-negative">⚠ Watch</span>'
        : overallSentiment === 'positive'
          ? '<span class="entry-badge sent-badge-positive">✓ Positive</span>'
          : '<span class="entry-badge fresh">News</span>')
    : '';

  // Full holdings row for expandable Details, Holdings & Actions drawer
  let fullHoldingsHtml = '';
  if (stock.qty && stock.qty > 0) {
    const invested = stock.qty * (stock.avgPrice || 0);
    if (hasQuote && stock.quote.last_price) {
      const currentVal = stock.qty * stock.quote.last_price;
      const pnl = currentVal - invested;
      const pnlSign = pnl >= 0 ? '+' : '';
      const pnlClass = pnl >= 0 ? 'price-up' : 'price-down';
      fullHoldingsHtml = `<div class="spec-line">💼 Qty: <strong>${stock.qty}</strong> <span class="spec-sep">·</span> Avg: ₹${Number(stock.avgPrice || 0).toFixed(2)} <span class="spec-sep">·</span> Inv: ₹${Math.round(invested).toLocaleString('en-IN')} <span class="spec-sep">·</span> Val: ₹${Math.round(currentVal).toLocaleString('en-IN')} (<span class="${pnlClass}">${pnlSign}₹${Math.abs(Math.round(pnl)).toLocaleString('en-IN')}</span>)</div>`;
    } else {
      fullHoldingsHtml = `<div class="spec-line">💼 Qty: <strong>${stock.qty}</strong> <span class="spec-sep">·</span> Avg: ₹${Number(stock.avgPrice || 0).toFixed(2)} <span class="spec-sep">·</span> Inv: ₹${Math.round(invested).toLocaleString('en-IN')}</div>`;
    }
  }

  // 3 Mini-Metric Tiles (PEG, PAT(2Q), CFO/EBITDA with Progress Bar)
  const fmtGrowth = (v) => {
    const pct = Number(v) * 100;
    if (pct > 999) return '>+999%';
    if (pct < -999) return '<-999%';
    return `${pct >= 0 ? '+' : ''}${pct.toFixed(1)}%`;
  };

  let miniTilesHtml = '';
  if (cachedFund) {
    // Tile 1: PEG
    const rawPeg = cachedFund.pegRatio != null ? cachedFund.pegRatio : cachedFund.peg_ratio;
    const pegVal = rawPeg != null ? Number(rawPeg) : null;
    let pegClass = '';
    if (pegVal != null) {
      if (pegVal > 0 && pegVal <= 1.5) pegClass = 'tile-good';
      else if (pegVal > 1.5 && pegVal <= 2.5) pegClass = 'tile-warn';
      else pegClass = 'tile-bad';
    }
    const pegDisplay = pegVal != null ? pegVal.toFixed(2) : 'N/A';

    // Tile 2: PAT(2Q)
    const patRaw = cachedFund.earnings_growth != null ? cachedFund.earnings_growth : cachedFund.earningsGrowth;
    let patClass = '';
    let patDisplay = '—';
    let patTitle = 'Last 2Q YoY PAT Growth';
    if (patRaw != null) {
      patDisplay = fmtGrowth(patRaw);
      patTitle = `Last 2Q YoY PAT Growth: ${(Number(patRaw) * 100).toFixed(1)}%`;
      if (patRaw >= 0.15) patClass = 'tile-good';
      else if (patRaw >= 0) patClass = 'tile-warn';
      else patClass = 'tile-bad';
    }

    // Tile 3: REV(2Q)
    const revRaw = cachedFund.revenue_growth != null ? cachedFund.revenue_growth : cachedFund.revenueGrowth;
    let revClass = '';
    let revDisplay = '—';
    let revTitle = 'Last 2Q YoY Revenue Growth';
    if (revRaw != null) {
      revDisplay = fmtGrowth(revRaw);
      revTitle = `Last 2Q YoY Revenue Growth: ${(Number(revRaw) * 100).toFixed(1)}%`;
      if (revRaw >= 0.15) revClass = 'tile-good';
      else if (revRaw >= 0) revClass = 'tile-warn';
      else revClass = 'tile-bad';
    }

    // Tile 4: CFO / EBITDA with Progress Bar
    const cfoRaw = cachedFund.cfo_to_ebitda;
    let cfoClass = '';
    let cfoDisplay = '—';
    let cfoFillPct = 0;
    let cfoBarColor = '#94A3B8';
    if (cfoRaw != null) {
      const pct = Math.round(Number(cfoRaw) * 100);
      cfoDisplay = `${pct}%`;
      cfoFillPct = Math.max(4, Math.min(100, pct));
      if (pct >= 70) { cfoClass = 'tile-good'; cfoBarColor = 'var(--emerald)'; }
      else if (pct >= 50) { cfoClass = 'tile-warn'; cfoBarColor = 'var(--amber)'; }
      else { cfoClass = 'tile-bad'; cfoBarColor = 'var(--rose)'; }
    }

    miniTilesHtml = `
      <div class="mini-tiles-grid">
        <div class="mini-tile ${pegClass}" title="Price/Earnings-to-Growth (3-Yr CAGR anchored)">
          <span class="mini-tile-lbl">PEG</span>
          <span class="mini-tile-val">${pegDisplay}</span>
        </div>
        <div class="mini-tile ${patClass}" title="${escapeHtml(patTitle)}">
          <span class="mini-tile-lbl">PAT (2Q)</span>
          <span class="mini-tile-val">${patDisplay}</span>
        </div>
        <div class="mini-tile ${revClass}" title="${escapeHtml(revTitle)}">
          <span class="mini-tile-lbl">REV (2Q)</span>
          <span class="mini-tile-val">${revDisplay}</span>
        </div>
        <div class="mini-tile ${cfoClass}" title="3-Yr Cumulative CFO / EBITDA Cash Conversion">
          <span class="mini-tile-lbl">CFO/EBITDA</span>
          <span class="mini-tile-val">${cfoDisplay}</span>
          ${cfoRaw != null ? `<div class="cfo-bar-track"><div class="cfo-bar-fill" style="width:${cfoFillPct}%; background:${cfoBarColor};"></div></div>` : ''}
        </div>
      </div>
    `;
  } else {
    miniTilesHtml = `<div id="ribbon-data-${escapeHtml(stock.ticker)}"><button class="ribbon-fund-btn" data-fund-ticker="${escapeHtml(cleanTickerForFund)}" data-fund-target="ribbon-data-${escapeHtml(stock.ticker)}">📊 Load Fundamentals (PEG, PAT, REV, CFO)</button></div>`;
  }

  // 3-Pill DMA Trend Ladder (Always Visible on Card)
  let dmaLadderHtml = '';
  let dmaFullLineHtml = '';
  if (hasQuote) {
    const ltp = stock.quote.last_price;
    const mkDmaPill = (shortLbl, fullLbl, val) => {
      if (val == null) return null;
      const isBelow = ltp < val;
      return `<span class="dma-pill ${isBelow ? 'below' : 'above'}" title="${fullLbl}: ₹${Math.round(val)} (LTP is ${isBelow ? 'below' : 'above'})">${shortLbl} ${isBelow ? '▼' : '▲'}</span>`;
    };
    const pills = [
      mkDmaPill('20D', '20-DMA', stock.quote.dma_20),
      mkDmaPill('50D', '50-DMA', stock.quote.dma_50),
      mkDmaPill('200D', '200-DMA', stock.quote.dma_200),
    ].filter(Boolean);

    if (stock.quote.near_52wk_flag === 'near-high') pills.push(`<span class="dma-pill flag">52W HIGH</span>`);
    else if (stock.quote.near_52wk_flag === 'near-low') pills.push(`<span class="dma-pill flag">52W LOW</span>`);

    if (pills.length) {
      dmaLadderHtml = `
        <div class="dma-ladder-row">
          <div class="dma-pills">
            <span class="dma-lbl">DMA</span>${pills.join('')}
          </div>
        </div>
      `;
    }

    const fullParts = [
      stock.quote.dma_20 != null ? `20D <strong>₹${Math.round(stock.quote.dma_20)}</strong>` : null,
      stock.quote.dma_50 != null ? `50D <strong>₹${Math.round(stock.quote.dma_50)}</strong>` : null,
      stock.quote.dma_200 != null ? `200D <strong>₹${Math.round(stock.quote.dma_200)}</strong>` : null,
    ].filter(Boolean);
    if (fullParts.length) {
      dmaFullLineHtml = `<div class="spec-line">📈 DMAs: ${fullParts.join(' <span class="spec-sep">·</span> ')}</div>`;
    }
  }

  // Drawer Fundamentals Spec Line (PE, ROCE, DR, Rev(2Q), FA/CWIP)
  let fundLineHtml = '';
  if (cachedFund) {
    const fParts = [];
    if (cachedFund.trailing_pe != null) fParts.push(`PE <strong>${Number(cachedFund.trailing_pe).toFixed(1)}</strong>`);
    const roceMetric = cachedFund.roce != null ? cachedFund.roce : cachedFund.return_on_equity;
    if (roceMetric != null) fParts.push(`ROCE <strong>${(Number(roceMetric) * 100).toFixed(1)}%</strong>`);
    const debtMetric = cachedFund.debt_ratio != null ? cachedFund.debt_ratio : (cachedFund.debt_to_equity != null ? cachedFund.debt_to_equity / 100 : null);
    if (debtMetric != null) fParts.push(`DR <strong>${Number(debtMetric).toFixed(2)}</strong>`);
    if (cachedFund.revenue_growth != null) {
      const exact = `${(Number(cachedFund.revenue_growth) * 100).toFixed(1)}%`;
      fParts.push(`<span title="Last 2Q YoY Sales Growth: ${exact}">Rev(2Q) <strong>${fmtGrowth(cachedFund.revenue_growth)}</strong></span>`);
    }
    if (cachedFund.fixed_asset_ratio != null) {
      const faPct = Math.round(Number(cachedFund.fixed_asset_ratio) * 100);
      const cwipTxt = cachedFund.cwip_ratio != null ? ` · CWIP ${Math.round(Number(cachedFund.cwip_ratio) * 100)}%` : '';
      fParts.push(`<span title="Fixed Assets + CWIP as % of Total Assets">FA <strong>${faPct}%</strong>${cwipTxt}</span>`);
    }
    if (pledgePct != null) {
      fParts.push(`<span title="Promoter Pledged / Mortgaged Shares">Pledge <strong>${pledgePct.toFixed(1)}%</strong></span>`);
    }
    if (fParts.length) {
      fundLineHtml = `<div class="spec-line" id="ribbon-data-${escapeHtml(stock.ticker)}">${fParts.join(' <span class="spec-sep">·</span> ')}</div>`;
    }
  }

  // Always-visible 1-line lead headline
  let leadHeadlineHtml = '';
  if (hasNews) {
    const leadSentiment = classifySentiment(lead.title);
    leadHeadlineHtml = `<div class="card-lead-headline" title="${escapeHtml(lead.title)}"><span class="sentiment-dot ${leadSentiment}"></span><a href="${escapeHtml(lead.url)}" target="_blank" rel="noopener">${escapeHtml(lead.title)}</a></div>`;
  }

  // Extra news inside drawer
  let moreNewsHtml = '';
  if (hasNews) {
    moreNewsHtml = `<div class="article-meta">${escapeHtml(lead.source)} · ${formatPublished(lead.published)}</div>`;
    if (rest.length) {
      moreNewsHtml += rest.map(a => {
        const s = classifySentiment(a.title);
        return `<div class="more-articles" style="margin-top:4px;">
          <div class="sub-headline"><span class="sentiment-dot ${s}"></span><a href="${escapeHtml(a.url)}" target="_blank" rel="noopener" style="color:inherit;text-decoration:none;border-bottom:1px solid var(--border-strong)">${escapeHtml(a.title)}</a></div>
          <div class="article-meta">${escapeHtml(a.source)} · ${formatPublished(a.published)}</div>
        </div>`;
      }).join('');
    }
  } else {
    moreNewsHtml = `<div class="quiet">No recent news found</div>`;
  }

  const extraCountLabel = rest.length ? ` · +${rest.length} news` : '';

  return `<div class="entry ${cardBorderClass} ${overallSentiment === 'negative' ? 'has-negative' : ''}">
    <div class="bento-stock-head">
      <div class="stock-id-col">
        <div class="stock-name-line">
          <span class="entry-name">${escapeHtml(stock.company)}</span>
          <span class="ribbon-code">${escapeHtml(cleanTickerForFund)}</span>
          ${badgeHtml}
          ${weakCashBadge}
          ${capexBadge}
          ${pledgeBadge}
        </div>
        <div class="stock-price-row">
          ${hasQuote ? `
            <span class="card-ltp">₹${stock.quote.last_price.toFixed(2)}</span>
            <span class="chg-pill ${chgPillClass}">${chg != null ? `${chgSign}${chg}%` : '—'}</span>
          ` : '<span class="quiet">Price not loaded</span>'}
          ${signalBadge}
        </div>
      </div>
      ${renderGarpArcSvg(garpScore, stock.ticker, scoreData ? scoreData.missingFields : [])}
    </div>

    ${leadHeadlineHtml}
    ${miniTilesHtml}

    <details class="card-details">
      <summary><span>Details, Holdings &amp; Actions${extraCountLabel}</span></summary>
      <div class="card-details-body">
        ${fundLineHtml}
        ${dmaLadderHtml}
        ${dmaFullLineHtml}
        ${fullHoldingsHtml}
        ${moreNewsHtml}
        <div class="card-actions-row" style="display:flex; align-items:center; gap:8px; flex-wrap:wrap; width:100%; margin-top:4px;">
          <button class="action-btn garp-trigger-btn" data-ticker="${escapeHtml(stock.ticker)}" style="font-size:11.5px; padding:6px 11px; border:1px solid var(--border-strong); background:var(--surface); border-radius:8px; cursor:pointer; font-weight:700; color:var(--ink);">📋 GARP Audit</button>
          <button class="ribbon-ai-btn" data-ticker="${escapeHtml(stock.ticker)}" data-company="${escapeHtml(stock.company)}" data-tier="${escapeHtml(stock.tier || 'Watch')}">✨ AI Thesis-Check</button>
        </div>
        <div id="ai-panel-entry-${escapeHtml(stock.ticker)}"></div>
      </div>
    </details>
  </div>`;
}

/* ==========================================================================
   BULK GARP AUTO-AUDIT ENGINE
   ========================================================================== */
/* ==========================================================================
   BULK GARP AUTO-AUDIT ENGINE (WITH CIRCUIT BREAKER & CALIBRATED GATES)
   ========================================================================== */
function computeAutoGarpForStock(ticker, fundamentals) {
  const cleanT = getCleanTicker(ticker);
  let inputs = {
    'garp-g1': "0",
    'garp-g2': "0",
    'garp-g3': "0",
    'garp-g4': "5",
    'garp-g5': "5",
    'garp-g6': "8",
    'garp-g7': "5",
    'garp-g8': "10",
    'garp-g9': "6"
  };
  let isSub12 = false;
  let isSuper18 = false;
  const missingFields = [];

  if (!fundamentals) {
    missingFields.push('Fundamentals');
  } else {
    const cachedRoceObj = getCachedRoce(cleanT);
    const hasRoce = fundamentals.roce != null || (cachedRoceObj && cachedRoceObj.roce != null) || fundamentals.return_on_equity != null;
    if (!hasRoce) missingFields.push('ROCE');

    const hasOpm = fundamentals.operating_margin != null || fundamentals.profit_margin != null;
    if (!hasOpm) missingFields.push('OPM');

    const hasDe = fundamentals.debt_to_equity != null || fundamentals.debt_ratio != null;
    if (!hasDe) missingFields.push('D/E');

    const pe = fundamentals.trailing_pe != null ? Number(fundamentals.trailing_pe) : null;
    if (pe == null || pe <= 0) missingFields.push('P/E');

    const revGrowth = fundamentals.revenueGrowth != null ? Number(fundamentals.revenueGrowth) : (fundamentals.revenue_growth != null ? Number(fundamentals.revenue_growth) : null);
    const earnGrowth = fundamentals.earningsGrowth != null ? Number(fundamentals.earningsGrowth) : (fundamentals.earnings_growth != null ? Number(fundamentals.earnings_growth) : null);
    if (revGrowth == null && earnGrowth == null) missingFields.push('Growth');

    const rawPeg = fundamentals.pegRatio != null ? fundamentals.pegRatio : fundamentals.peg_ratio;
    const peg = rawPeg != null ? Number(rawPeg) : null;

    // 1. Gate 1: RoCE (Stepped, Max 15 pts)
    const roceVal = fundamentals.roce != null ? fundamentals.roce : (cachedRoceObj ? cachedRoceObj.roce : null);
    const returnMetric = roceVal != null ? roceVal : (fundamentals.return_on_equity || 0);
    const returnPct = Number(returnMetric) * 100;
    let g1 = 0;
    if (returnPct >= 20) g1 = 15;
    else if (returnPct >= 16) g1 = 12;
    else if (returnPct >= 13) g1 = 8;
    else if (returnPct >= 10) g1 = 4;
    else g1 = 0;
    inputs['garp-g1'] = String(g1);

    // 2. Gate 2: OPM Floor (Stepped, Max 15 pts - pricing power & compounding)
    const opm = fundamentals.operating_margin != null ? Number(fundamentals.operating_margin) * 100 : null;
    const npm = fundamentals.profit_margin != null ? Number(fundamentals.profit_margin) * 100 : 0;
    const marginPct = opm != null ? opm : npm;
    let g2 = 0;
    if (marginPct >= 22) g2 = 15;
    else if (marginPct >= 18) g2 = 12;
    else if (marginPct >= 14) g2 = 9;
    else if (marginPct >= 10) g2 = 6;
    else if (marginPct >= 7) g2 = 3;
    else g2 = 0;
    inputs['garp-g2'] = String(g2);

    // 3. Gate 3: D/E Solvency (Max 10 pts)
    const deRaw = fundamentals.debt_to_equity;
    const de = deRaw != null ? (deRaw / 100) : (fundamentals.debt_ratio != null ? fundamentals.debt_ratio : null);
    let g3 = 5;
    if (de != null) {
      if (de <= 0.25) g3 = 10;
      else if (de <= 0.75) g3 = 5;
      else g3 = 0;
    }
    inputs['garp-g3'] = String(g3);

    // 4. Gate 4: Order Book QoQ (Max 5 pts, Default 5)
    inputs['garp-g4'] = "5";

    // 5. Gate 5: Book-to-Bill / Visibility (Max 5 pts, Default 5)
    inputs['garp-g5'] = "5";

    // 6. Gate 6: P/E Multiple Score (Max 15 pts with Hyper-Growth Cushion)
    let g6 = 8;
    if (pe != null && pe > 0) {
      if (pe < 25) g6 = 15;
      else if (pe < 35) g6 = 12;
      else if (pe < 50) g6 = 8;
      else if (pe < 70) g6 = 4;
      else g6 = 0;

      const maxG = Math.max(earnGrowth != null ? earnGrowth : 0, revGrowth != null ? revGrowth : 0);
      if (maxG >= 0.30 && g6 < 12) g6 = 12; // Hyper-growth valuation cushion
      else if (maxG >= 0.20 && g6 < 8) g6 = 8;
    }
    inputs['garp-g6'] = String(g6);

    // 7. Gate 7: PEG & Growth Valuation (Max 10 pts)
    let g7 = 5;
    if (peg != null && peg > 0) {
      if (peg <= 1.5) g7 = 10;
      else if (peg <= 2.5) g7 = 5;
      else g7 = 0;
    } else {
      const maxG = Math.max(earnGrowth != null ? earnGrowth : 0, revGrowth != null ? revGrowth : 0);
      if (maxG >= 0.25) g7 = 10;
      else if (maxG >= 0.12) g7 = 5;
      else g7 = 0;
    }
    inputs['garp-g7'] = String(g7);

    // 8. Gate 8: Sector Tailwinds (Max 15 pts, derived directly from SECTOR_MAP!)
    const sector = SECTOR_MAP[cleanT] || SECTOR_MAP[ticker] || "Other";
    let g8 = 5;
    const HIGH_TAILWIND_SECTORS = new Set([
      "Aerospace & Defense",
      "Capital Goods & Power Grid",
      "Specialty & Green Chemistry",
      "AI Cooling, Data Center & IT",
      "EMS",
      "Healthcare & Pharma",
      "Auto Ancillary & EV",
      "Clean Energy & Renewables"
    ]);
    const MOD_TAILWIND_SECTORS = new Set([
      "Financial Tollbooths",
      "Financials & NBFC",
      "Telecom & Fibre Optic",
      "Jewellery & Certification",
      "Digital IP, Media & Consumer"
    ]);

    if (HIGH_TAILWIND_SECTORS.has(sector)) {
      g8 = 15;
    } else if (MOD_TAILWIND_SECTORS.has(sector)) {
      g8 = 10;
    } else if (sector === "Commodity Converters & Distressed") {
      g8 = 0;
    } else {
      g8 = 5;
    }
    inputs['garp-g8'] = String(g8);

    // 9. Gate 9: FII / DII Flow & Trend (Max 10 pts, derived from technical trend structure)
    let g9 = 6;
    const cachedStock = newsData && newsData.results
      ? newsData.results.find(r => r.ticker === ticker || getCleanTicker(r.ticker) === cleanT)
      : null;
    if (cachedStock && cachedStock.quote && cachedStock.quote.last_price != null) {
      const q = cachedStock.quote;
      if (q.dma_50 != null && q.dma_200 != null && q.last_price > q.dma_50 && q.last_price > q.dma_200) {
        g9 = 10; // Accumulation and strong structural uptrend
      } else if (q.dma_200 != null && q.last_price < q.dma_200) {
        g9 = 0;  // Broken trend / distribution
      }
    }
    inputs['garp-g9'] = String(g9);

    const maxEarn = earnGrowth != null ? earnGrowth : 0;
    const maxRev = revGrowth != null ? revGrowth : 0;
    let primaryGrowth = Math.max(maxEarn, maxRev) || returnMetric;
    isSub12 = (primaryGrowth < 0.12);
    isSuper18 = (primaryGrowth >= 0.18);
  }

  // Exact sum of all 9 gates (Max 100 pts)
  let score = 0;
  for (let k in inputs) {
    score += parseInt(inputs[k], 10) || 0;
  }

  // CFO / EBITDA Cash Conversion reality check (3-Yr Cumulative CFO / EBITDA)
  // High cash conversion (>= 70%) supports score; weak cash conversion (< 50%) trims score unless capex-heavy expansion
  if (fundamentals && fundamentals.cfo_to_ebitda != null) {
    const cfoRatio = Number(fundamentals.cfo_to_ebitda);
    if (cfoRatio >= 0.70) {
      score += 2;
    } else if (cfoRatio < 0.50) {
      score -= fundamentals.is_capex_heavy ? 2 : 5;
    }
  }

  // Promoter Pledged / Mortgaged Shares check
  const pledgePctForGarp = getPromoterPledgePct(fundamentals);
  if (pledgePctForGarp != null) {
    if (pledgePctForGarp >= 30) {
      score -= 8;
    } else if (pledgePctForGarp >= 15) {
      score -= 4;
    }
  }

  score = Math.max(20, Math.min(100, Math.round(score)));

  let status = 'PRUNE_GTT_EXIT';
  if (score >= 80) status = 'ACCUMULATE_CORE';
  else if (score >= 65) status = 'HOLD_SATELLITE';
  else if (score >= 50) status = 'MONITOR_WATCHLIST';

  return { score, status, inputs, isSub12, isSuper18, missingFields };
}

async function runSingleStockGarpAutoAudit(ticker, btnEl = null) {
  const cleanT = getCleanTicker(ticker);
  const backendUrl = getBackendUrl();
  if (btnEl) {
    btnEl.disabled = true;
    btnEl.textContent = '⚡ Scoring…';
  }
  let fundamentals = getCachedFundamentals(cleanT);
  if (!fundamentals && backendUrl) {
    try {
      const resp = await fetch(`${backendUrl}/api/fundamentals?symbol=${encodeURIComponent(cleanT)}`);
      const data = await resp.json();
      if (resp.ok && data.status === 'success' && data.fundamentals) {
        fundamentals = data.fundamentals;
        setCachedFundamentals(cleanT, fundamentals);
      }
    } catch (e) {}
  }

  const computed = computeAutoGarpForStock(ticker, fundamentals);
  const savedScores = JSON.parse(localStorage.getItem('ml_garp_scores') || '{}');
  savedScores[ticker] = computed;
  if (cleanT !== ticker) savedScores[cleanT] = computed;
  localStorage.setItem('ml_garp_scores', JSON.stringify(savedScores));

  renderContent();
  if (activeLookupState && getCleanTicker(activeLookupState.displayTicker) === cleanT) {
    renderSingleStockLookupCard();
  }
  if (typeof renderPortfolioAnalytics === 'function') {
    renderPortfolioAnalytics();
  }
}

let isBulkGarpRunning = false;

async function runBulkGarpAudit() {
  if (isBulkGarpRunning) return;
  const backendUrl = getBackendUrl();
  const btn = $('#bulk-garp-btn');

  if (!backendUrl) {
    openSettings();
    showKiteStatus('Set Backend URL first in settings to run the Auto Audit.', 'error');
    return;
  }

  isBulkGarpRunning = true;
  const progWrap = document.getElementById('garp-progress-wrap');
  const progFill = document.getElementById('garp-progress-fill');
  const progText = document.getElementById('garp-progress-text');
  const progPct = document.getElementById('garp-progress-pct');
  if (progWrap) progWrap.style.display = 'block';
  if (progFill) progFill.style.width = '2%';
  if (btn) {
    btn.classList.add('spinning');
    btn.innerHTML = '<span>⏳ Auditing...</span>';
  }

  const stocks = Store.getStocks();
  const savedScores = JSON.parse(localStorage.getItem('ml_garp_scores') || '{}');

  let failedCount = 0;
  let consecutiveFails = 0;
  let stoppedEarly = false;

  for (let i = 0; i < stocks.length; i++) {
    const [ticker] = stocks[i];
    const cleanT = getCleanTicker(ticker);

    const pctDone = Math.round(((i + 1) / stocks.length) * 100);
    if (btn) btn.innerHTML = `<span>⏳ ${i + 1}/${stocks.length} (${pctDone}%)</span>`;
    if (progFill) progFill.style.width = `${pctDone}%`;
    if (progText) progText.textContent = `Auditing ${cleanT} (${i + 1} of ${stocks.length})…`;
    if (progPct) progPct.textContent = `${pctDone}%`;

    let fundamentals = getCachedFundamentals(cleanT);
    if (!fundamentals) {
      try {
        await new Promise(r => setTimeout(r, 2500)); // 2.5s pacing to avoid Yahoo rate limits
        const resp = await fetch(`${backendUrl}/api/fundamentals?symbol=${encodeURIComponent(cleanT)}`);
        const data = await resp.json();

        if (resp.ok && data.status === 'success') {
          fundamentals = data.fundamentals;
          setCachedFundamentals(cleanT, fundamentals);
          consecutiveFails = 0;
        } else {
          console.warn(`Yahoo blocked data for ${cleanT}: ${data.error}`);
          failedCount++;
          consecutiveFails++;
          if (consecutiveFails >= 3) {
            stoppedEarly = true;
            console.warn('Stopping bulk audit early due to Yahoo rate limit.');
            break;
          }
        }
      } catch (e) {
        console.warn('Network error fetching fundamentals for', cleanT);
        failedCount++;
        consecutiveFails++;
        if (consecutiveFails >= 3) {
          stoppedEarly = true;
          break;
        }
      }
    }

    const computed = computeAutoGarpForStock(ticker, fundamentals);
    if (fundamentals || !savedScores[ticker]) {
      savedScores[ticker] = computed;
    }
  }

  localStorage.setItem('ml_garp_scores', JSON.stringify(savedScores));
  localStorage.setItem('ml_last_garp_audit', new Date().toISOString());
  updateGarpAuditStatus();

  if (btn) {
    btn.classList.remove('spinning');
    if (stoppedEarly) {
      btn.innerHTML = `<span style="color:var(--clay);">⚠ Paused: Yahoo rate limit hit. Try again in 15 mins.</span>`;
      setTimeout(() => { btn.innerHTML = '<span>🤖 GARP Auto-Audit</span>'; }, 6000);
    } else if (failedCount > 0) {
      btn.innerHTML = `<span style="color:var(--clay);">⚠ Done (${failedCount} skipped by Yahoo).</span>`;
      setTimeout(() => { btn.innerHTML = '<span>🤖 GARP Auto-Audit</span>'; }, 5000);
    } else {
      btn.innerHTML = '<span>🤖 GARP Auto-Audit</span>';
    }
  }

  if (progWrap) {
    if (progFill) progFill.style.width = '100%';
    setTimeout(() => { progWrap.style.display = 'none'; }, 1200);
  }
  isBulkGarpRunning = false;
  renderContent();
  renderPortfolioAnalytics();
}

/* ==========================================================================
   GLOBAL EVENT LISTENERS (MODAL & UI CONTROLS)
   ========================================================================== */
document.addEventListener('click', (e) => {
  const garpBtn = e.target.closest('.garp-trigger-btn');
  const garpRefreshBtn = e.target.closest('#garp-refresh-btn');
  if (garpRefreshBtn) {
    if (!activeGarpTicker) return;
    const cleanT = getCleanTicker(activeGarpTicker);
    const backendUrl = getBackendUrl();
    garpRefreshBtn.disabled = true;
    garpRefreshBtn.textContent = '🔄 Refreshing…';

    (async () => {
      let fundamentals = null;
      if (backendUrl) {
        try {
          const resp = await fetch(`${backendUrl}/api/fundamentals?symbol=${encodeURIComponent(cleanT)}`);
          const data = await resp.json();
          if (resp.ok && data.status === 'success' && data.fundamentals) {
            fundamentals = data.fundamentals;
            setCachedFundamentals(cleanT, fundamentals);
          }
        } catch (err) {}
      }
      if (!fundamentals) {
        fundamentals = getCachedFundamentals(cleanT);
      }

      const computed = computeAutoGarpForStock(activeGarpTicker, fundamentals);

      // 1. Update popup dropdowns to match newly computed parameters
      if (computed.inputs) {
        document.querySelectorAll('.garp-input').forEach(select => {
          if (computed.inputs[select.id] !== undefined) {
            select.value = computed.inputs[select.id];
          }
        });
      }

      // 2. Update popup live score & status label
      updateLiveGarpScore();

      // 3. Immediately persist updated score to local storage
      const savedScores = JSON.parse(localStorage.getItem('ml_garp_scores') || '{}');
      savedScores[activeGarpTicker] = computed;
      if (cleanT !== activeGarpTicker) savedScores[cleanT] = computed;
      localStorage.setItem('ml_garp_scores', JSON.stringify(savedScores));

      // 4. Update the meter and allocation view right away
      renderContent();
      if (activeLookupState && getCleanTicker(activeLookupState.displayTicker) === cleanT) {
        renderSingleStockLookupCard();
      }
      if (typeof renderPortfolioAnalytics === 'function') {
        renderPortfolioAnalytics();
      }

      garpRefreshBtn.disabled = false;
      garpRefreshBtn.textContent = '🔄 Refresh';
    })();
    return;
  }

  if (garpBtn) {
    activeGarpTicker = garpBtn.dataset.ticker;
    if ($('#garp-modal-title')) $('#garp-modal-title').textContent = `GARP Audit: ${activeGarpTicker}`;
    
    const savedScores = JSON.parse(localStorage.getItem('ml_garp_scores') || '{}');
    const savedData = savedScores[activeGarpTicker];
    
    if (savedData && savedData.inputs) {
      document.querySelectorAll('.garp-input').forEach(select => {
        if (savedData.inputs[select.id] !== undefined) {
          select.value = savedData.inputs[select.id];
        }
      });
    } else {
      document.querySelectorAll('.garp-input').forEach(select => select.selectedIndex = 0);
    }
    
    updateLiveGarpScore();
    if ($('#garp-overlay')) $('#garp-overlay').style.display = 'flex';
  }
  
  if (e.target.closest('#garp-close-btn')) {
    if ($('#garp-overlay')) $('#garp-overlay').style.display = 'none';
  }
  
  if (e.target.closest('#garp-save-btn')) {
    if (!activeGarpTicker) return;
    
    let total = 0;
    let inputs = {};
    document.querySelectorAll('.garp-input').forEach(select => {
      total += parseInt(select.value) || 0;
      inputs[select.id] = select.value;
    });
    
    const savedScores = JSON.parse(localStorage.getItem('ml_garp_scores') || '{}');
    const oldData = savedScores[activeGarpTicker] || {};
    
    savedScores[activeGarpTicker] = { 
      score: total, 
      status: $('#garp-status-label').textContent, 
      inputs: inputs,
      isSub12: oldData.isSub12,
      isSuper18: oldData.isSuper18,
      missingFields: []
    };
    localStorage.setItem('ml_garp_scores', JSON.stringify(savedScores));
    
    if ($('#garp-overlay')) $('#garp-overlay').style.display = 'none';
    
    renderContent();
    if (activeLookupState && activeLookupState.displayTicker === activeGarpTicker) {
      renderSingleStockLookupCard();
    }
    if (typeof renderPortfolioAnalytics === 'function') {
      renderPortfolioAnalytics();
    }
  }
});

document.addEventListener('change', (e) => {
  if (e.target.classList.contains('garp-input')) {
    updateLiveGarpScore();
  }
});

function updateLiveGarpScore() {
  let total = 0;
  document.querySelectorAll('.garp-input').forEach(select => {
    total += parseInt(select.value) || 0;
  });
  
  const scoreEl = $('#garp-live-score');
  const labelEl = $('#garp-status-label');
  if (!scoreEl || !labelEl) return;
  
  scoreEl.textContent = `${total} / 100`;
  
  if (total >= 85) {
    scoreEl.style.color = '#5B7553';
    labelEl.textContent = 'ACCUMULATE_CORE';
  } else if (total >= 70) {
    scoreEl.style.color = '#B8923F';
    labelEl.textContent = 'HOLD_SATELLITE';
  } else if (total >= 50) {
    scoreEl.style.color = '#B8923F';
    labelEl.textContent = 'MONITOR_WATCHLIST';
  } else {
    scoreEl.style.color = '#A4453A';
    labelEl.textContent = 'PRUNE_GTT_EXIT';
  }
}

checkKiteOAuthCallback();
init();