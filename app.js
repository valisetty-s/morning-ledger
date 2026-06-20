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
  "Top30": "⭐ Top 30",
  "Top31-50": "Ranks 31–50",
  "Top51-75": "Ranks 51–75",
  "Watch": "Watch list",
};
const TIER_ORDER = ["Top30", "Top31-50", "Top51-75", "Watch"];

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
  getKiteApiKey: () => localStorage.getItem('ml_kite_api_key') || '',
  setKiteApiKey: (v) => localStorage.setItem('ml_kite_api_key', v),
};
const KITE_BACKEND_URL_KEY = 'ml_kite_backend_url';

// ---------- State ----------
let currentFilter = 'all';
let currentSentiment = 'all';
let newsData = null; // { fetchedAt: ISOstring, results: [{ticker,company,tier,articles:[...]}] }

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
  datelineDate.textContent = todayLabel();

  const cached = Store.getCache();
  if (cached && cached.results) {
    newsData = cached;
    renderContent();
    updateStatusBar();
  }

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

  refreshBtn.addEventListener('click', fetchAllNews);

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
}

function updateStatusBar() {
  if (!newsData) {
    refreshStatus.textContent = 'Not yet fetched today';
    datelineStatus.textContent = "Tap refresh to fetch today's news";
    datelineStatus.classList.remove('fresh');
    return;
  }
  const fresh = isToday(newsData.fetchedAt);
  refreshStatus.textContent = `Last fetched ${timeLabel(newsData.fetchedAt)}${fresh ? ' today' : ' (older — refresh for today)'}`;
  datelineStatus.textContent = fresh ? 'Updated this morning' : 'Stale — tap refresh';
  datelineStatus.classList.toggle('fresh', fresh);
}

// ---------- Settings panel ----------
function openSettings() {
  const stocks = Store.getStocks();
  $('#stocklist-input').value = stocks.map(s => s.join(',')).join('\n');
  // Pre-fill saved Kite API key and backend URL if any
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

function parseRowsFromSheet(rows) {
  if (!rows || rows.length === 0) return [];
  // Detect header row
  const firstRow = rows[0].map(c => String(c || '').toLowerCase().trim());
  const hasHeader = firstRow.some(c => c.includes('ticker') || c.includes('symbol') || c.includes('instrument'));
  const startIdx = hasHeader ? 1 : 0;

  const result = [];
  for (let i = startIdx; i < rows.length; i++) {
    const row = rows[i];
    if (!row || !row[0]) continue;

    // Kite Holdings format: instrument_token, exchange_token, tradingsymbol, exchange, ...
    // Detect by checking if header had 'tradingsymbol'
    const ticker = String(row[0]).trim().toUpperCase();
    const company = String(row[1] || row[0]).trim();
    let tier = String(row[2] || '').trim();
    if (!VALID_TIERS.includes(tier)) tier = 'Watch';
    if (!ticker) continue;
    result.push([ticker, company, tier]);
  }
  return result;
}

// Detect Kite Holdings export format and remap columns
function parseKiteHoldingsRows(rows) {
  if (!rows || rows.length === 0) return null;
  const header = rows[0].map(c => String(c || '').toLowerCase().trim());
  // Kite CSV headers: Instrument, Qty., Avg. cost, LTP, ...
  const instrIdx = header.findIndex(h => h === 'instrument' || h === 'tradingsymbol');
  if (instrIdx === -1) return null; // not a Kite format

  const result = [];
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    const ticker = String(row[instrIdx] || '').trim().toUpperCase();
    if (!ticker) continue;
    // Company name = ticker (Kite doesn't export company name in holdings CSV)
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
        filenameEl.textContent = 'Could not read any rows — check the format.';
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
  const apiKey = $('#kite-api-key-input').value.trim() || Store.getKiteApiKey();
  const backendUrl = $('#kite-backend-url-input').value.trim() || localStorage.getItem(KITE_BACKEND_URL_KEY);

  if (!apiKey) {
    showKiteStatus('Enter your Kite API key first (see instructions below).', 'error');
    return;
  }
  if (!backendUrl) {
    showKiteStatus('Enter your backend URL first — this is the small server that securely completes the login (see instructions below).', 'error');
    return;
  }
  Store.setKiteApiKey(apiKey);
  localStorage.setItem(KITE_BACKEND_URL_KEY, backendUrl.replace(/\/$/, ''));

  showKiteStatus('Opening Kite login… After you log in, you\'ll be redirected back here automatically.', 'info');
  localStorage.setItem('ml_kite_pending_key', apiKey);

  const loginUrl = `https://kite.zerodha.com/connect/login?api_key=${encodeURIComponent(apiKey)}&v=3`;
  window.open(loginUrl, '_self');
}

// Called on page load to check if we've just returned from Kite OAuth
function checkKiteOAuthCallback() {
  const params = new URLSearchParams(window.location.search);
  if (params.get('action') !== 'login' || params.get('status') !== 'success') return;

  const requestToken = params.get('request_token');
  const apiKey = Store.getKiteApiKey() || localStorage.getItem('ml_kite_pending_key');
  const backendUrl = localStorage.getItem(KITE_BACKEND_URL_KEY);

  // Clean the URL so refreshing doesn't re-trigger this
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
        `Enter your backend URL below, then try "Log in to Kite" again.`,
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

  // Merge fetched tickers into the stock list, preserving tiers for any
  // ticker we already know about; new tickers default to "Watch".
  const existing = Store.getStocks();
  const existingByTicker = new Map(existing.map(([t, c, tier]) => [t.toUpperCase(), [t, c, tier]]));

  const merged = holdings.map(h => {
    const ticker = (h.ticker || '').toUpperCase();
    if (existingByTicker.has(ticker)) return existingByTicker.get(ticker);
    return [ticker, ticker, 'Watch'];
  });

  Store.setStocks(merged);
  $('#stocklist-input').value = merged.map(s => s.join(',')).join('\n');

  const userName = (data.user && data.user.user_name) || 'your account';
  showKiteStatus(
    `✓ Imported ${holdings.length} holdings from ${userName}'s Kite account.\n` +
    `Review the list below, adjust tiers if you want, then tap Save.`,
    'success'
  );
}

function showKiteStatus(msg, type) {
  const el = $('#kite-status');
  if (!el) return;
  el.textContent = msg;
  el.style.display = 'block';
  el.className = 'kite-status kite-status-' + type;
}

// ---------- Sentiment classification ----------
const NEGATIVE_WORDS = [
  'fraud', 'scam', 'probe', 'investigat', 'raid', 'fir filed', 'sebi action',
  'downgrade', 'default', 'bankrupt', 'insolven', 'liquidat', 'crash', 'plunge',
  'tumble', 'slump', 'tanks', 'sinks', 'loss widens', 'net loss', 'posts loss',
  'misses estimate', 'falls short', 'cut to', 'lowered guidance', 'profit warning',
  'resign', 'steps down', 'quits', 'sacked', 'fired', 'arrest',
  'lawsuit', 'sued', 'penalty', 'fine imposed', 'ban', 'banned', 'halted',
  'suspend', 'delisted', 'debt-laden', 'debt trap', 'rating cut', 'outlook negative',
  'strike', 'shutdown', 'shuts down', 'layoff', 'job cut', 'recall',
  'breach', 'hack', 'cyberattack', 'data leak', 'accident', 'fire breaks',
  'explosion', 'death', 'killed', 'protest', 'boycott', 'controversy',
  'stake sale concern', 'pledge shares', 'promoter sells', 'fii exit',
  'margin pressure', 'cost overrun', 'delay in', 'order cancel', 'contract terminat',
  'weak demand', 'demand slowdown', 'sales decline', 'revenue falls', 'profit falls',
  'underperform', 'sell rating', 'red flag', 'concern over', 'warns of', 'slips',
];

const POSITIVE_WORDS = [
  'record high', 'record profit', 'record revenue', 'all-time high', '52-week high',
  'beats estimate', 'tops estimate', 'upgrade', 'rating upgrade', 'outlook positive',
  'wins order', 'wins contract', 'wins record', 'secures order', 'bags order', 'new contract',
  'expansion plan', 'capacity expansion', 'profit surges', 'profit jumps', 'profit soars',
  'revenue surges', 'revenue jumps', 'strong growth', 'robust growth', 'rallies',
  'surges', 'soars', 'jumps', 'gains', 'rises', 'climbs', 'buyback',
  'dividend announce', 'special dividend', 'bonus issue', 'stock split',
  'partnership with', 'strategic tie-up', 'joint venture', 'acquisition complete',
  'foray into', 'launches', 'unveils', 'breakthrough', 'patent grant',
  'best performer', 'top gainer', 'outperform', 'buy rating', 'target price raised',
  'fii buying', 'institutional buying', 'promoter buys', 'stake increase',
  'debt-free', 'turns profitable', 'margin expansion', 'strong demand', 'demand surge',
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

function classifyStockOverallSentiment(articles) {
  if (!articles || articles.length === 0) return null;
  const sentiments = articles.map(a => classifySentiment(a.title));
  if (sentiments.includes('negative')) return 'negative';
  if (sentiments.includes('positive')) return 'positive';
  return 'neutral';
}

// ---------- Fetching: shared RSS + proxy helpers ----------
const CORS_PROXIES = [
  (url) => `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
  (url) => `https://api.codetabs.com/v1/proxy/?quest=${encodeURIComponent(url)}`,
];

function buildGoogleNewsRssUrl(company) {
  const q = encodeURIComponent(`"${company}" when:3d`);
  return `https://news.google.com/rss/search?q=${q}&hl=en-IN&gl=IN&ceid=IN:en`;
}

function parseGoogleNewsXml(xmlText, maxArticles) {
  const articles = [];
  try {
    const doc = new DOMParser().parseFromString(xmlText, 'text/xml');
    const items = doc.querySelectorAll('item');
    for (let i = 0; i < items.length && articles.length < maxArticles; i++) {
      const item = items[i];
      const rawTitle = (item.querySelector('title')?.textContent || '').trim();
      const link = (item.querySelector('link')?.textContent || '').trim();
      const pubDate = (item.querySelector('pubDate')?.textContent || '').trim();

      let title = rawTitle;
      let source = 'Google News';
      const sepIdx = rawTitle.lastIndexOf(' - ');
      if (sepIdx > 0) {
        title = rawTitle.slice(0, sepIdx).trim();
        source = rawTitle.slice(sepIdx + 3).trim();
      }

      articles.push({
        title,
        source,
        url: link,
        published: pubDate ? new Date(pubDate).toISOString() : '',
      });
    }
  } catch (e) {}
  return articles;
}

// Try proxies with a per-proxy timeout so a slow proxy doesn't block the queue
async function fetchViaProxyWithFallback(targetUrl) {
  for (const buildProxyUrl of CORS_PROXIES) {
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 8000); // 8s per proxy
      const resp = await fetch(buildProxyUrl(targetUrl), { signal: controller.signal });
      clearTimeout(timer);
      if (resp.ok) {
        const text = await resp.text();
        if (text && text.length > 50) return text;
      }
    } catch (e) {
      // AbortError or network error — try next proxy
    }
  }
  return null;
}

// ---------- Parallel batch fetcher ----------
// Fetches up to BATCH_SIZE stocks concurrently, then moves to the next batch.
// This is the main speed improvement: instead of one-at-a-time (100 stocks × ~2s = 200s)
// we do 8 at a time (100 stocks / 8 × ~2s ≈ 25s).
const BATCH_SIZE = 8;

async function fetchStockNews(ticker, company) {
  try {
    const rssUrl = buildGoogleNewsRssUrl(company);
    const xmlText = await fetchViaProxyWithFallback(rssUrl);
    if (xmlText) return { ticker, company, articles: parseGoogleNewsXml(xmlText, 3) };
  } catch (e) {}
  return { ticker, company, articles: [] };
}

async function fetchAllNews() {
  const stocks = Store.getStocks();
  if (!stocks || stocks.length === 0) {
    openSettings();
    return;
  }

  refreshBtn.classList.add('spinning');
  refreshLabel.textContent = 'Fetching…';
  renderLoadingSkeleton(stocks.length);

  const results = new Array(stocks.length);
  let completed = 0;

  // Process in parallel batches
  for (let batchStart = 0; batchStart < stocks.length; batchStart += BATCH_SIZE) {
    const batchEnd = Math.min(batchStart + BATCH_SIZE, stocks.length);
    const batch = stocks.slice(batchStart, batchEnd);

    const batchPromises = batch.map(async ([ticker, company, tier], batchIdx) => {
      const { articles } = await fetchStockNews(ticker, company);
      results[batchStart + batchIdx] = { ticker, company, tier, articles };
      completed++;
      refreshLabel.textContent = `Fetching… ${completed}/${stocks.length}`;
    });

    await Promise.all(batchPromises);
  }

  newsData = { fetchedAt: new Date().toISOString(), results };
  Store.setCache(newsData);

  refreshBtn.classList.remove('spinning');
  refreshLabel.textContent = "Fetch today's news";
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
  try {
    const rssUrl = buildGoogleNewsRssUrl(searchTerm);
    const xmlText = await fetchViaProxyWithFallback(rssUrl);
    if (xmlText) articles = parseGoogleNewsXml(xmlText, 5);
  } catch (e) {}

  const stockObj = { ticker: displayTicker, company: searchTerm, tier: known ? known[2] : 'Watch', articles };
  lookupResult.innerHTML = `<div class="lookup-result-card">
    <div class="lookup-result-head">
      <span class="lookup-result-title">${escapeHtml(searchTerm)} <span style="font-family:'SF Mono',monospace;font-size:11px;color:var(--ink-soft)">${escapeHtml(displayTicker)}</span></span>
      <button class="lookup-close" id="lookup-close-btn">✕ Close</button>
    </div>
    ${renderEntry(stockObj)}
  </div>`;
  $('#lookup-close-btn').addEventListener('click', clearLookupResult);
}

function clearLookupResult() {
  lookupResult.innerHTML = '';
  lookupInput.value = '';
  lookupSuggestions.classList.remove('open');
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

function renderContent() {
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
      html += `<div class="section">
        <div class="section-head"><span class="section-label tier-${tier.toLowerCase()}">${TIER_LABELS[tier]}</span><div class="rule"></div></div>
        ${group.map(renderEntry).join('')}
      </div>`;
    }
    contentEl.innerHTML = html;
  } else {
    contentEl.innerHTML = `<div class="section">${filtered.map(renderEntry).join('')}</div>`;
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

  return `<div class="entry ${overallSentiment === 'negative' ? 'has-negative' : ''}">
    <div class="entry-head">
      <div><span class="entry-name">${escapeHtml(stock.company)}</span><span class="entry-ticker">${escapeHtml(stock.ticker)}</span></div>
      ${badgeHtml}
    </div>
    ${body}
  </div>`;
}

checkKiteOAuthCallback();
init();
