// ==== Replace these placeholders before going live ====
// Site URL: https://gemini.ownthecost.com
window.SITE_CONFIG = {
  CHROME_WEB_STORE_URL: "https://chromewebstore.google.com/detail/organizer-for-gemini/ppcjgpaihaccfdbckmchcgdeombkmdig",
  // Waffo Pancake product purchase links. TEST MODE for now (test=true):
  // before launch, publish both products to production and drop "&test=true".
  CHECKOUT_MONTHLY_URL: "https://pancake.waffo.ai/store/organizer-for-gemini-ok6lonj5/product/PROD_47qLgpqls2Nb3rtuOtNeeL?type=subscription&currency=USD&test=true",
  CHECKOUT_LIFETIME_URL: "https://pancake.waffo.ai/store/organizer-for-gemini-ok6lonj5/product/PROD_2SsRTFsLeYNVbB3lN2v1dw?type=onetime&currency=USD&test=true",
  SUPPORT_EMAIL: "forestfeng777@gmail.com"
};
document.addEventListener("DOMContentLoaded", function () {
  var c = window.SITE_CONFIG;
  document.querySelectorAll("[data-link]").forEach(function (a) { a.href = c[a.dataset.link]; });
  document.querySelectorAll("[data-email]").forEach(function (a) { a.href = "mailto:" + c.SUPPORT_EMAIL; a.textContent = c.SUPPORT_EMAIL; });
  var y = document.getElementById("year"); if (y) y.textContent = new Date().getFullYear();
});
