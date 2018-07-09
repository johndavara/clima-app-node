const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encodeUrl = encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyDzbQ_553v-n8QNs2aafN9QaZbByTyM7gQ`)
    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`)
    }
    let formattedAddress = resp.data.results[0].formatted_address;
    let Lat = resp.data.results[0].geometry.location.lat;
    let Long = resp.data.results[0].geometry.location.lng;
    console.log('Direccion: ' + formattedAddress);
    console.log('Latitud: ' + Lat);
    console.log('Longitud: ' + Long);
    return {
        direccion: formattedAddress,
        lat: Lat,
        lng: Long
    }
}

module.exports = {
    getLugarLatLng
}