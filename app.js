const DEFAULT_STOCKS = [
  ["VBL","Varun Beverages","Top30"],["SHRIRAMFIN","Shriram Finance","Top30"],
  ["MAXHEALTH","Max Healthcare","Top30"],["CGPOWER","CG Power & Industrial","Top30"],
  ["MTARTECH","MTAR Technologies","Top30"],["CAMS","CAMS","Top30"],
  ["BSE","BSE Ltd","Top30"],["LAURUSLABS","Laurus Labs","Top30"],
  ["DATAPATTNS","Data Patterns","Top30"],["RAINBOW","Rainbow Children's Medicare","Top30"],
  ["KFINTECH","KFin Technologies","Top30"],["THYROCARE","Thyrocare Technologies","Top30"],
  ["BEL","Bharat Electronics","Top30"],["VINATIORGA","Vinati Organics","Top30"],
  ["SRF","SRF Ltd","Top30"],["PARAS","Paras Defence","Top30"],
  ["YATHARTH","Yatharth Hospital","Top30"],["AFFLE","Affle India","Top30"],
  ["SONACOMS","Sona BLW Precision","Top30"],["UNIMECH","Unimech Aerospace","Top30"],
  ["KAYNES","Kaynes Technology","Top30"],["IZMO","izmo Ltd","Top30"],
  ["SYRMA","Syrma SGS Technology","Top30"],["ZENTEC","Zen Technologies","Top30"],
  ["M&M","Mahindra & Mahindra","Top30"],["ZYDUSLIFE","Zydus Lifesciences","Top30"],
  ["NETWEB","Netweb Technologies","Top30"],["SUZLON","Suzlon Energy","Top30"],
  ["CYIENTDLM","Cyient DLM","Top30"],["SYNGENE","Syngene International","Top30"],
  ["WAAREEENER","Waaree Energies","Top31-50"],["TARIL","Transformers & Rectifiers","Top31-50"],
  ["UNOMINDA","UNO Minda","Top31-50"],["MARKSANS","Marksans Pharma","Top31-50"],
  ["MOTHERSON","Samvardhana Motherson","Top31-50"],["CCL","CCL Products","Top31-50"],
  ["CPPLUS","CP Plus","Top31-50"],["HBLENGINE","HBL Engineering","Top31-50"],
  ["PRAJIND","Praj Industries","Top31-50"],["AARTIIND","Aarti Industries","Top31-50"],
  ["WABAG","VA Tech Wabag","Top31-50"],["ZAGGLE","Zaggle Prepaid","Top31-50"],
  ["GRAVITA","Gravita India","Top31-50"],["SAREGAMA","Saregama India","Top31-50"],
  ["ASTRAMICRO","Astra Microwave","Top31-50"],["COFORGE","Coforge","Top31-50"],
  ["PARAGMILK","Parag Milk Foods","Top31-50"],["BDL","Bharat Dynamics","Top31-50"],
  ["APLAPOLLO","APL Apollo Tubes","Top31-50"],["STALLION","Stallion India Fluorochemicals","Top31-50"],
  ["VISHNU","Vishnu Chemicals","Top31-50"],["HCLTECH","HCL Technologies","Top31-50"],
  ["GENUSPOWER","Genus Power","Top31-50"],
  ["GRSE","Garden Reach Shipbuilders","Top51-75"],["RAILTEL","RailTel","Top51-75"],
  ["FIEMIND","Fiem Industries","Top51-75"],["RRKABEL","RR Kabel","Top51-75"],
  ["FCL","Fineotex Chemical","Top51-75"],["BELRISE","Belrise Industries","Top51-75"],
  ["AXISCADES","AXISCADES Technologies","Top51-75"],["VIMTALABS","Vimta Labs","Top51-75"],
  ["LTFOODS","LT Foods","Top51-75"],["TEJASNET","Tejas Networks","Top51-75"],
  ["MAZDOCK","Mazagon Dock","Top51-75"],["MCX","MCX India","Top51-75"],
  ["E2E","E2E Networks","Top51-75"],["HONASA","Honasa Consumer","Top51-75"],
  ["UNITDSPR","United Spirits","Top51-75"],["APOLLO","Apollo Micro Systems","Top51-75"],
  ["KAJARIACER","Kajaria Ceramics","Top51-75"],["AZAD","Azad Engineering","Top51-75"],
  ["POONAWALLA","Poonawalla Fincorp","Top51-75"],["IKS","IKS Health","Top51-75"],
  ["INOXINDIA","Inox India","Top51-75"],["GROWW","Groww","Top51-75"],
  ["DCXINDIA","DCX Systems","Top51-75"],
  ["ATHERENERG","Ather Energy","Watch"],["SHARDACROP","Sharda Cropchem","Watch"],
  ["SIGMAADV","Sigma Solve","Watch"],["SHAKTIPUMP","Shakti Pumps","Watch"],
  ["OSWALPUMPS","Oswal Pumps","Watch"],["PREMEXPLN","Premier Explosives","Watch"],
  ["TRAVELFOOD","Travel Food Services","Watch"],["GMDCLTD","GMDC","Watch"],
  ["ETERNAL","Eternal (Zomato)","Watch"],["TRIVENI","Triveni Engineering","Watch"],
  ["DEEPINDS","Deep Industries","Watch"],["STLTECH-BE","Sterlite Technologies","Watch"],
  ["PRECWIRE","Precision Wires","Watch"],["PACEDIGITK","Pace Digital","Watch"],
  ["ADFFOODS","ADF Foods","Watch"],["QPOWER-BE","Q Power","Watch"],
  ["AEROFLEX","Aeroflex Industries","Watch"],["SPICEJET","SpiceJet","Watch"],
  ["IDEA","Vodafone Idea","Watch"],["HFCL","HFCL Ltd","Watch"],
];

const TIER_LABELS = {
  "Top30":    "✅ Accumulate",
  "Top31-50": "🔵 Hold",
  "Top51-75": "🟡 Trim",
  "Watch":    "🔴 Exit",
};
const TIER_ORDER = ["Top30", "Top31-50", "Top51-75", "Watch"];

function getCleanTicker(ticker) {
  return ticker.replace(/-BE$/, '');
}

const Store = {
  getApiKey: () => localStorage.getItem('ml_api_key') || '',
  setApiKey: (v) => localStorage.setItem('ml_api_key', v),
  getStocks: () => {
    const raw = localStorage.getItem('ml_stocks');
    if (!raw) return DEFAULT_STOCKS;
    try { return JSON.parse(raw); } catch { return DEFAULT_STOCKS; }
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

  const cached = Store.getCache();
  if (cached && cached.results) {
    newsData = cached;
    renderContent();
    updateStatusBar();
  }

  fetchAndRenderGlobalCues();

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
      diagSuffix = ` — ⚠ backend could not be reached for any stock (${escapeHtml(d.lastError || 'unknown error')}). Check your backend URL in Settings and that it's running.`;
    } else if (d.errorCount > d.totalCount * 0.3) {
      diagSuffix = ` — ⚠ ${d.errorCount}/${d.totalCount} stocks failed to fetch (${escapeHtml(d.lastError || 'see details')})`;
    }
  }
  refreshStatus.textContent = `Last fetched ${timeLabel(newsData.fetchedAt)}${fresh ? ' today' : ' (older — refresh for today)'}${diagSuffix}`;
  datelineStatus.textContent = fresh ? 'Updated this morning' : 'Stale — tap refresh';
  datelineStatus.classList.toggle('fresh', fresh);

  updatePriceStatus();
}

function updatePriceStatus() {
  const priceStatusEl = $('#price-status');
  if (!priceStatusEl) return;

  const hasAnyQuote = newsData && newsData.results && newsData.results.some(r => r.quote && r.quote.last_price != null);
  priceStatusEl.textContent = hasAnyQuote ? 'Prices updated' : 'Prices: tap to fetch';
}

function openSettings() {
  const stocks = Store.getStocks();
  $('#stocklist-input').value = stocks.map(s => s.join(',')).join('\n');
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
    return [parts[0] || '', parts[1] || parts[0] || '', parts[2] || 'Watch'];
  }).filter(p => p[0]);
  if (parsed.length) Store.setStocks(parsed);
  closeSettings();
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
  if (!v) return false;
  if (v.length > 20) return false;
  if (/\s/.test(v)) return false;
  if (/^-?\d+(\.\d+)?$/.test(v)) return false;
  if (!/^[A-Z0-9&\-]+$/i.test(v)) return false;
  if (!/[A-Z]/i.test(v)) return false;
  if (looksLikeISIN(v)) return false;
  if (KNOWN_NON_TICKER_LABELS.has(v.toUpperCase())) return false;
  return true;
}

function parseRowsFromSheet(rows) {
  if (!rows || rows.length === 0) return [];
  const firstRow = rows[0].map(c => String(c || '').toLowerCase().trim());
  const hasHeader = firstRow.some(c => c.includes('ticker') || c.includes('symbol') || c.includes('instrument'));
  const startIdx = hasHeader ? 1 : 0;

  const result = [];
  let skippedCount = 0;
  for (let i = startIdx; i < rows.length; i++) {
    const row = rows[i];
    if (!row || !row[0]) continue;

    const ticker = String(row[0]).trim().toUpperCase();
    if (!looksLikeRealTicker(ticker)) {
      skippedCount++;
      continue;
    }
    const company = String(row[1] || row[0]).trim();
    let tier = String(row[2] || '').trim();
    if (!VALID_TIERS.includes(tier)) tier = 'Watch';
    result.push([ticker, company, tier]);
  }
  if (skippedCount > 0) {
    console.warn(`Skipped ${skippedCount} row(s) that didn't look like real tickers.`);
  }
  return result;
}

function parseKiteHoldingsRows(rows) {
  if (!rows || rows.length === 0) return null;
  const header = rows[0].map(c => String(c || '').toLowerCase().trim());

  const instrIdx = header.findIndex(h =>
    h === 'instrument' || h === 'tradingsymbol' || h === 'symbol' || h.includes('trading symbol'));

  if (instrIdx === -1) return null;

  const result = [];
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    const ticker = String(row[instrIdx] || '').trim().toUpperCase();
    if (!looksLikeRealTicker(ticker)) continue;
    result.push([ticker, ticker, 'Watch']);
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
    filenameEl.textContent = 'Could not load spreadsheet reader — check your connection.';
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

      let parsed = parseKiteHoldingsRows(rows);
      let isKite = !!parsed;
      if (!parsed) parsed = parseRowsFromSheet(rows);

      if (!parsed || parsed.length === 0) {
        filenameEl.textContent = 'Could not find any real stock tickers in this file.';
        filenameEl.style.color = 'var(--clay)';
        return;
      }

      $('#stocklist-input').value = parsed.map(r => r.join(',')).join('\n');
      filenameEl.textContent = isKite
        ? `✓ ${file.name} — ${parsed.length} holdings from Kite export (all set to Watch tier)`
        : `✓ ${file.name} — ${parsed.length} stocks loaded`;
      filenameEl.style.color = 'var(--sage)';
    } catch (err) {
      filenameEl.textContent = `Could not read "${file.name}" — try saving as .xlsx`;
      filenameEl.style.color = 'var(--clay)';
    }
  };
  reader.onerror = () => {
    filenameEl.textContent = 'Could not read that file.';
    filenameEl.style.color = 'var(--clay)';
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
  const existingByTicker = new Map(existing.map(([t, c, tier]) => [t.toUpperCase(), [t, c, tier]]));
  const defaultsByTicker = new Map(DEFAULT_STOCKS.map(([t, c, tier]) => [t.toUpperCase(), [t, c, tier]]));

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
    if (existingByTicker.has(ticker)) return existingByTicker.get(ticker);
    if (defaultsByTicker.has(ticker)) return defaultsByTicker.get(ticker);

    const strippedTicker = stripSeriesSuffix(ticker);
    if (existingStripped.has(strippedTicker)) {
      const [, company, tier] = existingStripped.get(strippedTicker);
      return [ticker, company, tier];
    }
    if (defaultsStripped.has(strippedTicker)) {
      const [, company, tier] = defaultsStripped.get(strippedTicker);
      return [ticker, company, tier];
    }
    return [ticker, ticker, 'Watch'];
  });

  Store.setStocks(merged);
  $('#stocklist-input').value = merged.map(s => s.join(',')).join('\n');

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
  const rows = stocksList.map(([ticker, company, tier]) =>
    `<div class="entry"><div class="entry-head"><div><span class="entry-name">${escapeHtml(company)}</span><span class="entry-ticker">${escapeHtml(ticker)}</span></div><span class="entry-badge fresh">${escapeHtml(tier)}</span></div></div>`
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
  'show cause notice', 'irregularit',
  'downgrade', 'default', 'bankrupt', 'insolven', 'liquidat', 'debt-laden',
  'debt trap', 'rating cut', 'outlook negative', 'restructuring debt',
  'fundraising delay', 'fundraise concern', 'cash crunch', 'going concern',
  'net loss', 'posts loss', 'loss widens', 'profit declin', 'profit falls',
  'profit drops', 'profit slips', 'profit dips', 'revenue falls', 'revenue declin',
  'misses estimate', 'falls short', 'below estimate', 'disappoint', 'muted outlook',
  'weak quarter', 'weak earnings', 'margin contraction', 'margin pressure',
  'margin squeeze', 'cost overrun', 'input cost', 'profit warning', 'lowered guidance',
  'shares fall', 'shares falls', 'shares slip', 'shares slips', 'shares slide',
  'shares slides', 'shares drop', 'shares drops', 'shares decline', 'shares tank',
  'shares tanks', 'shares tumble', 'shares crash', 'shares plunge', 'shares sink',
  'shares dip', 'shares dips', 'shares edge lower', 'shares trade lower',
  'stock falls', 'stock slips', 'stock slides', 'stock drops', 'stock declines',
  'stock tanks', 'stock tumbles', 'stock crashes', 'stock plunges', 'stock dips',
  '52-week low', 'hits low', 'multi-year low', 'underperform', 'sell rating',
  'red flag', 'concern over', 'warns of', 'cautious outlook', 'weak demand',
  'demand slowdown', 'sales decline', 'sales fall', 'sales drop',
  'resign', 'steps down', 'quits', 'sacked', 'fired', 'arrest', 'lawsuit', 'sued',
  'penalty', 'fine imposed', 'ban', 'banned', 'halted', 'suspend', 'delisted',
  'strike', 'shutdown', 'shuts down', 'layoff', 'job cut', 'recall',
  'breach', 'hack', 'cyberattack', 'data leak', 'accident', 'fire breaks',
  'explosion', 'death', 'killed', 'protest', 'boycott', 'controversy',
  'stake sale concern', 'pledge shares', 'promoter sells', 'promoter pledg',
  'fii exit', 'fii selling', 'delay in', 'order cancel', 'contract terminat',
];

const POSITIVE_WORDS = [
  'profit rises', 'profit rise', 'profit jumps', 'profit surges', 'profit soars',
  'profit grows', 'profit climbs', 'profit beats', 'revenue rises', 'revenue grows',
  'revenue jumps', 'revenue surges', 'beats estimate', 'beats street', 'tops estimate',
  'beat street view', 'strong quarter', 'strong earnings', 'strong show',
  'raises guidance', 'raises outlook', 'improved margin', 'margin expansion',
  'strong growth', 'robust growth', 'strong demand', 'demand surge',
  'shares jump', 'shares jumps', 'shares rise', 'shares rises', 'shares gain',
  'shares gains', 'shares surge', 'shares surges', 'shares rally', 'shares rallies',
  'shares climb', 'shares climbs', 'shares soar', 'shares soars', 'shares advance',
  'shares advances', 'shares up', 'stock jumps', 'stock rises', 'stock gains',
  'stock surges', 'stock rallies', 'stock climbs', 'stock soars', 'stock advances',
  '52-week high', 'all-time high', 'record high', 'hits high', 'multi-year high',
  'outperform', 'buy rating', 'target price raised', 'upgrade', 'rating upgrade',
  'outlook positive', 'top gainer', 'best performer',
  'wins order', 'wins contract', 'wins record', 'wins deal', 'secures order',
  'bags order', 'bags contract', 'new contract', 'gets nod', 'gets approval',
  'usfda nod', 'receives approval', 'expansion plan', 'capacity expansion',
  'buyback', 'dividend announce', 'special dividend', 'bonus issue', 'stock split',
  'partnership with', 'strategic tie-up', 'joint venture', 'acquisition complete',
  'foray into', 'launches', 'unveils', 'breakthrough', 'patent grant',
  'fii buying', 'institutional buying', 'promoter buys', 'stake increase',
  'debt-free', 'turns profitable', 'pre-sales',
  'wind order', 'mw order', 'crore order', 'rs order', 'export order',
  'raises guidance', 'raises outlook', 'raises fy', 'raises revenue guidance',
];

function classifySentiment(title) {
  if (!title) return 'neutral';
  const lower = title.toLowerCase();
  const hasNegative = NEGATIVE_WORDS.some(w => lower.includes(w));
  const hasPositive = POSITIVE_WORDS.some(w => lower.includes(w));
  if (hasNegative && !hasPositive) return 'negative';
  if (hasPositive && !hasNegative) return 'positive';
  if (hasNegative && hasPositive) return 'negative';
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
  const latestSentiment = classifySentiment(latest.title);
  return latestSentiment === 'negative' ? 'negative' : 'positive';
}

function applySorting(stocks, sortType) {
  if (!stocks || stocks.length === 0) return stocks;

  const sorted = [...stocks];

  switch(sortType) {
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
      sorted.sort((a, b) => a.company.localeCompare(b.company));
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
  if (!backendUrl) {
    return { articles: [], error: 'no-backend-configured' };
  }
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 12000);
    const resp = await fetch(`${backendUrl}/api/news?company=${encodeURIComponent(company)}`, { signal: controller.signal });
    clearTimeout(timer);
    const data = await resp.json();
    if (!resp.ok || data.status !== 'success') {
      return { articles: [], error: data.error || `backend returned HTTP ${resp.status}` };
    }
    const sorted = sortArticlesByDateDesc(data.articles || []);
    return { articles: sorted.slice(0, maxArticles), error: null };
  } catch (e) {
    return { articles: [], error: e.message || String(e) };
  }
}

const BATCH_SIZE = 6;
const BATCH_PAUSE_MS = 200;

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

  for (let batchStart = 0; batchStart < stocks.length; batchStart += BATCH_SIZE) {
    const batchEnd = Math.min(batchStart + BATCH_SIZE, stocks.length);
    const batch = stocks.slice(batchStart, batchEnd);

    const batchPromises = batch.map(async ([ticker, company, tier], batchIdx) => {
      const { articles, error } = await fetchStockNews(ticker, company);
      const prevEntry = newsData && newsData.results && newsData.results.find(r => r.ticker === ticker);
      const existingQuote = prevEntry ? prevEntry.quote : null;
      results[batchStart + batchIdx] = { ticker, company, tier, articles, quote: existingQuote || null };
      if (articles.length === 0) {
        diagnostics.emptyCount++;
        if (error) { diagnostics.errorCount++; diagnostics.lastError = error; }
      }
      completed++;
      refreshLabel.textContent = `Fetching… ${completed}/${stocks.length}`;
    });

    await Promise.all(batchPromises);

    if (batchEnd < stocks.length) {
      await new Promise(r => setTimeout(r, BATCH_PAUSE_MS));
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
    const results = stocks.map(([ticker, company, tier]) => {
      const q = quotes[ticker];
      return { ticker, company, tier, articles: [], quote: (q && !q.error) ? q : null };
    });
    newsData = { fetchedAt: new Date().toISOString(), results };
    Store.setCache(newsData);
  }
  updateStatusBar();
  renderContent();
}

function getStockSuggestions(query) {
  const stocks = Store.getStocks();
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return stocks
    .filter(([ticker, company]) =>
      ticker.toLowerCase().includes(q) || company.toLowerCase().includes(q))
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
  if (!backendUrl) return;

  const container = document.getElementById('global-cues-container');

  const cachedStr = localStorage.getItem('ml_global_cues');
  if (cachedStr) {
    try {
      const cached = JSON.parse(cachedStr);
      if (Date.now() - cached.time < 30 * 60 * 1000) {
        renderGlobalCues(cached.cues, container);
        return;
      }
    } catch(e) {}
  }

  try {
    const resp = await fetch(`${backendUrl}/api/market/global-cues`);
    const data = await resp.json();
    if (data.status === 'success') {
      localStorage.setItem('ml_global_cues', JSON.stringify({ time: Date.now(), cues: data.cues }));
      renderGlobalCues(data.cues, container);
    }
  } catch (e) {
    console.error('Failed to fetch global cues', e);
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
    } catch(e) {}
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
  } catch(e) {
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
  } catch (e) { lookupError = e.message || String(e); }

  const stockObj = { ticker: displayTicker, company: searchTerm, tier: stockTier, articles };
  const aiBtnHtml = `<button id="ai-briefing-btn" class="ai-briefing-btn">✨ Generate AI 1-Minute Briefing</button>`;

  const diagnoseLink = articles.length === 0
    ? `<button id="diagnose-btn" style="margin-top:10px;font-family:-apple-system,system-ui,sans-serif;font-size:11px;color:var(--ink-soft);background:none;border:1px solid var(--rule-strong);border-radius:6px;padding:5px 10px">🔍 See raw backend response (diagnose why)</button>`
    : '';
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
    ${diagnoseLink}
  </div>`;
  $('#lookup-close-btn').addEventListener('click', clearLookupResult);
  const diagBtn = document.getElementById('diagnose-btn');
  if (diagBtn) diagBtn.addEventListener('click', () => runDiagnosticCheck(searchTerm));
  const fundBtn = document.getElementById('fundamentals-btn');
  if (fundBtn) fundBtn.addEventListener('click', () => fetchAndShowFundamentals(displayTicker));
  const aiBtn = document.getElementById('ai-briefing-btn');
  if (aiBtn) aiBtn.addEventListener('click', () => fetchAndShowAIBriefing(displayTicker, searchTerm, articles, 'ai-briefing-panel', aiBtn, stockTier));
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
  } catch (e) { return null; }
}
function setCachedRoce(ticker, roceData) {
  localStorage.setItem(`ml_roce_${ticker}`, JSON.stringify({ date: new Date().toDateString(), roce: roceData }));
}

function formatFundamentalsError(rawError) {
  const lower = (rawError || '').toLowerCase();
  if (lower.includes('rate limit') || lower.includes('too many requests')) {
    return "Yahoo Finance is rate-limiting this type of data right now — a known, temporary limit on their side. Try again in a few minutes.";
  }
  return rawError || 'Could not fetch fundamentals';
}

async function fetchAndShowInlineFundamentals(ticker, targetId, btn) {
  const backendUrl = getBackendUrl();
  const row = document.getElementById(targetId);
  if (!row || !btn) return;
  if (!backendUrl) {
    btn.outerHTML = `<span class="ribbon-fund-pill ribbon-fund-error" title="Set your backend URL in Settings first">⚠ backend not set</span>`;
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
  if (cached) { btn.outerHTML = renderCompactRocePills(cached); return; }
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
      btn.outerHTML = `<span class="ribbon-fund-pill ribbon-fund-error" title="${escapeHtml(data.error||'')}">⚠ ${shortMsg}</span>`;
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
  if (r.roce != null) pills.push(`<span class="ribbon-fund-pill" title="ROCE - calculated">ROCE ${(Number(r.roce)*100).toFixed(1)}%</span>`);
  if (r.debt_ratio != null) pills.push(`<span class="ribbon-fund-pill" title="Debt Ratio - calculated">DR ${(Number(r.debt_ratio)*100).toFixed(1)}%</span>`);
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
      `<div class="fund-note">📦 From earlier today's lookup — not re-fetched, to avoid Yahoo's rate limit.</div>`;
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

async function runDiagnosticCheck(company) {
  lookupResult.innerHTML = `<div class="lookup-result-card">
    <div class="lookup-result-head">
      <span class="lookup-result-title">Diagnostic: ${escapeHtml(company)}</span>
      <button class="lookup-close" id="lookup-close-btn">✕ Close</button>
    </div>
    <div class="lookup-loading">Checking your backend directly…</div>
  </div>`;
  $('#lookup-close-btn').addEventListener('click', clearLookupResult);

  const backendUrl = getBackendUrl();
  let statusLine, snippet, requestUrl;

  if (!backendUrl) {
    statusLine = 'No backend URL configured';
    snippet = 'Set your backend URL in Settings before fetching news.';
    requestUrl = '(none)';
  } else {
    requestUrl = `${backendUrl}/api/news?company=${encodeURIComponent(company)}`;
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 12000);
      const resp = await fetch(requestUrl, { signal: controller.signal });
      clearTimeout(timer);
      const text = await resp.text();
      let articleCount = 'n/a';
      try {
        const json = JSON.parse(text);
        articleCount = (json.articles || []).length;
      } catch (e) {}
      statusLine = `HTTP ${resp.status} · ${text.length} chars received · ${articleCount} articles parsed`;
      snippet = text.slice(0, 600);
    } catch (e) {
      statusLine = `Failed: ${e.message || e}`;
      snippet = '(no response from server)';
    }
  }

  lookupResult.innerHTML = `<div class="lookup-result-card">
    <div class="lookup-result-head">
      <span class="lookup-result-title">Diagnostic: ${escapeHtml(company)}</span>
      <button class="lookup-close" id="lookup-close-btn">✕ Close</button>
    </div>
    <div style="font-size:11px;color:var(--ink-soft);margin-bottom:10px">Request: ${escapeHtml(requestUrl)}</div>
    <div style="margin-bottom:14px">
      <div style="font-size:12px;color:var(--ink-soft);margin-bottom:6px">${escapeHtml(statusLine)}</div>
      <pre style="font-size:10px;background:var(--paper-dim);padding:8px;border-radius:6px;overflow-x:auto;white-space:pre-wrap;word-break:break-all;max-height:200px;overflow-y:auto">${escapeHtml(snippet)}</pre>
    </div>
  </div>`;
  $('#lookup-close-btn').addEventListener('click', clearLookupResult);
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
      <div class="glyph">☀︎</div>
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

  const aiBriefingHtml = `
    <div>
      <button class="ribbon-ai-btn" data-ticker="${escapeHtml(stock.ticker)}" data-company="${escapeHtml(stock.company)}" data-tier="${escapeHtml(stock.tier || 'Watch')}">✨ AI 1-Min Briefing</button>
      <div id="ai-panel-entry-${escapeHtml(stock.ticker)}"></div>
    </div>
  `;

  return `<div class="entry ${overallSentiment === 'negative' ? 'has-negative' : ''}">
    ${headHtml}
    ${ribbonHtml}
    ${body}
    ${aiBriefingHtml}
  </div>`;
}

checkKiteOAuthCallback();
init();