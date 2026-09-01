Morning Ledger — agreed coloring changes for app.js

1. In renderEntry(), immediately after:
   const overallSentiment = hasNews ? classifyStockOverallSentiment(stock.articles) : null;

   add:
   const sentimentClass = overallSentiment === 'negative'
     ? 'sentiment-negative'
     : overallSentiment === 'positive'
       ? 'sentiment-positive'
       : 'sentiment-neutral';

2. Change the Fundamentals rendering from:
   const fundHtml = cachedFund
     ? renderCompactFundamentalPills(cachedFund)
     : `<button class="ribbon-fund-btn" ...

   to:
   const fundHtml = cachedFund
     ? renderCompactFundamentalPills(cachedFund, sentimentClass)
     : `<button class="ribbon-fund-btn ${sentimentClass}" ...

3. Change the ROCE rendering similarly:
   const roceHtml = cachedRoce
     ? renderCompactRocePills(cachedRoce, sentimentClass)
     : `<button class="ribbon-roce-btn ${sentimentClass}" ...

4. Change:
   ribbonHtml = `<div class="price-ribbon ${ribbonClass}">

   to:
   ribbonHtml = `<div class="price-ribbon ${ribbonClass} ${sentimentClass}">

5. Change the name/code spans to:
   <span class="ribbon-name ${sentimentClass}">...</span>
   <span class="ribbon-code ${sentimentClass}">...</span>

6. Change the compact renderer signatures:
   function renderCompactRocePills(r, sentimentClass = 'sentiment-neutral')
   function renderCompactFundamentalPills(f, sentimentClass = 'sentiment-neutral')

7. In every normal ribbon-fund-pill produced by those two renderers, add:
   ${sentimentClass}
   to the class list.

8. Change their calls after inline fetch/cached results to pass sentimentClass where
   the sentiment context is available. The safest implementation is to have
   renderEntry() provide the class to the initial controls; if a button is later
   replaced by fetched pills, preserve its sentiment class from the button:
   const sentimentClass = btn.classList.contains('sentiment-negative')
     ? 'sentiment-negative'
     : btn.classList.contains('sentiment-positive')
       ? 'sentiment-positive'
       : 'sentiment-neutral';

   then call renderCompactFundamentalPills(cached, sentimentClass) or
   renderCompactRocePills(cached, sentimentClass).

9. Leave classifyStockOverallSentiment() unchanged. It already uses the latest
   headline and returns negative only for a negative latest headline; otherwise
   positive. This is the desired news-sentiment source.

10. Leave price-up / price-down logic unchanged. It already colors only the price
    and daily percentage, independently of news sentiment.
