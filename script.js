let map;

function initMap() {
    if (!map) {
        map = L.map('map-container').setView([5.0, -74.0], 7);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
        }).addTo(map);

        const marker1 = L.marker([5.0, -74.5]).addTo(map)
            .bindPopup('Cundinamarca: Biodiversidad rica y variada.')
            .openPopup();

        const marker2 = L.marker([5.5, -73.5]).addTo(map)
            .bindPopup('Boyacá: Una gran variedad de especies de flora y fauna.');
    }
}

function navigateTo(section) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(sec => {
        sec.style.display = 'none';
    });

    document.getElementById(section).style.display = 'block';

    if (section === 'map') {
        initMap();
    }
}

navigateTo('info');
