# ClimaApp en Node.js

Esta aplicación de terminal en Node.js te permite realizar llamadas HTTP hacia servidores externos y consumir APIs de manera sencilla. Con ella, podrás obtener información sobre lugares utilizando la API de Mapbox Places y consultar datos climáticos mediante la API de OpenWeather. Además, la aplicación cuenta con un historial de búsquedas y utiliza variables de entorno para proteger información sensible.

Características principales
Consumo de APIs: Realiza llamadas HTTP hacia servidores externos para obtener información relevante.
Paquetes "request" y "Axios": Utiliza estos paquetes populares de Node.js para facilitar las solicitudes HTTP.
Mapbox Places: Obtén información sobre lugares a partir de su nombre utilizando la API de Mapbox Places.
OpenWeather: Consulta datos climáticos de cualquier ubicación mediante la API de OpenWeather.
Aplicación de consola con historial: Visualiza y guarda un historial de búsquedas realizadas desde la aplicación.
Variables de entorno: Protege información sensible, como las claves de API, utilizando variables de entorno.
Instalación
Clona este repositorio en tu máquina local.
Navega al directorio del proyecto en tu terminal.
Ejecuta el comando npm install para instalar las dependencias necesarias.
Uso
Configuración de variables de entorno:

Crea un archivo .env en la raíz del proyecto.
Define las siguientes variables en el archivo .env:
makefile
Copy code
MAPBOX_API_KEY=your_mapbox_api_key
OPENWEATHER_API_KEY=your_openweather_api_key
Reemplaza your_mapbox_api_key y your_openweather_api_key con tus propias claves de API.
Ejecución de la aplicación:

En tu terminal, navega al directorio del proyecto.
Ejecuta el comando node app.js para iniciar la aplicación.
Interactúa con la aplicación:

Sigue las instrucciones en la terminal para realizar búsquedas de lugares y consultar el clima.
Se mostrarán los resultados en la consola y se guardarán en el historial.
Contribuciones
Las contribuciones son bienvenidas. Si tienes alguna idea para mejorar esta aplicación, no dudes en hacer un pull request.

Contacto
Si tienes alguna pregunta o sugerencia, puedes contactarme en [tu@email.com].

¡Espero que disfrutes de esta aplicación de terminal en Node.js! 🚀
