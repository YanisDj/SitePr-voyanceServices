// Récupération des éléments du DOM
const cookieBanner = document.getElementById("cookie-consent");
const acceptButton = document.getElementById("cookie-accept");
const rejectButton = document.getElementById("cookie-reject");

// Fonction pour masquer la bannière de cookies
function hideCookieBanner() {
  cookieBanner.style.display = "none";
}

// Gestionnaire d'événement pour le clic sur le bouton Accepter
acceptButton.addEventListener("click", function() {
  hideCookieBanner();
  activateGoogleAnalytics();
});

// Gestionnaire d'événement pour le clic sur le bouton Refuser
rejectButton.addEventListener("click", function() {
  hideCookieBanner();
});

// Vérification au chargement de la page si l'utilisateur a déjà fait un choix sur les cookies
if (localStorage.getItem("cookieChoice")) {
  hideCookieBanner();
}

// Fonction pour enregistrer le choix de l'utilisateur sur les cookies
function saveCookieChoice(choice) {
  localStorage.setItem("cookieChoice", choice);
}

// Fonction pour activer Google Analytics
function activateGoogleAnalytics() {
  // Remplacez "UA-XXXXXXXXX-X" par votre propre code de suivi Google Analytics
  const trackingId = "UA-XXXXXXXXX-X";
  
  // Insertion du script de suivi Google Analytics
  const script = document.createElement("script");
  script.setAttribute("async", "");
  script.setAttribute("src", `https://www.googletagmanager.com/gtag/js?id=${trackingId}`);
  document.head.appendChild(script);
  
  // Initialisation de Google Analytics
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag("js", new Date());
  gtag("config", trackingId);
  
  // Enregistrement du choix de l'utilisateur
  saveCookieChoice("accept");
}
