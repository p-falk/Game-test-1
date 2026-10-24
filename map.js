const map = L.map("map").setView([62.8, 16.5], 5); // center on Sweden

// Base map (OpenStreetMap)
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution: "© OpenStreetMap contributors"
}).addTo(map);

// SCB statistical layer
const scbWms = "https://geodata.scb.se/geoserver/stat/wms";
L.tileLayer.wms(scbWms, {
  layers: "be0101_levlofj", // <- replace with a layer from GetCapabilities
  format: "image/png",
  transparent: true,
  attribution: "Statistics Sweden (SCB)"
}).addTo(map);
