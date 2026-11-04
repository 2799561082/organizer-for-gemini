// ==== Replace these placeholders before going live ====
window.SITE_CONFIG = {
  CHROME_WEB_STORE_URL: "https://chromewebstore.google.com/detail/REPLACE_WITH_EXTENSION_ID",
  CREEM_CHECKOUT_MONTHLY_URL: "https://www.creem.io/payment/REPLACE_WITH_MONTHLY_PRODUCT_ID",
  CREEM_CHECKOUT_LIFETIME_URL: "https://www.creem.io/payment/REPLACE_WITH_LIFETIME_PRODUCT_ID",
  SUPPORT_EMAIL: "forestfeng777@gmail.com"
};
document.addEventListener("DOMContentLoaded", function () {
  var c = window.SITE_CONFIG;
  document.querySelectorAll("[data-link]").forEach(function (a) { a.href = c[a.dataset.link]; });
  document.querySelectorAll("[data-email]").forEach(function (a) { a.href = "mailto:" + c.SUPPORT_EMAIL; a.textContent = c.SUPPORT_EMAIL; });
  var y = document.getElementById("year"); if (y) y.textContent = new Date().getFullYear();
});
