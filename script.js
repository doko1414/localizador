function updateTime() {
    const now = new Date();
    document.getElementById('time').innerText = `Hora: ${now.toLocaleTimeString()}`;
    document.getElementById('date').innerText = `Fecha: ${now.toLocaleDateString()}`;
}

function updateLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            document.getElementById('location').innerText = 
                `Ubicación: Lat ${position.coords.latitude.toFixed(2)}, Lng ${position.coords.longitude.toFixed(2)}`;
        }, () => {
            document.getElementById('location').innerText = "Ubicación: No disponible";
        });
    } else {
        document.getElementById('location').innerText = "Ubicación: No soportada";
    }
}

setInterval(updateTime, 1000);
updateTime();
updateLocation();
