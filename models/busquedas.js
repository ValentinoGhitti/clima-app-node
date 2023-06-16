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
      console.log(resp.data)
      return [];

    } catch (error) {
      return [];
    }
  }
}

module. exports = Busquedas;