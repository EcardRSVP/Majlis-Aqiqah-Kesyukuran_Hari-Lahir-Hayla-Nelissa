// script.js
fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vTPi4cVVJVAYtYrDQRfhBMX0qCMllBMgjYqesb64WKf-5M4BvxIrabnse_Fq_Iu6EHsrnI8Rv1AEv7T/pub?output=csv')
  .then(response => response.text())
  .then(data => {
    const rows = data.split("\n").map(row => row.split(","));
    rows.forEach(row => {
      const barang = row[2].trim();
      if (barang === "Bakul Baju") {
        const btn = document.getElementById("btn-bakul");
        btn.innerText = "Telah Ditempah";
        btn.disabled = true;
      }
    });
  });

function mulakanSalji() {
  setInterval(() => {
    let snow = document.createElement("div");
    snow.classList.add("snow");

    snow.style.left = Math.random() * 100 + "vw";
    snow.style.animationDuration = 8 + Math.random() * 5 + "s";

    let size = 0.4 + Math.random() * 0.3;
    snow.style.width = size + "rem";
    snow.style.height = size + "rem";

    snow.style.animationDelay = "0s";

    // Pilih warna rawak dari senarai
    const warna = ["#ffffff", "#f5f5dc", "#c0c0c0", "#ffd700"]; // putih, cream, silver, gold
    snow.style.backgroundColor = warna[Math.floor(Math.random() * warna.length)];

    const wrapper = document.getElementById("snow-wrapper");
    if (wrapper) wrapper.appendChild(snow);

    // Auto buang elemen salji selepas tamat animasi
    setTimeout(() => {
      if (snow && snow.parentElement) {
        snow.parentElement.removeChild(snow);
      }
    }, 14000); // cukup untuk animasi tamat
  }, 400); // Setiap 0.4s keluar satu salji baru
}
