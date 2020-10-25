// MAPA
const map = L.map('mapid').setView([-25.4430978,-49.2854497], 15) //objeto "L {}" foi criado pela biblioteca leaflet. O array contém a latitude e a longitude

// Exibindo mapa na tela
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map)

// Criando um ícone
const icon = L.icon({
  iconUrl: "../images/logo.svg",
  iconSize: [85, 85],
  iconAnchor: [29, 68],
  popupAnchor: [170, 20]
})

// Criando um Pop-up
const popup = L.popup({
  closeButton: false,
  className: 'map-popup',
  minWidth: 200,
  minHeigth: 200
}).setContent('Adote Bixo <a href="../views/adoption-place.html?=1" class="choose-adoption"> <img src="../images/rigth-arrow.svg"> </a>')

// POP-UP
L.marker([-25.4430978,-49.2854497], {icon}).addTo(map).bindPopup(popup)