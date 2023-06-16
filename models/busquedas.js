const axios = require('axios');

class Busquedas {
  historial = ['Córdoba', 'Buenos Aires', 'San Luis']
  
  constructor() {
    //leer DB si existe
  }

  get paramsMapBox() {
    return {
      'access_token': process.env.MAPBOX_KEY,
      'limit': 5,
      'language': 'es'
    }
  }

  async ciudad( lugar = '' ) {
    //petición http

    try {
      const intance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
        params: this.paramsMapBox
      });

      const resp = await intance.get();
      return resp.data.features.map(lugar => ({
        id: lugar.id,
        nombre: lugar.place_name,
        lng: lugar.center[0],
        lat: lugar.center[1],
        

      }))

    } catch (error) {
      return [];
    }
  }
}

module. exports = Busquedas;