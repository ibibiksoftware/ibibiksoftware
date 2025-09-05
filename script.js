// Translation object
const translations = {
en: {
  // ...
  "service1": "Android & iOS Device Solutions",
  "service2": "Desktop Solutions",
  "service3": "Embedded App Solutions"
},
tr: {
  // ...
  "service1": "Android & iOS Cihaz Çözümleri",
  "service2": "Masaüstü Çözümleri",
  "service3": "Gömülü Uygulama Çözümleri"
}

};

// Function to switch languages
function setLanguage(lang) {
  const elements = document.querySelectorAll("[id]");
  elements.forEach(el => {

    console.log("Element:", el);        // shows the full element
    console.log("Element ID:", el.id);  // shows the ID
    console.log("Translation:", translations[lang][el.id]); // shows the translation value

    if (translations[lang][el.id]) {
      el.innerText = translations[lang][el.id];
    }
  });
}

