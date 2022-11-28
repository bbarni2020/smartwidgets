

  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";



  const firebaseConfig = {
    apiKey: "AIzaSyDtK9A1EZGdG28qPbFrbU4E7lnhi5IK5Vc",
    authDomain: "smartwidgets-website.firebaseapp.com",
    projectId: "smartwidgets-website",
    storageBucket: "smartwidgets-website.appspot.com",
    messagingSenderId: "126534531673",
    appId: "1:126534531673:web:3cb3ad3d702218566c0f48",
    measurementId: "G-TXEHCJ8JF0"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);