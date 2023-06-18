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
        console.log('\nInformación de la cuidad\n'.green);
        console.log('Ciudad:', nombre);
        console.log('Lat:', lat);
        console.log('Lng:', lng);
        console.log(`Temperatura: ${temp + '°'.green}`);
        console.log('Mínima:', min );
        console.log('Máxima:', max);
        console.log(`El clima está: ${desc}`);
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