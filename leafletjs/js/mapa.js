let map = L.map('map').setView([42.6000300, -5.570320], 13);
L.tileLayer('https://tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey=156c77879c664ca0b9d88fe8f6904445',{
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.orgcopyright" > OpenStreetMap</a>'
}).addTo(map);

