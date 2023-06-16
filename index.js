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
        const {nombre, lat, lng} = lugares.find(lugar => lugar.id === id)
        //climas

        //mostrar resultados 
        console.log('\nInformación de la cuidad\n'.green);
        console.log('Ciudad:', nombre);
        console.log('Lat:', lat);
        console.log('Lng:', lng);
        console.log('Temperatura:');
        console.log('Mínima:');
        console.log('Máxima:');
      break;
      case 2: 
        console.log('viva menem');
      break
    }


    if ( opt !== 0 ) await pausa();
  } while( opt !== 0);
}

main();