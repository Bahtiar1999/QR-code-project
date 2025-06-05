window.onload = function() {
  if (document.getElementById("unit-detail")) {
    fetch("PASTE_URL_SCRIPT_KAMU")
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