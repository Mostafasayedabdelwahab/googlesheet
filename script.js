// حط هنا الرابط بتاع الشيت بعد ما تنشره
const sheetURL =
  "https://docs.google.com/spreadsheets/d/1O0t7w8eXcg0bvCrFPXYwA3Xlu62SZC2010HXsryFE1M/export?format=csv";

fetch(sheetURL)
  .then((response) => response.text())
  .then((csv) => {
    const rows = csv
      .trim()
      .split("\n")
      .map((row) => row.split(","));
    const contentDiv = document.getElementById("content");
    const headers = rows[0];
    const data = rows.slice(1);

    data.forEach((row) => {
      const card = document.createElement("div");
      card.className = "card";
      row.forEach((cell, index) => {
        const label = headers[index];
        card.innerHTML += `<strong>${label}:</strong> ${cell}<br>`;
      });
      contentDiv.appendChild(card);
    });
  });
