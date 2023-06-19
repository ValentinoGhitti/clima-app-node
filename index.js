require('dotenv').config();
require('colors');

const { 
  inquirerMenu, 
  pausa,
  leerInput,
  listarLugares
} = require("./helpers/inquirer");

const Busquedas = require("./models/busquedas");
// console.log(process.env.MAPBOX_KEY)

const main = async() => {
  const busquedas = new Busquedas();
  let opt = '';

  do {
    let opt = await inquirerMenu();
    switch(opt) {
      case 1:
        //mostrar mensaje
        const busqueda = await leerInput('Ciudad: ');

        //buscar los lugares
        const lugares = await busquedas.ciudad(busqueda);

        //seleccionar el lugar
        const id = await listarLugares(lugares);
        if( id === '0') continue;
        const {nombre, lat, lng} = lugares.find(lugar => lugar.id === id);
        //guardar en DB
        busquedas.agregarHistorial(nombre);

        //climas
        const {desc, temp, min, max} = await busquedas.climaLugar(lat, lng);

        //mostrar resultados
        console.clear();
        console.log(`\nInformación de la cuidad\n`.underline.bold.green);
        console.log(`${'Ciudad:'.bold}`, nombre.yellow.bold);
        console.log(`${'Lat:'.bold} ${lat}ϕ`);
        console.log(`${'Lng:'.bold} ${lng}λ`);
        console.log(`${'Temperatura:'.bold} ${Math.round(temp) + '°'}`);
        console.log(`${'Mínima:'.bold} ${Math.round(min) + '°'}`);
        console.log(`${'Máxima:'.bold} ${Math.round(max) + '°'}`);
        console.log(`${'El clima está con:'.bold} ${desc.yellow.bold}`);
      break;
      case 2: 
        busquedas.historialCapitalizado.forEach((lugar, i) => {
          const idx = `${i + 1}.`.green;
          console.log(`${idx} ${lugar}`);
        });
      break;
    }


    if ( opt !== 0 ) await pausa();
  } while( opt !== 0);
}

main();