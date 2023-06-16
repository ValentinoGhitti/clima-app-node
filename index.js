require('dotenv').config();
require('colors');

const { 
  inquirerMenu, 
  pausa,
  leerInput
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
          const lugar = await leerInput('Ciudad: ');
          await busquedas.ciudad(lugar);
          //buscar los lugares

        //seleccionar el lugar

        //climas

        //mostrar resultados 
        console.log('\nInformación de la cuidad\n'.green);
        console.log('Ciudad:');
        console.log('Lat:');
        console.log('Lng:');
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