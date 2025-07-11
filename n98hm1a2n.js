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

// ❄️ Cipta 30 salji automatik (letak dalam script.js)
for (let i = 0; i < 30; i++) {
  let snow = document.createElement("div");
  snow.classList.add("snow");

  // Posisi rawak di lebar skrin
  snow.style.left = Math.random() * 100 + "vw";

  // Durasi rawak
  snow.style.animationDuration = 8 + Math.random() * 5 + "s";

  // Saiz rawak
  let size = 5 + Math.random() * 5;
  snow.style.width = size + "px";
  snow.style.height = size + "px";

  // Delay animasi supaya tak semua jatuh serentak
  snow.style.animationDelay = Math.random() * 5 + "s";

document.getElementById("snow-wrapper").appendChild(snow);
}
