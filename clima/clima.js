const axios = require('axios');
const getClima = async(lat, lng) => {

    let encodeUriLat = encodeURI(lat);
    let encodeUriLng = encodeURI(lng);
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${encodeUriLat}&lon=${encodeUriLng}&units=metric&appid=e2013f82e1a19e9bde0f787dd1688cbf`)
    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para las coordenadas Lat: ${lat}, Lng: ${lng}`)
    }
    let temp = resp.data.main.temp;
    console.log('Temperatura: ' + temp);
    return {
        temp: temp
    }
}

module.exports = {
    getClima
}