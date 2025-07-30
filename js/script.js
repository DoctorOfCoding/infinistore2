// Language Switcher
function switchLanguage() {
  const lang = document.getElementById("language").value;
  alert("Language switched to: " + lang.toUpperCase());
  // Future: Replace content via translations or language-specific files
}
function switchLanguage() {
  const lang = document.getElementById("language").value;

  const heroHeading = document.querySelector(".hero h1");
  const heroSubText = document.querySelector(".hero p");

  if (!heroHeading || !heroSubText) return;

  if (lang === "en") {
    heroHeading.innerText = "Welcome to Infinistore2";
    heroSubText.innerText = "Your one-stop shop for Global Fashion & AI-Powered Services";
  } else if (lang === "fr") {
    heroHeading.innerText = "Bienvenue chez Infinistore2";
    heroSubText.innerText = "Votre boutique unique pour la mode mondiale et les services IA";
  } else if (lang === "de") {
    heroHeading.innerText = "Willkommen bei Infinistore2";
    heroSubText.innerText = "Ihr One-Stop-Shop für globale Mode und KI-Dienste";
  } else if (lang === "ur") {
    heroHeading.innerText = "انفینی اسٹور 2 میں خوش آمدید";
    heroSubText.innerText = "فیشن اور ڈیجیٹل سروسز کا عالمی مرکز";
  } else if (lang === "ar") {
    heroHeading.innerText = "مرحبًا بك في Infinistore2";
    heroSubText.innerText = "متجرك الشامل للأزياء العالمية والخدمات الرقمية المدعومة بالذكاء الاصطناعي";
  }

  alert("Language switched to: " + lang.toUpperCase());
}


// Currency Switcher
function switchCurrency() {
  const currency = document.getElementById("currency").value;
  alert("Currency switched to: " + currency);
  // Future: Dynamically convert prices based on selected currency
}

// Example conversion rates (dummy values)
const currencyRates = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.78,
  PKR: 278.50,
  AED: 3.67
};

function switchCurrency() {
  const selected = document.getElementById("currency").value;
  const rate = currencyRates[selected];

  const priceElements = document.querySelectorAll(".price");

  priceElements.forEach(el => {
    const baseUSD = parseFloat(el.dataset.usd);
    if (!isNaN(baseUSD)) {
      let converted = (baseUSD * rate).toFixed(2);
      let symbol = getCurrencySymbol(selected);
      el.innerText = symbol + converted;
    }
  });

  alert("Currency switched to: " + selected);
}

function getCurrencySymbol(code) {
  const symbols = {
    USD: "$", EUR: "€", GBP: "£", PKR: "₨", AED: "د.إ"
  };
  return symbols[code] || "$";
}


// Load footer.html into every page
window.addEventListener("DOMContentLoaded", () => {
  const footerPlaceholder = document.getElementById("footer-placeholder");
  if (footerPlaceholder) {
    fetch("components/footer.html")
      .then(res => res.text())
      .then(data => {
        footerPlaceholder.innerHTML = data;
      });
  }
});

document.querySelectorAll('.product-card img').forEach(img => {
  img.addEventListener('mousemove', function (e) {
    const bounds = this.getBoundingClientRect();
    const x = ((e.clientX - bounds.left) / bounds.width) * 100;
    const y = ((e.clientY - bounds.top) / bounds.height) * 100;
    this.style.transformOrigin = `${x}% ${y}%`;
    this.style.transform = 'scale(1.5)';
  });

  img.addEventListener('mouseleave', function () {
    this.style.transformOrigin = 'center';
    this.style.transform = 'scale(1)';
  });
});
