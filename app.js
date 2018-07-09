//const axios = require('axios');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//console.log(argv.direccion);
/*
lugar.getLugarLatLng(argv.direccion).
then(resp => {
    console.log(resp);
}).catch(e => console.log(e));
*/
/*
clima.getClima(argv.lat, argv.lng).
then(resp => {
    console.log(resp);
}).catch(e => console.log(e));*/

let getInfo = async(direccion) => {
    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);
        return `El clima en ${coors.direccion} es de ${temp.temp}`

    } catch (e) {
        return `No se pudo determinar el clima en ${direccion}`
    }
}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));

/*
clima.getClima(9.9280694, -84.0907246).
then(resp => {
    console.log(resp);
}).catch(e => console.log(e));*/