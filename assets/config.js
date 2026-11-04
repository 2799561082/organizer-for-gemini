// ==== Replace these placeholders before going live ====
// Site URL: https://gemini.ownthecost.com
window.SITE_CONFIG = {
  CHROME_WEB_STORE_URL: "https://chromewebstore.google.com/detail/REPLACE_WITH_EXTENSION_ID",
  // Checkout links from your payment provider (monthly subscription / lifetime license)
  CHECKOUT_MONTHLY_URL: "REPLACE_WITH_MONTHLY_CHECKOUT_URL",
  CHECKOUT_LIFETIME_URL: "REPLACE_WITH_LIFETIME_CHECKOUT_URL",
  SUPPORT_EMAIL: "forestfeng777@gmail.com"
};
document.addEventListener("DOMContentLoaded", function () {
  var c = window.SITE_CONFIG;
  document.querySelectorAll("[data-link]").forEach(function (a) { a.href = c[a.dataset.link]; });
  document.querySelectorAll("[data-email]").forEach(function (a) { a.href = "mailto:" + c.SUPPORT_EMAIL; a.textContent = c.SUPPORT_EMAIL; });
  var y = document.getElementById("year"); if (y) y.textContent = new Date().getFullYear();
});
