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

// ❄️ Fungsi cipta salji — dipanggil selepas butang ditekan
function mulakanSalji() {
  for (let i = 0; i < 30; i++) {
    let snow = document.createElement("div");
    snow.classList.add("snow");

    snow.style.left = Math.random() * 100 + "vw";
    snow.style.animationDuration = 8 + Math.random() * 5 + "s";

    // ✅ Saiz guna rem supaya responsif macam fon
    let size = 0.4 + Math.random() * 0.3;
    snow.style.width = size + "rem";
    snow.style.height = size + "rem";

    snow.style.animationDelay = Math.random() * 5 + "s";

    const wrapper = document.getElementById("snow-wrapper");
    if (wrapper) wrapper.appendChild(snow);
  }
}
