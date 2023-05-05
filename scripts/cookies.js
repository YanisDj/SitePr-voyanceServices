function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }
  
  // Fonction pour récupérer la valeur d'un cookie
  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  
  // Fonction pour charger Google Analytics
  function loadGoogleAnalytics() {
    // Remplacez 'GA_MEASUREMENT_ID' par votre identifiant de suivi Google Analytics
    var GA_MEASUREMENT_ID = 'GA_MEASUREMENT_ID';
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID);
  }
  
  // Fonction pour accepter les cookies
  function acceptCookies() {
    setCookie('cookie-consent', 'accepted', 365);
    loadGoogleAnalytics();
    document.getElementById('cookie-consent').style.display = 'none';
  }
  
  // Fonction pour refuser les cookies
  function rejectCookies() {
    setCookie('cookie-consent', 'rejected', 365);
    document.getElementById('cookie-consent').style.display = 'none';
  }
  
  // Vérifier si le cookie a déjà été accepté ou refusé
  if (getCookie('cookie-consent') === 'accepted') {
    loadGoogleAnalytics();
  } else if (getCookie('cookie-consent') === 'rejected') {
    // Ne chargez pas Google Analytics
  }
  
  // Ajouter des écouteurs d'événements aux boutons de consentement aux cookies
  document.getElementById('cookie-accept').addEventListener('click', acceptCookies);
  document.getElementById('cookie-reject').addEventListener('click', rejectCookies);