// ============================================================
// The Morning Ledger — client-side portfolio news briefing
// Everything runs in your phone's browser. Nothing is sent to
// any server except direct calls to Google News RSS when you tap
// "Fetch today's news".
// ============================================================

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
// Labels are Claude's analytical opinion for display only — not financial advice.
// Internal tier keys (Top30/Top31-50/Top51-75/Watch) are unchanged.
const TIER_ORDER = ["Top30", "Top31-50", "Top51-75", "Watch"];

// Helper function to clean ticker (remove -BE suffix for display)
function getCleanTicker(ticker) {
  return ticker.replace(/-BE$/, '');
}

// ---------- Storage helpers ----------
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
  getKiteApiKey: () => localStorage.getItem('ml_kite_api_key') || DEFAULT_KITE_API_KEY,
  setKiteApiKey: (v) => localStorage.setItem('ml_kite_api_key', v),
  // Deliberately NO access_token storage here. Earlier versions stored it
  // in localStorage with a same-day expiry check, but that mechanism kept
  // producing "session expired" false reports that were genuinely hard to
  // pin down (v12-v15). The price button now does a fresh login every
  // time and uses the resulting token immediately, once, then discards
  // it — removing this whole category of persistence bug entirely rather
  // than continuing to patch it.
};
const KITE_BACKEND_URL_KEY = 'ml_kite_backend_url';

// Default credentials — used when localStorage is empty (e.g. incognito mode).
// localStorage values always override these if they exist.
const DEFAULT_BACKEND_URL = 'https://kite-portfolio.onrender.com';
const DEFAULT_KITE_API_KEY = 'av7jcofmfblpij52';

// ---------- State ----------
let currentFilter = 'all';
let currentSentiment = 'all';
let currentSort = 'default';
let newsData = null; // { fetchedAt: ISOstring, results: [{ticker,company,tier,articles:[...]}] }
let lastFetchDiagnostics = { errorCount: 0, emptyCount: 0, totalCount: 0, lastError: null };
// (lastQuotesError removed — the new fresh-login-per-fetch design for
// prices reports status directly via priceStatusUpdate() instead of
// through a separate tracked-error variable.)

// ---------- DOM refs ----------
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

// ---------- Init ----------
function init() {
  try {
  datelineDate.textContent = todayLabel();

  const cached = Store.getCache();
  if (cached && cached.results) {
    try {
      newsData = cached;
      renderContent();
      updateStatusBar();
    } catch (renderErr) {
      console.error('[MorningLedger] Error rendering cached data:', renderErr);
      // Don't let a render error stop the rest of init from running
    }
  }

  // Delegated listener for ribbon fundamentals buttons — necessary
  // because entries are rendered via innerHTML on every filter/sort/
  // fetch, which means individually-attached listeners would be wiped
  // out on the next re-render. One listener on the stable #content
  // container catches clicks on any current or future .ribbon-fund-btn.
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

  // Single-stock lookup
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

  // Settings panel
  $('#settings-fab').addEventListener('click', openSettings);
  $('#settings-close').addEventListener('click', closeSettings);
  $('#settings-cancel').addEventListener('click', closeSettings);
  $('#settings-save').addEventListener('click', saveSettings);

  // XLSX/XLS/CSV upload — SheetJS handles all three
  $('#csv-upload-btn').addEventListener('click', () => $('#csv-file-input').click());
  $('#csv-file-input').addEventListener('change', handleSpreadsheetUpload);

  // Kite holdings import
  $('#kite-import-btn').addEventListener('click', importFromKite);

  // Install banner (Android/Chrome)
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

  } catch (initErr) {
    console.error('[MorningLedger] init() error — some features may not work:', initErr);
    // Still try to attach the settings listener even if init crashed
    const fab = document.getElementById('settings-fab');
    if (fab && !fab._settingsWired) {
      fab.addEventListener('click', openSettings);
      fab._settingsWired = true;
    }
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

// Sets the baseline price status (idle state, reflecting whether any
// price data is currently showing). Live progress messages during an
// actual login+fetch attempt are set directly via priceStatusUpdate(),
// not through this function — this only runs to (re)establish the
// resting state after a render.
function updatePriceStatus() {
  const priceStatusEl = $('#price-status');
  if (!priceStatusEl) return;

  const hasAnyQuote = newsData && newsData.results && newsData.results.some(r => r.quote && r.quote.last_price != null);
  priceStatusEl.textContent = hasAnyQuote ? 'Prices updated' : 'Prices: tap to fetch';
}

// ---------- Settings panel ----------
function openSettings() {
  try {
    const stocks = Store.getStocks();
    const el = (id) => document.getElementById(id);
    if (el('stocklist-input'))       el('stocklist-input').value       = stocks.map(s => s.join(',')).join('\n');
    if (el('kite-api-key-input'))    el('kite-api-key-input').value    = Store.getKiteApiKey();
    if (el('kite-backend-url-input')) el('kite-backend-url-input').value = getBackendUrl();
    const overlay = el('settings-overlay');
    if (overlay) overlay.classList.add('open');
  } catch (e) {
    console.error('[MorningLedger] openSettings error:', e);
  }
}
function closeSettings() {
  $('#settings-overlay').classList.remove('open');
}
function saveSettings() {
  // Save Kite API key and backend URL if entered
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

// ---------- Spreadsheet upload (XLSX / XLS / CSV) via SheetJS ----------
const VALID_TIERS = ['Top30', 'Top31-50', 'Top51-75', 'Watch'];

// Load SheetJS lazily on first use
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

// A real NSE/BSE ticker is letters/digits/&/- only, 1-20 chars, and critically
// is NOT a sentence, a label, or a plain number. This single check is what
// was missing before — without it, statement text like "Client ID" or
// "585017.85" or "Equity Holdings Statement as on..." got accepted as if
// it were a stock ticker, because the old fallback parser trusted column 0
// blindly with no validation at all.
// ISINs are a distinct, checkable format that should never be treated as a
// ticker: exactly 12 characters, starting with a 2-letter country code (e.g.
// "IN" for India) followed by a security-type letter (commonly "E" for
// equity), 9 alphanumeric characters total after the country code, ending
// in 1 check digit. Real tickers don't follow this shape. Without this
// check, an ISIN like INE918Z01012 structurally passes a generic
// "looks like a short alphanumeric code" test, but Google News has no
// listing for an ISIN — only for the company name or trading symbol.
function looksLikeISIN(value) {
  return /^[A-Z]{2}[A-Z0-9]{9}\d$/.test(String(value || '').trim().toUpperCase());
}

// Common section labels and words that appear in Kite statements/reports
// and happen to be short, space-free, and alphanumeric enough to pass the
// shape checks above — but are never real tickers. This list was built
// directly from the exact garbage that showed up in testing (e.g.
// "Summary", "Total", "Client ID" minus its space). It's not exhaustive —
// shape-based validation fundamentally cannot catch every possible label
// with certainty — but it closes the specific gaps already seen in practice.
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
  if (v.length > 20) return false; // tickers aren't sentences
  if (/\s/.test(v)) return false; // tickers never contain spaces; labels/sentences do
  if (/^-?\d+(\.\d+)?$/.test(v)) return false; // pure numbers are amounts, not tickers
  if (!/^[A-Z0-9&\-]+$/i.test(v)) return false; // only letters, digits, & and - allowed
  if (!/[A-Z]/i.test(v)) return false; // must contain at least one letter
  if (looksLikeISIN(v)) return false; // ISINs are identifiers, not searchable tickers
  if (KNOWN_NON_TICKER_LABELS.has(v.toUpperCase())) return false; // known statement label, not a stock
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
      continue; // refuse to accept statement text, labels, or numbers as a "ticker"
    }
    const company = String(row[1] || row[0]).trim();
    let tier = String(row[2] || '').trim();
    if (!VALID_TIERS.includes(tier)) tier = 'Watch';
    result.push([ticker, company, tier]);
  }
  if (skippedCount > 0) {
    console.warn(`Skipped ${skippedCount} row(s) that didn't look like real tickers (likely statement text, not a stock list).`);
  }
  return result;
}

// Detect Kite Holdings export format and remap columns.
// Broadened beyond exact column-name matches: Kite has multiple export
// formats (Holdings CSV, tax P&L statement, equity holdings statement) with
// different headers. We now also try matching on ISIN columns and a wider
// set of header name variants, since a statement export's headers don't
// always say exactly "instrument" or "tradingsymbol".
function parseKiteHoldingsRows(rows) {
  if (!rows || rows.length === 0) return null;
  const header = rows[0].map(c => String(c || '').toLowerCase().trim());

  const instrIdx = header.findIndex(h =>
    h === 'instrument' || h === 'tradingsymbol' || h === 'symbol' || h.includes('trading symbol'));

  if (instrIdx === -1) return null; // genuinely not a recognizable Kite holdings format

  const result = [];
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    const ticker = String(row[instrIdx] || '').trim().toUpperCase();
    if (!looksLikeRealTicker(ticker)) continue; // same validation, even on the Kite-format path
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
      // Get as array of arrays
      const rows = XLSX.utils.sheet_to_json(firstSheet, { header: 1, defval: '' });

      // Try Kite format first
      let parsed = parseKiteHoldingsRows(rows);
      let isKite = !!parsed;
      if (!parsed) parsed = parseRowsFromSheet(rows);

      if (!parsed || parsed.length === 0) {
        filenameEl.textContent = 'Could not find any real stock tickers in this file — it may be a tax/contract statement rather than a holdings list. Try Console → Portfolio → Holdings → Export instead.';
        filenameEl.style.color = 'var(--clay)';
        return;
      }

      $('#stocklist-input').value = parsed.map(r => r.join(',')).join('\n');
      filenameEl.textContent = isKite
        ? `✓ ${file.name} — ${parsed.length} holdings from Kite export (all set to Watch tier — edit tiers above)`
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
  reader.readAsArrayBuffer(file); // SheetJS needs ArrayBuffer, not text
}

// ---------- Kite Connect holdings import ----------
// Full flow: user visits Kite login → gets redirected back with
// ?request_token=... → app sends that token to YOUR backend (which holds
// the api_secret safely) → backend exchanges it, fetches holdings, and
// returns them here. The api_secret and access_token never touch the browser.

// Backend URL is configured by the user in Settings (see KITE_BACKEND_URL_KEY
// near the top of this file, alongside the other storage keys).

async function importFromKite() {
  return startKiteLogin('holdings');
}

// Prices no longer need Kite login at all — they come from Yahoo Finance
// via the backend's /api/quotes endpoint, which needs no authentication.
// This replaced an earlier design that tried to use Kite's own quote API,
// which turned out to require a paid market-data subscription Kite never
// actually grants through the free Personal API — confirmed directly by
// testing (a permissions error), not assumed. Yahoo Finance is free and,
// as a side benefit, also provides 52-week high/low and a real volume
// average, neither of which Kite's API exposes at all regardless of plan.
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
    const timer = setTimeout(() => controller.abort(), 25000); // a full 96-symbol batch can take a little while
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
    showKiteStatus('Enter your backend URL first — this is the small server that securely completes the login (see instructions below).', 'error');
    return;
  }
  Store.setKiteApiKey(apiKey);
  localStorage.setItem(KITE_BACKEND_URL_KEY, backendUrl.replace(/\/$/, ''));

  // Clear the double-callback guard from any previous login attempt — this
  // is a genuinely NEW login starting, so the next callback should be
  // allowed to process normally.
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

// Called on page load to check if we've just returned from Kite OAuth.
// Only the holdings-import flow uses this now — prices no longer go
// through Kite at all, so there's no "intent" branching needed anymore.
function checkKiteOAuthCallback() {
  const params = new URLSearchParams(window.location.search);
  if (params.get('action') !== 'login' || params.get('status') !== 'success') return;

  // Guard against this running twice for the same login. Real-world testing
  // showed the exchange call sometimes fires twice — once correctly, then a
  // second time that Kite rejects (request_tokens are single-use, Kite's own
  // rule). The most likely cause is some combination of how mobile Chrome
  // handles back/forward navigation and this function re-running before the
  // URL cleanup below had fully taken effect. A session-scoped flag, checked
  // and set BEFORE any async work starts, closes that race entirely.
  if (sessionStorage.getItem('ml_kite_callback_handled') === 'true') {
    return;
  }
  sessionStorage.setItem('ml_kite_callback_handled', 'true');

  const requestToken = params.get('request_token');
  const apiKey = Store.getKiteApiKey() || localStorage.getItem('ml_kite_pending_key');
  const backendUrl = getBackendUrl();  // uses default if localStorage empty

  // Clean the URL immediately, synchronously, before anything else — so
  // there's no window where a re-render or navigation could re-read the
  // same request_token from the address bar.
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
        `Login worked, but no backend URL is configured, so I can't safely complete it.\n\n` +
        `Request token (for reference): ${requestToken}\n\n` +
        `Enter your backend URL below, then try again.`,
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
    showKiteStatus(`Could not reach your backend at ${backendUrl}. Check the URL is correct and the server is running.\n\n${e}`, 'error');
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

  // Note: this path (holdings import) no longer stores the access_token
  // anywhere. As of v17, prices don't use Kite at all anymore — they
  // come from Yahoo Finance via fetchLatestPrices(), which needs no
  // token or login. This comment is just historical context for why
  // holdings-import alone doesn't bother storing a token either.

  // Merge fetched tickers into the stock list, preserving tiers.
  //
  // Tier lookup now checks TWO sources, in order:
  //   1. The currently saved stock list (whatever's in localStorage right
  //      now) — preserves any manual tier edits made after import
  //   2. The master DEFAULT_STOCKS list (the full ~96-stock reference
  //      list with correct tiers for every rank) — a fallback for when a
  //      ticker isn't in the currently saved list for whatever reason
  //      (e.g. it was never in an earlier import, or the saved list had
  //      gotten out of sync). This is the fix for holdings beyond Top 30
  //      all incorrectly falling into Watch: previously, any ticker not
  //      found in the CURRENT session's list defaulted straight to
  //      "Watch" with no fallback — even when that same ticker had a
  //      perfectly correct tier sitting in the master list all along.
  // Only if a ticker is genuinely unknown to both sources does it default
  // to "Watch".
  const existing = Store.getStocks();
  const existingByTicker = new Map(existing.map(([t, c, tier]) => [t.toUpperCase(), [t, c, tier]]));
  const defaultsByTicker = new Map(DEFAULT_STOCKS.map(([t, c, tier]) => [t.toUpperCase(), [t, c, tier]]));

  // Same suffix list the backend strips for Yahoo/news lookups. Applied in
  // BOTH directions here: the incoming Kite ticker might have a suffix the
  // reference lists don't (or vice versa) — e.g. Kite returns "STLTECH"
  // but the reference list has "STLTECH-BE", or the reverse. Building
  // suffix-stripped versions of the reference maps too (not just the
  // incoming ticker) is what makes this match regardless of which side
  // carries the suffix.
  const stripSeriesSuffix = (t) => t.replace(/-(BE|SM|IL|BL|N1|N2)$/i, '');
  const buildStrippedIndex = (map) => {
    const stripped = new Map();
    for (const [key, value] of map) {
      const s = stripSeriesSuffix(key);
      if (!stripped.has(s)) stripped.set(s, value); // first match wins if of a collision
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

  // Show the freshly imported holdings immediately on the main page (as a
  // plain list, before news has loaded) so there's instant visible feedback
  // that the import worked — then close settings and auto-trigger the full
  // news fetch, so the user doesn't have to do anything else manually.
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

// ---------- Sentiment classification ----------
// Word lists rebuilt after testing against 25 realistic Indian financial
// headlines showed only 32% accuracy — the original lists leaned on rare,
// dramatic words ("plunge", "soars", "crash") and missed the everyday
// words ("jump", "fall", "slip", "gain", "decline") that actually dominate
// real headlines. This version adds that common vocabulary while keeping
// the original specific phrases (which were accurate, just incomplete).
// ── Sentiment classification ─────────────────────────────────────────────
//
// Three-phase scoring, built for Indian financial news:
//
// Phase 1: Strong compound phrases checked first — these override everything.
//   "avoids default" must not trigger on "default" alone.
//   "turns profitable" must beat any incidental negative word nearby.
//
// Phase 2: Negation-aware weighted scoring. Negative keywords near a
//   negation word ("avoids", "not", "no", "clears", "dismisses") are
//   neutralised. Positive keywords are not negated this way.
//
// Phase 3: Score threshold → negative / positive / neutral.
//   Threshold is -2 (not -1) so a single weak negative word like "concern"
//   or "dip" in an otherwise flat headline doesn't flag the whole stock.
//
// False negatives (missing a real negative) are preferred over false
// positives (marking good news as bad). When in doubt: neutral.

const STRONG_POSITIVE_PHRASES = [
  'turns profitable','back in black','debt-free','net debt free','zero debt',
  'becomes debt free','avoids default','clears all debt','fully repaid',
  'record profit','record revenue','record order book','record order inflow',
  'all-time high','52-week high','lifetime high','multi-year high',
  'gets clean chit','given clean chit','clean chit from','court dismisses plea',
  'nclt dismisses','no penalty imposed','penalty waived','fine waived',
  'sebi gives nod','sebi approves','rbi approves','gets sebi nod',
  'shares recover','stock recovers','bounces back','rebounds strongly',
  'wins defence order','bags defence order','l1 bidder','preferred bidder',
  'order inflow record','order book grows','order book up','order book highest',
  'usfda nod','usfda approval','dcgi approval','fda clears','drug approved',
  'qip subscribed','ipo subscribed','oversubscribed',
  'promoter raises stake','promoter increases stake','promoter buys back',
  'fii increases stake','fii raises stake',
  'pat up','pat rises','pat jumps','pat surges','pat grows','pat doubles',
  'ebitda up','ebitda rises','ebitda grows','ebitda beats',
  'net profit rises','net profit up','net profit jumps','net profit grows',
  'net profit doubles','net profit triples','net profit beats',
  'revenue up','revenue rises','revenue grows','revenue beats',
  'anti-dumping duty','anti-dumping relief','pli benefit','pli approved',
  'bags rs ','bags inr','wins rs ','wins inr','secures rs ',
];

const STRONG_NEGATIVE_PHRASES = [
  'files for bankruptcy','files bankruptcy petition','declared bankrupt',
  'nclt admits insolvency','insolvency proceedings initiated','cirp initiated',
  'goes into liquidation','winding up order','winding-up petition',
  'promoter pledges entire','promoter pledges all shares',
  'zero revenue quarter','nil revenue',
  'default on payment','fails to repay','loan account npa',
  'account declared npa','classified as npa','asset classified npa',
  'statutory auditor resigns','auditor quits citing','auditor flags concern',
  'going concern doubt','going concern qualification','going concern risk',
  'sebi bars','sebi bans','sebi debarred','rbi cancels licence','rbi revokes',
  'rbi imposes penalty','ed attaches assets','cbi arrests','ed arrests',
  'pat falls','pat declines','pat drops','pat slips','pat down','pat shrinks',
  'reports net loss','posts net loss','net loss widens','loss deepens',
  'net profit falls','net profit declines','net profit drops',
  'net profit down','net profit slips','net profit halves','net profit plunges',
  'revenue falls','revenue declines','revenue drops','revenue down',
  'ebitda falls','ebitda down','ebitda drops','ebitda declines','ebitda loss',
  'ebitda margin contracts','ebitda margin falls','margin contracts',
];

const NEGATION_WORDS = [
  'avoids ','avoided ','no ','not ',"doesn't",'does not','did not','didnt',
  'cannot',"can't",'denies','denied','dismisses','dismissed','clears ',
  'cleared ','resolves','resolved','rejects','rejected','rules out',
  'refutes','refuted','allays','allayed','dispels','dispelled',
  'unfounded','no merit','no evidence','quashes','quashed','overturns','stayed',
  'no concern','no default','not guilty','acquitted','exonerated',
];

// [keyword, weight] — weight 1 = moderate, 2 = strong signal
const NEGATIVE_KEYWORDS = [
  // regulatory / legal
  ['fraud',2],['scam',2],['money laundering',2],['bribery',2],
  ['arrested',2],['chargesheet',2],['fir filed',2],['fir against',2],
  ['ed raid',2],['cbi raid',2],['cbi probe',2],['it raid',2],['i-t raid',2],
  ['sebi probe',1],['sebi order',1],['sebi action',1],['sebi notice',1],
  ['rbi penalty',2],['rbi notice',1],['rbi flags',1],['rbi bars',2],
  ['nclt',1],['nclat',1],['irdai notice',1],['trai notice',1],
  ['gst notice',1],['gst demand',1],['tax demand',1],['tax evasion',2],
  ['show cause notice',1],['demand notice',1],['non-compliance',1],
  ['irregularit',1],['accounting lapse',2],['governance concern',1],
  ['misrepresent',2],['audit qualif',2],['audit objection',1],
  // financial distress
  ['default',2],['bankrupt',2],['insolven',2],['liquidat',2],
  ['npa',2],['debt trap',2],['cash crunch',2],['going concern',2],
  ['debt-laden',1],['overleveraged',1],['covenant breach',2],
  ['rating cut',1],['downgrade',1],['outlook negative',1],
  ['credit watch negative',2],['restructuring debt',1],['debt restructur',1],
  ['fundraising struggle',1],['write-off',2],['impairment',2],['provisions rise',1],
  // earnings / guidance
  ['net loss',2],['loss widens',2],['loss deepens',2],
  ['profit declin',1],['profit slump',2],['profit miss',1],
  ['below estimate',1],['misses estimate',1],['misses expectation',1],
  ['below expectation',1],['disappoints',1],['disappointing quarter',1],
  ['weak quarter',1],['weak earnings',1],['muted quarter',1],
  ['margin pressure',1],['margin squeeze',1],['cost overrun',1],
  ['input cost pressure',1],['raw material cost rise',1],
  ['profit warning',2],['lowered guidance',1],['cuts guidance',1],
  ['guidance cut',1],['outlook cut',1],['muted outlook',1],
  ['cautious outlook',1],['weak demand',1],['demand slowdown',1],
  ['sales decline',1],['sales fall',1],['volume decline',1],
  ['agr dues',1],['spectrum dues',1],['import duty cut',1],
  // stock price movement
  ['shares fall',1],['shares slip',1],['shares slide',1],
  ['shares drop',1],['shares tank',2],['shares tumble',2],
  ['shares crash',2],['shares plunge',2],['shares sink',2],
  ['stock falls',1],['stock slips',1],['stock slides',1],
  ['stock drops',1],['stock tanks',2],['stock tumbles',2],
  ['stock crashes',2],['stock plunges',2],['stock sinks',2],
  ['52-week low',2],['multi-year low',2],['all-time low',2],
  ['hits low',1],['touches low',1],['new low',1],
  ['sell rating',1],['underperform rating',1],['reduce rating',1],
  ['target cut',1],['price target cut',1],['target price reduced',1],
  // corporate / leadership
  ['resign',1],['steps down',1],['sacked',2],['fired',2],['termination',1],
  ['lawsuit',1],['sued',1],['legal notice',1],
  ['penalty imposed',1],['fine imposed',1],['fine of rs',1],['fine of inr',1],
  ['banned',2],['debarred',2],['licence cancelled',2],
  ['halted',1],['suspended',1],['trading halt',1],['delisted',2],
  ['layoff',1],['job cut',1],['retrenchment',1],['workforce reduction',1],
  ['plant shutdown',2],['factory shutdown',2],['shuts plant',2],
  ['recall',1],['product recall',2],
  ['data breach',2],['cyberattack',2],['ransomware',2],
  ['accident at',1],['explosion at',2],['fire at plant',2],
  ['strike',1],['labour unrest',2],['worker strike',2],
  ['promoter pledge',1],['pledge increases',1],['promoter sells stake',1],
  ['fii exit',1],['fii selling',1],['fii reduces stake',1],
  ['order cancell',2],['contract terminat',2],['order cancelled',2],
  ['project delay',1],['execution delay',1],['delay in commissioning',1],
];

const POSITIVE_KEYWORDS = [
  // earnings
  ['profit rises',1],['profit jumps',2],['profit surges',2],
  ['profit soars',2],['profit grows',1],['profit climbs',1],
  ['profit beats',1],['profit doubles',2],['profit triples',2],['profit up',1],
  ['revenue rises',1],['revenue grows',1],['revenue jumps',2],
  ['revenue surges',2],['revenue up',1],['revenue beats',1],
  ['beats estimate',1],['beats expectation',1],['tops estimate',1],
  ['exceeds estimate',1],['ahead of estimate',1],
  ['strong quarter',1],['robust quarter',1],['stellar quarter',2],
  ['raises guidance',1],['upgrades guidance',1],['raises fy guidance',1],
  ['margin expansion',1],['margin improves',1],['improved margins',1],
  ['strong demand',1],['demand surge',2],['demand uptick',1],
  ['capacity utilisation rises',1],['utilisation improves',1],
  // stock movement
  ['shares jump',1],['shares rise',1],['shares gain',1],
  ['shares surge',2],['shares rally',1],['shares climb',1],
  ['shares soar',2],['shares advance',1],['shares up',1],
  ['shares hit high',2],['shares touch high',2],['shares scale high',2],
  ['stock jumps',1],['stock rises',1],['stock gains',1],
  ['stock surges',2],['stock rallies',1],['stock climbs',1],
  ['stock soars',2],['stock advances',1],['stock hits high',2],
  ['outperforms',1],['top gainer',1],['best performer',1],
  ['buy rating',1],['strong buy',2],['accumulate rating',1],
  ['rating upgrade',1],['upgraded to buy',1],['outlook upgraded',1],
  ['target raised',1],['target price raised',1],['price target hiked',1],
  // orders / wins
  ['wins order',2],['wins contract',2],['bags order',2],
  ['bags contract',2],['secures order',2],['secures contract',2],
  ['gets order',1],['receives order',1],['new order',1],
  ['order win',2],['preferred bidder',2],['export order',1],
  ['repeat order',1],['order book record',2],['strong order book',1],
  ['order pipeline',1],['order inflow',1],
  // approvals
  ['gets nod',1],['gets approval',1],['receives approval',1],
  ['usfda nod',2],['usfda approval',2],['fda approval',2],
  ['dcgi approval',2],['drug approval',2],['patent granted',2],
  ['environmental clearance',1],['sebi nod',1],['rbi nod',1],
  // corporate actions
  ['buyback',1],['share buyback',2],['dividend declared',1],
  ['interim dividend',1],['special dividend',2],['bumper dividend',2],
  ['bonus shares',1],['stock split',1],
  ['qip successful',1],['qip subscribed',1],
  // deals / partnerships
  ['strategic partnership',1],['joint venture',1],['merger approved',1],
  ['acquisition complete',1],['mou signed',1],['agreement signed',1],
  ['foray into',1],['enters new market',1],
  // capacity / expansion
  ['capacity expansion',1],['expansion plan',1],['new plant',1],
  ['capex plan',1],['scale up',1],['greenfield project',1],
  // institutional interest
  ['fii buying',1],['fii increases',1],['promoter buys',1],
  ['institutional buying',1],['dii buying',1],['mutual fund buying',1],
  // balance sheet improvement
  ['debt reduction',1],['reduces debt',1],['repays loan',1],
  ['loan repaid',1],['credit upgrade',2],['rating upgraded',2],
  ['outlook positive',1],['outlook upgraded',1],
  // misc
  ['product launch',1],['new launch',1],['breakthrough',2],
  ['pli incentive',1],['pli benefit',1],['subsidy received',1],
  ['pre-sales strong',1],['strong pre-sales',1],
];

function classifySentiment(title) {
  if (!title) return 'neutral';
  const lower = title.toLowerCase();

  // Phase 1: strong compound phrases override everything
  for (const phrase of STRONG_POSITIVE_PHRASES) {
    if (lower.includes(phrase)) return 'positive';
  }
  for (const phrase of STRONG_NEGATIVE_PHRASES) {
    if (lower.includes(phrase)) return 'negative';
  }

  // Phase 2: check if headline contains a negation word
  const hasNegation = NEGATION_WORDS.some(n => lower.includes(n));

  let score = 0;

  for (const [word, weight] of NEGATIVE_KEYWORDS) {
    if (lower.includes(word)) {
      if (hasNegation) {
        // Negation neutralises weak negatives; halves strong ones
        if (weight >= 2) score -= 1;
        // else skip: e.g. "no concerns", "avoids default" → don't penalise
      } else {
        score -= weight;
      }
    }
  }

  for (const [word, weight] of POSITIVE_KEYWORDS) {
    if (lower.includes(word)) {
      score += weight;
    }
  }

  // Threshold -2: single weak word like "concern" or "dip" alone = neutral
  if (score <= -2) return 'negative';
  if (score >= 1)  return 'positive';
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

// Overall sentiment now reflects ONLY the single most recent headline —
// not "any negative headline wins" as before. Per request: if the latest
// news is negative, the stock is negative; if the latest news is positive
// OR neutral, the stock counts as positive (neutral is folded into
// positive — giving the benefit of the doubt rather than treating
// ambiguous wording as a third, separate bucket).
function classifyStockOverallSentiment(articles) {
  if (!articles || articles.length === 0) return null;
  const latest = findMostRecentArticle(articles);
  if (!latest) return null;
  const latestSentiment = classifySentiment(latest.title);
  return latestSentiment === 'negative' ? 'negative' : 'positive';
}

// ---------- Sorting ----------
function applySorting(stocks, sortType) {
  if (!stocks || stocks.length === 0) return stocks;

  const sorted = [...stocks]; // Create a copy to avoid mutating original

  switch(sortType) {
    case 'change-desc':
      // Gainers first (highest change % on top)
      sorted.sort((a, b) => {
        const chgA = (a.quote && a.quote.change_pct != null) ? a.quote.change_pct : -Infinity;
        const chgB = (b.quote && b.quote.change_pct != null) ? b.quote.change_pct : -Infinity;
        return chgB - chgA;
      });
      break;
    case 'change-asc':
      // Losers first (lowest change % on top)
      sorted.sort((a, b) => {
        const chgA = (a.quote && a.quote.change_pct != null) ? a.quote.change_pct : Infinity;
        const chgB = (b.quote && b.quote.change_pct != null) ? b.quote.change_pct : Infinity;
        return chgA - chgB;
      });
      break;
    case 'default':
    default:
      // Alphabetical by company name — the default view now, rather than
      // leaving stocks in whatever order they happened to be added/imported.
      sorted.sort((a, b) => a.company.localeCompare(b.company));
      break;
  }

  return sorted;
}

// ---------- Fetching: via your own backend ----------
// Both free anonymous CORS proxies this app relied on stopped working:
// CodeTabs is currently rejecting requests with 400s for many users
// (a reported, ongoing issue with their free service, not specific to
// this app), and r.jina.ai explicitly blocks anonymous access to
// news.google.com due to abuse from other users of their shared service.
//
// News fetching now goes through your own backend instead (the same one
// used for Kite login) — it makes the request to Google directly, with
// no CORS restriction at all (CORS is purely a browser-side rule) and no
// shared anonymous-abuse exposure. This requires the backend URL to be
// set in Settings — the same field used for Kite login.

function getBackendUrl() {
  return localStorage.getItem(KITE_BACKEND_URL_KEY) || DEFAULT_BACKEND_URL;
}

// Sorts articles newest-first by their actual published timestamp, not by
// whatever order the feed happened to return them in. Google News RSS is
// not guaranteed to be strictly date-sorted (it can favor relevance), and
// this app already learned that lesson once for overall sentiment
// classification (see findMostRecentArticle) — this applies the same fix
// to the DISPLAY order too, which was still using raw feed order until
// now. Articles with an unparseable/missing date sort to the end, not the
// front, so a dateless item never displaces a genuinely dated one from
// the "first" position.
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
    // Sort BEFORE slicing to maxArticles — otherwise a genuinely newer
    // article sitting later in the raw feed order could get cut off
    // entirely while an older one (that happened to come first) survives
    // the truncation. Sorting first guarantees the freshest N are kept.
    const sorted = sortArticlesByDateDesc(data.articles || []);
    return { articles: sorted.slice(0, maxArticles), error: null };
  } catch (e) {
    return { articles: [], error: e.message || String(e) };
  }
}

// ---------- Parallel batch fetcher ----------
// Fetches up to BATCH_SIZE stocks concurrently, then moves to the next batch,
// with a short pause between batches.
//
// Lowered from 8 to 4, with a 400ms gap added between batches. Free,
// unauthenticated proxy services (CodeTabs, r.jina.ai) are shared
// infrastructure with no published guarantee for sustained bursts —
// 8-at-a-time, 12 batches back-to-back from one device is the kind of
// pattern that gets silently throttled even without a documented limit.
// This trades some speed for reliability: roughly 96 stocks ÷ 4 × (fetch
// time + 400ms pause) — slower than the original aggressive batching, but
// much less likely to get rate-limited mid-run, which is the actual
// failure mode worth avoiding.
const BATCH_SIZE = 6;
const BATCH_PAUSE_MS = 200;

// Tracks which proxy actually served each successful response, and how
// many stocks got zero articles from every proxy. Surfaced in the status
// bar after a fetch completes, so "nothing showing up" becomes diagnosable
// instead of a silent mystery. (Declared at top of file with other state.)

async function fetchStockNews(ticker, company) {
  const { articles, error } = await fetchNewsViaBackend(company, 3);
  return { ticker, company, articles, error };
}

// (The old Kite-based fetchQuotes() helper was removed here. Prices now
// come from Yahoo Finance via the backend's /api/quotes — see
// fetchLatestPrices() above, which calls the backend directly and needs
// no access_token or Kite login at all.)

async function fetchAllNews() {
  const stocks = Store.getStocks();
  if (!stocks || stocks.length === 0) {
    openSettings();
    return;
  }
  if (!getBackendUrl()) {
    openSettings();
    showKiteStatus('News fetching needs your backend URL set below (the same one used for Kite login) — paste it in and try again.', 'error');
    return;
  }

  refreshBtn.classList.add('spinning');
  refreshLabel.textContent = 'Fetching…';
  renderLoadingSkeleton(stocks.length);

  const results = new Array(stocks.length);
  let completed = 0;
  const diagnostics = { errorCount: 0, emptyCount: 0, totalCount: stocks.length, lastError: null };

  // Your own backend has no anonymous-abuse exposure and no CORS
  // restriction, so a higher batch size than the old proxy-based approach
  // is safe here — Render's own connection limits are the real ceiling,
  // and 8 concurrent requests to your own server is comfortably under that.
  for (let batchStart = 0; batchStart < stocks.length; batchStart += BATCH_SIZE) {
    const batchEnd = Math.min(batchStart + BATCH_SIZE, stocks.length);
    const batch = stocks.slice(batchStart, batchEnd);

    const batchPromises = batch.map(async ([ticker, company, tier], batchIdx) => {
      const { articles, error } = await fetchStockNews(ticker, company);
      // Preserve any quote data already attached from a previous "Fetch
      // latest prices" tap, since news and prices are now fetched
      // independently and shouldn't wipe each other out.
      const existingQuote = newsData && newsData.results && newsData.results[batchStart + batchIdx]
        ? newsData.results[batchStart + batchIdx].quote
        : null;
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

  // Auto-chain into fetching prices right after news finishes, so a
  // single tap of "Fetch today's news" gets you both — no need to
  // separately remember to tap "Fetch latest prices" afterward. Fires
  // without blocking/awaiting anything above (news has already fully
  // rendered by this point); fetchLatestPrices manages its own button
  // state and re-renders again once prices land.
  fetchLatestPrices();
}

// ---------- Dedicated "Fetch latest prices" — separate, on-demand ----------
// Split out from the news fetch entirely. Originally prices were bundled
// into every news fetch automatically, but that coupling made a real bug
// Merges fetched quote data into whatever's currently displayed and
// re-renders. Called once, right after a fresh Kite login completes and
// quotes are fetched — not on a timer, not from stored state.
function applyFetchedQuotes(quotes) {
  const stocks = Store.getStocks();
  if (newsData && newsData.results) {
    for (const r of newsData.results) {
      const q = quotes[r.ticker];
      if (q && !q.error) r.quote = q; // per-symbol errors (bad/delisted ticker) are skipped, not stored as a "quote"
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

// ---------- Single-stock lookup ----------
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

async function runSingleStockLookup(tickerTyped, companyTyped) {
  const stocks = Store.getStocks();
  const known = stocks.find(([t, c]) =>
    t.toLowerCase() === tickerTyped.toLowerCase() || c.toLowerCase() === companyTyped.toLowerCase());
  const searchTerm = known ? known[1] : companyTyped;
  const displayTicker = known ? known[0] : tickerTyped.toUpperCase();

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

  const stockObj = { ticker: displayTicker, company: searchTerm, tier: known ? known[2] : 'Watch', articles };
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
}

// Fundamentals are fetched on demand, one stock at a time — see the
// backend's /api/fundamentals docstring for why this isn't bundled into
// the bulk price fetch (it's a much slower, heavier call per stock).
// Same as fetchAndShowFundamentals above, but for the ribbon button in
// the main scrolling list rather than the single-stock search card —
// targets a specific container by id (one per stock, since the main
// list can show many at once) instead of the fixed #fundamentals-panel
// id the search card uses.
// Fundamentals (PE, P/B, ROE etc.) don't meaningfully change intraday —
// caching per stock for the rest of today avoids re-hitting Yahoo's
// quoteSummary endpoint for something you've already looked at once.
// This matters specifically because that endpoint is confirmed (from
// yfinance's own GitHub issues) to be aggressively and sometimes
// unpredictably rate-limited by Yahoo — caching is the main defense
// available here, since retrying harder or fetching in bulk would only
// make the underlying rate-limit problem worse, not better.
function getCachedFundamentals(ticker) {
  const raw = localStorage.getItem(`ml_fund_${ticker}`);
  if (!raw) return null;
  try {
    const cached = JSON.parse(raw);
    if (cached.date !== new Date().toDateString()) return null; // stale, from a previous day
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

// Gives a clearer, honest message specifically for the rate-limit case,
// rather than showing yfinance's raw error text as-is. This is a known,
// documented Yahoo-side limit (confirmed via yfinance's own GitHub
// issues) — not a bug in this app, and not something retrying
// immediately will fix.
function formatFundamentalsError(rawError) {
  const lower = (rawError || '').toLowerCase();
  if (lower.includes('rate limit') || lower.includes('too many requests')) {
    return "Yahoo Finance is rate-limiting this type of data right now — a known, temporary limit on their side (not specific to this app or this stock). Try again in a few minutes.";
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

  // renderEntry already checks the cache before deciding whether to show
  // this button at all — a cached stock never gets a button in the first
  // place, it gets pills immediately. This check only matters for the
  // rare case where the cache was populated by something else in the
  // brief window between render and click.
  const cached = getCachedFundamentals(ticker);
  if (cached) {
    btn.outerHTML = renderCompactFundamentalPills(cached);
    return;
  }

  const originalLabel = btn.textContent;
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
  if (r.roce != null) pills.push(`<span class="ribbon-fund-pill" title="ROCE - calculated, not a direct Yahoo field">ROCE ${(Number(r.roce)*100).toFixed(1)}%</span>`);
  if (r.debt_ratio != null) pills.push(`<span class="ribbon-fund-pill" title="Debt Ratio - calculated, not a direct Yahoo field">DR ${(Number(r.debt_ratio)*100).toFixed(1)}%</span>`);
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
    <div class="fund-row"><span class="fund-label">PEG <span class="fund-caveat" title="yfinance has a known, documented bug (GitHub issue #903) where this figure can be significantly wrong for some stocks — treat it as indicative, not precise">⚠</span></span><span class="fund-val">${fmtRatio(f.peg_ratio)}</span></div>
    <div class="fund-row"><span class="fund-label">ROE</span><span class="fund-val">${fmtPct(f.return_on_equity)}</span></div>
    <div class="fund-row"><span class="fund-label">ROCE <span class="fund-caveat" title="Not a direct Yahoo/yfinance field — calculated here as EBIT ÷ (Total Assets − Current Liabilities) from the latest reported balance sheet and income statement">calc</span></span><span class="fund-val">${fmtPct(f.roce)}</span></div>
    <div class="fund-row"><span class="fund-label">Debt/Equity</span><span class="fund-val">${fmtRatio(f.debt_to_equity)}</span></div>
    <div class="fund-row"><span class="fund-label">Debt Ratio <span class="fund-caveat" title="Not a direct Yahoo/yfinance field — calculated here as Total Debt ÷ Total Assets from the latest reported balance sheet">calc</span></span><span class="fund-val">${fmtPct(f.debt_ratio)}</span></div>
    <div class="fund-row"><span class="fund-label">Profit margin</span><span class="fund-val">${fmtPct(f.profit_margin)}</span></div>
    <div class="fund-note">ROCE and Debt Ratio are calculated from raw balance sheet/income statement data (Yahoo doesn't provide them as ready-made figures) — shown as "—" if that underlying data isn't reported for this stock.</div>
  </div>`;
}

// Compact version for the ribbon itself — short pills, not the full
// labeled-row layout renderFundamentalsPanel uses (there's no room for
// that inside a ribbon). Only fields with actual data get a pill; a
// missing individual field is simply omitted rather than shown as "—",
// since cluttering the ribbon with empty placeholders defeats the point
// of "fits on the ribbon" in the first place.
function renderCompactFundamentalPills(f) {
  const pills = [];
  if (f.trailing_pe != null) {
    pills.push(`<span class="ribbon-fund-pill" title="Trailing P/E">PE ${Number(f.trailing_pe).toFixed(1)}</span>`);
  }
  if (f.price_to_book != null) {
    pills.push(`<span class="ribbon-fund-pill" title="Price to Book">P/B ${Number(f.price_to_book).toFixed(1)}</span>`);
  }
  if (f.peg_ratio != null) {
    pills.push(`<span class="ribbon-fund-pill" title="PEG ratio — yfinance has a known bug (GitHub #903) where this can be inaccurate for some stocks">PEG ${Number(f.peg_ratio).toFixed(1)}⚠</span>`);
  }
  if (f.return_on_equity != null) {
    pills.push(`<span class="ribbon-fund-pill" title="Return on Equity">ROE ${(Number(f.return_on_equity) * 100).toFixed(1)}%</span>`);
  }
  if (f.roce != null) {
    pills.push(`<span class="ribbon-fund-pill" title="ROCE — calculated as EBIT ÷ (Total Assets − Current Liabilities), not a direct Yahoo field">ROCE ${(Number(f.roce) * 100).toFixed(1)}%</span>`);
  }
  if (f.debt_to_equity != null) {
    pills.push(`<span class="ribbon-fund-pill" title="Debt to Equity">D/E ${Number(f.debt_to_equity).toFixed(1)}</span>`);
  }
  if (f.debt_ratio != null) {
    pills.push(`<span class="ribbon-fund-pill" title="Debt Ratio — calculated as Total Debt ÷ Total Assets, not a direct Yahoo field">DR ${(Number(f.debt_ratio) * 100).toFixed(1)}%</span>`);
  }
  if (pills.length === 0) {
    return `<span class="ribbon-fund-pill" style="opacity:0.75">No fundamentals data</span>`;
  }
  return pills.join('');
}

function clearLookupResult() {
  lookupResult.innerHTML = '';
  lookupInput.value = '';
  lookupSuggestions.classList.remove('open');
}

// ---------- Raw diagnostic viewer ----------
// Shows exactly what each proxy returns for one stock, unparsed — so a
// "no news found" report can be turned into something concrete to debug
// rather than a guess. Reachable via a small "diagnose" link that appears
// next to a stock once it shows "No recent news found".
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
    snippet = 'Set your backend URL in Settings (the same one used for Kite login) before fetching news.';
    requestUrl = '(none — backend URL is empty)';
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
      snippet = '(no response — check the backend URL is correct and the server is running. Try opening ' +
                 (backendUrl ? `${backendUrl}/healthz` : '(no backend URL set)') + ' directly in a browser tab.)';
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

// ---------- Rendering ----------
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

  // Always reflects the WHOLE portfolio, not whatever tier/sentiment
  // filter is currently active — a quick-glance summary should stay
  // stable regardless of what you're browsing below it.
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
   } else if (currentFilter !== 'all') {
     filtered = filtered.filter(s => s.tier === currentFilter);
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

   if (currentFilter === 'all' || currentFilter === 'fresh') {
     let html = '';
     for (const tier of TIER_ORDER) {
       const group = filtered.filter(s => s.tier === tier);
       if (!group.length) continue;
       // Apply sorting within each tier group
       const sortedGroup = applySorting(group, currentSort);
       html += `<div class="section">
         <div class="section-head"><span class="section-label tier-${tier.toLowerCase()}">${TIER_LABELS[tier]}</span><div class="rule"></div></div>
         ${sortedGroup.map(renderEntry).join('')}
       </div>`;
     }
     contentEl.innerHTML = html;
   } else {
     // Apply sorting to single tier
     const sortedFiltered = applySorting(filtered, currentSort);
     contentEl.innerHTML = `<div class="section">${sortedFiltered.map(renderEntry).join('')}</div>`;
   }
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

  // Price/change/volume/52wk only render if a quote came back for this
  // stock — fails silently and shows nothing if prices haven't been
  // fetched yet or this specific symbol had no data, rather than an
  // error inline on every single entry. Rendered as a separate block
  // below the name/ticker row (a "ribbon") rather than crammed inline,
  // since this needs to be readable at a glance, not just present.
  let ribbonHtml = '';
  const hasQuote = stock.quote && stock.quote.last_price != null;
  if (hasQuote) {
    const chg = stock.quote.change_pct;
    const ribbonClass = chg == null ? 'ribbon-neu' : (chg > 0 ? 'ribbon-pos' : (chg < 0 ? 'ribbon-neg' : 'ribbon-neu'));
    const chgSign = chg != null && chg > 0 ? '+' : '';

    let flagsHtml = '';
    if (stock.quote.near_52wk_flag === 'near-high') {
      flagsHtml += `<span class="ribbon-flag" title="Within 2% of the 52-week high of ₹${stock.quote.fifty_two_wk_high}">52WK HIGH</span>`;
    } else if (stock.quote.near_52wk_flag === 'near-low') {
      flagsHtml += `<span class="ribbon-flag" title="Within 2% of the 52-week low of ₹${stock.quote.fifty_two_wk_low}">52WK LOW</span>`;
    }

    // Stock name + ticker live inside the ribbon itself, on their own row
    // above the price/change/flags row. Fundamentals (PE, P/B, ROE etc.)
    // render as compact pills directly in this same data row too — if
    // already cached from an earlier lookup today, they show immediately
    // with no click needed; otherwise a small button fetches them on
    // demand (see the /api/fundamentals docstring in server.py for why
    // this is per-stock/on-demand rather than bundled into the bulk
    // price fetch: Yahoo rate-limits this specific data source, and
    // fetching it for all ~96 stocks at once would trigger that far
    // worse, not avoid it).
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

  // Fallback header: only used when there's no quote yet (prices haven't
  // been fetched this session, or this specific symbol had no data) —
  // otherwise the name/ticker live inside the ribbon above instead, so
  // this row is left empty to avoid showing the name twice.
  const headHtml = hasQuote
    ? `<div class="entry-head-badge-only">${badgeHtml}</div>`
    : `<div class="entry-head">
        <div><span class="entry-name">${escapeHtml(stock.company)}</span><span class="entry-ticker">${escapeHtml(getCleanTicker(stock.ticker))}</span></div>
        ${badgeHtml}
      </div>`;

  return `<div class="entry ${overallSentiment === 'negative' ? 'has-negative' : ''}">
    ${headHtml}
    ${ribbonHtml}
    ${body}
  </div>`;
}

checkKiteOAuthCallback();
init();
