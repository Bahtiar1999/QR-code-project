window.onload = function() {
  if (document.getElementById("unit-detail")) {
    fetch("https://script.google.com/macros/s/AKfycbwZHiMjP1haT7ZMRWhwTKE6LFk0jWhoEP3V5aC_IawMooHszQSU7J3nbrN0ff6TiJ8R/exec")
      .then(res => res.json())
      .then(data => {
        let html = "<ul>";
        data.forEach(row => {
          html += `<li><b>${row["ID Mesin"]}</b> - ${row["Nama Mesin"]}, ${row["Merk Elektromotor"]}, ${row["Daya"]}kW, ${row["RPM"]}rpm @ ${row["Lokasi"]}</li>`;
        });
        html += "</ul>";
        document.getElementById("unit-detail").innerHTML = html;
      });
  }
}
