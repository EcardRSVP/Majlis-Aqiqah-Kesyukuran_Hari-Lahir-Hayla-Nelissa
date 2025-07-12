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
  const wrapper = document.getElementById("snow-wrapper");
  if (!wrapper) return;

  setInterval(() => {
    let snow = document.createElement("div");
    snow.classList.add("snow");

    // Saiz & posisi
    let size = 0.4 + Math.random() * 0.6;
    snow.style.width = size + "rem";
    snow.style.height = size + "rem";
    snow.style.left = Math.random() * 100 + "vw";

    // Animasi
    snow.style.animationDuration = 10 + Math.random() * 10 + "s";
    snow.style.animationDelay = "0s";

    // ✅ Warna rawak
    const warna = ["#ffffff", "#fdf5e6", "#c0c0c0", "#ffd700"]; // putih, cream, silver, gold
    snow.style.backgroundColor = warna[Math.floor(Math.random() * warna.length)];

    wrapper.appendChild(snow);

    // Auto remove snow selepas animasi
    setTimeout(() => {
      snow.remove();
    }, 20000);
  }, 300); // 1 salji setiap 0.3s
}
