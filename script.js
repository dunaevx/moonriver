navigator.geolocation.getCurrentPosition(function(position) {
    
    // let path = "https://www.openstreetmap.org/#map=19/" + lat + "/" + lon;

let lon = position.coords.longitude;
let lat = position.coords.latitude;

var map = L.map('map').setView([lon, lat], 15);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: ''
}).addTo(map);

// L.marker([lat, lon]).addTo(map)
//     .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
//     .openPopup();

// L.marker([lat+0.01, lon-0.0025]).addTo(map)
//     .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
//     .openPopup();
var myIcon1 = L.icon({
    iconUrl: 'images/content1_1/Vector (6).png',
    iconSize: [31, 55],
});

L.marker([lat+0.01, lon-0.0025], {icon: myIcon1}).addTo(map)
.bindPopup('Moon River.<br> 2-й микрорайон.')
.openPopup();
;


var myIcon = L.icon({
    iconUrl: 'images/content1_1/Vector (6).png',
    iconSize: [31, 55],
});

L.marker([lat+0.00442, lon-0.00442], {icon: myIcon}).addTo(map)
.bindPopup('Moon River.<br> 1-й микрорайон.')
.openPopup();
;


var myIcon2 = L.icon({
    iconUrl: 'images/content1_1/Vector (6).png',
    iconSize: [31, 55],
});

L.marker([lat+0.00442, lon+0.00442], {icon: myIcon2}).addTo(map)
.bindPopup('Moon River.<br> Центральный Парк.')
.openPopup();
;


var myIcon = L.icon({
    iconUrl: 'images/content1_1/Vector (5).png',
    iconSize: [31, 55],
});

L.marker([lat, lon], {icon: myIcon}).addTo(map)
.bindPopup('Я.')
.openPopup();
;
//     var circle = L.circle([51.508, -0.11], {
//         color: 'red',
//         fillColor: '#f03',
//         fillOpacity: 0.5,
//         radius: 500
//     }).addTo(map);
    
//     var polygon = L.polygon([
//         [51.509, -0.08],
//         [51.503, -0.06],
//         [51.51, -0.047],
//         [51.59, -0.040]
//     ])
// .addTo(map);
    
// let map = new ol.Map({ //создаем карту из библиотеки OpenLayers
//     target: document.getElementById('map'), //указываем id контейнера для карты
//     layers: [ //создаем массив, в котором указываем источник данных для карты
//         new ol.layer.Tile({
//             source: new ol.source.OSM() // наша карта берет данные из OpenStreetMap
//         })
//     ],
//     view: new ol.View({ // настройка внешнего вида карты
//         center: ol.proj.fromLonLat([lon, lat  ]), //широта и долгота
//         zoom: 16 //увеличение
//     })
// });
});

//https:leafletjs.com/examples/quick-start/

$('.slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // variableWidth: true,
    arrows: true,
    dots: true,
    
  });