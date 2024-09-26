const translations = {
  en: {
    heroTitle: "Unlock Your Crypto Freedom with Trust Wallet Passkeys",
    heroSubtitle: "Secure your assets, recover lost wallets, and gain total control.",
    ctaButton: "Purchase Passkeys"
  },
  es: {
    heroTitle: "Desbloquea tu libertad cripto con las claves de Trust Wallet",
    heroSubtitle: "Asegura tus activos, recupera carteras perdidas y obtén control total.",
    ctaButton: "Comprar Claves"
  },
  zh: {
    heroTitle: "使用 Trust Wallet 密钥解锁您的加密货币自由",
    heroSubtitle: "保护您的资产，找回丢失的钱包，获得完全的控制。",
    ctaButton: "购买密钥"
  },
  ar: {
    heroTitle: "افتح حريتك المشفرة باستخدام مفاتيح Trust Wallet",
    heroSubtitle: "احم أصولك واستعد المحافظ المفقودة وتحكم بالكامل.",
    ctaButton: "شراء المفاتيح"
  },
  hi: {
    heroTitle: "Trust Wallet पासकी के साथ अपनी क्रिप्टो स्वतंत्रता अनलॉक करें",
    heroSubtitle: "अपने संपत्तियों की सुरक्षा करें, खोए हुए वॉलेट्स को पुनः प्राप्त करें और पूर्ण नियंत्रण प्राप्त करें।",
    ctaButton: "पासकी खरीदें"
  },
  bn: {
    heroTitle: "Trust Wallet পাসকি দিয়ে আপনার ক্রিপ্টো স্বাধীনতা আনলক করুন",
    heroSubtitle: "আপনার সম্পদ সুরক্ষিত করুন, হারিয়ে যাওয়া ওয়ালেটগুলি পুনরুদ্ধার করুন এবং সম্পূর্ণ নিয়ন্ত্রণ পান।",
    ctaButton: "পাসকি কিনুন"
  },
  pt: {
    heroTitle: "Desbloqueie sua liberdade cripto com as chaves do Trust Wallet",
    heroSubtitle: "Proteja seus ativos, recupere carteiras perdidas e ganhe controle total.",
    ctaButton: "Comprar Chaves"
  }
};

function changeLanguage(language) {
  document.getElementById("hero-title").innerText = translations[language].heroTitle;
  document.getElementById("hero-subtitle").innerText = translations[language].heroSubtitle;
  document.getElementById("cta-button").innerText = translations[language].ctaButton;
}// Add this to your JavaScript code
window.onload = function() {
    setTimeout(function() {
        document.getElementById("popup").style.display = "block";
    }, 1000); // wait for 1 second before showing the popup

    setTimeout(function() {
        document.getElementById("popup").style.display = "none";
    }, 7000); // hide the popup after 7 seconds
}